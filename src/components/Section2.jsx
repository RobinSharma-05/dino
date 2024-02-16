import React from "react";
import section2img from "../assets/images/webp/section2img.webp";
import supply from "../assets/images/png/supply.png";
import market from "../assets/images/png/market.png";
import tax from "../assets/images/png/tax.png";
import mint from "../assets/images/png/mint.png";
import lock from "../assets/images/png/lock.png";
import section2dino2 from "../assets/images/webp/section2dino2.webp";
import section2dino from "../assets/images/webp/section2dino.webp";

function Section2() {
  return (
    <>
      <div
        id="tokenomics"
        className="mb-12 md:mb-0 md:min-h-[1166px] bg-section2bg bg-center bg-no-repeat bg-cover relative"
      >
        <div
          className="max-w-[1164px] mx-auto px-3"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <h2 className="font-chewy font-normal text-[35px] sm:text-[64px] sm:leading-[83.63px] text-center text-white mb-6 md:mb-[80px]">
            Tokenomics
          </h2>
          <div className="relative hidden min-[1150px]:block">
            <img
              src={section2img}
              alt="image"
              className="w-[589px] h-[377px] mx-auto"
            />
            {/* supply */}
            <div className="max-w-[228px] w-full flex justify-between absolute top-[115px] left-[25px]">
              <div className="max-w-[189px]">
                <p className="font-balsamiq font-normal text-[32px] leading-[38.4px] text-[#FBA11D]">
                  333,333,333
                </p>
                <p className="font-balsamiq font-normal text-[24px] leading-[33.24px] text-white text-right mr-[3px]">
                  Supply
                </p>
              </div>
              <img
                className="w-[15px] h-[88px] mt-[3px]"
                src={supply}
                alt="line"
              />
            </div>
            {/* market */}
            <div className="max-w-[242px] w-full flex justify-between absolute bottom-[-37px] left-[130px]">
              <div className="max-w-[203px]">
                <p className="font-balsamiq font-normal text-[32px] leading-[38.4px] text-right text-[#23AAAC]">
                  95% Uniswa
                </p>
                <p className="font-balsamiq font-normal text-[32px] leading-[38.4px] text-right text-[#23AAAC]">
                  5% Marketing
                </p>
                <p className="font-balsamiq font-normal text-[23.65px] leading-[32.76px] text-right text-white">
                  Allocation
                </p>
              </div>
              <img
                className="w-[13px] h-[102px] mt-2"
                src={market}
                alt="line"
              />
            </div>
            {/* tax */}
            <div className="max-w-[99px] w-full flex flex-col items-center gap-[17px] absolute left-[520px] bottom-[-110px]">
              <img className="h-[43px] w-[1px]" src={tax} alt="line" />
              <p className="font-balsamiq font-normal text-[32px] leading-[38.4px] text-[#D45B07]">
                No Tax
              </p>
            </div>
            {/* mint */}
            <div className="max-w-[280px] w-full flex justify-between items-end absolute right-[90px] bottom-[-40px]">
              <img className="w-[13px] h-[102px]" src={mint} alt="line" />
              <p className="font-balsamiq font-normal text-[32px] leading-[38.4px] text-[#FB5352] mb-[18px]">
                No Mint Function
              </p>
            </div>
            {/* lock */}
            <div className="max-w-[258px] w-full flex justify-between items-center absolute top-[115px] right-0">
              <img className="w-[15px] h-[88px]" src={lock} alt="line" />
              <p className="max-w-[217px] font-balsamiq font-normal text-[32px] leading-[38.4px] text-[#8EC627]">
                Liquidity lock for 1 year
              </p>
            </div>
          </div>
          <div className=" min-[1150px]:hidden flex flex-col items-center gap-6">
            <img
              className="w-[247px] h-[200px]"
              src={section2dino2}
              alt="dino cartoon"
            />
            <div className="flex flex-col gap-y-4">
              {/* supply */}
              <div className="max-w-[228px] w-full flex gap-2">
                <div className="w-[20px] sm:w-[25px] h-[20px] sm:h-[25px] bg-[#FBA11D] rounded mt-1"></div>
                <div className="max-w-[189px]">
                  <p className="font-balsamiq font-normal text-[20px] sm:text-[32px] sm:leading-[38.4px] text-[#FBA11D] text-left">
                    333,333,333
                  </p>
                  <p className="font-balsamiq font-normal text-lg sm:text-[24px] sm:leading-[33.24px] text-white mr-[3px] text-left">
                    Supply
                  </p>
                </div>
              </div>
              {/* market */}
              <div className="max-w-[242px] w-full flex gap-2">
                <div className="w-[20px] sm:w-[25px] h-[20px] sm:h-[25px] bg-[#23AAAC] rounded mt-1"></div>
                <div className="max-w-[203px]">
                  <p className="font-balsamiq font-normal text-[20px] sm:text-[32px] sm:leading-[38.4px] text-[#23AAAC]">
                    95% Uniswa
                  </p>
                  <p className="font-balsamiq font-normal text-[20px] sm:text-[32px] sm:leading-[38.4px] text-[#23AAAC]">
                    5% Marketing
                  </p>
                  <p className="font-balsamiq font-normal text-lg sm:text-[23.65px] sm:leading-[32.76px] text-white">
                    Allocation
                  </p>
                </div>
              </div>
              {/* tax */}
              <div className="max-w-[180px] w-full flex gap-2">
                <div className="w-[20px] sm:w-[25px] h-[20px] sm:h-[25px] bg-[#D45B07] rounded mt-1"></div>
                <p className="font-balsamiq font-normal text-[20px] sm:text-[32px] leading-[38.4px] text-[#D45B07] text-start">
                  No Tax
                </p>
              </div>
              {/* mint */}
              <div className="max-w-[280px] w-full flex gap-2">
                <div className="w-[20px] sm:w-[25px] h-[20px] sm:h-[25px] bg-[#FB5352] rounded mt-1"></div>
                <p className="font-balsamiq font-normal text-[20px] sm:text-[32px] leading-[38.4px] text-[#FB5352] text-start">
                  No Mint Function
                </p>
              </div>
              {/* lock */}
              <div className="max-w-[258px] w-full flex gap-2">
                <div className="w-[20px] sm:w-[25px] h-[20px] sm:h-[25px] bg-[#8EC627] rounded mt-1"></div>
                <p className="max-w-[217px] font-balsamiq font-normal text-[20px] sm:text-[32px] leading-[38.4px] text-[#8EC627] text-start">
                  Liquidity lock for 1 year
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={section2dino}
          alt="dino cartoon"
          className="hidden sm:block w-[150px] md:w-[211px] md:h-[193px] absolute bottom-[243px] left-[-11px] animate-jump"
        />
      </div>
    </>
  );
}

export default Section2;
