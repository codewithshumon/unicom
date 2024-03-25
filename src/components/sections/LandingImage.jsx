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
    gsap.registerPlugin(ScrollTrigger);

    const animateSections = () => {
      let sections = gsap.utils.toArray(".image-item");
      const imageSection = document.querySelector(".image-section");

      if (!imageSection) return;

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".image-section",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + imageSection.offsetWidth,
        },
      });
    };

    animateSections();

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="image-section w-[300vw] h-full overflow-hidden flex">
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
