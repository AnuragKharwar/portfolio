import React from "react";
import classes from "./Intro.module.css";
const Intro = () => {
  return (
    <div className={classes.Intro_container}>
      <div className={classes.Intro}>
        <h1 className={classes.Name} id="home">
          Anurag Kharwar
        </h1>
        <div className={classes.typewriter}>
          <div className={classes.text}>
            <div className={classes.wrapper}>
              <p>Software developer</p>
              <p>Front-End Developer</p>
              <p>React Developer</p>
            </div>
          </div>
        </div>
        <p className={classes.Description}>
          As a passionate web developer, I have taken on the challenge of coding
          all my projects independently. Some of them were inspired by various
          sources, while others were built through follow-along tutorials. My
          primary goal is to secure a position as a front-end developer, where I
          can leverage my extensive knowledge of programming and frameworks to
          contribute to real-world projects. If you wish to explore any of my
          projects further, simply click on the respective image to access the
          deployed version.
        </p>
      </div>
    </div>
  );
};

export default Intro;
