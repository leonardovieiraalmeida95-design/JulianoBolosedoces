"use client";

import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react";

import { ArrowDown, Heart, ChefHat, BookOpen, HandHeart, CakeSlice } from "lucide-react";

const image = (name: string) => `/JulianoBolosedoces/img/${name}`;
const chapters = [
  { date: "AS RAÍZES", title: "O amor pela cozinha começou em família", text: "Minha mãe sempre trabalhou com a cozinha. Cresci vendo o cuidado e a dedicação dela e aprendi a valorizar esse carinho em cada receita.", photo: "bolo-flores-rosas.webp", alt: "Bolo artesanal com acabamento delicado e flores rosas", caption: "Carinho que vem de família" },
  { date: "1º DE ABRIL DE 2024", title: "Um bolo de aniversário abriu um novo caminho", text: "A pedido de uma amiga, ajudei a confeitar o bolo de aniversário da filha dela. Aquele gesto despertou minha vontade de aprender e marcou o início da minha trajetória na confeitaria.", photo: "bolo-lacos.webp", alt: "Bolo de aniversário branco com laços vermelhos", caption: "Um gesto simples deu início ao sonho" },
  { date: "MAIS DE DOIS ANOS DE APRENDIZADO", title: "Um sonho construído entre dois trabalhos", text: "Comecei um curso de Confeitaria Profissional e passei mais de dois anos conciliando a confeitaria com o trabalho em um restaurante. Foram dias intensos de prática e aprendizado que me ajudaram a crescer.", photo: "doces-sortidos.webp", alt: "Docinhos artesanais organizados e finalizados um a um", caption: "Dedicação em cada detalhe" },
  { date: "18 DE OUTUBRO DE 2026", title: "A coragem de me dedicar ao que amo", text: "Depois de muito trabalho e aprendizado, deixei meu outro emprego para me dedicar ainda mais à confeitaria. Foi um passo importante para fazer esse sonho crescer.", photo: "bolo-dois-andares.webp", alt: "Bolo de dois andares com flores brancas e rosas", caption: "A coragem de seguir o próprio sonho" },
  { date: "O PRÓXIMO CAPÍTULO", title: "Agora meu sonho faz parte da sua história", text: "Cada encomenda traz um novo desafio e uma nova oportunidade de aprender. Continuo sonhando e me dedicando para que cada bolo e cada doce façam parte de uma lembrança especial.", photo: "bolo-casamento-ambiente.webp", alt: "Bolo com flores brancas na mesa de uma celebração", caption: "Uma história que continua com você" },
];

const chapterIcons = [Heart, CakeSlice, BookOpen, HandHeart, ChefHat];

function Words({ text, opening = false }: { text: string; opening?: boolean }) {
  const words = text.split(" ");
  return <span className={opening ? "opening-words" : "chapter-words"}>{words.map((word, i) => <Fragment key={i}><span className="story-word" style={{ "--word-index": i } as CSSProperties}>{word}</span>{i < words.length - 1 ? " " : null}</Fragment>)}</span>;
}

