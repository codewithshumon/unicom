const StepModalDone = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[35vw] h-full relative ">
        <div className="w-full mt-[40vh] pl-[5vw] font-[600] text-[#282866] text-[3vw]">
          <h1 className="text-[10vh] leading-none">
            You are <br />
            <span className="text-[#8282FF]">Done</span>
          </h1>
        </div>
      </div>
      <div className="w-[65vw] h-full bg-white relative ">
        <div className="w-[60%] h-full text-[#282866] mt-[40vh] ">
          <div>
            <p className="text-[2vw]">
              Thank you for your information. We will assess your answers and
              connect you with the right partners if you are eligible for any of
              the programs we have running.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepModalDone;
