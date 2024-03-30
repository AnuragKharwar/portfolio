import React from 'react'

const Card = ({ src, role, description, organisation, time, location }) => {
  return (
    <div className="bg-[#FCE9F1]">
      <div className="w-[300px] h-[300px] flex flex-col border-[1px] border-black relative rounded-[5px] ">
        <div className="rounded-full w-[100px] h-[100px] border-[1px] absolute  top-[-50px] left-[33%] border-black bg-white ">
          <img className="w-full h-full rounded-full" src={src} />
        </div>
        <div className="w-[300px] mt-2">
          <h1 className="mt-12 text-center text-lg ">{role}</h1>
          <p className="text-center text-md">{organisation}</p>
          <p className="text-[12px] text-center ">{time}</p>
          <p className="text-[12px] text-center ">{location}</p>
          <p className="text-[16px]  font-extralight mt-2 px-1 text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card
