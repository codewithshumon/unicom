import { Link } from "react-router-dom";
import { useState } from "react";

import { OutLinkArrow } from "../components/global";

const Contact = () => {
  const [isHoverMail, setIsHoverMail] = useState(false);
  const [isHoverMap, setIsHoverMap] = useState(false);
  return (
    <div className="w-full h-full">
      <section className=" w-full h-full ">
        <div className=" w-full h-[100vh] px-[5%]  pt-[40vh] mb-[20vh] flex flex-row gap-[10vh]">
          <div className=" w-[40vw] flex flex-col justify-between">
            <div>
              <h1 className="text-[10vh] leading-none text-[#282866]">
                Get in <br />
                <span className="text-[#8282FF]">touch</span>
              </h1>
            </div>
          </div>
          <div className=" w-[40vw]">
            <div className=" w-[45%] flex flex-col gap-[5vh] text-[4vh] text-[#282866] ">
              <div className="flex flex-col gap-[1vh]">
                <div
                  onMouseEnter={() => setIsHoverMail(true)}
                  onMouseLeave={() => setIsHoverMail(false)}
                  className="flex gap-[2vh] "
                >
                  <Link
                    to={"mailto:mia@unicom.au"}
                    className={`${
                      isHoverMail ? "text-[#8282FF]" : "text-[#282866]"
                    }`}
                  >
                    mia@unicom.au
                  </Link>
                  <div className="">
                    <OutLinkArrow
                      rightArrow={true}
                      color={`${isHoverMail ? "#8282FF" : "#282866"}`}
                      size="3vh"
                    />
                  </div>
                </div>

                <p className="hover:text-[#8282FF]">+61 410 540 040</p>
              </div>
              <p className="hover:text-[#8282FF]">
                2/222 Kings Way South Melbourne 3205 Victoria Australia
              </p>
              <div
                onMouseEnter={() => setIsHoverMap(true)}
                onMouseLeave={() => setIsHoverMap(false)}
                className="flex gap-[2vh] cursor-pointer"
              >
                <p
                  className={`${
                    isHoverMap ? "text-[#8282FF]" : "text-[#282866]"
                  }`}
                >
                  Map
                </p>
                <div className="">
                  <OutLinkArrow
                    color={`${isHoverMap ? "#8282FF" : "#282866"}`}
                    size="3vh"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
