import { Link } from "react-router-dom";

import ServayCard from "../components/landing/ServayCard";
import { landingBlob, landingProfileGirl } from "./../assets/images/";
import {
  unionArrow,
  unionLeftArrow,
  unionRightArrow,
  whiteBrandLogo,
} from "../../public/svg";

const Home = () => {
  return (
    <section>
      <div className="">
        <div className="w-full h-full landing-bg flex">
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
                      fee only*
                    </p>
                  </div>
                </div>

                <div className=" w-full mt-[10vh] ">
                  <div className=" w-[50vw] text-[5vh] mx-auto leading-[6vh] flex flex-col gap-[3vh]">
                    <p className=" ">
                      Cash flow is a major issue for companies. However 90%* of
                      businesses are unaware of the funding or grant options
                      available to them.
                    </p>
                    <p>
                      We have found three major groups of funding and the right
                      specialists to help you apply so you don’t miss out on
                      opportunities.
                    </p>
                  </div>
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
              <img src={landingBlob} alt="landing blob" />
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <div className=" h-full">
            <img src={landingProfileGirl} className=" w-full  bg-cover" />
          </div>
        </div>

        <div className="">
          <div className="card-gradient-bg">
            <div className="h-[50vh] ">
              <ServayCard
                title="Fill out the Survey"
                titleNumber="01"
                subtitle="Easy Process"
                para="You can fill out the survey by filling out the survey to get
                  the survey yes thats right."
              />
            </div>
          </div>
          <div className="card-gradient-bg">
            <div className=" h-[50vh] ">
              <ServayCard
                title="Get Connected"
                titleNumber="02"
                subtitle="Easy Process"
                para="You can fill out the survey by filling out the survey to get
                  the survey yes thats right."
              />
            </div>
          </div>
          <div className="card-gradient-bg">
            <div className=" h-[50vh] ">
              <ServayCard
                title="Get Funded"
                titleNumber="03"
                subtitle="Easy Process"
                para="You can fill out the survey by filling out the survey to get
                  the survey yes thats right."
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full landing-bg overflow-x-hidden">
          <div className="w-full h-full">
            <div className=" w-full h-full relative">
              <div>
                <h1 className="text-[#282866]">
                  Choose <br />
                  Funding Options
                </h1>
              </div>
              <div className="">
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <div className=" relative border-[2px] border-[#282866] w-[50px] h-[50px] rounded-full p-2 ">
                      <img
                        src={unionLeftArrow}
                        className="  flex items-center justify-center "
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" relative border-[2px] border-[#282866] w-[50px] h-[50px] rounded-full p-2">
                      <img
                        src={unionRightArrow}
                        className=" flex items-center justify-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <img
                src={whiteBrandLogo}
                alt="landing blob"
                className=" h-screen opacity-50 mr-[-5%] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
