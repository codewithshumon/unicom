/* eslint-disable react/prop-types */
import { stepsBlob1 } from "../../assets/images";
import { OutLinkArrow } from "../global";

const StepModalBasic = ({ handleCount }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[40vw] h-full landing-bg relative ">
        <div className="absolute w-full h-full px-[10%] flex items-end justify-center">
          <div className="w-full h-[72vh] flex flex-col items-start justify-between pb-[5vh]">
            <div>
              <h1 className="w-[60%] font-[600] text-[#282866] text-[3vw] leading-none">
                Let’s start with Basic Details
              </h1>
            </div>
            <div className="w-full">
              <div className=" w-full text-[#282866] text-[2vh] font-[600] flex items-center justify-between cursor-pointer ">
                <span className="text-[#4E4EFF]">Basic Details</span>
                <span className="">Grant Options</span>
                <span className="">Reduce Energy Bills</span>
                <span className="">Venture Capital Funding</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-end justify-start">
          <img src={stepsBlob1} className="h-[70vh]" />
        </div>
      </div>

      <div className="w-[60vw] h-full bg-white relative flex justify-center items-end">
        <div className="w-[60%] h-[72vh] pb-[5vh] text-[#282866] flex flex-col items-start justify-between gap-[2vh]">
          <div className="w-full">
            <form className="flex flex-col gap-[1vh] font-[600] text-[1vw] text-[#282866] ">
              <div className="rounded-[1vw] bg-white p-[2vh] flex gap-[1vw] border-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name here"
                  className="w-full outline-none text-[#8282FF] font-[500]"
                />
              </div>
              <div className="rounded-[1vw] bg-white p-[2vh] flex gap-[1vw] border-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email here"
                  className="w-full outline-none text-[#8282FF] font-[500]"
                />
              </div>
              <div className="rounded-[1vw] bg-white p-[2vh] flex gap-[1vw] border-2">
                <label htmlFor="email" className=" w-[8vw]">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Enter company name"
                  className=" w-[70%] outline-none text-[#8282FF] font-[500]"
                />
              </div>
              <div className="rounded-[1vw] bg-white p-[2vh] flex gap-[1vw] border-2">
                <label htmlFor="email">Address</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter company name"
                  className="w-full outline-none text-[#8282FF] font-[500]"
                />
              </div>
              <div className="rounded-[1vw] bg-white p-[2vh] flex gap-[1vw] border-2">
                <label htmlFor="email">Website</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter website here"
                  className="w-full outline-none text-[#8282FF] font-[500]"
                />
              </div>
            </form>
          </div>
          <div className=" w-full flex justify-end">
            <button
              onClick={handleCount}
              className="button-bg hover-button relative bg-[#EDF82D] max-w-fit px-[3vh] py-[2vh] rounded-full flex items-center gap-[.5vw] overflow-hidden"
            >
              <div className="relative flex items-center gap-[.5vw] bg-transparent">
                <span className="font-[700] text-[1vw]">Next</span>
                <OutLinkArrow
                  rightArrow={true}
                  color="#282866"
                  size="2vh"
                  strokeWidth={5}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepModalBasic;
