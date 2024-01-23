import Image from "next/image";
import React from "react";
import Fruit1 from "../../../public/design2.svg";
import Fruit2 from "../../../public/design4.svg";
import Fruit3 from "../../../public/design7.svg";
import Fruit4 from "../../../public/design6.svg";
import Fruit5 from "../../../public/design8.svg";
import Fruit6 from "../../../public/design9.svg";
import Fruit7 from "../../../public/design10.svg";

import Link from "next/link";

const Success = () => {
  return (
    <div className="bg-[#fff] font-urbanist text-black  h-full w-full">
      <div className="container mx-auto py-20 px-10">
        <h1 className="text-black text-xl font-semibold underline mb-2 text-end">
          Our Team
        </h1>

        <h1 className="lg:text-8xl md:text-6xl text-xl  font-bold ">
          "Meet the team behind the designs"
        </h1>
        <div className="w-full h-0.5 bg-[#F2F2F2] mt-6 mb-5"></div>
        <p className="py-4 md:text-4xl text-xl font-light">
          "Our team is comprised of experienced architects, designers, and
          project managers who share a common goal of creating exceptional
          spaces.
        </p>
        <div className="mt-6 flex lg:flex-row flex-col gap-10 items-center">
          {" "}
          <Image
            src="/CEO.svg"
            alt=""
            width={100}
            height={100}
            className="lg:w-[20%] w-full"
          />
          <div className="flex flex-col items-center">
            {" "}
            <h1 className="md:text-3xl text-xl font-medium">
              Dr Chidinma Daniel
            </h1>
            <p className="md:text-xl text-sm font-bold">CEO</p>
          </div>
        </div>
      </div>
      <div
        className="text-white lg:h-[50vh] h-full"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('/wood.svg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container py-20 w-full md:mx-auto px-10">
          <div className="text-center ">
            <h1 className="lg:text-7xl md:text-6xl text-xl font-bold ">
              Have a project in mind?
            </h1>
            <p className="md:text-4xl mt-3 text-xl">
              Do not hesitate to say Hello
            </p>
            <button className="border-white bg-transparent border rounded-lg px-6 py-3 mt-4">
              <Link href="/Contact"> Let's Talk </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
