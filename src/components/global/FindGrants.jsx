import { unionArrow } from "../../../public/svg";

const FindGrants = () => {
  return (
    <>
      <div>
        <div className="flex items-center font-DmSans font-[400] text-[2vh] text-[#282866] gap-[3vh]">
          <button className=" w-[10vh] h-[10vh] p-[3vh]  bg-[#EDF82D] flex items-center justify-center rounded-full">
            <img src={unionArrow} alt="union Arrow" />
          </button>
          <p className="">
            Find grants, rebates <br /> and VC funding. <br /> Success fee only*
          </p>
        </div>
      </div>
    </>
  );
};

export default FindGrants;
