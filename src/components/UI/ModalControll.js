import { Fragment } from "react";
import { useSelector } from "react-redux";

import Modal from "./Modal";

const ModalControll = () => {
  const isShown = useSelector((state) => state.overlay.isShown);
  const render = useSelector((state) => state.overlay.render);

  return <Fragment>
    {isShown && <Modal>{render}
    {!isShown && null}
    </Modal>}</Fragment>;
};

export default ModalControll;
