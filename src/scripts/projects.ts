import codeBurger from "../assets/projects/code-burger.png";
import devMovies from "../assets/projects/dev-movies.png";
import devBills from "../assets/projects/devbank.png";
import devBank from "../assets/projects/devbills.png";
import instagramClone from "../assets/projects/instagram-clone.png";
import express from "../assets/stacks-icon/express.svg";
import javascript from "../assets/stacks-icon/javascript.svg";
import mongodb from "../assets/stacks-icon/mongodb.svg";
import node from "../assets/stacks-icon/node.svg";
import postgresql from "../assets/stacks-icon/postgresql.svg";
import react from "../assets/stacks-icon/react.svg";
import typescript from "../assets/stacks-icon/typescript.svg";

const projects = [
  {
    id: 1,
    name: "Instagram clone",
    description:
      "Um projeto que simula a requisição de postagens e stories do Instagram, pela API do Pexels. Utilizei o Axios para capturar os dados e exibir para o usuário. (Clique aqui)",
    image: instagramClone,
    githubLink: "https://github.com/gaabssantos/instagram-clone",
    deployLink: "https://instagram-clone-mu-one.vercel.app",
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
    ],
  },
  {
    id: 2,
    name: "Code Burger",
    description:
      "Um projeto que simula uma hamburgueria completa, incluindo pedido de clientes, adição de novos produtos e categorias. (Clique aqui)",
    image: codeBurger,
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
    id: 3,
    name: "DevMovies",
    description:
      "Um projeto que simula um catálogo de filmes, requisitando uma API de filmes. (Clique aqui)",
    image: devMovies,
    githubLink: "https://github.com/gaabssantos/devmovies",
    deployLink: "https://devmovies-kappa.vercel.app/",
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
  {
    id: 4,
    name: "DevBills",
    description:
      "Um sistema de gerenciamento de finanças pessoais. (Clique aqui)",
    image: devBills,
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
    id: 5,
    name: "DevBank",
    description:
      "Uma plataforma de um banco virtual, podendo criar contas e fazer transferência. (Clique aqui)",
    image: devBank,
    githubLink: "https://github.com/gaabssantos/devbank",
    deployLink: "https://devbank-five.vercel.app",
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
];

export default projects;
