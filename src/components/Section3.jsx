import React from "react";
import section3dino1 from "../assets/images/webp/section3dino1.webp";
import section3dino2 from "../assets/images/webp/section3dino2.webp";
import section3tree from "../assets/images/webp/section3tree.webp";

function Section3() {
  return (
    <>
      <div className="relative mb-6 lg:mb-0 lg:min-h-[1069px] overflow-hidden">
        <div
          className="max-w-[1164px] w-full px-3 mx-auto flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <h2 className="font-chewy font-normal text-[35px] sm:text-[64px] sm:leading-[83.63px] text-center text-white mb-[120px] sm:mb-[158px]">
            Utility and Usecase
          </h2>
          <div className="max-w-[1014px] w-full lg:min-h-[266px] bg-[#09655A] border border-solid border-white rounded-[20px] relative mb-[125px]">
            <div className="pl-3 pr-3 lg:pr-0 lg:pl-[39px] py-6 lg:py-[62px]">
              <p className="lg:max-w-[681px] w-full font-balsamiq font-normal text-xl sm:text-[32px] sm:leading-[38.4px] text-white mb-3 lg:mb-7 text-center lg:text-left">
                We are going to work hard in otder to add{" "}
                <span className="font-bold">
                  <span className="text-[#8EC627]">$</span>
                  <span className="text-[#FBA11D]">D</span>
                  <span className="text-[#23AAAC]">I</span>
                  <span className="text-[#D45B07]">N</span>
                  <span className="text-[#FB5352]">O</span>
                </span>{" "}
                to main platforms as a form of payment
              </p>
              <p className="lg:max-w-[695px] w-full font-balsamiq font-normal text-xl sm:text-[32px] sm:leading-[38.4px] text-white text-center lg:text-left">
                You will be able to buy a lot of things with{" "}
                <span className="font-bold">
                  <span className="text-[#8EC627]">$</span>
                  <span className="text-[#FBA11D]">D</span>
                  <span className="text-[#23AAAC]">I</span>
                  <span className="text-[#D45B07]">N</span>
                  <span className="text-[#FB5352]">O</span>
                </span>
              </p>
            </div>
            <img
              className="w-[100px] lg:w-[255px] lg:h-[323px] absolute bottom-[100%] lg:bottom-0 right-0 animate-cycleleft4 sm:animate-cycleleft3 lg:animate-jump lg:right-[24px]"
              src={section3dino1}
              alt="dino cartoon"
            />
          </div>
          <div className="max-w-[1014px] w-full lg:min-h-[266px] bg-[#09655A] border border-solid border-white rounded-[20px] ml-[14px] flex items-center justify-end relative">
            <p className="lg:max-w-[681px] w-full font-balsamiq font-normal text-xl sm:text-[32px] sm:leading-[38.4px] text-white text-center lg:text-right pt-3 lg:pt-0 pb-3 lg:pb-0 pl-3 lg:pl-0 pr-3 lg:pr-[27px]">
              We are going to have staking and buyback/
              <br className="hidden lg:block" />
              burning mechanism
            </p>
            <img
              className="absolute w-[110px] lg:w-[267px] lg:h-[334px] bottom-[100%] lg:bottom-0 left-0 lg:left-[-1%] animate-cycleright3 sm:animate-cycleright2 lg:animate-jump"
              src={section3dino2}
              alt="dino cartoon"
            />
          </div>
          <img
            className="w-[150px] sm:w-[250px] lg:w-[376px] lg:h-[502px] absolute bottom-0 lg:bottom-[-25px] right-0 xl:right-[-195px] z-[-1]"
            src={section3tree}
            alt="tree"
          />
        </div>
      </div>
    </>
  );
}

export default Section3;
