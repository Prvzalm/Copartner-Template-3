import React from "react";
import { logo, userImg } from "../assets";
import { expertise_data, stock_data } from "../constants";
import { useNavigate } from "react-router-dom";

const HomePage = ({ token }) => {
  const navigate = useNavigate();

  const handleClickLink = (link) => {
    if (!token) {
      navigate("/login", { state: { link } });
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <div className="flex pt-[1.5rem] gap-4 md:flex justify-center">
        {expertise_data.map((expert, id) => {
          return (
            <div
              key={expert.id}
              className="md:h-[285px] h-[350px] gap-2 md:px-8 rounded-[11px] py-2 px-8 relative flex flex-col bg-[#18181B80] transition duration-150 ease-in-out bg-image-rays"
            >
              <div className="flex mt-1 justify-between">
                <span className="text-[12px] leading-[12px] text-[#C6CDD5] opacity-50">
                  SEBI: {expert.regNum}
                </span>
                <span className="text-[12px] leading-[12px] text-[#C6CDD5] opacity-50">
                  Followers
                </span>
              </div>
              <span className="text-[12px] flex justify-end leading-[12px] font-medium text-white mr-3">
                {expert.totalFollowers}
              </span>
              <div className="w-[280px] h-[140px] md:w-[256px] md:h-[146px]">
                <img
                  src={expert.userImg}
                  alt="User"
                  className="mx-auto profile-image-1 h-full object-contain rounded-full"
                />
              </div>

              <div className="text-center flex justify-center">
                  <span className="text-3xl font-[500] text-white">
                    {expert.name}
                  </span>
              </div>

              <div className="flex flex-1 justify-center items-center">
                <span className="text-[12px] leading-[12px] font-[500] text-dimWhite">
                  {expert.channelName}
                </span>
              </div>

              <button className="h-[40px] flex items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)] mt-2 md:mt-0 bg-[#0081F1]">
                <div
                  onClick={() => handleClickLink(expert.link)}
                  className="flex justify-center items-center gap-2"
                >
                  <img
                    src={expert.telegram}
                    alt="Telegram"
                    className="w-[24px] h-[24px]"
                  />
                  <div className="text-white font-[400] text-[16px] leading-[19px]">
                    {expert.greet}
                  </div>
                  <img
                    src={expert.arrowIcon}
                    alt="arrow"
                    className="w-[16px] h-[16px]"
                  />
                </div>
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex pt-[2rem] gap-4 md:flex justify-center relative pointer-events-none">
        {expertise_data.map((expert, id) => {
          return (
            <div
              key={expert.id}
              className="md:h-[285px] h-[350px] gap-2 md:px-8 rounded-[11px] py-2 px-8 relative flex flex-col bg-[#18181B] opacity-50 transition duration-150 ease-in-out"
            >
              <div className="flex mt-1 justify-between">
                <span className="text-[12px] leading-[12px] text-[#C6CDD5] opacity-50">
                  SEBI: 123456789
                </span>
                <span className="text-[12px] leading-[12px] text-[#C6CDD5] opacity-50">
                  Followers
                </span>
              </div>
              <span className="text-[12px] flex justify-end leading-[12px] font-medium text-white mr-3">
                3.4k
              </span>
              <div className="w-[280px] h-[140px] md:w-[256px] md:h-[146px] bg-image-rays">
                <img
                  src={userImg}
                  alt="User"
                  className="mx-auto profile-image-1 opacity-85 h-full object-contain rounded-full"
                />
              </div>

              <div className="text-center flex justify-center">
                  <span className="text-3xl font-[500] text-white">
                    Arun Kumar
                  </span>
              </div>

              <div className="flex flex-1 justify-center items-center">
                <span className="text-[12px] leading-[12px] font-[500] text-dimWhite">
                  Channel Name
                </span>
              </div>

              <button className="h-[40px] flex items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)] mt-2 md:mt-0 bg-[#0081F1]">
                <div
                  onClick={() => handleClickLink(expert.link)}
                  className="flex justify-center items-center gap-2"
                >
                  <img
                    src={expert.telegram}
                    alt="Telegram"
                    className="w-[24px] h-[24px]"
                  />
                  <div className="text-white font-[400] text-[16px] leading-[19px]">
                    {expert.greet}
                  </div>
                  <img
                    src={expert.arrowIcon}
                    alt="arrow"
                    className="w-[16px] h-[16px]"
                  />
                </div>
              </button>
            </div>
          );
        })}
        <div className="text-white absolute text-5xl top-1/2">
          Coming Soon...
        </div>
      </div>

      <div className="flex flex-col items-center py-8">
        <span
          className="font-[700] md:text-[50px] text-[30px] md:w-[1114px] md:h-[120px] w-full h-full
          text-gradient-2 md:leading-[60px] leading-[30px] text-center"
        >
          Bridge the Gap between Traders & Analysts with Copartner and Unite for
          Success!
        </span>

        <img
          src={logo}
          alt="LOGO"
          className="md:w-[225px] w-[199px] md:h-[64px] h-[54px] flex items-center justify-center"
        />

        <span className="text-dimWhite md:w-[505px] w-[328px] text-center md:h-[56px] h-[34px] font-[400] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
          Empower your teams to build better processes, for a better workplace.
        </span>
      </div>

      <div className="md:w-[1076px] md:h-[100%] w-[337px] h-[1250px] gap-[2rem] md:py-[1rem] py-[1rem] flex flex-col sm:flex-col mx-auto">
        {stock_data.map((stock) => (
          <div
            key={stock.id}
            style={{ height: stock.height }}
            className="flex flex-col p-2 gap-[1rem] items-center md:w-[337px] md:min-h-[80%] w-[335px] rounded-[11px] hover:bg-[#18181B] hover:opacity-[70%] transition duration-150 ease-in-out"
          >
            <img
              src={stock.img}
              alt="STOCK_IMAGES"
              className="md:w-[289px] md:h-[151px] w-[288px] h-[150px]"
            />
            <div className="flex flex-col gap-[1rem]">
              <span className="text-lightWhite md:w-[190px] md:h-[27px] w-[164px] h-[27px] font-[600] md:text-[20px] text-[18px] leading-[27px] sm:text-left">
                {stock.title}
              </span>
              <span className="text-dimWhite w-[257px] h-[96px] text-[16px] font-[400] leading-[24px] text-left">
                {stock.content}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
