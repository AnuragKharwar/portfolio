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
      <div className="text-bold text-4xl font-brygada1918 p-5">
        <h1 className="font-semibold underline " id="experience">
          Experience
        </h1>
      </div>

      <div className="mt-[50px]   flex md:flex-row flex-col justify-between gap-x-10 lg:gap-x-32 gap-y-14 ">
        <Card
          role="SDE-1"
          src={"/assets/sde.jpg"}
          organisation={"IDS · Front-End Developer"}
          time={"April 2024 - Currenlty"}
          location={"Hyderabad,India · Remote"}
          description={
            "Working Remotly as a Front-End Developer and developing User-interfaces and integrating api for blockchain based web product."
          }
        />
        <Card
          role="Intern"
          src={"/assets/intern.png"}
          organisation={"IDS · Front-End Internship"}
          time={"Sept 2023 - March 2024 · 6 months"}
          location={"Hyderabad,India · Remote"}
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
