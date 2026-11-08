import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access,readdir} from 'node:fs/promises';
import path from 'node:path';
const origin='https://leonardovieiraalmeida95-design.github.io/JulianoBolosedoces';
const paths=['index.html','privacidade/index.html','termos/index.html','obrigado/index.html','404.html'];
const pages=await Promise.all(paths.map(p=>readFile(path.join('out',p),'utf8')));
test('Unique titles, descriptions and official canonical URLs',()=>{
 const titles=pages.map(html=>html.match(/<title>(.*?)<\/title>/)?.[1]);assert.equal(new Set(titles).size,5);
 for(const html of pages)assert.match(html,/<meta name="description" content="[^"]+"/);
 for(let i=0;i<4;i++)assert.match(pages[i],new RegExp(`${origin.replaceAll('.','\\.')}/${['','privacidade/','termos/','obrigado/'][i]}`));
 assert.match(pages[4],/noindex/);assert.match(pages[3],/noindex/);
});
test('No automatic third-party scripts, styles, fonts or frames',()=>{
 for(const html of pages){assert.doesNotMatch(html,/<(?:script|iframe)[^>]+src="https?:/);for(const tag of html.matchAll(/<link\b[^>]*>/g)){if(/rel="(?:stylesheet|preconnect|preload)"/.test(tag[0]))assert.doesNotMatch(tag[0],/href="https?:/);}assert.match(html,/Content-Security-Policy/);assert.doesNotMatch(html,/fonts\.googleapis\.com|googletagmanager\.com|google-analytics\.com/);}
});
test('All image and page assets exist and images have alt text',async()=>{
 const refs=new Set();for(const html of pages){for(const img of html.matchAll(/<img\b[^>]*>/g))assert.match(img[0],/\balt="/);for(const m of html.matchAll(/(?:src|href)="(\/JulianoBolosedoces\/[^"?#]*)/g))refs.add(m[1]);for(const a of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)){assert.match(a[0],/noopener/);assert.match(a[0],/noreferrer/);}}
 for(let ref of refs){ref=decodeURIComponent(ref.replace('/JulianoBolosedoces/',''));if(!ref||ref.endsWith('/'))ref+='index.html';await access(path.join('out',ref));}
 const css=await readFile('out/img/fonts/fonts.css','utf8');for(const m of css.matchAll(/url\(([^)]+)\)/g))await access(path.join('out/img/fonts',m[1]));
 for(const source of ['src/app/page.tsx','src/components/story-opening.tsx']){const code=await readFile(source,'utf8');for(const m of code.matchAll(/(?:file|photo): "([^"]+)"/g))await access(path.join('out/img',m[1]));}
});
test('Share image, icon, robots and sitemap are present',async()=>{
 assert.match(pages[0],/og:image/);assert.match(pages[0],/summary_large_image/);for(const p of ['img/compartilhamento.png','img/apple-touch-icon.png','robots.txt','sitemap.xml'])await access(path.join('out',p));
 const sitemap=await readFile('out/sitemap.xml','utf8');assert.match(sitemap,/<loc>https:\/\/leonardovieiraalmeida95-design.github.io\/JulianoBolosedoces\//);assert.doesNotMatch(sitemap,/obrigado/);
});
test('Message preparation has no server endpoint and has accessible errors',async()=>{
 assert.match(pages[0],/name="name"/);assert.match(pages[0],/form-action &#x27;none&#x27;|form-action 'none'/);assert.match(pages[0],/Preparar mensagem/);assert.match(pages[0],/button type="submit" disabled/);
 const source=await readFile('src/components/order-form.tsx','utf8');assert.match(source,/aria-invalid/);assert.match(source,/role="alert"/);assert.doesNotMatch(source,/localStorage|sessionStorage|fetch\(/);assert.match(source,/encodeURIComponent|whatsappLink/);
});
test('Reduced motion, skip control and GSAP cleanup are implemented',async()=>{
 const source=await readFile('src/components/site-motion.tsx','utf8');assert.match(source,/prefers-reduced-motion/);assert.match(source,/2300/);assert.match(source,/Pular abertura/);assert.match(source,/media.revert/);assert.match(source,/ScrollTrigger/);
});
test('HTTP pages and the custom 404 respond correctly',{skip:!process.env.AUDIT_BASE_URL},async()=>{
 const base=process.env.AUDIT_BASE_URL.replace(/\/$/,'');for(const route of ['/','/privacidade/','/termos/','/obrigado/','/robots.txt','/sitemap.xml','/img/fonts/fonts.css']){const response=await fetch(base+route);assert.equal(response.status,200,route);}
 const missing=await fetch(base+'/endereco-que-nao-existe/');assert.equal(missing.status,404);assert.match(await missing.text(),/Esse pedacinho/);
});
