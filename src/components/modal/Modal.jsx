/* eslint-disable react/prop-types */

import { useCallback, useEffect, useState } from "react";
import { BrandLogo } from "../global";
import { brandName } from "../../../public/svg";
import useModal from "../../hooks/useModal";

const Modal = ({ disabled, modalBody }) => {
  const { isOpen, onClose } = useModal();
  const [showModal, setShowModal] = useState(false);

  console.log("modalBody", modalBody);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (!showModal) {
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);

    onClose();
  }, [disabled, onClose]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-screen h-screen  bg-white z-[9999]">
      <div className="w-full h-full relative ">
        {modalBody}

        {/* header option */}
        <div className=" w-full h-[10vh] absolute top-[4vh] left-0 ">
          <div className="flex items-center justify-between px-[5%]">
            <div className=" flex items-center gap-[1.5vw]">
              <BrandLogo
                color={"#282866"}
                className="w-[4vw] h-[auto] bg-cover"
              />
              <div className="">
                <img src={brandName} className="w-[10vw] h-[auto] bg-cover" />
              </div>
            </div>
            <div className="h-full flex items-center gap-[3vw]">
              <div className="flex items-center gap-[1vw]">
                <div>
                  <h1 className="text-[#282866] text-[1.5vw] font-[600]">
                    Close
                  </h1>
                </div>
                <div
                  onClick={handleClose}
                  className="bg-[#292967] w-[4vw] h-[4vw] rounded-full flex items-center justify-center cursor-pointer"
                >
                  <button className="flex flex-col gap-[1vh] items-center justify-center w-[65%]  ">
                    <div className="bg-[#74FFFE] w-[90%] h-[.5vh] rounded-full rotate-[45deg] translate-y-[.8vh] "></div>
                    <div className="bg-[#74FFFE] w-[90%] h-[.5vh] rounded-full rotate-[-45deg] translate-y-[-.6vh]"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
