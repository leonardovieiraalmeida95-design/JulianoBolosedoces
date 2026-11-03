// Existing interactions retained during the framework migration.
let initialized = false;
export function initializeSite() {
if (initialized) return;
initialized = true;

/* =====================================================================
   CONFIGURAÇÃO ÚNICA  (edite apenas este bloco para personalizar o site)
   ===================================================================== */
const CONFIG = {
  // WhatsApp comercial: apenas dígitos, com código do país (55) e DDD. Único lugar a editar.
  // Se voltar a ser "SEU_NUMERO_WHATSAPP", os botões mostram a mensagem pronta em vez de abrir o WhatsApp.
  whatsappNumber: "5543996752935",
  whatsappDisplay: "(43) 99675-2935",   // como o número aparece escrito no rodapé
  logo: "img/logo.png",                 // logotipo do perfil. Trocar pelo arquivo original em alta resolução.
  instagramUser: "juliano.bolos.e.doces",
  instagramUrl: "https://www.instagram.com/juliano.bolos.e.doces/",
  city: "Jaguariaíva, PR",
  siteUrl: "",            // URL pública do site. Vazio = usa o endereço atual da página.
  demo: true,             // true mostra a faixa "versão de demonstração". Use false ao publicar.
  offerEvents: true,      // true exibe "Mesas de doces e eventos". Confirmar com o proprietário antes de publicar.

  /* FOTOS AUTORAIS: caminho de cada foto. Para trocar, coloque o arquivo original na pasta img/
     e altere o nome aqui. Campo vazio = aparece o marcador "Espaço para foto autoral".
     As fotos atuais são recortes de um print do Instagram (baixa resolução). Use os originais ao publicar. */
  photos: {
    hero: "img/bolo-lirio.jpg", final: "img/bolo-borboletas.jpg", trust: "img/caixa-docinhos.jpg",
    catBolos: "img/bolo-coracao.jpg", catAniversario: "img/bolo-borboletas.jpg",
    catDocinhos: "img/doces-vermelhos.jpg", catEventos: "img/bolo-flores.jpg",
    p1: "img/bolo-borboletas.jpg", p2: "img/bolo-coracao.jpg", p3: "img/bolo-lirio.jpg", p4: "img/bolo-toy.jpg",
    p5: "img/bolo-flores.jpg", p6: "img/doces-vermelhos.jpg", p7: "img/caixa-docinhos.jpg", p8: "img/bolo-rosa.jpg"
  },

  // Depoimentos reais com autorização: [{ texto: "...", autor: "Nome" }]. Vazio = mostra a apresentação do trabalho.
  testimonials: []
};

/* Mensagens pré-preenchidas por origem do contato */
const MSG = {
  principal: "Olá! Conheci o site do Juliano Bolos e Doces e gostaria de solicitar um orçamento.",
  bolos: "Olá! Gostaria de consultar opções e valores para um bolo personalizado.",
  aniversario: "Olá! Gostaria de consultar opções e valores para um bolo de aniversário ou comemoração.",
  docinhos: "Olá! Gostaria de consultar opções de docinhos para minha comemoração.",
  eventos: "Olá! Gostaria de saber se é possível encomendar uma mesa de doces para o meu evento.",
  flutuante: "Olá! Vim pelo site e gostaria de conversar sobre uma encomenda.",
  final: "Olá! Quero contar minha ideia e saber as possibilidades para a minha comemoração."
};

const CATEGORIES = [
  { id: "bolos", key: "catBolos", art: "naked", nome: "Bolos personalizados", desc: "Criados a partir do tema, das cores e dos detalhes que você imaginou." },
  { id: "aniversario", key: "catAniversario", art: "tall", nome: "Aniversários e comemorações", desc: "Bolos para festas, encontros e datas que pedem uma mesa bonita." },
  { id: "docinhos", key: "catDocinhos", art: "doces", nome: "Docinhos e brigadeiros", desc: "Docinhos para festas, organizados para servir e para encantar." },
  { id: "eventos", key: "catEventos", art: "mesa", nome: "Mesas de doces e eventos", desc: "Conjuntos de doces para eventos.", tag: "Sob consulta", evento: true }
];

/* ratio = proporção da foto no portfólio (largura/altura). Ajuste se trocar por fotos de outro formato. */
const PORTFOLIO = [
  { key: "p1", art: "tall", ratio: "4/5", cap: "Bolo de dois andares com borboletas e flores" },
  { key: "p2", art: "drip", ratio: "4/5", cap: "Bolo em formato de coração" },
  { key: "p3", art: "round", ratio: "4/5", cap: "Bolo com lírio e laços" },
  { key: "p4", art: "naked", ratio: "4/5", cap: "Bolo temático colorido" },
  { key: "p5", art: "mesa", ratio: "4/5", cap: "Bolo com arranjo de flores" },
  { key: "p6", art: "doces", ratio: "4/5", cap: "Docinhos vermelhos e brancos" },
  { key: "p7", art: "cupcakes", ratio: "4/5", cap: "Caixa de docinhos variados" },
  { key: "p8", art: "tall", ratio: "1/1", cap: "Bolo rosa decorado" }
];

const FAQ = [
  { q: "Como faço uma encomenda?", a: "Chame o Juliano pelo WhatsApp e conte sua ideia. Ele responde com as possibilidades e combina os detalhes diretamente com você." },
  { q: "Com quanta antecedência devo consultar?", a: "Quanto antes você entrar em contato, mais fácil é verificar a disponibilidade da sua data. O prazo para cada tipo de encomenda é informado pelo Juliano na conversa." },
  { q: "Como solicito um orçamento personalizado?", a: "Use o campo “Monte sua mensagem” nesta página ou o botão de orçamento. A conversa abre no WhatsApp já com as informações que você escolheu." },
  { q: "Quais informações preciso enviar?", a: "Ajuda bastante informar a ocasião, a data, a quantidade aproximada de convidados, o tema ou as cores desejadas e uma foto de referência, se tiver." },
  { q: "Como verifico a disponibilidade para minha data?", a: "Informe a data na mensagem. A disponibilidade é confirmada pelo Juliano, diretamente pelo WhatsApp." }
];

/* =====================================================================
   Utilidades
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const numberPending = () => !/^\d{10,15}$/.test(CONFIG.whatsappNumber);
const waLink = (msg) => `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
const pageUrl = () => CONFIG.siteUrl || location.href.split("#")[0];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.88 2.4 1 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>';

/* Marcadores de foto: desenhos em linha, claramente identificados como espaço reservado */
function art(kind) {
  const F = 'fill="var(--ph-fg)"';
  let s = "";
  const plate = '<ellipse cx="200" cy="418" rx="140" ry="12" ' + F + ' opacity=".18"/>';
  if (kind === "tall") {
    s = `<rect x="120" y="305" width="160" height="108" rx="8" ${F} opacity=".34"/><rect x="140" y="215" width="120" height="90" rx="8" ${F} opacity=".26"/><rect x="162" y="135" width="76" height="80" rx="8" ${F} opacity=".34"/><rect x="198" y="100" width="4" height="35" ${F} opacity=".4"/><circle cx="200" cy="92" r="7" ${F} opacity=".5"/>`;
  } else if (kind === "round") {
    s = `<rect x="70" y="290" width="260" height="122" rx="12" ${F} opacity=".3"/><rect x="70" y="272" width="260" height="24" rx="12" ${F} opacity=".42"/>` +
      [0,1,2,3,4,5,6].map(i => `<circle cx="${96 + i * 34}" cy="262" r="11" ${F} opacity=".5"/>`).join("");
  } else if (kind === "drip") {
    s = `<rect x="110" y="232" width="180" height="180" rx="10" ${F} opacity=".28"/><rect x="110" y="232" width="180" height="26" rx="10" ${F} opacity=".45"/>` +
      [0,1,2,3,4,5].map(i => `<rect x="${122 + i * 28}" y="250" width="14" height="${22 + (i % 3) * 24}" rx="7" ${F} opacity=".45"/>`).join("") +
      `<circle cx="200" cy="214" r="10" ${F} opacity=".5"/>`;
  } else if (kind === "doces") {
    s = `<rect x="56" y="190" width="288" height="210" rx="18" ${F} opacity=".16"/>` +
      [0,1,2,3].flatMap(i => [0,1,2].map(j => `<circle cx="${110 + i * 60}" cy="${244 + j * 58}" r="21" ${F} opacity="${.3 + ((i + j) % 3) * .1}"/>`)).join("");
  } else if (kind === "mesa") {
    s = `<rect x="36" y="364" width="328" height="10" rx="5" ${F} opacity=".4"/><rect x="190" y="304" width="20" height="60" ${F} opacity=".3"/><rect x="126" y="292" width="148" height="12" rx="6" ${F} opacity=".4"/><rect x="152" y="226" width="96" height="66" rx="8" ${F} opacity=".3"/>` +
      [0,1,2].map(i => `<circle cx="${72 + i * 26}" cy="344" r="12" ${F} opacity=".4"/>`).join("") +
      [0,1,2].map(i => `<circle cx="${286 + i * 26}" cy="344" r="12" ${F} opacity=".4"/>`).join("");
  } else if (kind === "naked") {
    s = [0,1,2,3].map(i => `<rect x="110" y="${236 + i * 40}" width="180" height="30" rx="6" ${F} opacity="${i % 2 ? .22 : .38}"/>`).join("") +
      `<circle cx="160" cy="226" r="10" ${F} opacity=".5"/><circle cx="200" cy="220" r="12" ${F} opacity=".5"/><circle cx="242" cy="227" r="9" ${F} opacity=".5"/>`;
  } else if (kind === "cupcakes") {
    s = [0,1,2].map(i => { const x = 90 + i * 88; return `<path d="M${x} 340 L${x + 64} 340 L${x + 54} 396 L${x + 10} 396 Z" ${F} opacity=".34"/><circle cx="${x + 32}" cy="322" r="30" ${F} opacity=".42"/>`; }).join("");
  }
  return `<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">${plate}${s}</svg>`;
}

/* Componente de foto: usa a imagem configurada ou o marcador */
function Photo(key, kind, alt, opts = {}) {
  const src = CONFIG.photos[key];
  const loading = opts.eager ? "eager" : "lazy";
  const st = opts.ratio ? ` style="aspect-ratio:${esc(opts.ratio)}"` : "";
  if (src) return `<div class="photo"${st}><img src="${esc(src)}" alt="${esc(alt)}" loading="${loading}" decoding="async"></div>`;
  return `<div class="photo"${st} role="img" aria-label="Espaço reservado: ${esc(alt)}">${art(kind)}<span class="ph-tag">Espaço para foto autoral</span></div>`;
}

/* =====================================================================
   Componentes
   ===================================================================== */
function Header() {
  return `
  <header class="site-header">
    <div class="header-in">
      <a class="brand" href="#topo" aria-label="Juliano Bolos e Doces, início">
        <img class="logo" src="${esc(CONFIG.logo)}" alt="" width="42" height="42">
        <span class="bt"><b>Juliano</b><i>Bolos e Doces</i></span>
      </a>
      <nav class="nav" aria-label="Principal">
        <a href="#produtos">Produtos</a><a href="#trabalhos">Trabalhos</a><a href="#personalizacao">Personalização</a><a href="#como-funciona">Como pedir</a><a href="#duvidas">Dúvidas</a>
      </nav>
      <div class="header-actions">
        <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="mobileNav">Menu</button>
        <a class="btn btn-primary btn-sm" data-wa="principal" href="${waLink(MSG.principal)}" target="_blank" rel="noopener noreferrer">Orçamento</a>
      </div>
    </div>
    <nav class="mobile-nav" id="mobileNav" aria-label="Menu móvel">
      <a href="#produtos">Produtos</a><a href="#trabalhos">Trabalhos</a><a href="#personalizacao">Personalização</a><a href="#como-funciona">Como pedir</a><a href="#duvidas">Dúvidas</a>
    </nav>
  </header>`;
}

function Hero() {
  return `
  <section class="hero" id="topo" aria-labelledby="h1">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow">${esc(CONFIG.city)} · Encomendas sob consulta</p>
        <h1 id="h1" class="display">Bolos e doces feitos para o seu <em>momento especial.</em></h1>
        <p class="lead">Bolos personalizados, bolos de comemoração e docinhos para festas. Conte sua ideia e o Juliano apresenta as possibilidades para a sua data.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" data-wa="principal" href="${waLink(MSG.principal)}" target="_blank" rel="noopener noreferrer">Encomendar pelo WhatsApp</a>
          <a class="btn btn-ghost" href="#trabalhos">Explorar nossos trabalhos</a>
        </div>
        <p class="hero-note">Sem formulário longo: a conversa começa direto no WhatsApp.</p>
        <a class="scroll-hint" href="#produtos" aria-label="Rolar para ver os produtos"><span>Role</span><i></i></a>
      </div>
      ${Photo("hero", "tall", "Bolo decorado com lírio e laços de fita", { eager: true })}
    </div>
  </section>`;
}

function Categories() {
  const items = CATEGORIES.filter(c => !c.evento || CONFIG.offerEvents).map(c => `
    <article class="cat">
      ${Photo(c.key, c.art, c.nome)}
      <div>
        ${c.tag ? `<p class="tag">${esc(c.tag)}</p>` : ""}
        <h3>${esc(c.nome)}</h3>
      </div>
      <p>${esc(c.desc)}</p>
      <div class="cat-actions">
        <a class="btn btn-ghost btn-sm" data-wa="${c.id}" href="${waLink(MSG[c.id])}" target="_blank" rel="noopener noreferrer">Solicitar orçamento</a>
        <a class="link-arrow" href="#trabalhos">Ver trabalhos</a>
      </div>
    </article>`).join("");
  return `
  <section class="alt band" id="produtos" aria-labelledby="h-prod">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">Produtos</p>
        <h2 class="h-section" id="h-prod">O que você pode encomendar</h2>
        <p class="lead">Escolha uma categoria e a conversa no WhatsApp já abre com o assunto definido.</p>
      </div>
      <div class="cat-grid">${items}</div>
    </div>
  </section>`;
}

function Portfolio() {
  const items = PORTFOLIO.map((p, i) => `
    <button class="port-item" data-lb="${i}" aria-label="Ampliar: ${esc(p.cap)}">
      ${Photo(p.key, p.art, p.cap, { ratio: p.ratio })}
      <span class="cap">${esc(p.cap)}</span>
    </button>`).join("");
  return `
  <section id="trabalhos" aria-labelledby="h-port">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">Trabalhos autorais</p>
        <h2 class="h-section" id="h-port">Acabamento, cor e cada detalhe.</h2>
        <p class="lead">Uma seleção de encomendas para você avaliar o estilo e escolher referências. Toque em uma imagem para ampliar.</p>
      </div>
      <div class="grid-port">${items}</div>
      <div class="port-foot">
        <span>Quer ver mais? As publicações recentes estão no Instagram.</span>
        <a class="btn btn-ghost btn-sm" href="${esc(CONFIG.instagramUrl)}" target="_blank" rel="noopener noreferrer">Ver no Instagram</a>
      </div>
    </div>
  </section>`;
}

function Personalization() {
  const cats = [["bolo personalizado", "Bolo personalizado"], ["bolo de aniversário ou comemoração", "Aniversário"], ["docinhos", "Docinhos"], ["mesa de doces ou evento", "Evento"]]
    .filter(([v]) => v !== "mesa de doces ou evento" || CONFIG.offerEvents)
    .map(([v, l], i) => `<button type="button" class="chip" data-cat="${esc(v)}" aria-pressed="${i === 0}">${esc(l)}</button>`).join("");
  return `
  <section class="alt band" id="personalizacao" aria-labelledby="h-pers">
    <div class="wrap pers-grid">
      <div>
        <p class="eyebrow">Personalização</p>
        <h2 class="h-section" id="h-pers" style="margin-top:14px">Seu bolo, do seu jeito.</h2>
        <p class="lead" style="margin-top:18px">Converse sobre o que você imagina. Disponibilidade, tamanhos e prazos são confirmados diretamente com o Juliano.</p>
        <ul class="checklist">
          <li><b>Ocasião</b><span>Aniversário, encontro, celebração ou outra data especial.</span></li>
          <li><b>Tema</b><span>Cores, estilo e referências que você gostou.</span></li>
          <li><b>Convidados</b><span>Uma ideia da quantidade ajuda a pensar no tamanho.</span></li>
          <li><b>Detalhes</b><span>Sabores, decoração e o que for importante para você.</span></li>
        </ul>
      </div>
      <form class="builder" id="builder" aria-labelledby="h-build" novalidate>
        <h3 id="h-build">Monte sua mensagem</h3>
        <div class="field">
          <span class="lbl" id="lblCat">O que você procura?</span>
          <div class="chips" role="group" aria-labelledby="lblCat">${cats}</div>
        </div>
        <div class="two">
          <div class="field"><label for="occ">Ocasião</label><input id="occ" type="text" placeholder="Ex.: aniversário de 8 anos" autocomplete="off"></div>
          <div class="field"><label for="dt">Data</label><input id="dt" type="date"></div>
        </div>
        <div class="field"><label for="guests">Convidados (aproximado)</label><input id="guests" type="number" inputmode="numeric" min="1" placeholder="Opcional"></div>
        <div class="preview" aria-live="polite"><b>Mensagem que será enviada</b><span id="prevMsg"></span></div>
        <a class="btn btn-primary" id="buildSend" data-wa="custom" href="#" target="_blank" rel="noopener noreferrer">Abrir conversa no WhatsApp</a>
        <p class="fine">Nada é enviado por este formulário. Ele apenas prepara o texto e abre o WhatsApp para você enviar.</p>
      </form>
    </div>
  </section>`;
}

function Process() {
  const steps = [
    ["Escolha uma referência ou explique sua ideia", "Veja os trabalhos, separe uma foto de que gostou ou descreva o que imagina."],
    ["Consulte disponibilidade e orçamento", "Fale com o Juliano pelo WhatsApp informando a data e os detalhes principais."],
    ["Combine os detalhes e confirme", "A confirmação da encomenda é feita diretamente com a empresa."]
  ].map(([t, d], i) => `<li class="step"><span class="n">${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join("");
  return `
  <section id="como-funciona" aria-labelledby="h-steps">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">Como encomendar</p>
        <h2 class="h-section" id="h-steps">Três passos, sem complicação.</h2>
      </div>
      <ol class="steps">${steps}</ol>
    </div>
  </section>`;
}

function Trust() {
  const quotes = CONFIG.testimonials.length
    ? `<div class="quotes">${CONFIG.testimonials.map(t => `<blockquote><p>${esc(t.texto)}</p><cite>${esc(t.autor)}</cite></blockquote>`).join("")}</div>`
    : `<div class="pillars">
        <div class="pillar"><b>Conversa direta</b><span>Você fala com quem faz o seu bolo, sem intermediários.</span></div>
        <div class="pillar"><b>Pensado para a sua ocasião</b><span>Cada encomenda parte do tema e dos detalhes que você escolher.</span></div>
        <div class="pillar"><b>Trabalho artesanal</b><span>Acabamento e decoração feitos com atenção a cada detalhe.</span></div>
        <p><a class="link-arrow" href="${esc(CONFIG.instagramUrl)}" target="_blank" rel="noopener noreferrer">Ver feedbacks de clientes no Instagram</a></p>
      </div>`;
  return `
  <section class="alt band trust" aria-labelledby="h-trust">
    <div class="wrap trust-grid">
      ${Photo("trust", "round", "Caixa com docinhos variados")}
      <div>
        <p class="eyebrow">${CONFIG.testimonials.length ? "Quem já encomendou" : "Nossa proposta"}</p>
        <h2 class="h-section" id="h-trust" style="margin-top:14px">Cada encomenda começa com uma conversa.</h2>
        ${quotes}
      </div>
    </div>
  </section>`;
}

function Faq() {
  const items = FAQ.map(f => `<details><summary>${esc(f.q)}</summary><div class="ans">${esc(f.a)}</div></details>`).join("");
  return `
  <section id="duvidas" aria-labelledby="h-faq">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">Dúvidas frequentes</p>
        <h2 class="h-section" id="h-faq">Antes de chamar.</h2>
      </div>
      <div class="faq">${items}</div>
    </div>
  </section>`;
}

function FinalCta() {
  return `
  <section class="final band" aria-labelledby="h-final">
    <div class="wrap final-grid">
      <div>
        <p class="eyebrow">Encomende</p>
        <h2 class="display" id="h-final">Seu próximo momento especial começa aqui.</h2>
        <p class="lead">Conte sua ideia para o Juliano e descubra as possibilidades para sua comemoração.</p>
        <div class="final-actions">
          <a class="btn btn-light" data-wa="final" href="${waLink(MSG.final)}" target="_blank" rel="noopener noreferrer">Solicitar orçamento</a>
        </div>
        <div class="final-links">
          <a href="#trabalhos">Voltar aos trabalhos</a>
          <a href="${esc(CONFIG.instagramUrl)}" target="_blank" rel="noopener noreferrer">Acompanhar no Instagram</a>
          <button type="button" data-share>Indicar para um amigo</button>
        </div>
      </div>
      ${Photo("final", "tall", "Bolo de dois andares com borboletas e flores")}
    </div>
  </section>`;
}

function Footer() {
  const wa = numberPending() ? "WhatsApp: número a configurar" : "WhatsApp " + CONFIG.whatsappDisplay;
  return `
  <footer class="band">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <a class="brand" href="#topo"><img class="logo" src="${esc(CONFIG.logo)}" alt="" width="56" height="56"><span class="bt"><b>Juliano</b><i>Bolos e Doces</i></span></a>
          <p style="margin-top:14px;color:var(--ink-2);max-width:36ch">Sua vida mais doce por nossa conta. Bolos e doces personalizados, sob encomenda.</p>
        </div>
        <div>
          <h4>Contato</h4>
          <p><a data-wa="principal" href="${waLink(MSG.principal)}" target="_blank" rel="noopener noreferrer">${wa}</a></p>
          <p><a href="${esc(CONFIG.instagramUrl)}" target="_blank" rel="noopener noreferrer">@${esc(CONFIG.instagramUser)}</a></p>
        </div>
        <div>
          <h4>Onde estamos</h4>
          <p>${esc(CONFIG.city)}</p>
          <p style="margin-top:8px"><button type="button" class="link-arrow" data-share style="background:none;border:0;padding:0 0 2px;font:600 15.5px var(--font-body);color:var(--ink);cursor:pointer">Compartilhar este site</button></p>
        </div>
      </div>
      <p class="small">Endereço, horários e demais informações comerciais serão incluídos quando confirmados pelo proprietário. Valores, prazos e disponibilidade são combinados diretamente com a empresa.</p>
    </div>
  </footer>`;
}

function WaFloat() {
  return `<a class="wa-float" data-wa="flutuante" href="${waLink(MSG.flutuante)}" target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp">${WA_ICON}<span class="wa-label">WhatsApp</span></a>`;
}

/* =====================================================================
   Montagem e interações
   ===================================================================== */
function mount() {
  $("#app").innerHTML = Header() + `<main>` + Hero() + Categories() + Portfolio() + Personalization() + Process() + Trust() + Faq() + FinalCta() + `</main>` + Footer() + WaFloat();
  $("#demoStrip").hidden = !CONFIG.demo;
  initMenu(); initBuilder(); initLightbox(); initShare(); initWhatsApp();
}

let toastTimer;
function toast(msg, ms = 3200) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), ms);
}

