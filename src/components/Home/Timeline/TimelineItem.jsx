import React from "react";
import classes from "./TimelineItem.module.css";
const TimelineItem = ({ year, title, duration, details }) => {
  return (
    <ol className={classes.Container}>
      <li>
        <div className={classes.dot} />
        <div className="flex flex-wrap gap-4 flex-row items-center text-xs md:text-sm">
          <span className="inline-block px-2.5 py-1.5 font-semibold text-white bg-stone-900 rounded-md ">
            {year}
          </span>

          <p className="text-lg font-semibold text-black">{title}</p>
          <span className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-400">
            {duration}
          </span>
        </div>
        <p className="my-2 text-base font-normal text-stone-500">{details}</p>
      </li>
    </ol>
  );
};

export default TimelineItem;
