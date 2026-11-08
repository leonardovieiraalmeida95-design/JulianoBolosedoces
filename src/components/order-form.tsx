"use client";
import {useEffect,useRef,useState,type FormEvent} from 'react';
import {ArrowUpRight,CheckCircle2,LoaderCircle} from 'lucide-react';
import {localPath,whatsappLink} from '@/site-config';
type Field='name'|'date'|'people'|'idea';
function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export default function OrderForm(){
 const [ready,setReady]=useState(false),[busy,setBusy]=useState(false),[link,setLink]=useState(''),[errors,setErrors]=useState<Partial<Record<Field,string>>>({});
 const result=useRef<HTMLDivElement>(null),form=useRef<HTMLFormElement>(null);
 useEffect(()=>setReady(true),[]);
 useEffect(()=>{if(link)result.current?.focus();},[link]);
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault(); if(busy)return;
  const data=new FormData(event.currentTarget),name=String(data.get('name')||'').trim(),date=String(data.get('date')||''),people=String(data.get('people')||''),idea=String(data.get('idea')||'').trim();
  const next:Partial<Record<Field,string>>={};
  if(name.length<2||name.length>100)next.name='Informe seu nome com pelo menos dois caracteres.';
  if(date&&(!/^\d{4}-\d{2}-\d{2}$/.test(date)||Number.isNaN(Date.parse(date))||date<today()))next.date='Escolha uma data de hoje em diante ou deixe o campo em branco.';
  if(people&&(!Number.isInteger(Number(people))||Number(people)<1||Number(people)>10000))next.people='Informe uma quantidade inteira entre 1 e 10.000 pessoas.';
  if(idea.length>1500)next.idea='Resuma sua ideia em até 1.500 caracteres.';
  setErrors(next);setLink('');
  if(Object.keys(next).length){form.current?.querySelector<HTMLInputElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();return;}
  setBusy(true);
  try{
   const text=`Olá, Juliano! Sou ${name}. Gostaria de um orçamento.\nOcasião: ${data.get('occasion')}\nData: ${date?date.split('-').reverse().join('/'):'a combinar'}\nQuantidade de pessoas: ${people||'a definir'}\nMinha ideia: ${idea||'Gostaria de conhecer as opções.'}`;
   setLink(whatsappLink(text));
  }catch{setErrors({idea:'Não foi possível preparar a mensagem. Tente novamente ou use o contato direto.'});}finally{setBusy(false);}
 }
 const error=(field:Field)=>errors[field]?<span className="field-error" id={`error-${field}`}>{errors[field]}</span>:null;
 return <form ref={form} className="order-form" noValidate onSubmit={submit} onInput={()=>{if(link)setLink('');}} aria-busy={busy}>
  <p className="form-intro">Sua ideia fica neste navegador até você escolher abrir a conversa no WhatsApp.</p>
  {Object.keys(errors).length>0&&<p className="form-error" role="alert">Confira os campos indicados para preparar sua mensagem.</p>}
  <label><span id="order-name-label">Como você se chama?</span><input name="name" aria-labelledby="order-name-label" required autoComplete="given-name" placeholder="Seu nome" maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name?'error-name':undefined}/>{error('name')}</label>
  <div className="form-row"><label>O que vamos celebrar?<select name="occasion" defaultValue="Aniversário"><option>Aniversário</option><option>Casamento</option><option>Mesversário</option><option>Outra comemoração</option><option>Um dia especial</option></select></label><label><span id="order-date-label">Qual é a data da comemoração?</span><input type="date" name="date" aria-labelledby="order-date-label" min={ready?today():undefined} aria-invalid={!!errors.date} aria-describedby={errors.date?'error-date':undefined}/>{error('date')}</label></div>
  <label><span id="order-people-label">Para quantas pessoas?</span><input type="number" name="people" aria-labelledby="order-people-label" inputMode="numeric" min="1" max="10000" step="1" placeholder="Uma estimativa já ajuda" aria-invalid={!!errors.people} aria-describedby={errors.people?'error-people':undefined}/>{error('people')}</label>
  <label><span id="order-idea-label">Como você imagina a sua encomenda?</span><textarea name="idea" aria-labelledby="order-idea-label" rows={3} maxLength={1500} placeholder="Sabores, tema, cores, bolos ou docinhos…" aria-invalid={!!errors.idea} aria-describedby={errors.idea?'error-idea form-privacy':'form-privacy'}/>{error('idea')}</label>
  <p className="form-note" id="form-privacy">Evite incluir documentos ou dados sensíveis. Consulte nossa <a href={localPath('/privacidade/')}>política de privacidade</a>. O orçamento e a encomenda serão confirmados na conversa.</p>
  <button type="submit" disabled={!ready||busy} className="button button-light">{busy?<>Preparando mensagem <LoaderCircle size={19} aria-hidden="true"/></>:<>Preparar mensagem <ArrowUpRight size={19} aria-hidden="true"/></>}</button>
  <noscript><p className="form-note">Para preparar a mensagem, ative o JavaScript ou <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">converse diretamente pelo WhatsApp</a>.</p></noscript>
  {link&&<div className="order-result" tabIndex={-1} ref={result} role="status"><CheckCircle2 size={25} aria-hidden="true"/><h3>Sua mensagem está pronta</h3><p>Ainda não enviamos uma consulta. Abra o WhatsApp, confira a mensagem e escolha se deseja enviá-la.</p><a className="button button-light" href={link} target="_blank" rel="noopener noreferrer">Abrir conversa no WhatsApp <ArrowUpRight size={19} aria-hidden="true"/></a><a className="order-help" href={localPath('/obrigado/')}>Entenda o próximo passo da encomenda</a></div>}
 </form>;
}
