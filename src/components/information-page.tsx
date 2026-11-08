import type {ReactNode} from "react";
import {ArrowLeft, CakeSlice} from "lucide-react";
import {localPath,whatsappLink} from "@/site-config";
export default function InformationPage({title,children}:{title:string;children:ReactNode}){
 return <main id="conteudo" className="information-page"><header><a className="info-brand" href={localPath('/')}><CakeSlice size={24} aria-hidden="true"/>Juliano Bolos e Doces</a><a href={localPath('/')}><ArrowLeft size={17} aria-hidden="true"/> Voltar ao site</a></header><article><p className="eyebrow">INFORMAÇÕES PARA VOCÊ · ATUALIZADO EM 8 DE NOVEMBRO DE 2026</p><h1>{title}</h1>{children}</article><footer><a href={localPath('/privacidade/')}>Privacidade e cookies</a><a href={localPath('/termos/')}>Condições de encomenda</a><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Falar com o Juliano</a></footer></main>;
}
