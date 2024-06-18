import instagramClone from "../assets/projects/instagram-clone.png";
import react from "../assets/stacks-icon/react.svg";

const projects = [
  {
    id: 1,
    name: "Instagram clone",
    description:
      "Um projeto que simula a requisição de postagens e stories do Instagram, pela API do Pexels. Utilizei o Axios para capturar os dados e exibir para o usuário.",
    image: instagramClone,
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
