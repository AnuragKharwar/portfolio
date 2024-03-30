import React from "react";
import portfolio from "../../../data/portfolio";
import PortfolioItem from "../Portfolioitem/PortfolioItem";
import classes from "./Portfolio.module.css";
const Portfolio = () => {
  return (
    <div className={classes.Portfolio_container}>
      <h1 id="project" >Personal Projects</h1>
      <p className={classes.Line}></p>
      <div className={classes.Portfolio_body}>
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
