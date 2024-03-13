import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import {
  unionLeftArrow,
  unionRightArrow,
  whiteBrandLogo,
} from "../../../public/svg";
import LandingCard from "../../components/landing/LandingCard";
import { useEffect } from "react";

const CircleCard = () => {
  console.clear();
  gsap.registerPlugin(Draggable, Flip);

  useEffect(() => {
    let wheel = document.getElementById("wheel"),
      images = gsap.utils.toArray(".circle-item"),
      cards = gsap.utils.toArray(".circle-item"),
      header = document.querySelector(".header"),
      slice = 360 / images.length,
      curRotation = 0,
      currentCard; // keep track of last clicked card so we can put it back
    console.log(wheel);
    function setup() {
      let radius = wheel.offsetWidth / 2,
        center = radius,
        DEG2RAD = Math.PI / 180;
      gsap.set(images, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice,
        xPercent: -50,
        yPercent: -50,
      });
    }

    setup();

    window.addEventListener("resize", setup);
    const d = Draggable.create(wheel, {
      allowContextMenu: true,
      type: "rotation",
      trigger: wheel,
      inertia: true,
      zIndexBoost: false,
      onDrag: () => (isRotating = true),
      onThrowComplete: () => (isRotating = false),
      snap: {
        rotation: gsap.utils.snap(360 / images.length),
      },
    })[0];

    cards.forEach((card) => card.addEventListener("click", onClickCard));

    header.addEventListener("click", closeCurrentCard);

    function closeCurrentCard() {
      if (currentCard) {
        let img = header.querySelector("img"),
          state = Flip.getState(img);
        currentCard.appendChild(img);
        Flip.from(state, {
          ease: "power1.inOut",
          scale: true,
        });
        currentCard = null;
      }
    }

    function onClickCard(e) {
      let card = e.target,
        image = card.querySelector("img");
      if (card !== currentCard) {
        closeCurrentCard();
        currentCard = card;
        let state = Flip.getState(image);
        header.appendChild(image);
        Flip.from(state, {
          duration: 0.6,
          scale: true,
          ease: "power1.inOut",
        });
      } else {
        closeCurrentCard();
      }
    }

    const rotationBtnComplete = () => {
      d.update();
    };

    const prevBtn = document.getElementById("prev");
    prevBtn.addEventListener("click", () => {
      curRotation += slice;
      gsap.to(wheel, {
        duration: 0.25,
        ease: "power1.inOut",
        rotation: curRotation,
        overwrite: "auto",
        onComplete: rotationBtnComplete,
      });
    });

    const nextBtn = document.getElementById("next");
    nextBtn.addEventListener("click", () => {
      curRotation -= slice;
      gsap.to(wheel, {
        duration: 0.25,
        ease: "power1.inOut",
        rotation: curRotation,
        overwrite: "auto",
        onComplete: rotationBtnComplete,
      });
    });
  }, []);

  return (
    <div className="w-full h-[130vh] relative">
      <div className=" absolute px-[5%] py-[5%] h-full flex flex-col justify-between z-10">
        <div>
          <h1 className="text-[#282866] text-[10vh] leading-none font-[600]">
            Choose <br />
            Funding Options
          </h1>
        </div>
        <div className=" absolute top-[45vh] max-w-[100vw] ">
          <div
            id="wheel"
            className="wheel w-full flex flex-row items-center justify-center gap-[2vw] circle-container"
          >
            <button className="circle-item">
              <LandingCard title="Energy Rebates" />
            </button>
            <button className="circle-item">
              <LandingCard title="Energy Rebates" />
            </button>
            <button className="circle-item">
              <LandingCard title="Energy Rebates" />
            </button>
            <button className="circle-item">
              <LandingCard title="Energy Rebates" />
            </button>
            <button className="circle-item">
              <LandingCard title="Energy Rebates" />
            </button>
            <button className="circle-item">
              <LandingCard title="Energy Rebates" />
            </button>
            <button className="circle-item">
              <LandingCard title="Energy Rebates" />
            </button>
            <button className="circle-item">
              <LandingCard title="Energy Rebates" />
            </button>
            <button className="circle-item">
              <LandingCard title="Energy Rebates" />
            </button>
            <button className="circle-item">
              <LandingCard title="Energy Rebates" />
            </button>
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
