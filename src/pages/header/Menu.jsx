/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

import {
  FindGrants,
  OutLinkArrow,
  UnionRightLeftArrow,
} from "../../components/global";

const navMenus = [
  { path: "/about-us", display: "About" },
  { path: "/funding-options", display: "Funding Options" },
  { path: "/referral-engine", display: "Referral Engine" },
  { path: "/contact", display: "Contact" },
];

const Menu = ({ isOpen, setIsOpen }) => {
  const tl = useRef(gsap.timeline());

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, []);

  useEffect(() => {
    tl.current
      .to(".menu-reveal-anim", { y: 0 })
      .to(".up-down-anim", { duration: 0.5, y: 0 });
  }, []);

  useMemo(() => {
    if (isOpen) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.pause(1).reverse();
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="w-screen h-screen menu-gradient-bg menu-reveal-anim translate-y-[-100%] select-none"
    >
      <div className=" w-full h-full px-[5%] flex items-end">
        <div className=" w-full h-[80%] flex items-end py-[5vh] ">
          <div className="w-[50%] overflow-hidden">
            <FindGrants
              className="up-down-anim translate-y-[100%]"
              textColor="text-[#FFFFFF]"
            />
          </div>
          <div className="w-[50%] h-full flex flex-col justify-between">
            <div className="flex flex-col gap-[1vh] ">
              {navMenus.map((item) => (
                <div key={item.path}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "text-[#EDF82D]" : "text-[#FFFFFF]"
                    }
                  >
                    <div className="w-full">
                      <div className="text-[3.5vw] font-[600] leading-none overflow-hidden ">
                        <div className="flex items-center justify-start up-down-anim py-[1vh] translate-y-[100%]">
                          <div className="">
                            {item.path === window.location.pathname && (
                              <UnionRightLeftArrow
                                rightArrow={true}
                                color={"#EDF82D"}
                                size="3vw"
                                className={"mr-[1vw]"}
                              />
                            )}
                          </div>
                          <div>{item.display}</div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
            <div className="text-[#FFFFFF] leading-none text-[3vh] flex flex-col">
              <a
                href="https://linkedin.com/unicom"
                className=" overflow-hidden"
              >
                <div className="py-[.3vh]">
                  <div className="flex gap-[.4vw] up-down-anim translate-y-[120%]">
                    <p>LinkedIn</p>
                    <OutLinkArrow color="#FFFFFF" size="2vh" />
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com/unicom"
                className=" overflow-hidden"
              >
                <div className="py-[.3vh]">
                  <div className="flex gap-[.4vw]  up-down-anim translate-y-[120%] ">
                    <p>Instagram</p>
                    <OutLinkArrow color="#FFFFFF" size="2vh" />
                  </div>
                </div>
              </a>

              <a
                href="https://twitter.com/unicom"
                className=" overflow-hidden "
              >
                <div className="py-[.3vh]">
                  <div className="flex gap-[.4vw] up-down-anim translate-y-[120%] ">
                    <p>Twitter</p>
                    <OutLinkArrow color="#FFFFFF" size="2vh" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
