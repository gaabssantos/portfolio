import express from "../assets/stacks-icon/express.svg";
import javascript from "../assets/stacks-icon/javascript.svg";
import mongodb from "../assets/stacks-icon/mongodb.svg";
import node from "../assets/stacks-icon/node.svg";
import postgresql from "../assets/stacks-icon/postgresql.svg";
import react from "../assets/stacks-icon/react.svg";
import sass from "../assets/stacks-icon/sass.svg";
import typescript from "../assets/stacks-icon/typescript.svg";

const projects = [
  {
    id: 1,
    name: "DevBank",
    description:
      "Projeto de uma plataforma de banco digital que permite aos usuários gerenciar suas finanças de forma prática e segura. A aplicação inclui funcionalidades como abertura de contas, transferências entre usuários, consulta de saldo em tempo real e visualização de histórico de transações, com uma interface moderna e acessível para diferentes dispositivos. (Clique aqui)",
    image:
      "https://private-user-images.githubusercontent.com/114118591/380524562-1ff9a2c2-6ad4-4397-8248-9d76c4616883.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYxMTM3MjEsIm5iZiI6MTczNjExMzQyMSwicGF0aCI6Ii8xMTQxMTg1OTEvMzgwNTI0NTYyLTFmZjlhMmMyLTZhZDQtNDM5Ny04MjQ4LTlkNzZjNDYxNjg4My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwNVQyMTQzNDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMDU2ODI0YzcyMTdkMDE4NDQ3NjY0YTA5YjRhMDhlMDhhNmE5NGEyOTg5NjFmY2NmYjY2YWU2ZmRjZjRkNWFiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.m5lZf8xOxtWBDzSxS7NIr5jkZLtnjYiWC26yLV5bZBg",
    githubLink: "https://github.com/gaabssantos/devbank",
    deployLink: "https://devbank-five.vercel.app/",
    stacks: [
      {
        id: 1,
        name: "react",
        image: react,
      },
      {
        id: 2,
        name: "typescript",
        image: typescript,
      },
      {
        id: 3,
        name: "node",
        image: node,
      },
      {
        id: 4,
        name: "express",
        image: express,
      },
      {
        id: 5,
        name: "mongodb",
        image: mongodb,
      },
    ],
  },
  {
    id: 2,
    name: "OrganizeMe",
    description:
      "Projeto de um website para gerenciamento de tarefas e organização de projetos, criado para facilitar o trabalho em equipe e o planejamento individual. A plataforma permite criar e personalizar quadros, listas e cartões. Com uma interface intuitiva e responsiva, o sistema promove a produtividade e a colaboração de forma prática e eficiente. (Clique aqui)",
    image:
      "https://private-user-images.githubusercontent.com/114118591/398608268-04720c72-b018-4cea-a8ca-517da0dc0b1d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYxMTM4NzksIm5iZiI6MTczNjExMzU3OSwicGF0aCI6Ii8xMTQxMTg1OTEvMzk4NjA4MjY4LTA0NzIwYzcyLWIwMTgtNGNlYS1hOGNhLTUxN2RhMGRjMGIxZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwNVQyMTQ2MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNmU5MzQ4OWVkN2Y5ZTUxYjg0ZmRlNGZmNTBhZTIxOTdhNDM1YzA4YTgwOTA2ZTg1NjU1MWJmMTcyOTU0YTM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.0vwfrwzOMNSMQCvTmVkV79MEchRDcnZC64WLrEt4phY",
    githubLink: "https://github.com/gaabssantos/organizeme",
    deployLink: "https://organizeme-client.vercel.app/",
    stacks: [
      {
        id: 1,
        name: "react",
        image: react,
      },
      {
        id: 2,
        name: "typescript",
        image: typescript,
      },
      {
        id: 3,
        name: "node",
        image: node,
      },
      {
        id: 4,
        name: "express",
        image: express,
      },
      {
        id: 5,
        name: "postgresql",
        image: postgresql,
      },
    ],
  },
  {
    id: 3,
    name: "Todo",
    description:
      "Este é um projeto de lista de tarefas onde os usuários podem adicionar, editar e remover itens de forma prática. Construído com React, Node.js e MongoDB, o objetivo é oferecer uma ferramenta funcional e intuitiva para organização pessoal, aplicando boas práticas de desenvolvimento Full Stack. (Clique aqui)",
    image:
      "https://private-user-images.githubusercontent.com/114118591/384612492-26e236aa-a8f0-4479-975a-03d4023da50e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYxMTQwMDcsIm5iZiI6MTczNjExMzcwNywicGF0aCI6Ii8xMTQxMTg1OTEvMzg0NjEyNDkyLTI2ZTIzNmFhLWE4ZjAtNDQ3OS05NzVhLTAzZDQwMjNkYTUwZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwNVQyMTQ4MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03YTMzZDU0YjVkNjgzZTg1MjFhMjIxZGFhNmI4YzdkYzU3OWM0OTE2ZWM3NDg1ZjcxYzNiNzY1Njk0MmZhZTUwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.-XMjnlTaK3P7f0dd2Y_ruNMEw4vgaM-yjXjkyj0e0rY",
    githubLink: "https://github.com/gaabssantos/todo",
    deployLink: "https://todos-system.vercel.app/",
    stacks: [
      {
        id: 1,
        name: "react",
        image: react,
      },
      {
        id: 2,
        name: "typescript",
        image: typescript,
      },
      {
        id: 3,
        name: "node",
        image: node,
      },
      {
        id: 4,
        name: "express",
        image: express,
      },
      {
        id: 5,
        name: "mongodb",
        image: mongodb,
      },
    ],
  },
  {
    id: 4,
    name: "Todo",
    description:
      "Este é um projeto de lista de tarefas onde os usuários podem adicionar, editar e remover itens de forma prática. Construído com React, Node.js e MongoDB, o objetivo é oferecer uma ferramenta funcional e intuitiva para organização pessoal, aplicando boas práticas de desenvolvimento Full Stack. (Clique aqui)",
    image:
      "https://private-user-images.githubusercontent.com/114118591/384612492-26e236aa-a8f0-4479-975a-03d4023da50e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYxMTQwMDcsIm5iZiI6MTczNjExMzcwNywicGF0aCI6Ii8xMTQxMTg1OTEvMzg0NjEyNDkyLTI2ZTIzNmFhLWE4ZjAtNDQ3OS05NzVhLTAzZDQwMjNkYTUwZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwNVQyMTQ4MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03YTMzZDU0YjVkNjgzZTg1MjFhMjIxZGFhNmI4YzdkYzU3OWM0OTE2ZWM3NDg1ZjcxYzNiNzY1Njk0MmZhZTUwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.-XMjnlTaK3P7f0dd2Y_ruNMEw4vgaM-yjXjkyj0e0rY",
    githubLink: "https://github.com/gaabssantos/todo",
    deployLink: "https://todos-system.vercel.app/",
    stacks: [
      {
        id: 1,
        name: "react",
        image: react,
      },
      {
        id: 2,
        name: "typescript",
        image: typescript,
      },
      {
        id: 3,
        name: "node",
        image: node,
      },
      {
        id: 4,
        name: "express",
        image: express,
      },
      {
        id: 5,
        name: "mongodb",
        image: mongodb,
      },
    ],
  },
  {
    id: 5,
    name: "Rick and Morty",
    description:
      "Este é um projeto interativo desenvolvido para acessar dados da série Rick and Morty, utilizando a API pública da série. A aplicação oferece uma interface amigável e intuitiva, que permite aos usuários explorar informações detalhadas sobre os personagens, episódios e locais do universo da série. (Clique aqui)",
    image:
      "https://private-user-images.githubusercontent.com/114118591/384551390-e03694f3-d00e-46b0-b2ca-8e9207c5ee62.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYxMTQxMTEsIm5iZiI6MTczNjExMzgxMSwicGF0aCI6Ii8xMTQxMTg1OTEvMzg0NTUxMzkwLWUwMzY5NGYzLWQwMGUtNDZiMC1iMmNhLThlOTIwN2M1ZWU2Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwNVQyMTUwMTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wODk0YTYyOTE5Yzk0YTZiMGFjNDNmNjNkNDRmMmI4OGU4NjkyZThhNGUyNjRjNWQ2NTQ5NmNiYWY0YzFlYjExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.B-nNTwimjwSYNTtGFHZA7m7AWY1I90xORV5Zo-hrYhg",
    githubLink: "https://github.com/gaabssantos/rick-and-morty",
    deployLink: "https://rick-and-morty-alpha-pied.vercel.app/",
    stacks: [
      {
        id: 1,
        name: "react",
        image: react,
      },
      {
        id: 2,
        name: "typescript",
        image: typescript,
      },
      {
        id: 3,
        name: "sass",
        image: sass,
      },
    ],
  },
  {
    id: 6,
    name: "CodeBurger",
    description:
      "Projeto de sistema digital para uma hamburgueria, com funcionalidades de criação de pedidos, organização de categorias de produtos e um painel administrativo intuitivo. A plataforma permite aos clientes montar pedidos personalizados, explorar o menu completo e acompanhar o status dos pedidos em tempo real. No painel administrativo, é possível gerenciar cardápio, estoque e visualizar relatórios de vendas, otimizando a operação e o atendimento ao cliente. (Clique aqui)",
    image:
      "https://private-user-images.githubusercontent.com/114118591/380525666-fb94abec-409d-4fd2-9a2f-6f8890f5578b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYxMTQzOTYsIm5iZiI6MTczNjExNDA5NiwicGF0aCI6Ii8xMTQxMTg1OTEvMzgwNTI1NjY2LWZiOTRhYmVjLTQwOWQtNGZkMi05YTJmLTZmODg5MGY1NTc4Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwNVQyMTU0NTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMmFjZjNmMDYxNTk0ZmY2YmEzMDQxZDkwMjMwNWQ5ZTQyNzVmNjdkZmE1MGE4YTNhMTZkNTI0M2E3MjJlMTQ3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.sSJo4D1qkAHWGngAqfln46R83H-LZ19KhYf_8KZCJzI",
    githubLink: "https://github.com/gaabssantos/code-burger",
    stacks: [
      {
        id: 1,
        name: "react",
        image: react,
      },
      {
        id: 2,
        name: "javascript",
        image: javascript,
      },
      {
        id: 3,
        name: "node",
        image: node,
      },
      {
        id: 4,
        name: "express",
        image: express,
      },
      {
        id: 5,
        name: "mongodb",
        image: mongodb,
      },
      {
        id: 6,
        name: "postgresql",
        image: postgresql,
      },
    ],
  },
  {
    id: 7,
    name: "DevBills",
    description:
      "Projeto voltado para o gerenciamento financeiro pessoal, ajudando os usuários a controlar receitas e despesas de forma organizada. Com funcionalidades como categorização de gastos, criação de metas financeiras e relatórios visuais, o app oferece uma visão clara do orçamento, permitindo um acompanhamento prático das finanças no dia a dia. (Clique aqui)",
    image:
      "https://private-user-images.githubusercontent.com/114118591/380524791-a170b48f-ef6c-4dbc-8289-c3a53a16c33b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYxMTQ1NTQsIm5iZiI6MTczNjExNDI1NCwicGF0aCI6Ii8xMTQxMTg1OTEvMzgwNTI0NzkxLWExNzBiNDhmLWVmNmMtNGRiYy04Mjg5LWMzYTUzYTE2YzMzYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwNVQyMTU3MzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNWU0ZTYyMTM1M2RlMTRiMGRkNTA5ZDIwNjgzMTAxZTZkMmVmMDg2NzQ5MDViY2UyYmFmNDNjMDE0NDliNDhkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.akPZTUXw1zGJObGrFgeSllRxBJA0_ue3xcWA18fVXeo",
    githubLink: "https://github.com/gaabssantos/devbills",
    deployLink: "https://devbills.vercel.app/",
    stacks: [
      {
        id: 1,
        name: "react",
        image: react,
      },
      {
        id: 2,
        name: "typescript",
        image: typescript,
      },
      {
        id: 3,
        name: "node",
        image: node,
      },
      {
        id: 4,
        name: "express",
        image: express,
      },
      {
        id: 5,
        name: "mongodb",
        image: mongodb,
      },
    ],
  },
  {
    id: 8,
    name: "DevMovies",
    description:
      "DevMovies é uma aplicação web desenvolvida para os amantes de cinema, oferecendo uma experiência intuitiva de descoberta e exploração de filmes. O projeto consome a API do TMDB (The Movie Database) para apresentar um catálogo dinâmico e atualizado de filmes. (Clique aqui)",
    image:
      "https://private-user-images.githubusercontent.com/114118591/380521151-4c2ddd25-f36c-4ddd-883c-5ced901274e4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYxMTQ2NTksIm5iZiI6MTczNjExNDM1OSwicGF0aCI6Ii8xMTQxMTg1OTEvMzgwNTIxMTUxLTRjMmRkZDI1LWYzNmMtNGRkZC04ODNjLTVjZWQ5MDEyNzRlNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwNVQyMTU5MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYmYyOGQxZTYwNjgxYjlmMGNjM2FlODY1MTdmZjQyZDRlYjUxMmVjMDY0MDU2YWE5ZjNiNDg3NWE3OWYwZGFlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.KLC6PZDYptmhxzy28lo2pyK6jcmyAGZaQyS6TqXe1W0",
    githubLink: "https://github.com/gaabssantos/devmovies",
    deployLink: "https://devmovies-kappa.vercel.app",
    stacks: [
      {
        id: 1,
        name: "react",
        image: react,
      },
      {
        id: 2,
        name: "javascript",
        image: javascript,
      },
      {
        id: 3,
        name: "node",
        image: node,
      },
      {
        id: 4,
        name: "express",
        image: express,
      },
      {
        id: 5,
        name: "mongodb",
        image: mongodb,
      },
    ],
  },
];

export default projects;
