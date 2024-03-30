import React from "react";
import { Contact, Footer, Intro, Portfolio, Timeline } from "./export";
import Experience from "../Experience/Experience";

const Home = () => {
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
