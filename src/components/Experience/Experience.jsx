import React from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";

const Experience = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div
      className={`mt-[50px]  flex flex-col items-center justify-start ${
        path === "/experience" && "h-[100vh]"
      } `}
    >
      <div className="text-bold text-4xl font-brygada1918 p-5 relative">
        <h1 className="font-semibold " id="experience">
          Experience
        </h1>
        <p className="absolute top-[65px] w-[180px] h-[4px] bg-black"></p>
      </div>

      <div className="mt-[50px] flex lg:flex-row flex-col justify-between gap-x-10 lg:gap-x-18 gap-y-14 ">
        <Card
          role="SDE-1"
          src={"/assets/sde2.png"}
          organisation={"IDS · Front-End Developer"}
          time={"December 2023 - Present · 11 months"}
          location={"India · Remote"}
          description={
            "Working Remotly as a Front-End Developer and developing User-interfaces and integrating api for blockchain based web product and internal tools."
          }
        />
        <Card
          role="Intern"
          src={"/assets/intern2.jpeg"}
          organisation={"IDS · Front-End Internship"}
          time={"September 2023 - November 2023 · 3 months"}
          location={"India · Remote"}
          description={
            "Developned various User Interfaces and web application UI for blockchain based web product using Reactjs,Nextjs,tailwind,etc and also integrated many GraaphQl and Rest Apis."
          }
        />
        <Card
          src={"/assets/traineee.png"}
          role="Internship Trainee"
          organisation={"Internshala · Apprenticeship"}
          time={"Jun 2022 - Jul 2022 · 2 month"}
          location={"India · Remote"}
          description={
            "The training consisted of Introduction to VLSI, HDL Coding Concepts in C language."
          }
        />
      </div>
    </div>
  );
};

export default Experience;
