import "./Contact.css";

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contato</h1>
      <div id="contact-container">
        <a href="mailto:gabriel.oliveira2040@hotmail.com" target="_blank">
          <div className="contact">
            <AiOutlineMail />
            <span>E-mail</span>
            <p>gabriel.oliveira2040@hotmail.com</p>
          </div>
        </a>
        <a href="https://wa.me/11990115235" target="_blank">
          <div className="contact">
            <AiOutlinePhone />
            <span>Telefone</span>
            <p>(11) 99011-5235</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/gaabssantos/" target="_blank">
          <div className="contact">
            <AiOutlineLinkedin />
            <span>Linkedin</span>
            <p>@gaabssantos</p>
          </div>
        </a>
        <a href="https://github.com/gaabssantos" target="_blank">
          <div className="contact">
            <AiOutlineGithub />
            <span>Github</span>
            <p>@gaabssantos</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
