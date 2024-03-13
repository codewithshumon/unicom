/* eslint-disable react/prop-types */
import useModal from "../../hooks/useModal";
import OutLinkArrow from "./OutLinkArrow";

const FindGrants = ({ className, textColor }) => {
  const { onOpen } = useModal();

  const handleCloseModal = () => {
    onOpen();
  };
  return (
    <>
      <div className={className}>
        <div className="flex items-center font-DmSans font-[400] text-[2vh] text-[#282866] gap-[3vh]">
          <button
            onClick={handleCloseModal}
            className=" w-[10vh] h-[10vh] p-[3vh]  bg-[#EDF82D] flex items-center justify-center rounded-full cursor-pointer"
          >
            <OutLinkArrow color={"#282866"} />
          </button>
          <p className={textColor}>
            Find grants, rebates <br /> and VC funding. <br /> Success fee only*
          </p>
        </div>
      </div>
    </>
  );
};

export default FindGrants;
