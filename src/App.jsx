import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";
import Backtotop from "./components/Backtotop";
import Preloader from "./components/Preloader";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Preloader />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      <Backtotop />
    </>
  );
}

export default App;
