# TBB Store

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/IgorPimentelG/TBB-Store)


Esse projeto foi desenvolvido como parte do teste do processo seletivo na The Brooklyn Brothers para a vaga de Desenvolvedor Frontend React.

O projeto foi desenvolvido utilizando React + Vite com a linguagem Typescript. O Vite foi escolhido pelo fato de ser um projeto sem muita complexidade, além de gera um bom desempenho no carregamento das páginas. Para estilização, foi utilizado a bilbioteca styled-components para criação de componentes css de tal forma a manter os arquivos .tsx menos verboso e de fácil manutenção, além disso, permitiu a criação de um provider com o tema global da aplicação, para manter o padrão dos estilos utilizados.

Para o gerenciamento do roteamento das páginas no projeto, foi utilizada a biblioteca react-router-dom. Caso o usuário tente acessar uma rota não definida no projeto, ele será redirecionado para uma página de erro 404. Da mesma forma, se ocorrer um problema interno na página que o usuário está tentando acessar, ele será redirecionado para uma página de erro 500.

Para o gerenciamento de estados globais, foi utilizado o ContextAPI do próprio React, a fim de fornecer uma interface simples com os estados e métodos para manipular os dados dos produtos.

Além de tudo isso, foi implementado a possibilidade de multi-idiomas para permitir ao usuário visualizar o site em Português, Inglês e Espanhol. Os arquivos JSON contendo os dados também foram traduzidos utilizando o ChatGPT, para alterar o conteúdo em exibição de acordo com o idioma selecionado. Também foi analisada a possibilidade de utilizar APIs para a tradução dos conteúdos JSON, porém as APIs contêm limitação de caracteres, o que impossibilitou o uso.

Foi implementada também a funcionalidade de favoritar os produtos, na qual é possível visualizar os itens marcados como favoritos em uma página específica. Além disso, os produtos favoritados são automaticamente salvos no Local Storage, permitindo que o usuário mantenha seus favoritos mesmo ao sair do site ou recarregar a página.

Por fim, todo o código foi padronizado utilizando ESLint e editorconfig.

## Demonstração

Visualize a versão em produção: [CLIQUE AQUI](https://tbb-store-igorpimentelmsi-hotmailcom.vercel.app/products)

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/IgorPimentelG/TBB-Store.git
```

Entre no diretório do projeto

```bash
  cd TBB-Store
```

Instale as dependências

```bash
  npm install
```

Execute o build

```bash
  npm run build
```

Execute o servidor

```bash
  npm run preview
```

## Bibliotecas usadas

- react (v18.2.0): biblioteca principal para criação das interfaces;
- i18next (v23.2.11): utilizada para tornar possível apresentar um ambiente com suporte a multi-idiomas;
- react-icons (v4.10.1): utilizada para obter icons pré-definidos;
- styled-components (v6.0.4): utilizada para criação de componentes estilizados com css;
- react-router-dom (^6.14.2) utilizada para gerenciar o roteamento das páginas disponíveis;

## Estrutura de arquivos

```
public
src
├───core
│   ├───assets
│   │   └───fonts
│   ├───components
│   │   ├───layout
│   │   └───ui
│   ├───context
│   ├───data
│   ├───model
│   ├───routes
│   ├───theme
│   └───translate
└───pages
		├───errors
		│   ├───404
		│   └───500
		├───favorites
		└───products

```

## Desenvolvedor

- [@IgorPimentelG](https://www.github.com/IgorPimentelG)


## Feedback

Se você tiver algum feedback, por favor me contactar por meio do e-mail: dev.igorpimentel@gmail.com
