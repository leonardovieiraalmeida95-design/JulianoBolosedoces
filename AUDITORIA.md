# Revisão do site — Juliano Bolos e Doces

Data da revisão técnica: 8 de novembro de 2026. Identificação comercial atualizada em 10 de novembro de 2026. Escopo: site oficial autorizado, exportação estática Next.js no GitHub Pages, lista de 20 itens fornecida por Leonardo e animações GSAP.

Leonardo confirmou autorização para o site oficial e para as fotografias, inclusive as assinadas pelo fotógrafo. Informou que não há endereço comercial público. Em 10 de novembro, forneceu o nome fantasia Juliano Bolos e Doces, o nome Juliano Almeida de Miranda e o CNPJ 50.340.604/0001-55 para divulgação. Esses dados foram incluídos no rodapé e nas páginas informativas. O nome pessoal é apresentado como responsável, sem presumir razão social registrada. Os dígitos verificadores do CNPJ conferem; não foi realizada consulta à Receita Federal nem certificada a situação cadastral ou a titularidade. Nenhum endereço foi inventado. A revisão é técnica e editorial: não é parecer jurídico, teste de invasão ou certificação de conformidade e não garante ausência de reclamações/processos.

## Lista de referência

| Item | Resultado |
| --- | --- |
| 1. Página 404 | Página própria com navegação e contato; resposta HTTP 404 conferida no servidor local. |
| 2–3. Títulos e descrições | Metadados próprios para início, privacidade, condições, próximo passo e 404; canonical oficial nas páginas aplicáveis. |
| 4. Ação no topo | Cabeçalho mantém “Vamos celebrar”; contato WhatsApp permanece disponível. |
| 5. Favicon | PNG da marca e ícone Apple de 180 × 180 pixels. |
| 6. robots.txt | Arquivo estático gerado, com referência ao sitemap. No GitHub Pages de projeto ele fica no subdiretório: não controla o robots.txt da raiz do domínio. |
| 7. Sitemap | URLs oficiais de início, privacidade e condições. A página de próximo passo não entra no sitemap e recebe noindex. |
| 8. Compartilhamento | PNG original da composição da marca em 1200 × 630, aproximadamente 617 KiB, com Open Graph/Twitter. O cache da prévia no WhatsApp é controlado pelo serviço externo. |
| 9. Texto alternativo | Imagens verificadas; imagens decorativas usam alt vazio e botões de ícone têm nome acessível. |
| 10. Celular | Conferência de 320, 390, 768 e 1440 px nos trechos/páginas inspecionados. Não equivale a testar todos os aparelhos e navegadores físicos. |
| 11. WhatsApp fixo | Número comercial existente preservado: (43) 99675-2935. |
| 12. Carregamento | Abertura curta com GSAP, opção de pular e limite de 2,3 s. Pulada em links diretos a seções e com movimento reduzido. Não exige espera artificial para preparar mensagens. |
| 13. Erro no formulário | Erros acessíveis de nome vazio, data passada e quantidade inválida, com foco e aria-describedby. Dados só preparam a mensagem no navegador. |
| 14. Obrigado | Página /obrigado/ explica o próximo passo, sem afirmar recebimento de contato ou confirmação de encomenda. A mensagem preparada continua no estado da página anterior, sem PII na URL desta página. |
| 15. Privacidade | Página factual sobre formulário, atendimento, hospedagem, serviços externos e contato para solicitações. Nome fantasia, responsável e CNPJ fornecidos pelo proprietário disponíveis ao final da página. |
| 16. Condições | Consulta, personalização, ingredientes/alergênicos, conservação, confirmação, alterações e direitos, sem cláusula genérica de renúncia ou perda automática de valores. |
| 17. Cookies | Não há cookies próprios, Analytics, pixel ou armazenamento persistente. Aviso no rodapé/página; não foi criado um banner de consentimento para rastreadores inexistentes. |
| 18. Analytics | Não instalado: não é uma exigência geral e adicionaria tratamento de dados. Uma futura ativação depende de finalidade, identificação e revisão prévias. |
| 19. Contato e identificação | WhatsApp e cidade presentes. Sem endereço público, conforme orientação recebida. Nome fantasia, responsável e CNPJ fornecidos foram publicados. Endereço e demais informações aplicáveis à contratação ainda precisam de confirmação. |
| 20. Imagens e fontes | Fotos WebP preservadas e carregadas sob demanda; hero com prioridade. Fontes WOFF2 locais Latin/Latin Extended, seis arquivos somando aproximadamente 366 KiB, com licenças OFL. |

## Animações e acessibilidade

