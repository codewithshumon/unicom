import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { brandLogo, brandName } from "../../../public/svg";
import { UnionUpDownArrow } from "../../components/global";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="w-full h-[10vh] absolute top-0 left-0 mt-[2%] z-[999]">
      <div className=" flex items-center justify-between px-[5%]">
        <Link to="/" className=" flex items-center gap-[1.5vw]">
          <img src={brandLogo} alt={"brand logo"} className="w-[4vw] h-[4vw]" />
          <div className=" ">
            <img src={brandName} className="w-[10vw] h-[auto] bg-cover" />
          </div>
        </Link>
        <div className="h-full flex items-center gap-[1.5vw]">
          {pathname === "/funding-options" && (
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
          <div className="w-[4vw] h-[4vw] rounded-full bg-[#282866] flex items-center justify-center cursor-pointer ">
            <button className="flex flex-col gap-[1vh] w-[65%]  ">
              <div className=" w-full h-[.5vh] bg-[#74FFFE] rounded-full"></div>
              <div className=" w-full h-[.5vh] bg-[#74FFFE] rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
