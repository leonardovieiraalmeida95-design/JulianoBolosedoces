import {mkdir,writeFile} from 'node:fs/promises';
import sharp from 'sharp';
await mkdir('img/fonts',{recursive:true});
const cssUrl='https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap';
const response=await fetch(cssUrl,{headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'}});
if(!response.ok)throw new Error('Font stylesheet unavailable');
const css=await response.text();
const files=new Map();let output='/* Self-hosted Google Fonts; see the OFL licenses in this folder. */\n';
const latin=[...css.matchAll(/\/\* (latin(?:-ext)?) \*\/\s*(@font-face\s*\{[^}]*\})/g)].map(m=>m[2]);
for(const rawBlock of (latin.length?latin:[...css.matchAll(/@font-face\s*\{[^}]*\}/g)].map(m=>m[0]))){
 let block=rawBlock;
 for(const urlMatch of block.matchAll(/url\(['"]?(https:[^)'"\s]+)['"]?\)/g)){
   const url=urlMatch[1];
   if(!files.has(url)){
     const name=`font-${files.size+1}.${url.endsWith('.woff2')?'woff2':'ttf'}`;
     const font=await fetch(url);if(!font.ok)throw new Error('Font unavailable');
     await writeFile(`img/fonts/${name}`,Buffer.from(await font.arrayBuffer()));files.set(url,name);
   }
   block=block.replace(url,`./${files.get(url)}`);
 }
 output+=block+'\n';
}
if(!files.size)throw new Error('No font files found');
await writeFile('img/fonts/fonts.css',output);
for(const family of ['hankengrotesk','newsreader']){
 const license=await fetch(`https://raw.githubusercontent.com/google/fonts/main/ofl/${family}/OFL.txt`);
 if(!license.ok)throw new Error('License unavailable');await writeFile(`img/fonts/${family}-OFL.txt`,await license.text());
}
await sharp('img/logo.png').resize(180,180).png().toFile('img/apple-touch-icon.png');
const photo=await sharp('img/hero-editorial.webp').resize(680,630,{fit:'cover',position:'right'}).png().toBuffer();
const overlay=Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="570" height="630" fill="#142743"/><text x="60" y="155" fill="#f4f0e8" font-family="Georgia,serif" font-size="76">Juliano</text><text x="65" y="203" fill="#e1c9a9" font-family="Arial" font-size="21" letter-spacing="5">BOLOS E DOCES</text><text x="62" y="325" fill="#f4f0e8" font-family="Georgia,serif" font-size="40">Feito com afeto</text><text x="62" y="380" fill="#f4f0e8" font-family="Georgia,serif" font-size="40">para virar lembrança</text><text x="65" y="510" fill="#d9dce2" font-family="Arial" font-size="20">Bolos e doces sob encomenda</text><text x="65" y="546" fill="#d9dce2" font-family="Arial" font-size="18">Jaguariaíva, Paraná</text></svg>`);
await sharp({create:{width:1200,height:630,channels:3,background:'#142743'}}).composite([{input:photo,left:520,top:0},{input:overlay,left:0,top:0}]).png({compressionLevel:9}).toFile('img/compartilhamento.png');
console.log(`Prepared ${files.size} local font files, licenses, touch icon and share image.`);
