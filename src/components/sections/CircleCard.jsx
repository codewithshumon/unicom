/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import {
  unionLeftArrow,
  unionRightArrow,
  whiteBrandLogo,
} from "../../../public/svg";
import LandingCard from "../landing/LandingCard";

const CircleCard = () => {
  let wheel;
  let wheelCard;
  let slice;
  let curRotation = 0;
  let d;
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    wheel = document.querySelector(".wheel");
    wheelCard = gsap.utils.toArray(".wheel__card");
    slice = 360 / wheelCard.length;

    function setup() {
      let radius = wheel.offsetWidth / 2,
        center = radius,
        DEG2RAD = Math.PI / 180;
      gsap.set(wheelCard, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice + 4,
        xPercent: -50,
        yPercent: -50,
      });
    }
    setup();
    window.addEventListener("resize", setup);

    d = Draggable.create(wheel, {
      allowContextMenu: true,
      type: "rotation",
      trigger: wheel,
      inertia: true,
      zIndexBoost: false,
      onDrag: () => (isRotating = true),
      onThrowComplete: () => (isRotating = false),
      snap: {
        rotation: gsap.utils.snap(360 / wheelCard.length),
      },
    })[0];

    return () => {
      window.removeEventListener("resize", setup);
    };
  }, []);

  const rotationBtnComplete = () => {
    d.update();
  };

  const handlePrev = () => {
    curRotation += slice;
    rotateCircle();
  };

  const handleNext = () => {
    curRotation -= slice;
    rotateCircle();
  };

  const rotateCircle = () => {
    gsap.to(wheel, {
      duration: 0.8,
      ease: "power1.inOut",
      rotation: curRotation,
      overwrite: "auto",
      onComplete: rotationBtnComplete,
    });
  };

  return (
    <div className="w-full h-[140vh] relative overflow-hidden">
      <div className="px-[5%] py-[5%] h-full flex flex-col justify-between z-10">
        <div>
          <h1 className="text-[#282866] text-[10vh] leading-none font-[600]">
            Choose <br />
            Funding Options
          </h1>
        </div>
        <div className="w-full h-full absolute top-[50%] left-[8%] rotate-[-3.5deg]">
          <div className="relative">
            <div className="wheel">
              <div className="wheel__card">
                <LandingCard title="Energy Rebates" />
              </div>

              <div className="wheel__card">
                <LandingCard title="Venture Capital" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Government Rebates" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Energy Rebates" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Venture Capital" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Government Rebates" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Energy Rebates" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Venture Capital" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Government Rebates" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Energy Rebates" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Venture Capital" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Government Rebates" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Energy Rebates" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Venture Capital" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Government Rebates" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Energy Rebates" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Venture Capital" />
              </div>
              <div className="wheel__card">
                <LandingCard title="Government Rebates" />
              </div>
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
