import Image from "next/image";
import React from "react";

const Rent = () => {
  return (
    <div className="w-full h-full">
      <div className="  lg:flex-row  md:flex-col-reverse flex-col-reverse flex md:items-center md:px-0 px-10 items-center gap-6 justify-betweeen">
        <div className="py-20  flex w-full flex-col lg:items-start items-center md:text-start text-center md:px-10 px-10">
          <span className="bg-[#878787] p-1 text-sm text-white rounded-md">
            Beyond Brick and Mortar{" "}
          </span>

          <div className="text-black max-w-md mt-8">
            <h2 className=" text-4xl font-bold">
              Where Vision Meets Realty Crafting Your Perfect Home{" "}
            </h2>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
              eget ornare venenatis, in. Pharetra iaculis consectetur augue
              venenatis enim adipiscing risus sit scelerisque. Id metus viverra
              tellus.
            </p>
          </div>
        </div>

        <Image
          src="/design7.svg" // Replace with your actual image path in the public folder
          alt="Image 3"
          width={100}
          height={100}
          className="md:w-[68%] w-full "
        />
      </div>

      <div className="w-full h-full   ">
        <div className="lg:flex-row md:flex-col flex-col flex lg:items-start items-center md:px-0 px-10 gap-10 justify-betweeen">
          <Image
            src="/design6.svg" // Replace with your actual image path in the public folder
            alt="Image 3"
            width={100}
            height={100}
            className="md:w-[60%] w-full "
          />

          <div className="py-20 flex flex-col lg:items-start items-center md:text-start text-center">
            <span className="bg-[#878787] p-1 text-sm text-white  rounded-md">
              Unlocking Dreams, Opening Doors
            </span>

            <div className="text-black max-w-md mt-8">
              <h2 className="max-w-md text-4xl font-bold">
                Navigating Your Home Odyssey Your Sanctuary
              </h2>
              <p className="text-sm mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                mauris eget ornare venenatis, in. Pharetra iaculis consectetur
                augue venenatis enim adipiscing risus sit scelerisque. Id metus
                viverra tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
