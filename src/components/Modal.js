import "./Modal.css";
import logo from "../logo-NamCauKien-new-removebg.png";
import { AiOutlineClose } from "react-icons/ai";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal__header">
        <AiOutlineClose
          className="modal__close-btn"
          onClick={props.closeModal}
        />
      </div>
      <div className="modal__body">
        <div className="modal__logo">
          <img src={logo} width="40%" alt="logo" />
        </div>
        <h3 className="modal__info-header">
          About Nam Cau Kien Industrial Zone{" "}
        </h3>
        <div className="modal__info-body">
          <p>- Total area: 263.47 ha, divided into 2 phase:</p>
          <p>+) Phase 1: 103 ha, occupation rate 100%</p>
          <p>+) Phase 2: 160 ha, occupation rate 40%</p>
          <p>- Lease term: 2008 - 2058</p>
          <p>- Total projects: 70 projects</p>
          <p>
            - FDI: Japan, Korea, China, Taiwan, Hong Kong, Holland, Italia,
            Singapore, Viet Nam,...
          </p>
          <p>- Distance from Nam Cau Kien IP to:</p>
          <p>+) National Highway 10: 0 Km</p>
          <p>+) Hai Phong – Hanoi Express Highway: 15 Km</p>
          <p>+) Cat Bi International Airport: 20 Km</p>
          <p>+) Noi Bai International Airport: 125 Km</p>
          <p>+) Van Don International Airport: 105 Km</p>
          <p>+) Hai Phong Port: 17 Km</p>
          <p>+) Cai Lan Deep Sea Port : 55 Km</p>
          <p>+) Lach Huyen Deep Sea Port: 35 Km</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
