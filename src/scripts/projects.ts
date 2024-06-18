import codeBurger from "../assets/projects/code-burger.png";
import instagramClone from "../assets/projects/instagram-clone.png";
import react from "../assets/stacks-icon/react.svg";

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
    ],
  },
  {
    id: 2,
    name: "Code Burger",
    description:
      "Um projeto que simula uma haburgueria completa, incluindo pedido de clientes, adição de novos produtos e categorias. (Clique aqui)",
    image: codeBurger,
    githubLink: "https://github.com/gaabssantos/code-burger",
    stacks: [
      {
        id: 1,
        name: "react",
        image: react,
      },
    ],
  },
];

export default projects;
