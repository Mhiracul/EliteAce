// Slideshow.tsx
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface SlideshowProps {
  images: string[];
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="slideshow-container">
      <div
        className="slide relative  h-[70vh]  flex items-center w-screen"
        style={{
          backgroundImage: `linear-gradient(99deg, rgba(5, 32, 135) 2.16%, rgba(82, 110, 150, 0.00) 76.84%), url(${images[currentImageIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
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
            <Link href="/Contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
