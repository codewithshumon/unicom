/* eslint-disable react/prop-types */

import { useCallback, useEffect, useState } from "react";
//import { IoMdClose } from "react-icons/io";

const Modal = ({ title, isOpen }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (!showModal) {
      return;
    }
    // Add class to body to disable scrolling
    document.body.style.overflow = "hidden";

    // Remove class and enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-30 z-[9999]"></div>
  );
};

export default Modal;
