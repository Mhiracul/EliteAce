import Image from "next/image";
import React from "react";
import Grass from "../../../public/design7.svg";
import Sesame from "../../../public/design6.svg";
import Chicken from "../../../public/design2.svg";
import Palmkernel from "../../../public/design4.svg";
import { FaPlus } from "react-icons/fa";

const OurOffer = () => {
  return (
    <div className="container font-urbanist bg-[#ffffff1a] text-black mx-auto md:px-10 px-10 py-20">
      <div className="flex lg:flex-row flex-col w-full justify-between gap-10 md:items-center items-start">
        <h1 className="lg:text-8xl md:text-6xl text-xl font-urbanist font-bold md:max-w-md max-w-[200px]">
          Our Services
          <div className="md:w-[500px] w-[120px] h-0.5 bg-[#F2F2F2] mt-8"></div>
        </h1>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:text-base text-xs  max-w-[600px] gap-6">
          <ul className="inline-block">
            <li className="mb-2 font-normal gap-2 items-center flex">
              <FaPlus />
              <span>Construction Administration</span>
            </li>
            <li className="mb-2 font-normal gap-2 items-center flex">
              <FaPlus />
              <span>Post-Occupancy Evaluation</span>
            </li>
            <li className="mb-2 font-normal gap-2 items-center flex">
              <FaPlus />
              <span>Project Management</span>
            </li>
            <li className="mb-2 font-normal gap-2 items-center flex">
              <FaPlus />
              <span>Interior Decorations</span>
            </li>
          </ul>

          <ul>
            <li className="mb-2 font-normal gap-2 items-center flex">
              <FaPlus />
              <span>Permitting and Approvals</span>
            </li>
            <li className="mb-2 font-normal gap-2 items-center flex">
              <FaPlus />
              <span>Construction Documents</span>
            </li>
            <li className="mb-2 font-normal gap-2 items-center flex">
              <FaPlus />
              <span>Bidding and Negotiation</span>
            </li>
            <li className="mb-2 font-normal gap-2 items-center flex">
              <FaPlus />
              <span>Conceptual Design</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <p className="py-4 md:text-4xl text-xl font-light">
          Collaborative, innovative, and sustainable architectural design
          solutions for a better world.
          <div className="w-full h-0.5 bg-[#F2F2F2] mt-4"></div>
        </p>
      </div>
    </div>
  );
};

export default OurOffer;
