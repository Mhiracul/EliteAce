import Image from "next/image";
import React from "react";
import { GiBuyCard } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div className="h-full">
      <div className="bg-white container shadow-sm shadow-[#878787] mx-auto w-full">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-10">
          <div className="flex flex-col p-8 items-center ">
            <div className="border rounded-full p-4">
              <GiBuyCard size={20} color="black" />
            </div>
            <p className="text-center text-black mt-3 md:text-sm font-bold text-base">
              We Craft
            </p>
            <p className="text-center text-black mt-1 md:text-xs ">
              Unique Architectural Designs
            </p>
          </div>
          <div className="flex flex-col p-8 items-center bg-[#052087]">
            <div className="border rounded-full p-4">
              <GiBuyCard size={20} color="white" />
            </div>
            <p className="text-center text-white mt-3 md:text-sm font-bold text-base">
              We Innovate
            </p>
            <p className="text-center  text-white  text-black mt-1 md:text-xs ">
              Cutting-Edge Living Spaces
            </p>
          </div>
          <div className="flex flex-col items-center p-8 px-10 ">
            <div className="border rounded-full p-4">
              <GiBuyCard size={20} color="black" />
            </div>
            <p className="text-center text-black mt-3 md:text-sm font-bold text-base">
              We Design
            </p>
            <p className="text-center text-black mt-1 md:text-xs text-[#B2B7BB]">
              Inspiring Interiors and Exteriors
            </p>
          </div>
          <div className="flex flex-col p-8 items-center bg-[#052087]">
            <div className="border rounded-full p-4">
              <GiBuyCard size={20} color="white" />
            </div>
            <p className="text-center text-white mt-3 md:text-sm font-bold text-base">
              We Build
            </p>
            <p className="text-center text-white mt-1 md:text-xs text-[#B2B7BB]">
              Your Dream Spaces
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
