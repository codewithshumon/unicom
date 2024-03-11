import { aboutGirl, aboutMan } from "../assets/images";

const AboutUs = () => {
  return (
    <div className=" w-full h-full">
      <section className=" w-full h-full">
        <div className="w-full h-full px-[5%] ">
          <div className=" w-full h-full relative flex items-end ">
            <div className="absolute top-[30vh] w-full h-[90vh] flex justify-between ">
              <div className="w-[50vw]">
                <h1 className="text-[#282866] text-[5vw] leading-none">
                  Our <br />
                  <span className="text-[#8282FF] font-[600] ">Story</span>
                </h1>
              </div>
              <div className="w-[50vw]">
                <div className=" w-[79%] text-[2vw] text-[#141041] h-full flex  flex-col justify-between ">
                  <p>
                    Our story began when our founders {""}
                    <span className="text-[#8282FF]">Mia Bowyer</span> and {""}
                    <span className="text-[#8282FF]">
                      Stevie Kimonides
                    </span>{" "}
                    united the best funding experts to help companies survive
                    uncertain times.
                  </p>
                  <p>
                    Many companies knew funding was available, but they had no
                    idea how to access it. They would browse the internet, fill
                    out complicated forms or miss out on funding altogether.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full h-[140vh] flex items-center justify-center pt-[5vh]">
              <h1 className="font-[500] font-DmSans text-[#E7E7FF] text-[8.86vw]">
                UNICOM WAS BORN.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100vw] h-full flex">
        <div className="w-[50vw] h-full relative px-[5%]  ">
          <div className=" ">
            <div className=" flex flex-col gap-[10vh]">
              <h1 className="text-[3vw] font-[600] text-[#282866] leading-none">
                Meet the <br />
                <span className="text-[#8282FF]">Founders</span>
              </h1>
              <div className="text-[#282866] text-[1.5vw] flex flex-col gap-[4vh] p-[2vh]">
                <h2 className="font-[700] text-[2vw]">Mia Bowyer</h2>
                <p>
                  Mia started her career in Social Media at Microsoft, then
                  moved to India to work reducing plastic and poverty through
                  ethical recycling. She then started an ethical social media
                  agency supporting organisations such as The United Nations.
                </p>
                <p>
                  Her passion for connecting people and helping companies thrive
                  during uncertain events, led her to UNICOM. She is dedicated
                  to finding grants, renewable energy rebates and funding
                  options for everyone she meets.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50vw] bg-black">
          <img src={aboutGirl} alt="about girl" className="w-[50vw]" />
        </div>
      </section>

      <section className="w-[100vw] h-full relative flex">
        <div className="w-[50vw]">
          <img src={aboutMan} alt="about girl" className="w-[50vw] bg-cover" />
        </div>
        <div className="w-[50vw] h-full relative px-[5%]  ">
          <div className=" mt-[40vh]">
            <div className="text-[#282866] text-[1.5vw] flex flex-col gap-[4vh] p-[2vh]">
              <h2 className="font-[700] text-[3vw]">Stevie Kimonides</h2>
              <p className=" font-DmSans font-[400]">
                Stevie comes from an established branding and investment
                background. He created the branding for 1000+ brands in
                Australia and APAC. He launched an award winning, 35+ person
                agency - Paramount.
              </p>
              <p className=" font-DmSans font-[400]">
                The notable brands include adidas, Australia Centenary of
                Federation, Transurban and CGU. He runs a loan agency for
                property developments, a trademarking business and is passionate
                about ‘connecting the dots’ between people and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
