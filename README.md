# Juliano Bolos e Doces

Site de apresentação em Next.js, TypeScript e Tailwind CSS, com galeria de 23 fotos, filtros, ampliação acessível, história do Juliano e formulário que prepara uma conversa no WhatsApp. Os contatos comerciais foram preservados da versão anterior.

A página abre com a história em cinco capítulos, seguida da apresentação dos produtos. Os títulos ganham destaque conforme a rolagem; a imagem lateral muda junto com o capítulo no computador. No celular, um painel fixo no topo acompanha a leitura e troca de imagem por capítulo. A rolagem permanece livre, e as animações respeitam a preferência por movimento reduzido. O conteúdo continua legível sem JavaScript. Um cursor de bolo em SVG aparece nos dispositivos com mouse, preservando o cursor de texto nos campos do formulário.

## Desenvolvimento

`npm install` e `npm run dev`. Abra http://localhost:3000/JulianoBolosedoces/.

## Publicação

A branch main compila a exportação estática via GitHub Actions e atualiza os arquivos do Pages em /JulianoBolosedoces/. Edite src/app/page.tsx e src/app/editorial.css, não o index.html gerado. As fotos otimizadas estão em img/; a preparação copia essa pasta para public/img/.

A imagem hero-editorial.webp recebeu tratamento com IA de luz e cenário a partir da foto do bolo com flores rosas. As fotos da galeria são os registros fornecidos, comprimidos em WebP; a assinatura do fotógrafo nas fotos de casamento foi preservada. As fotos acompanham a narrativa sem identificar qual foi o primeiro bolo ou atribuir datas às criações.

O formulário não armazena dados nem confirma pedidos: prepara uma mensagem para o visitante enviar pelo WhatsApp. Datas, valores e disponibilidade são combinados diretamente com o Juliano.

Os ícones usam lucide-react, com traços consistentes e nomes acessíveis nos botões. A revisão editorial mantém títulos curtos, sem pontos finais ou quebras de linha forçadas, e preserva os marcos da história fornecida. A composição usa quebras equilibradas nos títulos e espaçamento de leitura nos parágrafos.
