// Slideshow.tsx
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
        className="slide"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.1) , rgba(0,0,0,.1)), url(${images[currentImageIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      ></div>
    </div>
  );
};

export default Slideshow;
