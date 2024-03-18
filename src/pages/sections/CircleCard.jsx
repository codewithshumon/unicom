import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  unionLeftArrow,
  unionRightArrow,
  whiteBrandLogo,
} from "../../../public/svg";
import LandingCard from "../../components/landing/LandingCard";

const CircleCard = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let wheel = document.querySelector(".wheel");
    let images = gsap.utils.toArray(".wheel__card");

    function setup() {
      let radius = wheel.offsetWidth / 2,
        center = radius,
        slice = 360 / images.length,
        DEG2RAD = Math.PI / 180;
      gsap.set(images, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice + 1,
      });
    }

    setup();
    window.addEventListener("resize", setup);

    // gsap.to(wheel, {
    //   rotation: -360,
    //   ease: "none",
    //   duration: images.length,
    //   scrollTrigger: {
    //     start: 0,
    //     end: "max",
    //     scrub: 1,
    //   },
    // });

    return () => {
      window.removeEventListener("resize", setup);
    };
  }, []);
  return (
    <div className="w-full h-[130vh] relative overflow-hidden">
      <div className="px-[5%] py-[5%] h-full flex flex-col justify-between z-10">
        <div>
          <h1 className="text-[#282866] text-[10vh] leading-none font-[600]">
            Choose <br />
            Funding Options
          </h1>
        </div>
        <div className=" w-full h-full relative">
          <div className="wheel absolute top-[5vh] left-[-65vw] w-[200vw]">
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
              <LandingCard title="Government Rebates" />
            </div>
            <div className="wheel__card">
              <LandingCard title="Government Rebates" />
            </div>
          </div>
        </div>
        <div className=" absolute left-[45vw] top-[110vh]">
          <div className=" w-full flex items-center justify-center gap-4">
            <div>
              <button className=" relative border-[2px] border-[#282866] w-[3.5vw] h-[3.5vw] rounded-full p-[2vh] ">
                <img
                  src={unionLeftArrow}
                  className=" w-full flex items-center justify-center"
                />
              </button>
            </div>
            <div>
              <button className=" relative border-[2px] border-[#282866] w-[3.5vw] h-[3.5vw] rounded-full p-[2vh] ">
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
