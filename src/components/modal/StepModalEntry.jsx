/* eslint-disable react/prop-types */
import { stepsBlob1 } from "../../assets/images";
import { OutLinkArrow } from "../global";

const StepModalEntry = ({ handleCount }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[40vw] h-full landing-bg relative">
        <h1 className="absolute w-full h-full flex items-center justify-center font-[600] text-[#282866] text-[3vw]">
          WELCOME
        </h1>
        <div className="w-full h-full flex items-end justify-start">
          <img src={stepsBlob1} className="h-[60vh]" />
        </div>
      </div>
      <div className="w-[60vw] h-full bg-white relative ">
        <div className=" absolute top-[45vh] left-[10vw] w-[50%] text-[#282866] flex flex-col gap-[2vh] ">
          <div>
            <p className="text-[2vw]">
              You are on your journey to finding funding options and helping
              stabilise your business.
            </p>
          </div>

          <button
            onClick={handleCount}
            className="button-bg hover-button relative bg-[#EDF82D] max-w-fit px-[3vh] py-[2vh] rounded-full flex items-center gap-[.5vw] overflow-hidden"
          >
            <div className="relative flex items-center gap-[.5vw] bg-transparent">
              <span className="font-[700] text-[1vw]">Get Started</span>
              <OutLinkArrow
                rightArrow={true}
                color="#282866"
                size="2vh"
                strokeWidth={5}
                className="mt-[-1vh]"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepModalEntry;
