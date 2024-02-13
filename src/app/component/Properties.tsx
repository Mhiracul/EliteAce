import Image from "next/image";
import Link from "next/link";
import React from "react";

const Properties = () => {
  return (
    <div className="h-full w-full text-black bg-[#F6F6F6]">
      <div className="py-20 lg:px-0 px-10">
        <div className="text-center text-black max-w-md container mx-auto">
          <h1 className="md:text-3xl text-xl font-bold">Our Designs</h1>
          <p className="md:text-sm text-xs font-normal mt-4">
            Explore some of our exquisite Designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-20 container mx-auto">
          <div className="md:max-w-[500px]  relative ">
            <Image
              src="/design4.svg"
              alt="List"
              width={100}
              height={100}
              className="w-full"
            />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#052087]  px-6 py-3 font-bold rounded-md text-white font-Montserrat text-[9px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                Block of Flats
              </button>
            </div>
          </div>

          <div className="md:max-w-[500px]  relative">
            <Image
              src="/design11.svg"
              alt="List"
              width={100}
              height={100}
              className="w-full"
            />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#052087]  px-6 py-3 font-bold rounded-md text-white font-Montserrat text-[9px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                Duplex
              </button>
            </div>
          </div>

          <div className="md:max-w-[500px]  relative">
            <Image
              src="/design9.svg"
              alt="List"
              width={100}
              height={100}
              className="w-full"
            />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#052087]  px-6 py-3 font-bold rounded-md text-white font-Montserrat text-[9px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                Bungalow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
