import { brandLogo, brandName } from "../../../public/svg";

const Header = () => {
  return (
    <header className="w-full h-[10vh] absolute top-0 left-0 mt-[2%] z-[999] ">
      <div className=" flex items-center justify-between px-[5%]">
        <div className=" flex items-center gap-4">
          <img
            src={brandLogo}
            alt={"brand logo"}
            className="w-[50px] h-[50px]"
          />
          <img src={brandName} alt={"brand name "} />
        </div>
        <div className="h-full flex items-center gap-4">
          <p className="text-[26px] text-[#282866] font-[600]">Menu</p>
          <div className="w-[50px] h-[50px] rounded-full bg-[#282866] flex items-center justify-center ">
            <button className="flex flex-col gap-2 w-[65%]  ">
              <div className=" w-full h-[4px] bg-[#74FFFE] rounded-full"></div>
              <div className=" w-full h-[4px] bg-[#74FFFE] rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
