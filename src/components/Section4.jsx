import React from "react";
import roadmap from "../assets/images/webp/roadmap.webp";
import section4aeroplane from "../assets/images/webp/section4aeroplane.webp";
import section4tree from "../assets/images/webp/section4tree.webp";
import section4tree2 from "../assets/images/webp/section4tree2.webp";
import section4bush from "../assets/images/webp/section4bush.webp";

function Section4() {
  return (
    <>
      <div
        id="roadmap"
        className="bg-section4bg bg-center bg-no-repeat bg-cover min-[1100px]:min-h-[2685px] flex items-center py-12 sm:py-[150px] md:py-[300px] min-[1100px]:py-0 "
      >
        <div className="max-w-[1184px] w-full mx-auto px-3 min-[1100px]:min-h-[2168px]">
          <h2 className="font-chewy font-normal text-[35px] sm:text-[64px] sm:leading-[83.63px] text-center text-white mb-[50px] md:mb-[97px]">
            Roadmap
          </h2>
          <div className="relative flex flex-col gap-6 min-[1100px]:gap-0 w-full">
            <div className="absolute hidden sm:block top-[11%] h-[78%] left-[8%] md:left-[6%] lg:left-[9%] min-[1100px]:hidden border-[5px] border-dashed border-[#0A4740]"></div>
            <div
              className="min-[1100px]:min-h-[450px] flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start min-[1100px]:pl-[27px] relative z-[1]"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <img
                className="w-[150px] sm:w-[200px] lg:w-[326px] object-cover min-[1100px]:hidden"
                src={section4aeroplane}
                alt="aeroplane"
              />
              <div className="flex flex-col sm:flex-row sm:gap-[60px] items-center px-2 sm:px-0">
                <p className="font-chewy font-normal text-[35px] sm:text-[150px] lg:text-[200px] lg:leading-[261.33px] text-[#FBA11D] drop-shadow-[0px_18px_18px_#00000040]">
                  01
                </p>
                <ul className="sm:list-disc text-center sm:text-start ">
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white">
                    Launch $DINO & Website & Social Media.
                  </li>
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white my-4">
                    Building the community.
                  </li>
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white">
                    Marketing Phase 1.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="min-[1100px]:min-h-[403px] flex flex-col items-center sm:flex-row justify-center sm:justify-start min-[1100px]:justify-center relative z-[1]"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <img
                className="w-[100px] sm:w-[120px] lg:w-[213px] object-cover min-[1100px]:hidden"
                src={section4tree}
                alt="tree"
              />
              <div className="flex flex-col sm:flex-row sm:gap-[60px] items-center px-2 sm:px-0">
                <p className="font-chewy font-normal text-[35px] sm:text-[150px] lg:text-[200px] lg:leading-[261.33px] text-[#8EC627] drop-shadow-[0px_18px_18px_#00000040]">
                  02
                </p>
                <ul className="sm:list-disc text-center sm:text-start">
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white">
                    CoinGecko & Coinmarketcap listing.
                  </li>
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white my-4">
                    Introduction to Buyback & Burning mechanism
                  </li>
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white">
                    Marketing Phase 2.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="min-[1100px]:min-h-[487px] flex flex-col sm:flex-row items-center justify-center sm:justify-start relative z-[1]"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <img
                className="w-[120px] lg:w-[200px] object-cover min-[1100px]:hidden"
                src={section4tree2}
                alt="tree"
              />
              <div className="flex flex-col sm:flex-row sm:gap-[60px] items-center px-2 sm:px-0">
                <p className="font-chewy font-normal text-[35px] sm:text-[150px] lg:text-[220.95px] lg:leading-[288.71px] text-[#D45B07] drop-shadow-[0px_18px_18px_#00000040]">
                  03
                </p>
                <ul className="sm:list-disc text-center sm:text-start">
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white">
                    Utility and Usecase Introduction.
                  </li>
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white my-4">
                    CEX Listings
                  </li>
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white">
                    Marketing Phase 3.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="min-[1100px]:min-h-[466px] flex flex-col sm:flex-row items-center justify-center sm:justify-start min-[1100px]:justify-center relative z-[1]"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <img
                className="w-[80px] sm:w-[100px] lg:w-[175px] lg:h-[107px] object-cover min-[1100px]:hidden"
                src={section4bush}
                alt="bush"
              />
              <div className="flex flex-col sm:flex-row sm:gap-[60px] items-center px-2 sm:px-0">
                <p className="font-chewy font-normal text-[35px] sm:text-[150px] lg:text-[200px] lg:leading-[261.33px] text-[#23AAAC] drop-shadow-[0px_18px_18px_#00000040]">
                  04
                </p>
                <ul className="sm:list-disc text-center sm:text-start">
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white">
                    Staking Introduction.
                  </li>
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white my-4">
                    DINO NFT Collection.
                  </li>
                  <li className="font-balsamiq font-normal text-xl leading-[24px] text-white">
                    Marketing Phase 4
                  </li>
                </ul>
              </div>
            </div>
            <img
              className="absolute z-0 w-[1098px] h-[1872px] top-0 object-cover hidden min-[1100px]:block"
              src={roadmap}
              alt="roadmap"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
