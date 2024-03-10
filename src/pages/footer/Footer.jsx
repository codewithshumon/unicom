import { unionArrow } from "../../../public/svg";
import { footerBlob } from "../../assets/images";

const Footer = () => {
  return (
    <div>
      <div className=" w-full h-full landing-bg py-[10vh] ">
        <div className=" absolute px-[5%]  w-full h-full flex items-center justify-center">
          <div className=" w-full h-full relative">
            <div className=" w-full  h-full flex items-center justify-center">
              <div>
                <div className=" w-[60vw] flex flex-col items-center justify-center gap-[4vh]">
                  <p className=" font-DmSans font-[500] text-[#282866] text-[4vh]">
                    We are here to help.
                  </p>
                  <h1 className="text-[#282866] font-[600] text-[4vw] text-center leading-none">
                    Keep your business stable during uncertain times.
                  </h1>
                  <div>
                    <div className="flex items-center font-DmSans font-[400] text-[2vh] text-[#282866] gap-[3vh]">
                      <button className=" w-[10vh] h-[10vh] p-[3vh]  bg-[#EDF82D] flex items-center justify-center rounded-full">
                        <img
                          src={unionArrow}
                          alt="union Arrow"
                          className=" text-white"
                        />
                      </button>
                      <p className="">
                        Find grants, rebates <br /> and VC funding. <br />{" "}
                        Success fee only*
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full absolute top-[97vh]">
              <div className=" w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between gap-[1vw] text-[#282866] text-[2vh]">
                  <h2 className="">© 2023 UNICOM</h2>
                  <div className=" w-[0.5vh] h-[0.5vh] bg-[#282866] rounded-full"></div>
                  <h2>Terms & Conditions</h2>
                  <div className="  w-[0.5vh] h-[0.5vh] bg-[#282866] rounded-full"></div>
                  <h2>Legal</h2>
                </div>
                <div className="text-[#282866] text-[2vh]">
                  <p>Design by Artillery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full flex items-center justify-center ">
          <img
            src={footerBlob}
            alt="footer blob"
            className="h-screen mr-[-5vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
