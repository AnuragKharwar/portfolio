import React, { useEffect } from "react";
import { Contact, Footer, Intro, Portfolio, Timeline } from "./export";
import Experience from "../Experience/Experience";
import About from "./Intro/About";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const router = useNavigate();

  return (
    <div>
      <Intro />
      <Experience />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
