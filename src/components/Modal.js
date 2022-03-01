import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai"; 

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal__header">
        <AiOutlineClose
          className="modal__close-btn"
          onClick={() => {
            props.closeModal(false);
          }}
        />
      </div>
      <div className="modal__body">
        <h2>This is a modal</h2>
      </div>
    </div>
  );
};

export default Modal;
