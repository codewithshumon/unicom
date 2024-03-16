import { useEffect, useRef } from "react";
import gsap from "gsap";
//import { Draggable } from "gsap/Draggable";
//import { Flip } from "gsap/Flip";
import {
  unionLeftArrow,
  unionRightArrow,
  whiteBrandLogo,
} from "../../../public/svg";
import LandingCard from "../../components/landing/LandingCard";

const CircleCard = () => {
  const circleItem = gsap.utils.toArray(".circle-item");
  let slice = 360 / circleItem.length;
  let curRotation = 0;
  const circleContainerRef = useRef();

  useEffect(() => {
    circleItem.forEach((item, index) => {
      gsap.set(item, {
        rotation: (360 / circleItem.length) * index,
        transformOrigin: "170px -720px",
      });
    });
  }, [circleItem]);

  useEffect(() => {
    gsap.set(circleContainerRef.current, {
      transformOrigin: "170px -720px",
    });
  }, []);

  const handlePrev = () => {
    curRotation += slice;

    rotateCircle();
  };

  const handleNext = () => {
    curRotation -= slice;
    rotateCircle();
  };

  const rotateCircle = () => {
    gsap.to(circleContainerRef.current, {
      duration: 0.25,
      ease: "power1.inOut",
      rotation: curRotation,
      overwrite: "auto",
    });
  };

  return (
    <div className="w-full h-[130vh] relative overflow-hidden">
      <div className="px-[5%] py-[5%] h-full flex flex-col justify-between z-10">
        <div>
          <h1 className="text-[#282866] text-[10vh] leading-none font-[600]">
            Choose <br />
            Funding Options
          </h1>
        </div>
        <div
          ref={circleContainerRef}
          className="absolute left-[40vw] top-[280vh] max-w-[100vw] "
        >
          <div className="w-full flex flex-row items-center justify-center ">
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
            <div className="wheel">
              <button className="circle-item">
                <LandingCard title="Energy Rebates" />
              </button>
            </div>
          </div>
        </div>
        <div className=" absolute left-[45vw] top-[110vh]">
          <div className=" w-full flex items-center justify-center gap-4">
            <div>
              <button
                onClick={handlePrev}
                className=" relative border-[2px] border-[#282866] w-[3.5vw] h-[3.5vw] rounded-full p-[2vh] "
              >
                <img
                  src={unionLeftArrow}
                  className=" w-full flex items-center justify-center"
                />
              </button>
            </div>
            <div>
              <button
                onClick={handleNext}
                className=" relative border-[2px] border-[#282866] w-[3.5vw] h-[3.5vw] rounded-full p-[2vh] "
              >
                <img
                  src={unionRightArrow}
                  className="w-full flex items-center justify-center"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src={whiteBrandLogo}
          alt="landing blob"
          className=" h-[120vh] opacity-50 mr-[-5%] "
        />
      </div>
    </div>
  );
};

export default CircleCard;
