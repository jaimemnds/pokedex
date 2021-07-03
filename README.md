# ~~yet another~~ Pokédex

Listagem de pokémons e exibição de informações a respeito deles. Projeto realizado para fins didáticos

## Executando o projeto

Para executar-se o projeto localmente:

1. Certifique-se de ter o Node e NPM (e, opcionalmente, Yarn) instalados e atualizados;

2. Clone (`$ git clone git@github.com:jaimemnds/pokedex.git`) ou baixe este repositório;

3. Navegue até a raiz do projeto;

4. Instale as dependências com `$ npm install` ou `$ yarn install`;

5. Execute o projeto com `$ npm start` ou `$ yarn start`;

6. Uma janela do navegador será exibida executando o projeto. Caso isso não ocorra, abra manualmente o navegador e acesse `http://localhost:3000`.

## Recursos disponíveis

Os seguintes recursos estão disponíveis e podem ser testados:

- _Grid_ apresentando todos os 898 pokémons disponíveis na PokéAPI, com imagem, nome e número.

- Paginação na _grid_, apresentando 20 pokémons por página, contendo um total de 45 páginas acessíveis. Botões de paginação incluem: primeira página, página anterior, próxima página, última página.

- Tela de detalhes do pokémon, apresentando nome, número, imagem, altura, peso, stats, habilidades, tipos. A imagem pode se alternar entre a visão frontal e traseira do pokémon através do botão correspondente.

- Foram configuradas rotas parametrizadas para todas as páginas (_grid_ e detalhes de pokémon).

- Foram usadas as técnicas e tecnologias: código em inglês; React; ES6+; componentização; responsividade; React Hooks; React Router; transpilador (Typescript); e React Context para gerenciar estados. Adicionalmente foram utilizados: `create-react-app` para orquestrar o código de front; `axios` para potencializar a mensageria HTTP; `react-icons` para iconografia; e `sass` para potencializar estilização.
