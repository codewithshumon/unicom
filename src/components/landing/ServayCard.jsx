/* eslint-disable react/prop-types */
const ServayCard = ({ title, titleNumber, subtitle, para }) => {
  return (
    <div className="w-full h-full px-[5%] pt-[5vh] py-[10vh] flex flex-col justify-between">
      <div className="text-[10vh] flex items-center justify-between  ">
        <h1 className="text-[#74FFFE] font-[600]">{title}</h1>
        <span className="text-[#EDF82D] font-[700]">{titleNumber}</span>
      </div>
      <div className=" text-white flex items-center justify-between text-start">
        <h2 className="font-DmSans font-[700] text-[4vh]">{subtitle}</h2>
        <p className=" w-[62vh] font-DmSans font-[700] text-[3vh] text-start">
          {para}
        </p>
      </div>
    </div>
  );
};

export default ServayCard;
