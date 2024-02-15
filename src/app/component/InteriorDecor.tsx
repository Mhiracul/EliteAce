import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import Decor1 from "../../../public/interiorDecor1.jpg";
import Decor2 from "../../../public/interiorDecor2.jpg";
import Decor3 from "../../../public/interiorDecor3.jpeg";
import Decor4 from "../../../public/interiorDecor4.jpg";
import Decor5 from "../../../public/interiorDecor5.jpg";
import Decor6 from "../../../public/interiorDecor6.jpg";
import Decor7 from "../../../public/interiorDecor5.jpg";

import Link from "next/link";

const InteriorDecor = () => {
  return (
    <div className="bg-[#F6F6F6] text-black  h-full w-full">
      <div className="contain er mx-auto w-full  py-10 md:px-10 px-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10 mx-auto">
          <div className="md:max-w-[500px] rounded-md  relative">
            <Image
              src={Decor1}
              alt="List"
              className="w-full h-60 rounded-t-md"
            />
            <div className="bg-[#052087] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Living-room Decor
              </h4>

              <button className="bg-[#052087] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="/Contact">Contact Us</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[500px] rounded-md  relative">
            <Image
              src={Decor2}
              alt="List"
              className="w-full  h-60 rounded-t-md"
            />
            <div className="bg-[#052087] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Bedroom Decor
              </h4>

              <button className="bg-[#052087] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="/Contact">Contact Us</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[500px] rounded-md  relative">
            <Image
              src={Decor3}
              alt="List"
              className="w-full  h-60 rounded-t-md"
            />
            <div className="bg-[#052087] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Lobby Decor
              </h4>

              <button className="bg-[#052087] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="/Contact">Contact Us</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[500px] rounded-md  relative">
            <Image src={Decor4} alt="List" className="w-full rounded-t-md" />
            <div className="bg-[#052087] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Kitchen Decor
              </h4>

              <button className="bg-[#052087] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="/Contact">Contact Us</Link>
              </button>
            </div>
          </div>
          <div className="md:max-w-[500px] rounded-md  relative">
            <Image src={Decor5} alt="List" className="w-full rounded-t-md" />
            <div className="bg-[#052087] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Lobby Decor
              </h4>

              <button className="bg-[#052087] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="/Contact">Contact Us</Link>
              </button>
            </div>
          </div>
          <div className="md:max-w-[500px]  rounded-md  relative">
            <Image src={Decor6} alt="List" className="w-full  rounded-t-md" />
            <div className="bg-[#052087] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-1 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Living-room Decor
              </h4>

              <button className="bg-[#052087] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="/Contact">Contact Us</Link>
              </button>
            </div>
          </div>
        </div>
        {/**test */}

        {/**test */}

        <div className="flex  justify-center w-full mt-4 py-6">
          <button className="bg-[#052087] text-white hover:bg-[#38498d] px-6 py-2 font-bold rounded-sm te    xt-white font-Montserrat text-[7px] max-w-[180px] ">
            <Link href="/Contact">Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteriorDecor;
