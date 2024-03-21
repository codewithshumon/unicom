import { Link } from "react-router-dom";
import gsap from "gsap";

import { brandName, brandNameWite } from "../../../public/svg";
import { BrandLogo, UnionUpDownArrow } from "../../components/global";
import { useEffect, useMemo, useRef, useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [handleStyle, setHandleStyle] = useState("translate-y-0");

  useEffect(() => {
    if (!isOpenMenu) {
      const timeoutId = setTimeout(() => {
        setHandleStyle("translate-y-[-100%]");
      }, 1500);

      return () => clearTimeout(timeoutId);
    } else {
      setHandleStyle("translate-y-0");
    }
  }, [isOpenMenu]);

  const tl = useRef(gsap.timeline());

  tl.current
    .to(".menu-bar-one", { rotate: 45, y: 4 })
    .to(".menu-bar-two", { rotate: -45, y: -4 }, "-=0.3");

  useMemo(() => {
    if (isOpenMenu) {
      tl.current.pause(1).play();
    } else {
      tl.current.pause(1).reverse();
    }
  }, [isOpenMenu]);

  return (
    <>
      <header className="w-full h-[10vh] absolute top-0 left-0 mt-[2%] z-[999] select-none">
        <div className="flex items-center justify-between px-[5%]">
          <Link to="/" className=" flex items-center gap-[1.5vw]">
            <BrandLogo color={isOpenMenu ? "#FFFFFF" : "#282866"} />
            <div className="">
              <img
                src={isOpenMenu ? brandNameWite : brandName}
                className="w-[10vw] h-[auto] bg-cover"
              />
            </div>
          </Link>
          <div className="h-full flex items-center gap-[3vw]">
            {window.location.pathname === "/funding-options" && (
              <div>
                <div
                  className={`${
                    isOpenMenu ? "text-[#FFFFFF]" : "text-[#282866]"
                  } flex gap-[1vw] text-[1.5vw]  font-[600]`}
                >
                  <h1>Choose Grants</h1>
                  <button className="flex items-center gap-[.5vw]">
                    <p
                      className={`${
                        isOpenMenu ? "text-[#FFFFFF]" : "text-[#4E4EFF]"
                      }`}
                    >
                      Click to select
                    </p>
                    <UnionUpDownArrow
                      downArrow={true}
                      color={isOpenMenu ? "#FFFFFF" : "#4E4EFF"}
                      size={"1vw"}
                      strokeWidth={".9vh"}
                    />
                  </button>
                </div>
              </div>
            )}
            <div className="flex items-center gap-[1vw]">
              <div>
                <h1
                  className={`${
                    isOpenMenu ? "text-[#FFFFFF]" : "text-[#282866]"
                  } text-[1.5vw] font-[600]`}
                >
                  {isOpenMenu ? "Close" : "Menu"}
                </h1>
              </div>
              <div
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className={`${
                  isOpenMenu ? "bg-[#74FFFE]" : "bg-[#292967]"
                } w-[4vw] h-[4vw] rounded-full flex items-center justify-center cursor-pointer`}
              >
                <button className="flex flex-col gap-[1vh] items-center justify-center w-[65%]  ">
                  <div
                    className={`menu-bar-one ${
                      isOpenMenu ? " bg-[#292967]" : "bg-[#74FFFE]"
                    }  w-[90%] h-[.5vh] rounded-full `}
                  ></div>
                  <div
                    className={`menu-bar-two ${
                      isOpenMenu ? " bg-[#292967]" : "bg-[#74FFFE]"
                    }  w-[90%] h-[.5vh] rounded-full `}
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={`${handleStyle} absolute w-full h-full z-[99]`}>
        <div className="w-full h-full ">
          <Menu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
        </div>
      </section>
    </>
  );
};

export default Header;
