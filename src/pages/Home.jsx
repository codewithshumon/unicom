import { Link } from "react-router-dom";
import landingBlog from "./../assets/images/landingBlob.png";
import unionArrow from "././../../public/unionArrow.svg";

const Home = () => {
  return (
    <section>
      <div>
        <div className="w-full h-full gradient-bg flex">
          <div className="w-full relative">
            <div className="absolute w-full px-[5%] top-[70vh] flex justify-between">
              <div className="w-full relative ">
                <div className=" w-full  flex items-end justify-between">
                  <div className=" ">
                    <h1 className="text-[13vh] text-[#282866] font-[600] leading-none">
                      Find funding you <br />
                      didn&apos;t know existed.
                    </h1>
                  </div>
                  <div className="flex items-center font-DmSans font-[400] text-[2vh] text-[#282866] gap-[3vh]">
                    <button className=" w-[10vh] h-[10vh] p-[3vh]  bg-[#EDF82D] flex items-center justify-center rounded-full">
                      <img
                        src={unionArrow}
                        alt="union Arrow"
                        className=" text-white"
                      />
                    </button>
                    <p className="">
                      Find grants, rebates <br /> and VC funding. <br /> Success
                      fee only
                    </p>
                  </div>
                </div>

                <div className=" w-full mt-[10vh] ">
                  <p className=" w-[50vw] text-[5vh] mx-auto ">
                    Cash flow is a major issue for companies. However 90%* of
                    businesses are unaware of the funding or grant options
                    available to them. We have found three major groups of
                    funding and the right specialists to help you apply so you
                    don’t miss out on opportunities.
                  </p>
                </div>

                <div className=" absolute left-0 bottom-0">
                  <Link
                    to={"/"}
                    className="text-[2.5vh] font-DmSans font-[700] text-[#282866]"
                  >
                    How it works?
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-end pb-[10vh]">
              <img src={landingBlog} alt="landing blob" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
