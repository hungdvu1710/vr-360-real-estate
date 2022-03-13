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
          <img src={logo} width="40%"/>
        </div>
        <h3 className="modal__info-header">About Nam Cau Kien Industrial Zone  </h3>
        <div className="modal__info-body"> 
          - Total area: 263.47 ha, divided into 2 phase:<br></br>
          +) Phase 1: 103 ha, occupation rate 100%<br></br>
          +) Phase 2: 160 ha, occupation rate 40%<br></br>
          - Lease term: 2008 - 2058<br></br>
          - Total projects: 70 projects<br></br>
          - FDI: Japan, Korea, China, Taiwan, Hong Kong, Holland, Italia, Singapore, Viet Nam,...<br></br>
          - Distance from Nam Cau Kien IP to:<br></br>
          +) National Highway 10:  0 Km<br></br>
          +) Hai Phong – Hanoi Express Highway:  15 Km<br></br>
          +) Cat Bi International Airport: 20 Km<br></br>
          +) Noi Bai International Airport: 125 Km<br></br>
          +) Van Don International Airport: 105 Km<br></br>
          +) Hai Phong Port: 17 Km<br></br>
          +) Cai Lan Deep Sea Port : 55 Km<br></br>
          +) Lach Huyen Deep Sea Port: 35 Km<br></br>
          </div>
      </div>
    </div>
  );
};

export default Modal;
