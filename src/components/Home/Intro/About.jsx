import React from "react";
const About = () => {
  return (
    <div className="flex justify-center h-full lg:h-[100vh] flex-col items-center  ">
      <div className="lg:w-[70rem] flex flex-col justify-center items-center lg:px-10 lg:grid grid-cols-2  ">
        <div className="flex justify-center items-center w-[30rem] h-[30rem] relative  overflow-hidden ">
          <img
            src="/assets/profile-pic.png"
            className="absolute lg:w-[100%] lg:h-[100%]  bg-cover p-20 lg:p-0"
          />
        </div>
        <div className="lg:grid grid-rows-2 flex flex-col w-full px-10 lg:p-0">
          <div className=" text-bold text-4xl font-brygada1918">
            <h1 className="font-semibold">
              Hi👋 I'm Anurag, a Front-End Developer working remotely for
              Information Data System on Block Chain based Web product in
              Hyderabad,India.
            </h1>
          </div>
          <div className="text-lg mt-4 ">
            <p>
              Dedicated and dynamic professional with a graduation in
              Electronics and Communication Engineering from NIT Surat.
              Leveraging a comprehensive 1+ year, adept at developing seamless
              user interfaces and seamlessly integrating them with APIs to drive
              enhanced user experiences. Passionate about leveraging technology
              to innovate and deliver impactful solutions.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <h1 className="text-xl font-extralight animate-blink mt-10">
          Scroll Down to Know more
        </h1>
      </div>
      <div className="">
        <ul className="flex gap-x-12 text-xl font-bold">
          <li className="mt-2 hover:scale-110 hover:underline">
            <a href="#">A Brief History</a>
          </li>
          <li className="mt-2 hover:scale-110 hover:underline">
            <a href="#">Extra caricular</a>
          </li>
          <li className="mt-2 hover:scale-110 hover:underline">
            <a href="#">Photo Gallery</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default About;
