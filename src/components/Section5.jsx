import React, { useState } from "react";
import { Arrow } from "./Icons";

function Section5() {
  const [open, setOpen] = useState();
  const toggleAccordion = (index) => {
    setOpen(open === index ? true : index);
  };
  const accordionData = [
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ];
  return (
    <>
      <div id="faq" className="mb-12 md:mb-0 md:min-h-[902px] w-full">
        <div
          className="max-w-[824px] mx-auto px-3"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <h2 className="font-chewy font-normal text-[35px] sm:text-[64px] leading-[83.63px] text-center text-white mb-[30px] sm:mb-[61px]">
            FAQs
          </h2>
          {/* accordion */}
          <div className="flex flex-col gap-[26px]">
            {accordionData.map((data, index) => (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                className="w-full rounded-[40px] border border-solid border-white drop-shadow-[0px_8px_25px_#00000021] bg-[#09655A]"
              >
                <div className="flex h-[81px] justify-between items-center pl-5 md:pl-[26px] pr-5 md:pr-[53px] cursor-pointer">
                  <p className="font-balsamiq font-bold text-lg sm:text-xl leading-[24px] text-white md:max-w-[467px] w-full text-start md:text-center">
                    {data.title}
                  </p>
                  <div
                    className={`w-[32px] sm:w-[36px] h-[32px] sm:h-[36px] bg-white rounded-[50%] flex justify-center duration-300 items-center shrink-0 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  >
                    <Arrow />
                  </div>
                </div>
                <div
                  className={`w-full duration-300 px-5 md:px-[46px] ${
                    open === index
                      ? "opacity-100 pb-4 min-h-[56px]"
                      : "h-0 min-h-0 opacity-0"
                  }`}
                >
                  <p className="font-balsamiq font-normal text-base sm:text-lg leading-[24px] text-white">
                    {data.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5;
