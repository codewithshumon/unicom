import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  landingProfileGirl,
  landingProfileGirlTwo,
  landingProfileMen,
} from "../../assets/images";

const LandingImage = () => {
  useEffect(() => {
    const process = document.querySelector(".image-section");
    let sections = gsap.utils.toArray(".image-item");

    gsap.registerPlugin(ScrollTrigger);

    {
      if (typeof process != "undefined" && process != null) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: process,
            markers: false,
            scrub: 1,
            pin: true,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + process.offsetWidth,
          },
        });
      }
    }
  });
  return (
    <div className="image-section w-full h-full relative bg-red-400">
      <div className=" w-[300vw] h-full overflow-hidden flex">
        <div className="image-item">
          <img
            src={landingProfileGirl}
            className="w-[100vw] h-full object-cover"
            alt="Girl"
          />
        </div>
        <div className="image-item">
          <img
            src={landingProfileGirlTwo}
            className="w-[100vw] h-full object-cover"
            alt="Girl Two"
          />
        </div>
        <div className="image-item">
          <img
            src={landingProfileMen}
            className="w-[100vw] h-full object-cover"
            alt="Men"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingImage;
