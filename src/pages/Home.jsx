import { Link } from "react-router-dom";

import ServayCard from "../components/landing/ServayCard";
import { FindGrants } from "../components/global";

import {
  customerReview,
  landingBlob,
  landingProfileGirl,
} from "./../assets/images/";
import { unionLeftArrow, unionRightArrow } from "../../public/svg";
import CircleCard from "./sections/CircleCard";
//import CircleCard from "./sections/CircleCard";

const Home = () => {
  return (
    <>
      <section className="w-full h-full landing-bg flex">
        <div className="w-full relative">
          <div className="absolute w-full px-[5%] top-[70vh] flex justify-between">
            <div className="w-full relative ">
              <div className="w-full flex items-end justify-between ">
                <div className=" ">
                  <h1 className="text-[13vh] text-[#282866] font-[600] leading-none">
                    Find funding you <br />
                    didn&apos;t know existed.
                  </h1>
                </div>
                <FindGrants />
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
      </section>

      <section className="w-full h-full">
        <div className=" h-full">
          <img src={landingProfileGirl} className=" w-full  bg-cover" />
        </div>
      </section>

      <section className="relative">
        <div className="card-gradient-bg sticky top-0">
          <div className="h-[50vh]">
            <ServayCard
              title="Fill out the Survey"
              titleNumber="01"
              subtitle="Easy Process"
              para="You can fill out the survey by filling out the survey to get the survey yes thats right."
            />
          </div>
        </div>
        <div className="card-gradient-bg sticky top-[20vh] mt-[-1vh]">
          <div className="h-[50vh]">
            <ServayCard
              title="Get Connected"
              titleNumber="02"
              subtitle="Easy Process"
              para="You can fill out the survey by filling out the survey to get the survey yes thats right."
            />
          </div>
        </div>
        <div className="card-gradient-bg sticky top-[40vh] mt-[-1vh]">
          <div className="h-[50vh]">
            <ServayCard
              title="Get Funded"
              titleNumber="03"
              subtitle="Easy Process"
              para="You can fill out the survey by filling out the survey to get the survey yes thats right."
            />
          </div>
        </div>
      </section>

      <section className="w-full h-full landing-bg ">
        <CircleCard />
      </section>

      <section>
        <div>
          <div className=" w-full h-[70vh] px-[5%] py-[10vh]">
            <div className="w-full h-full flex flex-row gap-[10vw]">
              <div className="w-[40vw] h-full">
                <div className=" h-full flex flex-col justify-between">
                  <h1 className="font-[600] text-[8vh] leading-none text-[#282866]">
                    Real stories, significant <br />
                    <span className="text-[#8282FF]">achievements</span>
                  </h1>
                  <div className="w-full flex items-center ">
                    <div className="flex items-center justify-center gap-4">
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
              </div>
              <div className="w-[40vw] h-full flex flex-col justify-between ">
                <div className=" w-full text-[5vh] leading-[4.5vh] pr-[3vw] ">
                  <p>
                    UNICOM are the best matchmakers for the right people I
                    needed to stabilise my business. They gave me 2 funding
                    options including an energy rebate and a R&D grant. Then
                    their partners helped manage the whole process. It was
                    awesome!
                  </p>
                </div>
                <div className=" w-full flex flex-row items-center gap-[1vw]">
                  <div>
                    <img
                      src={customerReview}
                      alt="customer Review"
                      className="h-[12vh]"
                    />
                  </div>
                  <div>
                    <h2>Marko Papuckovski</h2>
                    <h2>Founder at Humanli Wellness</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full px-[5%]">
            <div className=" w-full  h-[.4vh] rounded-full bg-[#282866] "></div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="w-full h-full px-[5%] pb-[15vh]">
            <div className="">
              <div className=" w-full h-[15vh] flex items-center justify-between  ">
                <div className="w-[40vw]">
                  <h1 className="text-[#282866] font-[600] text-[8vh]">
                    Got a question?
                  </h1>
                </div>
                <div className="w-[40vw] font-DmSans font-[400] text-[#282866] text-[2vh]">
                  <p>We are here to answer any burning</p>
                  <p>questions and ensure you are taken care of.</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="">
              <div className=" w-full h-[15vh] flex items-center justify-between  ">
                <div className="">
                  <h1 className="text-[#282866] font-[600] text-[5vh]">
                    How much does this service cost?
                  </h1>
                </div>
                <div className=" font-DmSans font-[400] text-[#282866] text-[5vh] pr-[2vw]">
                  <span>+</span>
                </div>
              </div>
              <hr />
            </div>
            <div className="">
              <div className=" w-full h-[15vh] flex items-center justify-between  ">
                <div className="">
                  <h1 className="text-[#282866] font-[600] text-[5vh]">
                    Who are the specialists who will apply for the funding?
                  </h1>
                </div>
                <div className=" font-DmSans font-[400] text-[#282866] text-[5vh] pr-[2vw]">
                  <span>+</span>
                </div>
              </div>
              <hr />
            </div>
            <div className="">
              <div className=" w-full h-[15vh] flex items-center justify-between  ">
                <div className="">
                  <h1 className="text-[#282866] font-[600] text-[5vh]">
                    Will you connect me with VCs?
                  </h1>
                </div>
                <div className=" font-DmSans font-[400] text-[#282866] text-[5vh] pr-[2vw]">
                  <span>+</span>
                </div>
              </div>
              <hr />
            </div>
            <div className="">
              <div className=" w-full h-[15vh] flex items-center justify-between  ">
                <div className="">
                  <h1 className="text-[#282866] font-[600] text-[5vh]">
                    What funding will I be eligible for?
                  </h1>
                </div>
                <div className=" font-DmSans font-[400] text-[#282866] text-[5vh] pr-[2vw]">
                  <span>+</span>
                </div>
              </div>
              <hr />
            </div>
            <div className="">
              <div className=" w-full h-[15vh] flex items-center justify-between  ">
                <div className="">
                  <h1 className="text-[#282866] font-[600] text-[5vh]">
                    What other services can I be connected to?
                  </h1>
                </div>
                <div className=" font-DmSans font-[400] text-[#282866] text-[5vh] pr-[2vw]">
                  <span>+</span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
