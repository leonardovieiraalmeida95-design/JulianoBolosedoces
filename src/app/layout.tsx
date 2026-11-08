import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import {localPath,siteUrl} from '@/site-config';
import "./editorial.css";
import "./story.css";
import "./mobile-story.css";
import "./reading.css";
import "./assurance.css";
export const metadata:Metadata={
 metadataBase:new URL(`${siteUrl}/`),
 title:{default:"Juliano Bolos e Doces | Confeitaria em Jaguariaíva",template:"%s | Juliano Bolos e Doces"},
 description:"Bolos personalizados e docinhos sob encomenda em Jaguariaíva, PR. Conheça a história do Juliano e converse sobre a sua celebração pelo WhatsApp.",
 alternates:{canonical:`${siteUrl}/`},robots:{index:true,follow:true},referrer:'no-referrer',
 icons:{icon:[{url:localPath('/img/logo.png'),type:'image/png'}],apple:[{url:localPath('/img/apple-touch-icon.png'),sizes:'180x180',type:'image/png'}]},
 openGraph:{type:'website',locale:'pt_BR',url:`${siteUrl}/`,title:'Juliano Bolos e Doces',description:'Confeitaria artesanal em Jaguariaíva. Feito com afeto para virar lembrança.',images:[{url:`${siteUrl}/img/compartilhamento.png`,width:1200,height:630,alt:'Juliano Bolos e Doces — bolos e doces sob encomenda em Jaguariaíva'}]},
 twitter:{card:'summary_large_image',title:'Juliano Bolos e Doces',description:'Bolos e doces sob encomenda em Jaguariaíva, Paraná.',images:[`${siteUrl}/img/compartilhamento.png`]},
};
export const viewport:Viewport={themeColor:'#142743'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="pt-BR"><head>
 <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; media-src 'self'; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'; upgrade-insecure-requests"/>
 <link rel="stylesheet" href={localPath('/img/fonts/fonts.css')}/>
 </head><body>{children}</body></html>}
