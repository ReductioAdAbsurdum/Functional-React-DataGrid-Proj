import { Fragment } from "react";
import ReactDOM from "react-dom";
import { overlayActions } from "../../store/reduxStore";
import { useDispatch } from "react-redux";

import "./Modal.css";

const Backdrop = () => {
  const dispatch = useDispatch();

  const backdropClickHandler = () => {
    dispatch(overlayActions.closeOverlay());
  };

  return <div className="backdrop" onClick={backdropClickHandler}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop/>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
