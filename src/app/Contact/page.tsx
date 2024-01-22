import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://themes.pixelwars.org/archy/demo-01/wp-content/uploads/sites/2/2023/05/david-rodrigo-Fr6zexbmjmc-unsplash.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "60vh",
        }}
      ></div>
      <div className="container mx-auto px-10 w-full font-urbanist text-black py-20">
        <div className="flex md:flex-row flex-col justify-between w-full">
          <div className="max-w-md">
            <h1 className="text-8xl font-bold">Let's Talk</h1>
            <div className="w-full h-0.5 bg-[#F5F5F5]"></div>
            <p className="md:text-2xl text-xl font-light py-3">
              Got a project on your mind? Let's discuss about the details.
            </p>
          </div>
        </div>

        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
