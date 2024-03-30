import React from "react";
import classes from "./PortfolioItem.module.css";
function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className={classes.Item_Container}>
      <a
        href={link}
        target="_blank"
        rel="nooper noreferrer"
        className={classes.Item_body}
      >
        <img src={imgUrl} alt="portfolio " className={classes.Item_img} />
        <div className={classes.Item_detail}>
          <h3 className={classes.Title}>{title}</h3>
          <p className={classes.Stacks}>
            {stack.map((item) => (
              <span className={classes.Item}>{item}</span>
            ))}
          </p>
        </div>
      </a>
    </div>
  );
}

export default PortfolioItem;
