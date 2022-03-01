import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal__header">
        <h2
          onClick={() => {
            props.closeModal(false);
          }}
        >
          X
        </h2>
      </div>
      <div className="modal__body">
        <h2>This is a modal</h2>
      </div>
    </div>
  );
};

export default Modal;
