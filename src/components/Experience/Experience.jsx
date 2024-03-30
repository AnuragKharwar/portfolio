import React from "react";
import Card from "./Card";

const Experience = () => {
  return (
    <div className="mt-[50px]  flex h-[full]  flex-col items-center justify-center">
      <div className="text-bold text-4xl font-brygada1918 p-5">
        <h1 className="font-semibold underline " id="experience">
          Experience
        </h1>
      </div>

      <div className="mt-[50px]  h-full flex lg:flex-row flex-col justify-between gap-x-32 gap-y-14 ">
        <Card
          src={"public/assets/traineee.png"}
          role="Internship Trainee"
          organisation={"Internshala · Apprenticeship"}
          time={"Jun 2022 - Jul 2022 · 2 month"}
          location={"India · Remote"}
          description={
            "The training consisted of Introduction to VLSI, HDL Coding Concepts in C language."
          }
        />
        <Card
          role="Intern"
          src={"public/assets/intern.png"}
          organisation={"IDS · Front-End Internship"}
          time={"Sept 2023 - March 2024 · 6 months"}
          location={"Hyderabad,India · Remote"}
          description={
            "Developned varioud User Interfaces and web application UI for blockchain based web product using Reactjs,Nextjs,tailwind,etc and also integrated many GraaphQl and Rest Apis."
          }
        />
        <Card
          role="SDE-1"
          src={"public/assets/sde.jpg"}
          organisation={"IDS · Front-End Developer"}
          time={"April 2024 - Currenlty"}
          location={"Hyderabad,India · Remote"}
          description={
            "Working Remotly as a Front-End Developer and developing User-interfaces and integrating api for there blockchain based web product."
          }
        />
      </div>
    </div>
  );
};

export default Experience;
