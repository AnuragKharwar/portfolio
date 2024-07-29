import React, { useEffect } from "react";
import { Contact, Footer, Intro, Portfolio, Timeline } from "./export";
import Experience from "../Experience/Experience";
import About from "./Intro/About";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const router = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("firstLoad") === null) {
      localStorage.setItem("firstLoad", "true");
      router("/about");
    }
  }, [router]);

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
