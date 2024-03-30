import React from "react";
import Title from "../Home/Tile/Title";

const Contact = () => {
  return (
    <div className="flex flex-col  justify-items-center  text-center text-blue-500 mb-2 mx-auto">
      <Title id="contact">Contact</Title>
      <a
        className="hover:underline hover:text-green-600"
        href="mailto:anuragkharwarwork@gmail.com"
      >
        anuragkharwarwork@gmail.com
      </a>
    </div>
  );
};

export default Contact;
