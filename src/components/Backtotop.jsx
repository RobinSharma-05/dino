import React from "react";
import arrow from "../assets/images/webp/arrow.webp";

function Backtotop() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      document.getElementById("Top").style.display = "flex";
    } else {
      document.getElementById("Top").style.display = "none";
    }
  });

  function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button
        id="Top"
        className="hidden bg-yellow-100 rounded-[50%] border-none w-[40px] md:w-[50px] h-[40px] md:h-[50px] bottom-[1%] right-[1%] fixed z-[3]"
        onClick={up}
      >
        <img className="w-full" src={arrow} alt="back to top icon" />
      </button>
    </>
  );
}

export default Backtotop;
