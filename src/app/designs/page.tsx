"use client";
import React, { useState, useEffect } from "react";
import Loader from "../api/Loader";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Design from "../component/Designs";
const Services = () => {
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
          <div className="font-urbanist bg-[#F6F6F6]">
            <h1 className="text-[#0a0a0a] lg:text-8xl md:text-6xl text-4xl font-bold text-center py-10">
              Designs
            </h1>
          </div>

          <Design />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Services;
