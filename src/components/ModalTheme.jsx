import { AiOutlineClose } from "react-icons/ai";

import "./Modal.css";
import "./ModalTheme.css";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ModalTheme = ({ isOpen, setOpen }) => {
  const { setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    setTheme("light");
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  if (isOpen) {
    return (
      <div className="background-modal" data-aos="zoom-out">
        <AiOutlineClose onClick={handleCloseModal} />
        <div className="modal">
          <h2>Você tem certeza?</h2>
          <p>
            Tem certeza que deseja mudar para o tema claro? Isto pode prejudicar
            sua visão.
          </p>
          <div className="actions">
            <button id="btn-yes" onClick={() => handleChangeTheme()}>
              Sim
            </button>
            <button id="btn-no" onClick={handleCloseModal}>
              Não
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalTheme;
