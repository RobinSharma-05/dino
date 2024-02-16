import React from "react";
import { Discordw, Instagramw, Twitterw } from "./Icons";
import footerbg from "../assets/images/webp/footerbg.webp";
import footerdino from "../assets/images/webp/footerdino.webp";

function Footer() {
  return (
    <>
      <div className="w-full min-h-[475px] relative overflow-hidden">
        <div
          className="max-w-[400px] w-full mx-auto px-3 flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <h2 className="f-dino font-normal text-[70px] sm:text-[80.37px] sm:leading-[76.35px] text-center drop-shadow-[0px_2.7px_0px_#000000]">
            <a href="#">
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">i</span>
              <span className="text-[#D45B07]">n</span>
              <span className="text-[#8EC627]">o</span>
              <span className="text-[#FCCA2B]">L</span>
              <span className="text-[#8F78D2]">F</span>
              <span className="text-[#8EC627]">G</span>
            </a>
          </h2>
          <p className="font-balsamiq font-normal text-sm leading-[16.8px] text-center text-white sm:my-[33px]">
            Sed tempus pretium est, vestibulum dapibus mauris viverra id.
            Curabitur feugiat porta lorem,{" "}
          </p>
          <ul className="flex gap-2 mt-6 sm:mt-0 relative">
            <li>
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                className="w-[37px] h-[37px] rounded-[50%] border border-solid border-white duration-300 bg-transparent hover:bg-[rgba(0,0,0,0.2)] flex justify-center items-center"
              >
                <Twitterw />
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/"
                target="_blank"
                className="w-[37px] h-[37px] rounded-[50%] border border-solid border-white duration-300 bg-transparent hover:bg-[rgba(0,0,0,0.2)] flex justify-center items-center"
              >
                <Discordw />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-[37px] h-[37px] rounded-[50%] border border-solid border-white duration-300 bg-transparent hover:bg-[rgba(0,0,0,0.2)] flex justify-center items-center"
              >
                <Instagramw />
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute z-[-1] bottom-0 bg-footerbg bg-cover w-full bg-no-repeat bg-center h-[340px]">
          <img
            className="absolute animate-jump md:animate-cycleleft min-[1200px]:animate-jump bottom-[2%] left-[45%] md:left-[77%] w-[150px] md:w-[180px] min-[1200px]:w-[211px] min-[1200px]:h-[267px]"
            src={footerdino}
            alt="dino cartoon"
          />
        </div>{" "}
      </div>
    </>
  );
}

export default Footer;
