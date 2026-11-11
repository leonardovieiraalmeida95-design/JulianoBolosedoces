import {business} from "@/site-config";

export default function BusinessIdentity(){
 return <section className="business-identity" aria-label="Identificação da empresa">
  <div><p className="business-label">CONHEÇA QUEM PREPARA SUA ENCOMENDA</p><p className="business-name">{business.tradeName}</p><p className="business-location">Confeitaria artesanal em Jaguariaíva, Paraná</p></div>
  <dl><div><dt>Responsável</dt><dd>{business.responsibleName}</dd></div><div><dt>CNPJ</dt><dd>{business.cnpj}</dd></div></dl>
 </section>;
}
