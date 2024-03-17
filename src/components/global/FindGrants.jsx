/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import useModal from "../../hooks/useModal";
import useMousePosition from "../../hooks/useMousePosition";
import OutLinkArrow from "./OutLinkArrow";

const FindGrants = ({ className, textColor }) => {
  const { x, y } = useMousePosition();
  const { onOpen } = useModal();
  const btnRef = useRef(null);

  useEffect(() => {
    updateButtonStyle();
  }, [x, y]);

  const updateButtonStyle = () => {
    const btn = btnRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const mouseX = x - rect.left;
      const mouseY = y - rect.top;
      btn.style.setProperty("--x", mouseX + "px");
      btn.style.setProperty("--y", mouseY + "px");
    }
  };

  const handleOpenModal = () => {
    onOpen();
  };

  return (
    <div className={className}>
      <div className="flex items-center font-DmSans font-[400] text-[2vh] text-[#282866] gap-[3vh] ">
        <button
          ref={btnRef}
          onClick={handleOpenModal}
          className="circle-button-bg relative get-button-width w-[10vh] h-[10vh] p-[3vh] bg-[#EDF82D]  rounded-full cursor-pointer overflow-hidden"
        >
          <div className="flex items-center justify-center">
            <OutLinkArrow
              color={"#282866"}
              rightArrow={true}
              className=" relative"
            />
          </div>
        </button>
        <p className={textColor}>
          Find grants, rebates <br /> and VC funding. <br /> Success fee only*
        </p>
      </div>
    </div>
  );
};

export default FindGrants;
