import React from "react";
import section2dino from "../assets/images/webp/section2dino.webp";

function Preloader() {
  setTimeout(() => {
    document.getElementById("Preloader").classList.add("hidden");
    document.body.classList.remove("!overflow-hidden");
  }, 2000);
  return (
    <>
      <div
        id="Preloader"
        className="h-screen bg-blue-50 flex flex-col gap-4 justify-center items-center fixed top-0 left-0 w-full z-30 "
      >
        <img
          rel="preload"
          className="animate-bounce w-[169px]"
          src={section2dino}
          alt="dino cartoon"
        />
      </div>
    </>
  );
}

export default Preloader;
