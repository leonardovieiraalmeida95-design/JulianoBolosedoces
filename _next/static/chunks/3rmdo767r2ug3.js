(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,72050,a=>{"use strict";var e=a.i(71645);let o=!1;a.s(["default",0,function(){return(0,e.useEffect)(()=>{!function(){let a,e,s,t,r,i,l,n,c,d,p,m,u,h,b,v,f,g,x,y,$,w,k;if(o)return;o=!0;let q="5543996752935",A="img/logo.png",j="https://www.instagram.com/juliano.bolos.e.doces/",C="Jaguariaíva, PR",E={hero:"img/bolo-lirio.jpg",final:"img/bolo-borboletas.jpg",trust:"img/caixa-docinhos.jpg",catBolos:"img/bolo-coracao.jpg",catAniversario:"img/bolo-borboletas.jpg",catDocinhos:"img/doces-vermelhos.jpg",catEventos:"img/bolo-flores.jpg",p1:"img/bolo-borboletas.jpg",p2:"img/bolo-coracao.jpg",p3:"img/bolo-lirio.jpg",p4:"img/bolo-toy.jpg",p5:"img/bolo-flores.jpg",p6:"img/doces-vermelhos.jpg",p7:"img/caixa-docinhos.jpg",p8:"img/bolo-rosa.jpg"},S=[],B={principal:"Olá! Conheci o site do Juliano Bolos e Doces e gostaria de solicitar um orçamento.",bolos:"Olá! Gostaria de consultar opções e valores para um bolo personalizado.",aniversario:"Olá! Gostaria de consultar opções e valores para um bolo de aniversário ou comemoração.",docinhos:"Olá! Gostaria de consultar opções de docinhos para minha comemoração.",eventos:"Olá! Gostaria de saber se é possível encomendar uma mesa de doces para o meu evento.",flutuante:"Olá! Vim pelo site e gostaria de conversar sobre uma encomenda.",final:"Olá! Quero contar minha ideia e saber as possibilidades para a minha comemoração."},L=[{key:"p1",art:"tall",ratio:"4/5",cap:"Bolo de dois andares com borboletas e flores"},{key:"p2",art:"drip",ratio:"4/5",cap:"Bolo em formato de coração"},{key:"p3",art:"round",ratio:"4/5",cap:"Bolo com lírio e laços"},{key:"p4",art:"naked",ratio:"4/5",cap:"Bolo temático colorido"},{key:"p5",art:"mesa",ratio:"4/5",cap:"Bolo com arranjo de flores"},{key:"p6",art:"doces",ratio:"4/5",cap:"Docinhos vermelhos e brancos"},{key:"p7",art:"cupcakes",ratio:"4/5",cap:"Caixa de docinhos variados"},{key:"p8",art:"tall",ratio:"1/1",cap:"Bolo rosa decorado"}],D=(a,e=document)=>[...e.querySelectorAll(a)],z=a=>`https://wa.me/${q}?text=${encodeURIComponent(a)}`,O=a=>String(a).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);function T(a,e,o,s={}){let t,r,i=E[a],l=s.eager?"eager":"lazy",n=s.ratio?` style="aspect-ratio:${O(s.ratio)}"`:"";return i?`<div class="photo"${n}><img src="${O(i)}" alt="${O(o)}" loading="${l}" decoding="async"></div>`:`<div class="photo"${n} role="img" aria-label="Espa\xe7o reservado: ${O(o)}">${t='fill="var(--ph-fg)"',r="","tall"===e?r=`<rect x="120" y="305" width="160" height="108" rx="8" ${t} opacity=".34"/><rect x="140" y="215" width="120" height="90" rx="8" ${t} opacity=".26"/><rect x="162" y="135" width="76" height="80" rx="8" ${t} opacity=".34"/><rect x="198" y="100" width="4" height="35" ${t} opacity=".4"/><circle cx="200" cy="92" r="7" ${t} opacity=".5"/>`:"round"===e?r=`<rect x="70" y="290" width="260" height="122" rx="12" ${t} opacity=".3"/><rect x="70" y="272" width="260" height="24" rx="12" ${t} opacity=".42"/>`+[0,1,2,3,4,5,6].map(a=>`<circle cx="${96+34*a}" cy="262" r="11" ${t} opacity=".5"/>`).join(""):"drip"===e?r=`<rect x="110" y="232" width="180" height="180" rx="10" ${t} opacity=".28"/><rect x="110" y="232" width="180" height="26" rx="10" ${t} opacity=".45"/>`+[0,1,2,3,4,5].map(a=>`<rect x="${122+28*a}" y="250" width="14" height="${22+a%3*24}" rx="7" ${t} opacity=".45"/>`).join("")+`<circle cx="200" cy="214" r="10" ${t} opacity=".5"/>`:"doces"===e?r=`<rect x="56" y="190" width="288" height="210" rx="18" ${t} opacity=".16"/>`+[0,1,2,3].flatMap(a=>[0,1,2].map(e=>`<circle cx="${110+60*a}" cy="${244+58*e}" r="21" ${t} opacity="${.3+(a+e)%3*.1}"/>`)).join(""):"mesa"===e?r=`<rect x="36" y="364" width="328" height="10" rx="5" ${t} opacity=".4"/><rect x="190" y="304" width="20" height="60" ${t} opacity=".3"/><rect x="126" y="292" width="148" height="12" rx="6" ${t} opacity=".4"/><rect x="152" y="226" width="96" height="66" rx="8" ${t} opacity=".3"/>`+[0,1,2].map(a=>`<circle cx="${72+26*a}" cy="344" r="12" ${t} opacity=".4"/>`).join("")+[0,1,2].map(a=>`<circle cx="${286+26*a}" cy="344" r="12" ${t} opacity=".4"/>`).join(""):"naked"===e?r=[0,1,2,3].map(a=>`<rect x="110" y="${236+40*a}" width="180" height="30" rx="6" ${t} opacity="${a%2?.22:.38}"/>`).join("")+`<circle cx="160" cy="226" r="10" ${t} opacity=".5"/><circle cx="200" cy="220" r="12" ${t} opacity=".5"/><circle cx="242" cy="227" r="9" ${t} opacity=".5"/>`:"cupcakes"===e&&(r=[0,1,2].map(a=>{let e=90+88*a;return`<path d="M${e} 340 L${e+64} 340 L${e+54} 396 L${e+10} 396 Z" ${t} opacity=".34"/><circle cx="${e+32}" cy="322" r="30" ${t} opacity=".42"/>`}).join("")),`<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">${'<ellipse cx="200" cy="418" rx="140" ry="12" '+t+' opacity=".18"/>'}${r}</svg>`}<span class="ph-tag">Espa\xe7o para foto autoral</span></div>`}function M(e,o=3200){let s=((a,e=document)=>e.querySelector(a))("#toast");s.textContent=e,s.classList.add("show"),clearTimeout(a),a=setTimeout(()=>s.classList.remove("show"),o)}((a,e=document)=>e.querySelector(a))("#app").innerHTML=`
  <header class="site-header">
    <div class="header-in">
      <a class="brand" href="#topo" aria-label="Juliano Bolos e Doces, in\xedcio">
        <img class="logo" src="${O(A)}" alt="" width="42" height="42">
        <span class="bt"><b>Juliano</b><i>Bolos e Doces</i></span>
      </a>
      <nav class="nav" aria-label="Principal">
        <a href="#produtos">Produtos</a><a href="#trabalhos">Trabalhos</a><a href="#personalizacao">Personaliza\xe7\xe3o</a><a href="#como-funciona">Como pedir</a><a href="#duvidas">D\xfavidas</a>
      </nav>
      <div class="header-actions">
        <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="mobileNav">Menu</button>
        <a class="btn btn-primary btn-sm" data-wa="principal" href="${z(B.principal)}" target="_blank" rel="noopener noreferrer">Or\xe7amento</a>
      </div>
    </div>
    <nav class="mobile-nav" id="mobileNav" aria-label="Menu m\xf3vel">
      <a href="#produtos">Produtos</a><a href="#trabalhos">Trabalhos</a><a href="#personalizacao">Personaliza\xe7\xe3o</a><a href="#como-funciona">Como pedir</a><a href="#duvidas">D\xfavidas</a>
    </nav>
  </header><main>
  <section class="hero" id="topo" aria-labelledby="h1">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow">${O(C)} \xb7 Encomendas sob consulta</p>
        <h1 id="h1" class="display">Bolos e doces feitos para o seu <em>momento especial.</em></h1>
        <p class="lead">Bolos personalizados, bolos de comemora\xe7\xe3o e docinhos para festas. Conte sua ideia e o Juliano apresenta as possibilidades para a sua data.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" data-wa="principal" href="${z(B.principal)}" target="_blank" rel="noopener noreferrer">Encomendar pelo WhatsApp</a>
          <a class="btn btn-ghost" href="#trabalhos">Explorar nossos trabalhos</a>
        </div>
        <p class="hero-note">Sem formul\xe1rio longo: a conversa come\xe7a direto no WhatsApp.</p>
        <a class="scroll-hint" href="#produtos" aria-label="Rolar para ver os produtos"><span>Role</span><i></i></a>
      </div>
      ${T("hero","tall","Bolo decorado com lírio e laços de fita",{eager:!0})}
    </div>
  </section>`+(e=[{id:"bolos",key:"catBolos",art:"naked",nome:"Bolos personalizados",desc:"Criados a partir do tema, das cores e dos detalhes que você imaginou."},{id:"aniversario",key:"catAniversario",art:"tall",nome:"Aniversários e comemorações",desc:"Bolos para festas, encontros e datas que pedem uma mesa bonita."},{id:"docinhos",key:"catDocinhos",art:"doces",nome:"Docinhos e brigadeiros",desc:"Docinhos para festas, organizados para servir e para encantar."},{id:"eventos",key:"catEventos",art:"mesa",nome:"Mesas de doces e eventos",desc:"Conjuntos de doces para eventos.",tag:"Sob consulta",evento:!0}].filter(a=>!a.evento||!0).map(a=>`
    <article class="cat">
      ${T(a.key,a.art,a.nome)}
      <div>
        ${a.tag?`<p class="tag">${O(a.tag)}</p>`:""}
        <h3>${O(a.nome)}</h3>
      </div>
      <p>${O(a.desc)}</p>
      <div class="cat-actions">
        <a class="btn btn-ghost btn-sm" data-wa="${a.id}" href="${z(B[a.id])}" target="_blank" rel="noopener noreferrer">Solicitar or\xe7amento</a>
        <a class="link-arrow" href="#trabalhos">Ver trabalhos</a>
      </div>
    </article>`).join(""),`
  <section class="alt band" id="produtos" aria-labelledby="h-prod">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">Produtos</p>
        <h2 class="h-section" id="h-prod">O que voc\xea pode encomendar</h2>
        <p class="lead">Escolha uma categoria e a conversa no WhatsApp j\xe1 abre com o assunto definido.</p>
      </div>
      <div class="cat-grid">${e}</div>
    </div>
  </section>`)+(s=L.map((a,e)=>`
    <button class="port-item" data-lb="${e}" aria-label="Ampliar: ${O(a.cap)}">
      ${T(a.key,a.art,a.cap,{ratio:a.ratio})}
      <span class="cap">${O(a.cap)}</span>
    </button>`).join(""),`
  <section id="trabalhos" aria-labelledby="h-port">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">Trabalhos autorais</p>
        <h2 class="h-section" id="h-port">Acabamento, cor e cada detalhe.</h2>
        <p class="lead">Uma sele\xe7\xe3o de encomendas para voc\xea avaliar o estilo e escolher refer\xeancias. Toque em uma imagem para ampliar.</p>
      </div>
      <div class="grid-port">${s}</div>
      <div class="port-foot">
        <span>Quer ver mais? As publica\xe7\xf5es recentes est\xe3o no Instagram.</span>
        <a class="btn btn-ghost btn-sm" href="${O(j)}" target="_blank" rel="noopener noreferrer">Ver no Instagram</a>
      </div>
    </div>
  </section>`)+(t=[["bolo personalizado","Bolo personalizado"],["bolo de aniversário ou comemoração","Aniversário"],["docinhos","Docinhos"],["mesa de doces ou evento","Evento"]].filter(([a])=>!0).map(([a,e],o)=>`<button type="button" class="chip" data-cat="${O(a)}" aria-pressed="${0===o}">${O(e)}</button>`).join(""),`
  <section class="alt band" id="personalizacao" aria-labelledby="h-pers">
    <div class="wrap pers-grid">
      <div>
        <p class="eyebrow">Personaliza\xe7\xe3o</p>
        <h2 class="h-section" id="h-pers" style="margin-top:14px">Seu bolo, do seu jeito.</h2>
        <p class="lead" style="margin-top:18px">Converse sobre o que voc\xea imagina. Disponibilidade, tamanhos e prazos s\xe3o confirmados diretamente com o Juliano.</p>
        <ul class="checklist">
          <li><b>Ocasi\xe3o</b><span>Anivers\xe1rio, encontro, celebra\xe7\xe3o ou outra data especial.</span></li>
          <li><b>Tema</b><span>Cores, estilo e refer\xeancias que voc\xea gostou.</span></li>
          <li><b>Convidados</b><span>Uma ideia da quantidade ajuda a pensar no tamanho.</span></li>
          <li><b>Detalhes</b><span>Sabores, decora\xe7\xe3o e o que for importante para voc\xea.</span></li>
        </ul>
      </div>
      <form class="builder" id="builder" aria-labelledby="h-build" novalidate>
        <h3 id="h-build">Monte sua mensagem</h3>
        <div class="field">
          <span class="lbl" id="lblCat">O que voc\xea procura?</span>
          <div class="chips" role="group" aria-labelledby="lblCat">${t}</div>
        </div>
        <div class="two">
          <div class="field"><label for="occ">Ocasi\xe3o</label><input id="occ" type="text" placeholder="Ex.: anivers\xe1rio de 8 anos" autocomplete="off"></div>
          <div class="field"><label for="dt">Data</label><input id="dt" type="date"></div>
        </div>
        <div class="field"><label for="guests">Convidados (aproximado)</label><input id="guests" type="number" inputmode="numeric" min="1" placeholder="Opcional"></div>
        <div class="preview" aria-live="polite"><b>Mensagem que ser\xe1 enviada</b><span id="prevMsg"></span></div>
        <a class="btn btn-primary" id="buildSend" data-wa="custom" href="#" target="_blank" rel="noopener noreferrer">Abrir conversa no WhatsApp</a>
        <p class="fine">Nada \xe9 enviado por este formul\xe1rio. Ele apenas prepara o texto e abre o WhatsApp para voc\xea enviar.</p>
      </form>
    </div>
  </section>`)+(r=[["Escolha uma referência ou explique sua ideia","Veja os trabalhos, separe uma foto de que gostou ou descreva o que imagina."],["Consulte disponibilidade e orçamento","Fale com o Juliano pelo WhatsApp informando a data e os detalhes principais."],["Combine os detalhes e confirme","A confirmação da encomenda é feita diretamente com a empresa."]].map(([a,e],o)=>`<li class="step"><span class="n">${o+1}</span><h3>${a}</h3><p>${e}</p></li>`).join(""),`
  <section id="como-funciona" aria-labelledby="h-steps">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">Como encomendar</p>
        <h2 class="h-section" id="h-steps">Tr\xeas passos, sem complica\xe7\xe3o.</h2>
      </div>
      <ol class="steps">${r}</ol>
    </div>
  </section>`)+(i=S.length?`<div class="quotes">${S.map(a=>`<blockquote><p>${O(a.texto)}</p><cite>${O(a.autor)}</cite></blockquote>`).join("")}</div>`:`<div class="pillars">
        <div class="pillar"><b>Conversa direta</b><span>Voc\xea fala com quem faz o seu bolo, sem intermedi\xe1rios.</span></div>
        <div class="pillar"><b>Pensado para a sua ocasi\xe3o</b><span>Cada encomenda parte do tema e dos detalhes que voc\xea escolher.</span></div>
        <div class="pillar"><b>Trabalho artesanal</b><span>Acabamento e decora\xe7\xe3o feitos com aten\xe7\xe3o a cada detalhe.</span></div>
        <p><a class="link-arrow" href="${O(j)}" target="_blank" rel="noopener noreferrer">Ver feedbacks de clientes no Instagram</a></p>
      </div>`,`
  <section class="alt band trust" aria-labelledby="h-trust">
    <div class="wrap trust-grid">
      ${T("trust","round","Caixa com docinhos variados")}
      <div>
        <p class="eyebrow">${S.length?"Quem já encomendou":"Nossa proposta"}</p>
        <h2 class="h-section" id="h-trust" style="margin-top:14px">Cada encomenda come\xe7a com uma conversa.</h2>
        ${i}
      </div>
    </div>
  </section>`)+(l=[{q:"Como faço uma encomenda?",a:"Chame o Juliano pelo WhatsApp e conte sua ideia. Ele responde com as possibilidades e combina os detalhes diretamente com você."},{q:"Com quanta antecedência devo consultar?",a:"Quanto antes você entrar em contato, mais fácil é verificar a disponibilidade da sua data. O prazo para cada tipo de encomenda é informado pelo Juliano na conversa."},{q:"Como solicito um orçamento personalizado?",a:"Use o campo “Monte sua mensagem” nesta página ou o botão de orçamento. A conversa abre no WhatsApp já com as informações que você escolheu."},{q:"Quais informações preciso enviar?",a:"Ajuda bastante informar a ocasião, a data, a quantidade aproximada de convidados, o tema ou as cores desejadas e uma foto de referência, se tiver."},{q:"Como verifico a disponibilidade para minha data?",a:"Informe a data na mensagem. A disponibilidade é confirmada pelo Juliano, diretamente pelo WhatsApp."}].map(a=>`<details><summary>${O(a.q)}</summary><div class="ans">${O(a.a)}</div></details>`).join(""),`
  <section id="duvidas" aria-labelledby="h-faq">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">D\xfavidas frequentes</p>
        <h2 class="h-section" id="h-faq">Antes de chamar.</h2>
      </div>
      <div class="faq">${l}</div>
    </div>
  </section>`)+`
  <section class="final band" aria-labelledby="h-final">
    <div class="wrap final-grid">
      <div>
        <p class="eyebrow">Encomende</p>
        <h2 class="display" id="h-final">Seu pr\xf3ximo momento especial come\xe7a aqui.</h2>
        <p class="lead">Conte sua ideia para o Juliano e descubra as possibilidades para sua comemora\xe7\xe3o.</p>
        <div class="final-actions">
          <a class="btn btn-light" data-wa="final" href="${z(B.final)}" target="_blank" rel="noopener noreferrer">Solicitar or\xe7amento</a>
        </div>
        <div class="final-links">
          <a href="#trabalhos">Voltar aos trabalhos</a>
          <a href="${O(j)}" target="_blank" rel="noopener noreferrer">Acompanhar no Instagram</a>
          <button type="button" data-share>Indicar para um amigo</button>
        </div>
      </div>
      ${T("final","tall","Bolo de dois andares com borboletas e flores")}
    </div>
  </section>`+"</main>"+(n=/^\d{10,15}$/.test(q)?"WhatsApp (43) 99675-2935":"WhatsApp: número a configurar",`
  <footer class="band">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <a class="brand" href="#topo"><img class="logo" src="${O(A)}" alt="" width="56" height="56"><span class="bt"><b>Juliano</b><i>Bolos e Doces</i></span></a>
          <p style="margin-top:14px;color:var(--ink-2);max-width:36ch">Sua vida mais doce por nossa conta. Bolos e doces personalizados, sob encomenda.</p>
        </div>
        <div>
          <h4>Contato</h4>
          <p><a data-wa="principal" href="${z(B.principal)}" target="_blank" rel="noopener noreferrer">${n}</a></p>
          <p><a href="${O(j)}" target="_blank" rel="noopener noreferrer">@${O("juliano.bolos.e.doces")}</a></p>
        </div>
        <div>
          <h4>Onde estamos</h4>
          <p>${O(C)}</p>
          <p style="margin-top:8px"><button type="button" class="link-arrow" data-share style="background:none;border:0;padding:0 0 2px;font:600 15.5px var(--font-body);color:var(--ink);cursor:pointer">Compartilhar este site</button></p>
        </div>
      </div>
      <p class="small">Endere\xe7o, hor\xe1rios e demais informa\xe7\xf5es comerciais ser\xe3o inclu\xeddos quando confirmados pelo propriet\xe1rio. Valores, prazos e disponibilidade s\xe3o combinados diretamente com a empresa.</p>
    </div>
  </footer>`)+`<a class="wa-float" data-wa="flutuante" href="${z(B.flutuante)}" target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.88 2.4 1 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg><span class="wa-label">WhatsApp</span></a>`,((a,e=document)=>e.querySelector(a))("#demoStrip").hidden=!1,c=((a,e=document)=>e.querySelector(a))("#menuBtn"),d=((a,e=document)=>e.querySelector(a))("#mobileNav"),c.addEventListener("click",()=>{let a=d.classList.toggle("open");c.setAttribute("aria-expanded",String(a))}),D("#mobileNav a").forEach(a=>a.addEventListener("click",()=>{d.classList.remove("open"),c.setAttribute("aria-expanded","false")})),p=((a,e=document)=>e.querySelector(a))("#occ"),m=((a=document)=>a.querySelector("#dt"))(),u=((a,e=document)=>e.querySelector(a))("#guests"),h=((a,e=document)=>e.querySelector(a))("#prevMsg"),b=((a,e=document)=>e.querySelector(a))("#buildSend"),v=((a,e=document)=>e.querySelector(a))(".chip[aria-pressed='true']").dataset.cat,f=()=>{let a=[`Ol\xe1! Gostaria de fazer uma encomenda de ${v}.`];p.value.trim()&&a.push(`A ocasi\xe3o \xe9 ${p.value.trim()}.`),m.value&&a.push(`A data \xe9 ${(a=>{if(!a)return"";let[e,o,s]=a.split("-");return`${s}/${o}/${e}`})(m.value)}.`),u.value&&a.push(`Ser\xe3o cerca de ${u.value} convidados.`),a.push("Gostaria de receber informações sobre disponibilidade e valores.");let e=a.join(" ");h.textContent=e,b.href=z(e)},D(".chip").forEach(a=>a.addEventListener("click",()=>{D(".chip").forEach(a=>a.setAttribute("aria-pressed","false")),a.setAttribute("aria-pressed","true"),v=a.dataset.cat,f()})),[p,m,u].forEach(a=>a.addEventListener("input",f)),((a,e=document)=>e.querySelector(a))("#builder").addEventListener("submit",a=>a.preventDefault()),f(),g=((a=document)=>a.querySelector("#lb"))(),x=0,y=null,$=()=>{let a=L[x];g.innerHTML=`
      <div class="lb-box">
        ${T(a.key,a.art,a.cap,{ratio:a.ratio})}
        <div class="lb-cap">
          <span>${O(a.cap)} \xb7 ${x+1} de ${L.length}</span>
          <div class="lb-nav">
            <button class="lb-btn" data-lb-prev aria-label="Anterior">←</button>
            <button class="lb-btn" data-lb-next aria-label="Pr\xf3ximo">→</button>
            <button class="lb-btn" data-lb-close>Fechar</button>
          </div>
        </div>
        <a class="btn btn-light" data-wa="bolos" href="${z(B.bolos)}" target="_blank" rel="noopener noreferrer">Quero algo assim</a>
      </div>`},w=()=>{g.classList.remove("open"),y&&y.focus()},k=a=>{x=(x+a+L.length)%L.length,$(),((a,e=document)=>e.querySelector(a))("[data-lb-next]",g).focus()},D("[data-lb]").forEach(a=>a.addEventListener("click",()=>{var e;return e=+a.dataset.lb,void(x=e,y=a,$(),g.classList.add("open"),((a,e=document)=>e.querySelector(a))("[data-lb-close]",g).focus())})),g.addEventListener("click",a=>{a.target===g||a.target.closest("[data-lb-close]")?w():a.target.closest("[data-lb-prev]")?k(-1):a.target.closest("[data-lb-next]")&&k(1)}),document.addEventListener("keydown",a=>{if(g.classList.contains("open")&&("Escape"===a.key&&w(),"ArrowLeft"===a.key&&k(-1),"ArrowRight"===a.key&&k(1),"Tab"===a.key)){let e=D("button, a[href]",g);if(!e.length)return;let o=e[0],s=e[e.length-1];a.shiftKey&&document.activeElement===o?(a.preventDefault(),s.focus()):a.shiftKey||document.activeElement!==s||(a.preventDefault(),o.focus())}}),document.addEventListener("click",async a=>{let e=a.target.closest("[data-share]");if(!e)return;let o=(0,location.href.split("#")[0]);if(navigator.share)try{await navigator.share({title:"Juliano Bolos e Doces",text:"Bolos personalizados e docinhos para festas em Jaguariaíva, PR.",url:o});return}catch(a){if(a&&"AbortError"===a.name)return}try{await navigator.clipboard.writeText(o),(a=>{if(!a)return;let e=a.textContent;a.textContent="Link copiado",setTimeout(()=>{a.textContent=e},2e3)})(e),M("Link copiado. Agora é só enviar para quem você quiser.")}catch(a){M("Copie o link do site: "+o,6e3)}}),document.addEventListener("click",a=>{let e=a.target.closest("a[data-wa]");if(!e||/^\d{10,15}$/.test(q))return;a.preventDefault();let o="";try{o=decodeURIComponent(new URL(e.href).searchParams.get("text")||"")}catch(a){}M("Demonstração: o número do WhatsApp ainda será configurado. Mensagem preparada: "+o,7e3)})}()},[]),null}],72050)}]);