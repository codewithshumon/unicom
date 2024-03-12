import { subscribArrow } from "../../public/svg";
import { BrandLogo, FindGrants } from "../components/global";

const ReferralEngine = () => {
  return (
    <div className=" w-full h-full">
      <section className=" w-full h-full ">
        <div className=" w-full h-[100vh] px-[5%] py-[10vh] pt-[24vh] flex flex-row gap-[10vh]">
          <div className=" w-[40vw] flex flex-col justify-between pb-[10vh]">
            <div>
              <h1 className="text-[10vh] leading-none text-[#282866]">
                Referral <br />
                <span className="text-[#8282FF]">Engine</span>
              </h1>
            </div>
            <FindGrants />
          </div>
          <div className=" w-[40vw]">
            <div className=" w-[85%] flex flex-col gap-[5vh] text-[4vh] text-[#282866]">
              <p>
                You know there is funding out there, but you don’t know who to
                talk to or where to find it.
              </p>
              <p>
                You have your funding, now what? We find once companies are
                stabilised and supported with their bills and cash flow, it is a
                time to think of sustainable growth.
              </p>
              <p>
                That’s why we have a specialist referral engine. We connect you
                with the best specialist to growyour business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full h-full">
        <div className=" w-full h-full px-[5%] pb-[15vh]">
          <div className=" w-full flex flex-col gap-[10vh] px-[10vh] text-[#282866]">
            <h1 className="font-[600] text-[9vh] leading-none ">
              We have <span className="text-[#8282FF]">over 110+</span>{" "}
              marketing, lead gen, website, app development, legal and branding
              experts that will{" "}
              <span className="text-[#8282FF]">
                ensure your brand can withstand the test of time.
              </span>
            </h1>
            <div className="w-full flex flex-row items-end ">
              <div className="w-[50%] ">
                <BrandLogo color={"#8282FF"} className={"w-[5vw]"} />
              </div>
              <div className="w-[50%]">
                <div className="w-[85%] font-[400] text-[4vh] flex flex-col gap-[5vh]">
                  <p>
                    This is a nimble model, so instead of hiring a whole team,
                    you can slot in and out services when you need it.
                  </p>
                  <p>
                    By creating an agile time, you mitigate your risk of
                    redundancies, while accessing the best talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full h-full refarrel-engine-gradient">
        <div className="w-full h-[80vh]">
          <div className=" w-full h-full px-[5%] py-[20vh] flex flex-row">
            <div className="w-[50%] h-full ">
              <div className="w-[40%] h-full flex flex-col justify-between">
                <h1 className="text-[#74FFFE] text-[5vw] leading-none">
                  Keep <br /> <span>Updated</span>
                </h1>
                <p className="text-[#FFFFFF] text-[2.8vh]">
                  We send regular emails to share ideas on who you should know
                  or be connected with.
                </p>
              </div>
            </div>
            <div className="w-[50%]">
              <div className=" w-[60%] flex flex-col gap-[2vh]">
                <div className="text-[#FFFFFF]">
                  <h2 className=" font-DmSans font-[400] text-[3vh]">
                    Subscribe to our publications
                  </h2>
                </div>
                <div className="flex flex-col gap-[1vh] font-[600] text-[1vw] text-[#282866] ">
                  <div className="rounded-[1vw] bg-white p-[2vh] flex gap-[1vw]  ]">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name here"
                      className="outline-none text-[#8282FF] font-[500]"
                    />
                  </div>
                  <div className="rounded-[1vw] bg-white p-[2vh] flex gap-[1vw]">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email here"
                      className="outline-none text-[#8282FF] font-[500]"
                    />
                  </div>
                </div>
                <div className="">
                  <button className="text-[#282866] font-[700] flex gap-[1vh] bg-[#EDF82D] px-[4vh] py-[2vh] rounded-full items-center">
                    <span className="text-[1vw]">Subscribe</span>
                    <img
                      src={subscribArrow}
                      alt="union Arrow"
                      className="w-[.8vw] font-[700]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferralEngine;