- GSAP e ScrollTrigger servidos junto com o site, sem CDN externo: abertura da marca, entrada sequencial do texto, revelações da vitrine e dos cartões, paralaxe discreta das fotos no computador e indicador de leitura.
- O logo não recebe rotação nem ampliação animada. A história continua sendo a primeira parte do site e mantém a troca de imagens por capítulo, inclusive no celular.
- Rolagem nativa, sem bloqueio, sequestro da rolagem ou dependência de um vídeo. Botão “Pausar animações” encerra efeitos e mantém a leitura; a preferência do sistema por movimento reduzido também é respeitada. A escolha não é persistida entre visitas.
- Limpeza dos contextos GSAP/ScrollTrigger ao remontar, filtrar e mudar de tamanho; atualização após o carregamento das fontes.
- Sem JavaScript, o conteúdo principal permanece visível, há navegação alternativa e o formulário desativado oferece contato direto. Não se envia um formulário HTML com dados pessoais por GET.

## Segurança e privacidade verificadas

- Recursos da página, fontes e fotografias são locais. WhatsApp/Instagram só são abertos por ação do visitante, sem incorporações automáticas.
- O formulário não chama um servidor de dados próprio nem usa localStorage/sessionStorage. Após validação, gera uma URL de WhatsApp com texto codificado. O visitante recebe uma explicação e escolhe abrir a conversa; não há envio automático, checkout ou reserva de data.
- Preparar a mensagem não conclui uma compra. Confirmação, valores, ingredientes, restrições e recebimento precisam ser combinados no atendimento real.
- CSP em meta limita origens de recursos, bloqueia frames/objetos e submissões HTML tradicionais. Scripts e estilos inline continuam permitidos por compatibilidade com Next.js exportado/GSAP: isso não elimina todos os riscos de injeção. GitHub Pages não permite configurar todos os cabeçalhos HTTP de uma hospedagem própria; não se declara proteção inexistente de cabeçalhos.
- Referrer no-referrer e noopener/noreferrer nos links externos em nova aba. Não há chaves de serviço, autenticação, banco de dados ou pagamento no fluxo implementado.
- Consulta pontual `npm audit --json`: zero avisos conhecidos nas dependências instaladas nesta data; não é garantia futura ou teste de invasão. Busca limitada por padrões comuns de chaves privadas e segredos em src/scripts/.github sem correspondências. Histórico Git e infraestrutura de terceiros não foram auditados.
- O GitHub pode tratar dados técnicos de visitantes: ver [GitHub Pages — coleta de dados](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection) e [declaração de privacidade](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Não se promete anonimato.

## Verificação e manutenção

Compilação de produção e TypeScript aprovados. Sete verificações em `scripts/audit-site.test.mjs`: metadados, ausência de carregamento automático externo, arquivos/links/fontes e alt, compartilhamento/robots/sitemap, limites do formulário, limpeza/movimento reduzido e respostas HTTP incluindo 404. O conjunto estrutural é executado na publicação; a etapa HTTP exige AUDIT_BASE_URL.

No navegador: validação vazia e inválida, preparação correta de data/quantidade, pausa/retomada, abertura limitada, páginas informativas, filtros/ampliação da galeria e inspeção responsiva. A revisão não inclui auditoria interna do WhatsApp/Instagram, Lighthouse completo, leitor de tela real ou dispositivos físicos de todos os modelos.

## Pendências que exigem o responsável

1. **Dados complementares do fornecedor:** confirmar razão social registrada, situação cadastral e os dados de endereço/contato exigíveis na contratação. Nome fantasia, responsável e CNPJ fornecidos já foram publicados. Não divulgar endereço residencial sem autorização, mas a ausência de loja aberta ao público não dispensa automaticamente obrigações legais. O endereço permanece sem divulgação, conforme a informação recebida. O [Decreto 7.962/2013](https://legislacao.presidencia.gov.br/atos/?ano=2013&ato=61ccXTE5ENVpWT68f&numero=7962&tipo=DEC) exige transparência sobre fornecedor, produto e condições nas contratações eletrônicas; a adequação do fluxo real deve ser validada.
2. Juliano deve validar a operação real de atendimento a titulares, conservação de conversas, orçamento, confirmação, cancelamento, ingredientes/alergênicos e recebimento. As páginas descrevem o fluxo implementado, mas não substituem processos internos ou revisão jurídica.
3. A autorização das fotos foi confirmada por Leonardo; guardar os registros e validar os direitos de eventuais elementos temáticos de terceiros nas ofertas. Créditos e assinaturas de fotógrafo foram preservados. Essa autorização não foi objeto de verificação contratual independente.
4. Qualquer adição de Analytics, pixel, pagamento, cadastro ou novo fornecedor de dados exige revisão antes de ativação. Referência: [orientação da ANPD sobre cookies](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais).

Documentação técnica das animações: [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()) e [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/).
