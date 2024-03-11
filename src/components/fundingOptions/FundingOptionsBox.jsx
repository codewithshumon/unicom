/* eslint-disable react/prop-types */
import { useState } from "react";
import { UnionUpDownArrow } from "../global";

const FundingOptionsBox = ({
  number,
  title,
  seondTitle,
  firstPara,
  secondPara,
  listTitle,
  listParaOne,
  listParaTwo,
  listParaThree,
}) => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  return (
    <div>
      <div className=" w-full h-full flex flex-row py-[5vh]">
        <div className="w-[30vw] h-[10vh] ">
          <h1
            className={`${
              isBoxOpen ? "text-[#8282FF]" : "text-[#282866]"
            } text-[6vh] font-[600]`}
          >
            {number}
          </h1>
        </div>
        <div className=" w-full flex flex-row justify-between">
          <div className=" flex flex-col">
            <h1
              className={`${
                isBoxOpen ? "text-[#8282FF]" : "text-[#282866]"
              } text-[6vh] font-[600] leading-none`}
            >
              {title} <br />
              {seondTitle}
            </h1>
            {isBoxOpen && (
              <div className="w-full h-full py-[5vh]">
                <div className="w-[70%] flex flex-col gap-[2vh] text-[#141041] text-[3vh]">
                  <p>{firstPara}</p>
                  <p>{secondPara}</p>
                  <div className=" flex flex-col gap-[2vh]">
                    <p>{listTitle}</p>
                    <ul className="pl-[2vw] list-disc">
                      <li>{listParaOne}</li>
                      <li>{listParaTwo}</li>
                      <li>{listParaThree}</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="pr-[2vw]">
            <button
              onClick={() => setIsBoxOpen(!isBoxOpen)}
              className={`${
                isBoxOpen ? "border-[#8282FF]" : "border-[#282866]"
              } w-[4vw] h-[4vw] border-[.5vh]  rounded-full p-[1vw] flex items-center justify-center`}
            >
              {isBoxOpen ? (
                <UnionUpDownArrow
                  upArrow={true}
                  color={"#8282FF"}
                  className="w-[2vw]"
                />
              ) : (
                <UnionUpDownArrow
                  downArrow={true}
                  color={"#282866"}
                  className="w-[2vw]"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FundingOptionsBox;
