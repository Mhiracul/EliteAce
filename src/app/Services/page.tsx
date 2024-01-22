"use client";
import React, { useState, useEffect } from "react";
import Loader from "../api/Loader";
import Success from "../component/Success";
import OurOffer from "../component/OurOffer";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Slideshow from "../component/Slideshow";
const Designs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Slideshow
            images={[
              "/design9.svg",
              "/design6.svg",
              "/design7.svg",
              // Add more image URLs as needed
            ]}
          />

          <OurOffer />
          <Success />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Designs;
