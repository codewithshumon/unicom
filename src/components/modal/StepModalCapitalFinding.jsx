/* eslint-disable react/prop-types */
import { useState } from "react";
import { stepsBlob5 } from "../../assets/images";
import { OutLinkArrow } from "../global";

const StepModalCapitalFinding = ({ handleCount, handleCountBack }) => {
  const [isHover, setIsHover] = useState(false);
  const [formData, setFormData] = useState({
    questionOne: "",
    questionTwo: "",
    questionThree: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[40vw] h-full landing-bg relative ">
        <div className="absolute w-full h-full px-[10%] flex items-end justify-center">
          <div className="w-full h-[72vh] flex flex-col items-start justify-between pb-[5vh]">
            <div>
              <h1 className="w-[75%] font-[600] text-[#282866] text-[3vw] leading-none">
                Finding Venture Capital Funding
              </h1>
            </div>
            <div className="w-full">
              <div className=" w-full text-[#282866] text-[2vh] font-[600] flex items-center justify-between cursor-pointer ">
                <span className=" ">Basic Details</span>
                <span className="">Grant Options</span>
                <span className="">Reduce Energy Bills</span>
                <span className="text-[#4E4EFF]">Venture Capital Funding</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-end justify-start">
          <img src={stepsBlob5} className="h-[70vh]" />
        </div>
      </div>

      <div className="w-[60vw] h-full bg-white relative flex justify-center items-end">
        <div className="w-[60%] h-[72vh] pb-[5vh] text-[#282866] flex flex-col items-start justify-between gap-[2vh]">
          <div className="w-full">
            <form className="flex flex-col gap-[1vh] font-[600] text-[1vw] text-[#282866] ">
              <div>
                <div className="rounded-[1vw] bg-white p-[2vh] flex items-center justify-between">
                  <div>
                    <p>
                      Does your company make over 1 million <br /> in revenue
                      per year? year?
                    </p>
                  </div>
                  <div className="flex gap-[2vw]">
                    <div>
                      <label
                        htmlFor="yesOne"
                        className={`${
                          formData.questionOne === "yes"
                            ? "bg-[#4E4EFF] border-[#4E4EFF]  text-white"
                            : "border-[#282866]"
                        } border-2  rounded-full w-[3vw] h-[3vw] flex items-center justify-center cursor-pointer`}
                      >
                        Yes
                      </label>
                      <input
                        type="radio"
                        id="yesOne"
                        name="questionOne"
                        value="yes"
                        onChange={handleInputChange}
                        checked={formData.questionOne === "yes"}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="noOne"
                        className={`${
                          formData.questionOne === "no"
                            ? "bg-[#4E4EFF] border-[#4E4EFF]  text-white"
                            : "border-[#282866]"
                        } border-2  rounded-full w-[3vw] h-[3vw] flex items-center justify-center cursor-pointer`}
                      >
                        No
                      </label>
                      <input
                        type="radio"
                        id="noOne"
                        name="questionOne"
                        value="no"
                        onChange={handleInputChange}
                        checked={formData.questionOne === "no"}
                      />
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="rounded-[1vw] bg-white p-[2vh] flex items-center justify-between">
                  <div>
                    <p>
                      Have you ever raised venture <br /> capital in your
                      business?
                    </p>
                  </div>
                  <div className="flex gap-[2vw]">
                    <div>
                      <label
                        htmlFor="yesTwo"
                        className={`${
                          formData.questionTwo === "yes"
                            ? "bg-[#4E4EFF] border-[#4E4EFF]  text-white"
                            : "border-[#282866]"
                        } border-2  rounded-full w-[3vw] h-[3vw] flex items-center justify-center cursor-pointer`}
                      >
                        Yes
                      </label>
                      <input
                        type="radio"
                        id="yesTwo"
                        name="questionTwo"
                        value="yes"
                        onChange={handleInputChange}
                        checked={formData.questionTwo === "yes"}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="noTwo"
                        className={`${
                          formData.questionTwo === "no"
                            ? "bg-[#4E4EFF] border-[#4E4EFF]  text-white"
                            : "border-[#282866]"
                        } border-2  rounded-full w-[3vw] h-[3vw] flex items-center justify-center cursor-pointer`}
                      >
                        No
                      </label>
                      <input
                        type="radio"
                        id="noTwo"
                        name="questionTwo"
                        value="no"
                        onChange={handleInputChange}
                        checked={formData.questionTwo === "no"}
                      />
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="rounded-[1vw] bg-white p-[2vh] flex items-center justify-between">
                  <div>
                    <p>
                      Do you want us to put your company website <br />{" "}
                      information forward for investors (if eligible)
                    </p>
                  </div>
                  <div className="flex gap-[2vw]">
                    <div>
                      <label
                        htmlFor="yesThree"
                        className={`${
                          formData.questionThree === "yes"
                            ? "bg-[#4E4EFF] border-[#4E4EFF]  text-white"
                            : "border-[#282866]"
                        } border-2  rounded-full w-[3vw] h-[3vw] flex items-center justify-center cursor-pointer`}
                      >
                        Yes
                      </label>
                      <input
                        type="radio"
                        id="yesThree"
                        name="questionThree"
                        value="yes"
                        onChange={handleInputChange}
                        checked={formData.questionThree === "yes"}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="noThree"
                        className={`${
                          formData.questionThree === "no"
                            ? "bg-[#4E4EFF] border-[#4E4EFF]  text-white"
                            : "border-[#282866]"
                        } border-2  rounded-full w-[3vw] h-[3vw] flex items-center justify-center cursor-pointer`}
                      >
                        No
                      </label>
                      <input
                        type="radio"
                        id="noThree"
                        name="questionThree"
                        value="no"
                        onChange={handleInputChange}
                        checked={formData.questionThree === "no"}
                      />
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </form>
          </div>
          <div className=" w-full flex justify-between">
            <div className="">
              <button
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={handleCountBack}
                className="button-bg hover-button relative bg-transparent border-2 border-[#8282FF] max-w-fit px-[3vh] py-[1.5vh] rounded-full overflow-hidden"
              >
                <div className="relative flex items-center gap-[.5vw] bg-transparent">
                  <OutLinkArrow
                    leftArrow={true}
                    color={isHover ? "#292967" : "#8282FF"}
                    size="2vh"
                    strokeWidth={1}
                  />
                  <span
                    className={`${
                      isHover ? "text-[#292967]" : "text-[#8282FF]"
                    } font-[700] text-[1vw]`}
                  >
                    Go Back
                  </span>
                </div>
              </button>
            </div>

            <div className="">
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
    </div>
  );
};

export default StepModalCapitalFinding;
