import { Link } from "react-router-dom";
import gsap from "gsap";

import { brandLogo, brandName } from "../../../public/svg";
import { UnionUpDownArrow } from "../../components/global";
import { useEffect, useMemo, useRef, useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const tl = useRef(gsap.timeline());

  console.log("isOpenMenu", isOpenMenu);

  useEffect(() => {
    tl.current
      .to(".menu-bar-one", { rotateX: 45 })
      .to(".menu-bar-two", { duration: 0, rotateX: -45 });
  }, []);

  useMemo(() => {
    if (isOpenMenu) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.pause(1).reverse();
      document.body.style.overflow = "unset";
    }
  }, [isOpenMenu]);

  return (
    <>
      <header className="w-full h-[10vh] absolute top-0 left-0 mt-[2%] z-[999] select-none">
        {isOpenMenu && (
          <nav className="flex items-center justify-between px-[5%]">
            <Link to="/" className=" flex items-center gap-[1.5vw]">
              <img
                src={brandLogo}
                alt={"brand logo"}
                className="w-[4vw] h-[4vw]"
              />
              <div className=" ">
                <img src={brandName} className="w-[10vw] h-[auto] bg-cover" />
              </div>
            </Link>
            <div className="h-full flex items-center gap-[1.5vw]">
              <div>
                <h1 className="text-[1.5vw] text-[#FFFFFF] font-[600]">
                  Close
                </h1>
              </div>
              <div
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="w-[4vw] h-[4vw] rounded-full bg-[#74FFFE] flex items-center justify-center cursor-pointer "
              >
                <button className="flex flex-col gap-[1vh] w-[65%]  ">
                  <div className=" w-full h-[.5vh] bg-[#292967] rounded-full"></div>
                  <div className=" w-full h-[.5vh] bg-[#292967] rounded-full"></div>
                </button>
              </div>
            </div>
          </nav>
        )}
        <div
          className={`${
            isOpenMenu ? "hidden" : "block"
          } flex items-center justify-between px-[5%]`}
        >
          <Link to="/" className=" flex items-center gap-[1.5vw]">
            <img
              src={brandLogo}
              alt={"brand logo"}
              className="w-[4vw] h-[4vw]"
            />
            <div className=" ">
              <img src={brandName} className="w-[10vw] h-[auto] bg-cover" />
            </div>
          </Link>
          <div className="h-full flex items-center gap-[1.5vw]">
            {window.location.pathname === "/funding-options" && (
              <div>
                <div className="flex gap-[1vw] text-[1.5vw] text-[#282866] font-[600]">
                  <h1>Choose Grants</h1>
                  <button className="flex items-center gap-[.5vw]">
                    <p className="text-[#4E4EFF]">Click to select</p>
                    <UnionUpDownArrow
                      downArrow={true}
                      color={"#4E4EFF"}
                      size={"1vw"}
                      strokeWidth={".9vh"}
                    />
                  </button>
                </div>
              </div>
            )}
            <div>
              <h1 className="text-[1.5vw] text-[#282866] font-[600]">Menu</h1>
            </div>
            <div
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="w-[4vw] h-[4vw] rounded-full bg-[#282866] flex items-center justify-center cursor-pointer "
            >
              <button className="flex flex-col gap-[1vh] w-[65%]  ">
                <div className=" w-full h-[.5vh] bg-[#74FFFE] rounded-full"></div>
                <div className=" w-full h-[.5vh] bg-[#74FFFE] rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className=" absolute w-full h-full z-[99]">
        <div className="  w-full h-full ">
          <Menu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
        </div>
      </div>
    </>
  );
};

export default Header;
