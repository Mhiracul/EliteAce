import Link from "next/link";
import React from "react";
import Slideshow from "./HeroSlideshow";

const Hero = () => {
  return (
    <Slideshow images={["/design4.svg", "/design6.svg", "/design7.svg"]} />
  );
};

export default Hero;
