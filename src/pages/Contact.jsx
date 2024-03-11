import { Link } from "react-router-dom";
import { subscribArrow } from "../../public/svg";

const Contact = () => {
  return (
    <div className=" w-full h-full">
      <section className=" w-full h-full ">
        <div className=" w-full h-[100vh] px-[5%] py-[10vh] mt-[20vh] flex flex-row gap-[10vh]">
          <div className=" w-[40vw] flex flex-col justify-between">
            <div>
              <h1 className="text-[10vh] leading-none text-[#282866]">
                Get in <br />
                <span className="text-[#8282FF]">touch</span>
              </h1>
            </div>
          </div>
          <div className=" w-[40vw]">
            <div className=" w-[45%] flex flex-col gap-[5vh] text-[4vh] text-[#282866] ">
              <div className="flex flex-col">
                <div className="flex gap-[1vw]">
                  <Link
                    to={"mailto:mia@unicom.au"}
                    className="hover:text-[#8282FF]"
                  >
                    mia@unicom.au
                  </Link>
                  <img
                    src={subscribArrow}
                    alt="union Arrow"
                    className="w-[.8vw] font-[700] hover:text-[#8282FF]"
                  />
                </div>

                <p className="hover:text-[#8282FF]">+61 410 540 040</p>
              </div>
              <p className="hover:text-[#8282FF]">
                2/222 Kings Way South Melbourne 3205 Victoria Australia
              </p>
              <div className="flex gap-[1vw]">
                <p className="hover:text-[#8282FF]">Map</p>
                <img
                  src={subscribArrow}
                  alt="union Arrow"
                  className="w-[.8vw] font-[700] hover:text-[#8282FF]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
