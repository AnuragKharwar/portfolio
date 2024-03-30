import React from "react";
import timelinedata from "../../../data/timelinedata";
import TimelineItem from "./TimelineItem";
import Title from "../Tile/Title";
import classes from "./Timeline.module.css";
function Timeline() {
  return (
    <div className={classes.Timeline_Container}>
      <div className={classes.Timeline_Item}>
        <Title className={classes.Title} id="timeline">
          Timeline
        </Title>
        {timelinedata.map((item, index) => (
          <TimelineItem
            year={item.year}
            key={index}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
