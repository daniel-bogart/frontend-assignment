import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  function toggle() {
    setShowModal(!showModal);
  }
  return { toggle, showModal };
};

export default Modal;