/* WhatsApp: enquanto o número não estiver configurado, mostra a mensagem pronta */
function initWhatsApp() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-wa]");
    if (!a || !numberPending()) return;
    e.preventDefault();
    let msg = "";
    try { msg = decodeURIComponent(new URL(a.href).searchParams.get("text") || ""); } catch (_) {}
    toast("Demonstração: o número do WhatsApp ainda será configurado. Mensagem preparada: " + msg, 7000);
  });
}

function initMenu() {
  const btn = $("#menuBtn"), nav = $("#mobileNav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  $$("#mobileNav a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }));
}

/* Conversão assistida: monta a mensagem de acordo com as escolhas */
function initBuilder() {
  const occ = $("#occ"), dt = $("#dt"), guests = $("#guests"), prev = $("#prevMsg"), send = $("#buildSend");
  let cat = $(".chip[aria-pressed='true']").dataset.cat;
  const fmtDate = (v) => { if (!v) return ""; const [y, m, d] = v.split("-"); return `${d}/${m}/${y}`; };
  const build = () => {
    const parts = [`Olá! Gostaria de fazer uma encomenda de ${cat}.`];
    if (occ.value.trim()) parts.push(`A ocasião é ${occ.value.trim()}.`);
    if (dt.value) parts.push(`A data é ${fmtDate(dt.value)}.`);
    if (guests.value) parts.push(`Serão cerca de ${guests.value} convidados.`);
    parts.push("Gostaria de receber informações sobre disponibilidade e valores.");
    const msg = parts.join(" ");
    prev.textContent = msg;
    send.href = waLink(msg);
  };
  $$(".chip").forEach(c => c.addEventListener("click", () => {
    $$(".chip").forEach(x => x.setAttribute("aria-pressed", "false"));
    c.setAttribute("aria-pressed", "true"); cat = c.dataset.cat; build();
  }));
  [occ, dt, guests].forEach(el => el.addEventListener("input", build));
  $("#builder").addEventListener("submit", (e) => e.preventDefault());
  build();
}

/* Lightbox acessível */
function initLightbox() {
  const lb = $("#lb"); let idx = 0, opener = null;
  const render = () => {
    const p = PORTFOLIO[idx];
    lb.innerHTML = `
      <div class="lb-box">
        ${Photo(p.key, p.art, p.cap, { ratio: p.ratio })}
        <div class="lb-cap">
          <span>${esc(p.cap)} · ${idx + 1} de ${PORTFOLIO.length}</span>
          <div class="lb-nav">
            <button class="lb-btn" data-lb-prev aria-label="Anterior">←</button>
            <button class="lb-btn" data-lb-next aria-label="Próximo">→</button>
            <button class="lb-btn" data-lb-close>Fechar</button>
          </div>
        </div>
        <a class="btn btn-light" data-wa="bolos" href="${waLink(MSG.bolos)}" target="_blank" rel="noopener noreferrer">Quero algo assim</a>
      </div>`;
  };
  const open = (i, from) => { idx = i; opener = from; render(); lb.classList.add("open"); $("[data-lb-close]", lb).focus(); };
  const close = () => { lb.classList.remove("open"); if (opener) opener.focus(); };
  const step = (d) => { idx = (idx + d + PORTFOLIO.length) % PORTFOLIO.length; render(); $("[data-lb-next]", lb).focus(); };
  $$("[data-lb]").forEach(b => b.addEventListener("click", () => open(+b.dataset.lb, b)));
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.closest("[data-lb-close]")) close();
    else if (e.target.closest("[data-lb-prev]")) step(-1);
    else if (e.target.closest("[data-lb-next]")) step(1);
  });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
    if (e.key === "Tab") {
      const f = $$("button, a[href]", lb); if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

/* Compartilhar: Web Share quando suportado, senão copia o link */
function initShare() {
  const title = "Juliano Bolos e Doces";
  const text = "Bolos personalizados e docinhos para festas em Jaguariaíva, PR.";
  const flash = (btn) => {
    if (!btn) return;
    const old = btn.textContent; btn.textContent = "Link copiado";
    setTimeout(() => { btn.textContent = old; }, 2000);
  };
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-share]");
    if (!btn) return;
    const url = pageUrl();
    if (navigator.share) {
      try { await navigator.share({ title, text, url }); return; }
      catch (err) { if (err && err.name === "AbortError") return; }
    }
    try { await navigator.clipboard.writeText(url); flash(btn); toast("Link copiado. Agora é só enviar para quem você quiser."); }
    catch (_) { toast("Copie o link do site: " + url, 6000); }
  });
}

mount();

}
