"use client";
import {useEffect,useRef,useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {CakeSlice,Pause,Play} from 'lucide-react';
import {localPath} from '@/site-config';
gsap.registerPlugin(ScrollTrigger);
export default function SiteMotion({revision}:{revision:string}){
 const intro=useRef<HTMLDivElement>(null),played=useRef(false),[paused,setPaused]=useState(false),[reduce,setReduce]=useState(false);
 useEffect(()=>{const m=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduce(m.matches);update();m.addEventListener('change',update);return()=>m.removeEventListener('change',update);},[]);
 useEffect(()=>{
  const disabled=paused||reduce;
  document.documentElement.classList.toggle('motion-paused',disabled);
  window.dispatchEvent(new Event('site-motion-change'));
  const media=gsap.matchMedia();let timeout:ReturnType<typeof setTimeout>|undefined;let alive=true;
  const close=()=>{if(intro.current)intro.current.hidden=true;if(timeout)clearTimeout(timeout);};
  const events=new AbortController();
  if(disabled){close();return()=>{events.abort();};}
  media.add({desktop:'(min-width: 701px) and (prefers-reduced-motion: no-preference)',mobile:'(max-width: 700px) and (prefers-reduced-motion: no-preference)'},context=>{
   const mobile=Boolean(context.conditions?.mobile);
   const first=!played.current&&scrollY<24&&!location.hash;
   played.current=true;
   const entrance=gsap.timeline({defaults:{ease:'power3.out'}});
   if(first&&intro.current){
    intro.current.hidden=false;
    entrance.fromTo('.intro-emblem',{opacity:0,y:8},{opacity:1,y:0,duration:.35},0)
      .fromTo('.intro-line i',{scaleX:0},{scaleX:1,duration:.65,ease:'power2.inOut'},.05)
      .to(intro.current,{yPercent:-100,duration:.55,ease:'power3.inOut',onComplete:close},.65);
    timeout=setTimeout(()=>{entrance.progress(1);close();},2300);
   }
   const start=first ? .88 : 0;
   entrance.from('.opening-words .story-word',{opacity:0,y:mobile?14:24,stagger:.055,duration:.7,clearProps:'opacity,transform'},start)
    .from('.opening-description,.opening-scroll',{opacity:0,y:14,stagger:.1,duration:.65,clearProps:'opacity,transform'},start+.22);
   intro.current?.querySelector('button')?.addEventListener('click',()=>{entrance.progress(1);close();},{signal:events.signal});
   const targets=gsap.utils.toArray<HTMLElement>('.section-top,.work,.care-grid article,.order-copy,.order-form,.hero-copy,.story-invitation > *');
   targets.forEach(element=>{
    if(element.getBoundingClientRect().bottom<0)return;
    gsap.from(element,{opacity:0,y:mobile?18:30,duration:.8,ease:'power3.out',clearProps:'opacity,transform',scrollTrigger:{trigger:element,start:'top 94%',once:true}});
   });
   gsap.fromTo('.reading-progress',{scaleX:0},{scaleX:1,ease:'none',scrollTrigger:{trigger:document.documentElement,start:'top top',end:'bottom bottom',scrub:.15}});
   if(!mobile){
    gsap.fromTo('.opening-image',{scale:1.06,yPercent:-2},{yPercent:5,ease:'none',scrollTrigger:{trigger:'.opening-scene',start:'top top',end:'bottom top',scrub:1}});
    gsap.fromTo('.image-statement>img',{scale:1.1,yPercent:-4},{yPercent:4,ease:'none',scrollTrigger:{trigger:'.image-statement',start:'top bottom',end:'bottom top',scrub:1}});
   }
   document.documentElement.dataset.gsapMotion='ready';
  });
  let refreshFrame=0;
  const refresh=()=>{cancelAnimationFrame(refreshFrame);refreshFrame=requestAnimationFrame(()=>ScrollTrigger.refresh());};
  document.fonts.ready.then(()=>{if(alive)refresh();});
  window.addEventListener('load',refresh,{signal:events.signal});
  window.addEventListener('resize',refresh,{signal:events.signal});
  window.addEventListener('pageshow',refresh,{signal:events.signal});
  return()=>{alive=false;events.abort();media.revert();cancelAnimationFrame(refreshFrame);close();};
 },[paused,reduce,revision]);
 return <><div className="reading-progress" aria-hidden="true"/><div className="site-intro" ref={intro} hidden aria-label="Abertura Juliano Bolos e Doces"><div className="intro-emblem"><img src={localPath('/img/logo.png')} alt="Juliano Bolos e Doces" width="88" height="88"/><CakeSlice size={27} strokeWidth={1.2} aria-hidden="true"/><p>Feito de afeto</p><span>A nossa história vai começar</span><div className="intro-line" aria-hidden="true"><i/></div><button type="button">Pular abertura</button></div></div><button type="button" className="motion-control" disabled={reduce} aria-pressed={paused||reduce} onClick={()=>setPaused(!paused)}>{paused||reduce?<Play size={15} aria-hidden="true"/>:<Pause size={15} aria-hidden="true"/>}<span>{reduce?'Movimento reduzido':paused?'Ativar animações':'Pausar animações'}</span></button></>;
}
