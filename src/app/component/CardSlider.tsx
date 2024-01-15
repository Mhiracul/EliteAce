import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cardsData from "../component/cardsData";
import Image from "next/image";

interface Card {
  id: number;
  image: string;
  name: string;
  title: string;
  testimonial: string;
  star: JSX.Element;
  backgroundColor?: string; // New property for background color
}

const CardSlider: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonial" className="bg-[#f6f6f6]">
      <div className="py-16 ">
        <div className="px-10  py-16">
          <Slider {...settings}>
            {cardsData.map((cards) => (
              <div key={cards.id} className="px-2">
                <div
                  className={`${
                    cards.backgroundColor || "bg-[#0E1013]"
                  } rounded-lg shadow-lg p-6 flex-col py-16`}
                >
                  <div className="flex md:flex-row flex-col items-center md:text-left text-center">
                    <Image
                      src={cards.image}
                      alt=""
                      className="w-14 h-14 object-cover  rounded-full mr-4"
                    />
                    <div className="md:text-sm text-xs">
                      <h3 className="font-bold text-white">{cards.name}</h3>
                      <p className="text-[#a9b6b9]">{cards.title}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#FFFFFF] md:text-xl text-xs md:text-left text-center mt-4 font-medium">
                      {cards.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: ResponsiveSettings[];
}

interface ResponsiveSettings {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
  };
}
