import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20 picture">
      <div className="container  mx-auto bg-gradient-to-r from-[#F4F1E3] via-[#E7F0F5] to-[#E7F0F5] p-8">
        <div className="flex lg:flex-row md:flex-col flex-col items-center justify-between  w-full">
          <div className="py-20 flex flex-col lg:items-start items-center lg:text-start text-center">
            <span className="bg-[#878787] p-1 text-sm text-white  rounded-md">
              Exploring Unique Homes in the Real Estate Market
            </span>
            <h2 className="md:text-4xl text-2xl font-bold text-black mt-6">
              Looking To Design Your Dream Home?
            </h2>
          </div>

          <div className="flex lg:flex-row flex-col items-center gap-4">
            <div className="inline-flex items-center gap-1 md:text-3xl text-xl">
              <FaPhoneAlt color="#052087" />
              <h1 className="md:text-2xl text-sm font-medium text-black ">
                +2348061170650
              </h1>
            </div>

            <button className="text-white text-sm font-medium bg-[#052087] hover:bg-[#304288] p-4 rounded-full">
              Explore Design Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
