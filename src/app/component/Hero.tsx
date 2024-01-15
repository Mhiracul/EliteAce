import React from "react";

const Hero = () => {
  return (
    <div
      className="relative  h-[70vh]  flex items-center w-screen"
      style={{
        background:
          "linear-gradient(99deg, rgba(5, 32, 135) 2.16%, rgba(82, 110, 150, 0.00) 76.84%), url('/design2.svg') lightgray",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="container flex flex-col md:items-start items-center mx-auto md:px-10 px-10">
        <h2 className="font-Montserrat relative flex items-center md:text-left text-center font-bold text-primary text-2xl md:text-[56px] md:leading-[63px] leading-[40px]">
          Designing Your Dream Space
        </h2>
        <h2 className="font-Montserrat font-normal md:text-base text-xs md:text-left text-center  text-[#d6d6d6]  mt-5 max-w-[600px]">
          Explore our architectural masterpieces and find the perfect design
          that reflects your lifestyle. Whether you're seeking a modern urban
          dwelling or a tranquil suburban retreat, we offer a diverse range of
          designs to inspire your vision.
        </h2>
        <button className="bg-[#fff] px-10 py-3 rounded-md text-[#052087] font-extrabold font-Montserrat text-lg mt-10">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
