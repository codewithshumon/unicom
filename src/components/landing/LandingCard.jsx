/* eslint-disable react/prop-types */
//import { unionCardArrow } from "../../../public/svg";
import BrandLogo from "../global/BrandLogo";
import UnionCardArrow from "../global/UnionCardArrow";

//w-[18vw] h-[55vh]

const LandingCard = ({ title }) => {
  return (
    <div className="w-[5vw] h-[15vh] bg-[#FFFFFF]  p-[5vh] rounded-[2vh]">
      <div className=" w-full h-full flex flex-col justify-between gap-5">
        <div>
          <BrandLogo color="#4E4EFF" className="w-[3vw]" />
        </div>
        <div>
          {/* <h2 className="text-[#4E4EFF] text-[5vh] pb-[5vh]">{title}</h2> */}
        </div>
        <div className="w-full flex justify-end items-start  ">
          <div>
            {/* <UnionCardArrow color="#4E4EFF" className="w-[3vw] pb-[3vh]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
