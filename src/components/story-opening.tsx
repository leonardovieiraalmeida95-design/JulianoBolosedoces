"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const image = (name: string) => `/JulianoBolosedoces/img/${name}`;
const chapters = [
  { date: "AS RAÍZES", title: "Antes de ser um sonho, já era amor de família.", text: "A cozinha sempre fez parte da minha vida. Minha mãe, uma cozinheira de mão cheia, me ensinou com o exemplo: fazer comida também é uma forma de cuidar de alguém.", photo: "bolo-flores-rosas.webp", alt: "Bolo artesanal com acabamento delicado e flores rosas", caption: "O carinho pela cozinha se transforma em cada criação." },
  { date: "01 DE ABRIL DE 2024", title: "Uma amiga pediu ajuda. A minha vida ganhou um novo caminho.", text: "Ela queria um bolo para o aniversário da filha. Eu ajudei a confeitar sem imaginar que aquele pedido simples despertaria a vontade de aprender cada vez mais. Era o começo de tudo.", photo: "bolo-lacos.webp", alt: "Bolo de aniversário branco com laços vermelhos", caption: "Criar para os momentos de alguém passou a fazer parte da minha história." },
  { date: "MAIS DE DOIS ANOS DE APRENDIZADO", title: "Entre dois trabalhos, eu construía um sonho.", text: "Investi em um curso de Confeitaria Profissional. Enquanto fazia bolos e doces, também trabalhava em um restaurante. Conciliar os dois nem sempre foi fácil. Cada experiência, cada noite de trabalho e cada encomenda me fizeram crescer.", photo: "doces-sortidos.webp", alt: "Docinhos artesanais organizados e finalizados um a um", caption: "Dedicação que aparece nos pequenos detalhes." },
  { date: "18 DE OUTUBRO DE 2026", title: "Chegou a hora de ter coragem. E escolher o meu sonho.", text: "Deixei meu outro emprego para me dedicar ainda mais à confeitaria. Não foi uma decisão de um dia para o outro. Foi fruto de trabalho, aprendizado e da vontade de fazer esse sonho crescer.", photo: "bolo-dois-andares.webp", alt: "Bolo de dois andares com flores brancas e rosas", caption: "Um novo passo, com o mesmo amor pelo que faço." },
  { date: "O PRÓXIMO CAPÍTULO", title: "Hoje, o meu sonho pode fazer parte da sua história.", text: "Ainda tenho muito para aprender e realizar. Mas cada bolo e cada doce já carregam dedicação, esforço e muito amor. O que começou com um pedido de ajuda agora faz parte de momentos que merecem ser lembrados.", photo: "bolo-casamento-ambiente.webp", alt: "Bolo com flores brancas na mesa de uma celebração", caption: "Essa história continua em cada nova celebração." },
];

function Words({ text, opening = false }: { text: string; opening?: boolean }) {
  return <span className={opening ? "opening-words" : "chapter-words"}>{text.split(" ").map((word, i) => <span className="story-word" key={i} style={{ "--word-index": i } as CSSProperties}>{word}{" "}</span>)}</span>;
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
      <div className="opening-content"><p className="eyebrow">JULIANO BOLOS E DOCES · NOSSA HISTÓRIA</p><h1 id="opening-title"><Words opening text="Tudo começou com um pedido de ajuda."/></h1><p className="opening-description">Eu só ia ajudar uma amiga a confeitar um bolo.<br/> Não imaginava que estava começando a viver um sonho.</p><a className="opening-scroll" href="#historia"><span>Role para conhecer minha história</span><span aria-hidden="true">↓</span></a></div>
      <div className="opening-foot"><span>JAGUARIAÍVA, PARANÁ</span><span>UM BOLO. UM COMEÇO. UMA HISTÓRIA.</span><span>DESDE 2024</span></div>
    </section>
    <section className="story-journey" id="historia" aria-label="A história do Juliano em cinco capítulos">
      {visual}
      <div className="journey-copy"><div className="journey-label eyebrow">A HISTÓRIA POR TRÁS DO SABOR</div>{chapters.map((chapter, i) => <article className="journey-chapter" data-chapter={i} id={`capitulo-${i+1}`} key={chapter.date} aria-labelledby={`chapter-title-${i}`}><p className="chapter-date"><span>{String(i+1).padStart(2,'0')}</span>{chapter.date}</p><h2 id={`chapter-title-${i}`}><Words text={chapter.title}/></h2><p className="chapter-text">{chapter.text}</p><div className="chapter-mobile-photo"><img src={image(chapter.photo)} alt={chapter.alt} loading="lazy" width="700" height="850"/><p>{chapter.caption}</p></div>{i < chapters.length-1 && <a className="chapter-next" href={`#capitulo-${i+2}`}>O próximo passo <span aria-hidden="true">↓</span></a>}</article>)}</div>
    </section>
    <section className="story-invitation"><p className="eyebrow">E ESSA HISTÓRIA ESTÁ SÓ COMEÇANDO</p><h2>O meu próximo capítulo<br/>pode ser <em>a sua celebração.</em></h2><p>Agora que você conhece um pouco de mim,<br/> conheça o carinho que sai da minha cozinha.</p><a className="button button-light" href="#vitrine">Descubra os bolos e doces <span aria-hidden="true">↓</span></a><span className="invitation-signature">Juliano</span></section>
  </div>;
}
