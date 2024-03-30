import React from 'react'

const Card = ({ src, role, description, organisation, time, location }) => {
  return (
    <div className=''>
    <div className="w-[200px] h-[200px] flex flex-col border-[1px] border-black relative rounded-[5px] ">
      <div className="rounded-full w-[100px] h-[100px] border-[1px] absolute  top-[-50px] left-[25%] border-black bg-white z-10">
        <img className='w-full h-full rounded-full' src={src}/>
      </div>
      <div className="w-[200px] mt-2">
        <h1 className="mt-12 text-center text-md ">{role}</h1>
        <p className="text-center text-xs">{organisation}</p>
        <p className="text-[10px] text-center ">{time}</p>
        <p className="text-[10px] text-center ">{location}</p>
        <p className='text-[8px]  font-semibold mt-2 px-1 text-justify'>{description}</p>
      </div>
    </div>
    </div>
  );
};
export default Card
