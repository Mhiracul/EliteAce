"use client";
import React, { useState } from "react";
import Logo from "../../../public/LOGO.svg";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiX } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
    setMobileMenuOpen(false);
  };

  const handleDropdownLinkClick = () => {
    setDropdownOpen(false);
  };
  return (
    <div className="bg-white w-full shadow-md shadow-[#878787]">
      <div className=" container  mx-auto md:px-10 px-10 w-full py-0.5 flex items-center flex-row justify-between ">
        <div className=" ">
          <Image src={Logo} alt="logo" className="w-[110px]" />
        </div>
        <div className="block md:hidden">
          <button onClick={handleMenuToggle}>
            <BiMenuAltRight size={20} color="#878787" />
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-12 right-6 mt-2 py-2 w-[300px] bg-white  rounded z-10">
              <div
                className={`${
                  mobileMenuOpen ? "flex" : "hidden"
                } md:hidden flex-col h-[250px] p-5 w-[300px] z-10 mt-0`}
              >
                <div className="h-[50px] justify-between items-center gap-2 w-full p-3 border rounded-md md:flex"></div>
                <div className="mt-10 flex flex-col gap-6">
                  <Link
                    href="/"
                    className="text-black font-Montserrat text-[12px]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/Services"
                    className="text-black font-Montserrat text-[12px]"
                  >
                    Services
                  </Link>
                  <Link
                    href="/designs"
                    className="text-black font-Montserrat text-[12px]"
                  >
                    Designs
                  </Link>
                  <Link
                    href="/interiorDecoration"
                    className="text-black font-medium hover:text-[#052087] font-Montserrat text-[12px]"
                  >
                    Interior Decoration
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="md:flex hidden flex-row gap-10 items-center">
          <Link
            href="/"
            className="hover:text-black font-medium text-[#052087] font-Montserrat text-[12px]"
          >
            Home
          </Link>
          <Link
            href="/Services"
            className="text-black font-medium hover:text-[#052087] font-Montserrat text-[12px]"
          >
            Services
          </Link>

          <Link
            href="/designs"
            className="text-black font-medium hover:text-[#052087] font-Montserrat text-[12px]"
          >
            Designs
          </Link>
          <Link
            href="/interiorDecoration"
            className="text-black font-medium hover:text-[#052087] font-Montserrat text-[12px]"
          >
            Interior Decoration
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
