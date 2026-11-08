import InformationPage from "@/components/information-page";
import {localPath} from "@/site-config";
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Página não encontrada',description:'O endereço não foi encontrado. Volte ao site de Juliano Bolos e Doces.',robots:{index:false,follow:true}};
export default function NotFound(){return <InformationPage title="Esse pedacinho não está aqui"><p className="eyebrow">ERRO 404 · PÁGINA NÃO ENCONTRADA</p><p className="info-lede">O endereço pode ter mudado ou o link pode estar incompleto. Você pode voltar ao início e continuar conhecendo nossa história.</p><a className="button button-dark" href={localPath('/')}>Voltar ao início</a></InformationPage>}
