/* eslint-disable react/prop-types */
//import { unionCardArrow } from "../../../public/svg";
import { useState } from "react";
import BrandLogo from "../global/BrandLogo";
import UnionCardArrow from "../global/UnionCardArrow";

//w-[18vw] h-[55vh]

const LandingCard = ({ title }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${
        isHover ? "bg-[#4E4EFF] cursor-grab" : "bg-[#FFFFFF] cursor-pointer"
      } w-[19vw] h-[60vh]  p-[5vh] rounded-[2vh] `}
    >
      <div className="w-full h-full flex flex-col justify-between gap-[5vh]">
        <div>
          <BrandLogo
            color={`${isHover ? "#74FFFE" : "#4E4EFF"}`}
            className="w-[3vw]"
          />
        </div>
        <div>
          <h2
            className={`${
              isHover ? "text-[#74FFFE]" : "text-[#4E4EFF]"
            } text-[5vh] pb-[5vh]`}
          >
            {title}
          </h2>
        </div>
        <div className="w-full flex justify-end items-start  ">
          <div>
            <UnionCardArrow
              color={`${isHover ? "#EDF82D" : "#4E4EFF"}`}
              className="w-[3vw] pb-[3vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
