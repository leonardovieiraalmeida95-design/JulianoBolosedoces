"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowDown, ArrowUp, ChevronLeft, ChevronRight, X, Menu, Plus, Minus, ZoomIn, CakeSlice, Candy, PartyPopper, Grid2X2, Heart, HandHeart, MessageCircle } from "lucide-react";
import StoryOpening from "@/components/story-opening";
const base = "/JulianoBolosedoces";
const asset = (file: string) => `${base}/img/${file}`;
const whatsapp = (text = "Olá, Juliano! Conheci seu site e gostaria de conversar sobre uma encomenda.") => `https://wa.me/5543996752935?text=${encodeURIComponent(text)}`;
const instagram = "https://www.instagram.com/juliano.bolos.e.doces/";
const works = [
  { file: "bolo-lacos.webp", title: "Laços e afeto", kind: "Bolos", detail: "Delicadeza para celebrar" },
  { file: "doces-sortidos.webp", title: "Docinhos para compartilhar", kind: "Doces", detail: "Sabores que completam a sua comemoração" },
  { file: "bolo-flores-rosas.webp", title: "Feito para florescer", kind: "Bolos", detail: "Texturas e flores delicadas" },
  { file: "bolo-casamento.webp", title: "Para o grande dia", kind: "Celebrações", detail: "Um toque especial no grande dia" },
  { file: "bolo-chocolate.webp", title: "Chocolate e morangos", kind: "Bolos", detail: "Uma combinação que abraça" },
  { file: "doces-frutas.webp", title: "Cor, sabor e carinho", kind: "Doces", detail: "Detalhes que completam a festa" },
  { file: "bolo-borboletas-azul.webp", title: "Do seu jeito", kind: "Celebrações", detail: "Cores e detalhes personalizados" },
  { file: "bolo-infantil.webp", title: "Imaginação em festa", kind: "Celebrações", detail: "Para as memórias da infância" },
  { file: "bolo-coracao-verde.webp", title: "Criado do seu jeito", kind: "Bolos", detail: "Personalidade em cada criação" },
  { file: "doces-coloridos.webp", title: "Alegria em cada docinho", kind: "Doces", detail: "Uma mesa cheia de cor" },
  { file: "bolo-morango.webp", title: "Sabor que vira lembrança", kind: "Bolos", detail: "Morangos em destaque" },
  { file: "bolo-dois-andares.webp", title: "Para celebrar o amor", kind: "Celebrações", detail: "Flores, cuidado e presença" },
  { file: "bolo-cerejas.webp", title: "Um clássico cheio de charme", kind: "Bolos", detail: "Laços, cerejas e corações" },
  { file: "bolo-mesversario.webp", title: "Cada mês, uma descoberta", kind: "Celebrações", detail: "Pequenas datas, grandes memórias" },
  { file: "bolo-cowgirl.webp", title: "Seu tema ganha vida", kind: "Celebrações", detail: "Uma criação para a sua festa" },
  { file: "bolo-lirios.webp", title: "Carinho em forma de bolo", kind: "Bolos", detail: "Flores e acabamento artesanal" },
  { file: "bolo-flores.webp", title: "Leveza em cada detalhe", kind: "Bolos", detail: "Uma celebração delicada" },
  { file: "bolo-borboletas-vermelho.webp", title: "Para alguém especial", kind: "Celebrações", detail: "Afeto que se transforma em presente" },
  { file: "bolo-flores-aniversario.webp", title: "Mais um ano de histórias", kind: "Bolos", detail: "Para soprar as velinhas" },
  { file: "bolo-rosa-infantil.webp", title: "Encanto em cada pedacinho", kind: "Celebrações", detail: "Uma festa com a sua personalidade" },
  { file: "bolo-red-velvet.webp", title: "Bonito por dentro também", kind: "Bolos", detail: "Camadas para saborear" },
  { file: "doces-uva.webp", title: "Uma festa de sabores", kind: "Doces", detail: "Feitos com atenção aos detalhes" },
  { file: "bolo-casamento-ambiente.webp", title: "Memórias à mesa", kind: "Celebrações", detail: "Um cenário para celebrar o amor" },
];
const Arrow = () => <ArrowUpRight size={19} strokeWidth={1.65} aria-hidden="true"/>;
const CategoryIcon = ({ category }: { category: string }) => { const Icon = category === "Bolos" ? CakeSlice : category === "Doces" ? Candy : category === "Celebrações" ? PartyPopper : Grid2X2; return <Icon size={17} strokeWidth={1.5} aria-hidden="true"/>; };
export default function Home() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [orderLink, setOrderLink] = useState("");
  const [order, setOrder] = useState({ name: "", occasion: "Aniversário", date: "", people: "", idea: "" });
  const shown = works.filter(w => filter === "Todos" || w.kind === filter);
  const visible = expanded ? shown : shown.slice(0, 6);
  useEffect(() => {
    if (selected !== null) { dialog.current?.showModal(); document.body.style.overflow = "hidden"; }
    else { dialog.current?.close(); document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = Array.from(document.querySelectorAll<HTMLElement>('.section-top, .work, .care-grid article, .order-copy, .order-form, .hero-copy, .story-invitation > *'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('has-entered'); observer.unobserve(entry.target); } });
    }, { threshold: .08, rootMargin: '0px 0px -35px 0px' });
    items.forEach((item, i) => {
      if (!item.classList.contains('has-entered')) {
        item.style.setProperty('--reveal-delay', item.classList.contains('work') ? String(i % 3 * 65) + 'ms' : '0ms');
        item.classList.add('scroll-reveal'); observer.observe(item);
      }
    });
    return () => observer.disconnect();
  }, [filter, expanded]);
  function closeImage() { setSelected(null); opener.current?.focus(); }
  function sendOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selectedDate = String(new FormData(event.currentTarget).get("date") || "");
    const date = selectedDate ? selectedDate.split("-").reverse().join("/") : "a combinar";
    const link = whatsapp(`Olá, Juliano! Sou ${order.name}. Gostaria de um orçamento.\nOcasião: ${order.occasion}\nData: ${date}\nQuantidade de pessoas: ${order.people || "a definir"}\nMinha ideia: ${order.idea || "Gostaria de conhecer as opções."}`);
    setOrderLink(link); window.open(link, "_blank", "noopener,noreferrer");
  }
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header"><a className="brand" href="#inicio" aria-label="Juliano Bolos e Doces, início"><img src={asset("logo.png")} alt="" width="50" height="50"/><span>Juliano<small>BOLOS E DOCES</small></span></a><nav className={menu ? "navigation is-open" : "navigation"} aria-label="Menu principal">{[["Nossa história", "historia"], ["Criações", "criacoes"], ["Como encomendar", "encomendas"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}<a className="nav-order" href="#encomendas" onClick={() => setMenu(false)}>Vamos celebrar <Arrow/></a></nav><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={menu ? "Fechar menu" : "Abrir menu"}>{menu ? <>Fechar <X size={17} aria-hidden="true"/></> : <>Menu <Menu size={17} aria-hidden="true"/></>}</button></header>
    <main id="conteudo">
      <StoryOpening/>
      <section className="hero" id="vitrine"><img className="hero-photo" src={asset("hero-editorial.webp")} alt="Bolo artesanal com delicadas camadas de chantilly e flores cor-de-rosa" loading="lazy" width="1536" height="1024"/><div className="hero-shade"/><div className="hero-copy"><p className="eyebrow">CONFEITARIA ARTESANAL · JAGUARIAÍVA, PR</p><h2 className="hero-title">Feito com afeto para <em>virar lembrança</em></h2><p>Bolos e doces feitos para tornar a sua celebração ainda mais especial.</p><a className="button button-dark" href="#criacoes">Conheça nossas criações <Arrow/></a></div><div className="hero-bottom"><span>FEITO À MÃO, PENSADO PARA VOCÊ</span><a href="#criacoes">Explore nossas criações <ArrowDown size={18} strokeWidth={1.5} aria-hidden="true"/></a><span>DESDE 2024</span></div></section>
      <section id="criacoes" className="creations section-pad"><div className="section-top"><div><p className="eyebrow">UM POUCO DO QUE SAI DA NOSSA COZINHA</p><h2>Sua celebração, <em>nossa inspiração</em></h2></div><p>Cada criação nasce de uma ideia e ganha os detalhes que tornam a sua comemoração única.</p></div><div className="filters" role="group" aria-label="Filtrar criações">{["Todos", "Bolos", "Doces", "Celebrações"].map(f => <button key={f} aria-pressed={filter === f} onClick={() => { setFilter(f); setExpanded(false); }}><CategoryIcon category={f}/>{f}<span>{String(f === "Todos" ? works.length : works.filter(w=>w.kind===f).length).padStart(2,"0")}</span></button>)}</div><div className="gallery">{visible.map((w,i) => <button className="work" key={w.file} onClick={e => { opener.current = e.currentTarget; setSelected(works.indexOf(w)); }} aria-label={`Ampliar foto: ${w.title}`}><div className="work-image"><img src={asset(w.file)} alt={`${w.title} — criação de Juliano Bolos e Doces`} loading="lazy" width="800" height="1000"/><span className="work-plus"><ZoomIn size={19} strokeWidth={1.5} aria-hidden="true"/></span></div><div className="work-info"><span><small>{w.kind.toUpperCase()}</small><h3>{w.title}</h3></span><span className="work-number">{String(i+1).padStart(2,"0")}</span></div></button>)}</div>{shown.length > 6 && <button className="more-button" onClick={() => setExpanded(!expanded)}>{expanded ? "Mostrar menos" : `Ver mais criações (${shown.length - 6})`} {expanded ? <Minus size={20} aria-hidden="true"/> : <Plus size={20} aria-hidden="true"/>}</button>}</section>
      <section className="image-statement"><img src={asset("doces-sortidos.webp")} alt="Fileiras de docinhos artesanais com acabamentos de chocolate e doce de leite" loading="lazy" width="960" height="1280"/><div><p className="eyebrow">O CARINHO MORA NOS DETALHES</p><h2>Pequenos doces para <em>grandes memórias</em></h2><a href={whatsapp("Olá, Juliano! Gostaria de conhecer as opções de docinhos para minha comemoração.")} className="button button-light" target="_blank" rel="noopener noreferrer">Consultar opções de docinhos <Arrow/></a></div></section>
      <section className="care section-pad"><p className="eyebrow">DO PRIMEIRO CONTATO AO PRIMEIRO PEDAÇO</p><h2>Carinho e cuidado <em>em cada detalhe</em></h2><div className="care-grid"><article><MessageCircle className="care-icon" size={29} strokeWidth={1.4} aria-hidden="true"/><span>01 / CONVERSA</span><h3>Tudo começa com a sua ideia</h3><p>Conte como será a comemoração e compartilhe suas ideias de sabores, cores e decoração.</p></article><article><HandHeart className="care-icon" size={29} strokeWidth={1.4} aria-hidden="true"/><span>02 / CUIDADO</span><h3>Os detalhes ganham forma</h3><p>Vamos combinar os sabores e o acabamento para criar algo que tenha a sua cara.</p></article><article><CakeSlice className="care-icon" size={29} strokeWidth={1.4} aria-hidden="true"/><span>03 / CELEBRAÇÃO</span><h3>Chega a hora de celebrar</h3><p>Converse com o Juliano para consultar a data e acertar os detalhes da sua encomenda.</p></article></div></section>
      <section className="order section-pad" id="encomendas"><div className="order-copy"><p className="eyebrow">VAMOS PLANEJAR ALGO ESPECIAL?</p><h2>Um doce capítulo <em>para a sua história</em></h2><p>Conte como você imagina a sua comemoração. O Juliano recebe sua ideia pelo WhatsApp e conversa com você sobre as opções.</p><a className="text-link" href={whatsapp()} target="_blank" rel="noopener noreferrer">Conversar diretamente com o Juliano <Arrow/></a><small>Jaguariaíva, Paraná. Encomendas conforme a disponibilidade da agenda.</small></div><form onSubmit={sendOrder} className="order-form"><label>Como você se chama?<input required autoComplete="given-name" name="name" placeholder="Seu nome" maxLength={100} value={order.name} onChange={e=>setOrder({...order,name:e.target.value})}/></label><div className="form-row"><label>O que vamos celebrar?<select value={order.occasion} onChange={e=>setOrder({...order,occasion:e.target.value})}><option>Aniversário</option><option>Casamento</option><option>Mesversário</option><option>Outra comemoração</option><option>Um dia especial</option></select></label><label>Qual é a data da comemoração?<input type="date" name="date" value={order.date} onChange={e=>setOrder({...order,date:e.target.value})}/></label></div><label>Para quantas pessoas?<input type="number" min="1" max="10000" placeholder="Uma estimativa já ajuda" value={order.people} onChange={e=>setOrder({...order,people:e.target.value})}/></label><label>Como você imagina a sua encomenda?<textarea rows={3} maxLength={1500} placeholder="Sabores, tema, cores, bolos ou docinhos…" value={order.idea} onChange={e=>setOrder({...order,idea:e.target.value})}/></label><button type="submit" className="button button-light">Conversar pelo WhatsApp <Arrow/></button><p className="form-note">Ao continuar, sua ideia será organizada em uma mensagem para você enviar pelo WhatsApp. A encomenda será confirmada na conversa.</p>{orderLink && <p role="status">Sua mensagem está pronta. <a className="text-link" href={orderLink} target="_blank" rel="noopener noreferrer">Abrir conversa no WhatsApp <Arrow/></a></p>}</form></section>
    </main><footer className="footer"><a className="footer-wordmark" href="#inicio">Juliano<span>BOLOS E DOCES</span></a><div className="footer-links"><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram <Arrow/></a><a href={whatsapp()} target="_blank" rel="noopener noreferrer">(43) 99675-2935 <Arrow/></a><span>Jaguariaíva, PR</span></div><div className="footer-bottom"><span>© 2026 Juliano Bolos e Doces</span><span>Feito de afeto, desde 2024.</span><a href="#inicio">Voltar ao topo <ArrowUp size={16} strokeWidth={1.5} aria-hidden="true"/></a></div></footer><a className="floating-contact" href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Juliano no WhatsApp"><MessageCircle size={23} strokeWidth={1.6} aria-hidden="true"/><span>Vamos conversar</span></a><dialog ref={dialog} className="lightbox" onCancel={closeImage} onClose={()=>setSelected(null)} onClick={e=>{if(e.target===e.currentTarget)closeImage();}}><button className="lightbox-close" onClick={closeImage} aria-label="Fechar foto">Fechar <X size={19} strokeWidth={1.5} aria-hidden="true"/></button>{selected !== null && <div className="lightbox-content"><img src={asset(works[selected].file)} alt={works[selected].title}/><div><p className="eyebrow">{works[selected].kind}</p><h2>{works[selected].title}</h2><p>{works[selected].detail}</p><a className="button button-light" href={whatsapp(`Olá, Juliano! Vi a criação “${works[selected].title}” no site e gostaria de conversar sobre uma encomenda inspirada nela.`)} target="_blank" rel="noopener noreferrer">Quero uma criação assim <Arrow/></a><div className="lightbox-arrows"><button onClick={()=>setSelected((selected-1+works.length)%works.length)} aria-label="Foto anterior"><ChevronLeft size={23} strokeWidth={1.5} aria-hidden="true"/></button><span>{selected+1} / {works.length}</span><button onClick={()=>setSelected((selected+1)%works.length)} aria-label="Próxima foto"><ChevronRight size={23} strokeWidth={1.5} aria-hidden="true"/></button></div></div></div>}</dialog>
  </>;
}
