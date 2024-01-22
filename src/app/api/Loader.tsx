"use client";

import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 z-50">
      <BounceLoader color="#052087" size={60} />
    </div>
  );
};

export default Loader;
