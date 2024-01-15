import Image from "next/image";
import React from "react";

const Sell = () => {
  return (
    <div className="w-full h-full py-20 ">
      <div className="lg:flex-row md:flex-col flex-col flex lg:items-start items-center lg:px-0 px-10 gap-10 justify-betweeen">
        <Image
          src="/design6.svg"
          alt="Image 3"
          width={100}
          height={100}
          className="lg:w-[60%] w-full "
        />

        <div className="py-20 flex flex-col lg:items-start items-center lg:text-start text-center">
          <span className="bg-[#878787] p-1 text-sm text-white  rounded-md">
            Crafting Dreams, Shaping Spaces
          </span>

          <div className="text-black lg:max-w-md max-w-max mt-8">
            <h2 className=" text-4xl font-bold">
              Navigating Your Architectural Odyssey, Your Canvas
            </h2>
            <p className="text-sm mt-4">
              Welcome to a world where architectural dreams come to life. Our
              mission is to shape spaces, guiding you through every step of your
              design and construction journey.
            </p>
          </div>

          <div className="bg-[#F6F6F6] max-w-md px-2 py-6 flex flex-col gap-3 mt-3 align-middle ">
            <h1 className="text-black text-xl font-bold">
              Explore Design Possibilities
            </h1>
            <p className="text-normal text-sm text-[#687693]">
              Thinking about transforming your space? Trust us to help you
              explore design possibilities and guide you through the process.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="  lg:flex-row  md:flex-col-reverse flex-col-reverse flex lg:items-start  lg:px-0 px-10 items-center gap-6 justify-betweeen">
          <div className="py-20 pl-0 md:pl-10 flex flex-col lg:items-start items-center lg:text-start text-center ">
            <span className="bg-[#878787] p-1 text-sm text-white rounded-md">
              Beyond Blueprint and Concrete{" "}
            </span>

            <div className="text-black  w-full mt-8">
              <h2 className=" md:text-4xl text-2xl font-bold  ">
                Where Imagination Meets Construction Crafting Your Vision Into
                Reality{" "}
              </h2>
              <p className="md:text-sm text-xs mt-4">
                Discover a place where imagination meets construction. We are
                dedicated to crafting your vision into reality, beyond just
                blueprint and concrete.
              </p>
            </div>
          </div>

          <Image
            src="/design7.svg"
            alt="Image 3"
            width={100}
            height={100}
            className="lg:w-[68%] w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Sell;