export default function StoryOpening() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const section = root.current;
    if (!section || !('IntersectionObserver' in window)) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const panels = Array.from(section.querySelectorAll<HTMLElement>('[data-chapter]'));
    const visualPanel = section.querySelector<HTMLElement>('.journey-visual');
    function update() {
      frame = 0;
      let current = 0;
      const mobile = window.matchMedia('(max-width: 700px)').matches;
      const visualHeight = mobile ? visualPanel?.getBoundingClientRect().height || 0 : 0;
      const readingHeight = innerHeight - visualHeight;
      panels.forEach((panel, index) => {
        const rect = panel.getBoundingClientRect();
        if (rect.top < visualHeight + readingHeight * .58) current = index;
        const progress = Math.max(0, Math.min(1, (readingHeight * .86 - (rect.top - visualHeight)) / (readingHeight * .53)));
        panel.querySelectorAll<HTMLElement>('.story-word').forEach((word, i, words) => {
          const reveal = motion.matches ? 1 : Math.max(0, Math.min(1, progress * 2.1 - i / words.length));
          word.style.opacity = String(.2 + reveal * .8);
          word.style.transform = `translateY(${(1 - reveal) * 8}px)`;
        });
      });
      setActive(current);
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    motion.addEventListener('change', onScroll);
    update();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); motion.removeEventListener('change', onScroll); cancelAnimationFrame(frame); };
  }, []);

  const visual = <aside className="journey-visual" aria-label="Criações que acompanham essa história"><div className="journey-images">{chapters.map((chapter,i)=><img key={chapter.photo} src={image(chapter.photo)} alt={chapter.alt} className={active===i?'chapter-image is-active':'chapter-image'} aria-hidden={active!==i} width="900" height="1100" loading="lazy"/>)}</div><div className="journey-caption"><span>{String(active+1).padStart(2,'0')} / 05</span><p>{chapters[active].caption}</p></div><nav className="chapter-dots" aria-label="Capítulos da história">{chapters.map((chapter,i)=><a key={chapter.date} href={`#capitulo-${i+1}`} aria-label={`Capítulo ${i+1}: ${chapter.date}`} aria-current={active===i?'step':undefined}><span/></a>)}</nav></aside>;

  return <div ref={root} className="story-opening" id="inicio">
    <section className="opening-scene" aria-labelledby="opening-title">
      <img className="opening-image" src={image('hero-editorial.webp')} alt="Bolo do Juliano com flores rosas e acabamento artesanal" width="1536" height="1024" fetchPriority="high"/>
      <div className="opening-overlay"/>
      <div className="opening-content"><p className="eyebrow">JULIANO BOLOS E DOCES · NOSSA HISTÓRIA</p><h1 id="opening-title"><Words opening text="Tudo começou com um pedido de ajuda"/></h1><p className="opening-description">Eu só ia ajudar uma amiga a confeitar um bolo, sem imaginar que aquele momento daria início à minha história na confeitaria.</p><a className="opening-scroll" href="#historia"><span>Role para conhecer minha história</span><ArrowDown size={20} strokeWidth={1.5} aria-hidden="true"/></a></div>
      <div className="opening-foot"><span>JAGUARIAÍVA, PARANÁ</span><span>UM BOLO QUE DEU INÍCIO A UM SONHO</span><span>DESDE 2024</span></div>
    </section>
    <section className="story-journey" id="historia" aria-label="A história do Juliano em cinco capítulos">
      {visual}
      <div className="journey-copy"><div className="journey-label eyebrow">A HISTÓRIA POR TRÁS DO SABOR</div>{chapters.map((chapter, i) => <article className="journey-chapter" data-chapter={i} id={`capitulo-${i+1}`} key={chapter.date} aria-labelledby={`chapter-title-${i}`}><p className="chapter-date"><span>{String(i+1).padStart(2,'0')}</span><span className="chapter-theme-icon">{(() => { const Icon = chapterIcons[i]; return <Icon size={17} strokeWidth={1.5} aria-hidden="true"/>; })()}</span>{chapter.date}</p><h2 id={`chapter-title-${i}`}><Words text={chapter.title}/></h2><p className="chapter-text">{chapter.text}</p><div className="chapter-mobile-photo"><img src={image(chapter.photo)} alt={chapter.alt} loading="lazy" width="700" height="850"/><p>{chapter.caption}</p></div>{i < chapters.length-1 && <a className="chapter-next" href={`#capitulo-${i+2}`}>O próximo passo <ArrowDown size={20} strokeWidth={1.5} aria-hidden="true"/></a>}</article>)}</div>
    </section>
    <section className="story-invitation"><p className="eyebrow">E ESSA HISTÓRIA ESTÁ SÓ COMEÇANDO</p><h2>Quero fazer parte <em>da sua celebração</em></h2><p>Conheça os bolos e doces que preparo com o mesmo carinho que deu início a essa história.</p><a className="button button-light" href="#vitrine">Descubra os bolos e doces <ArrowDown size={20} strokeWidth={1.5} aria-hidden="true"/></a><span className="invitation-signature">Juliano</span></section>
  </div>;
}
