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
    setDropdownOpen(false); // Close the dropdown when opening the mobile menu
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
    setMobileMenuOpen(false); // Close the mobile menu when opening the dropdown
  };

  const handleDropdownLinkClick = () => {
    setDropdownOpen(false); // Close the dropdown when a link is clicked
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
                    href="/"
                    className="text-black font-Montserrat text-[12px]"
                  >
                    About Us
                  </Link>

                  <div className="relative inline-block">
                    <span
                      className="text-black font-Montserrat text-[12px] cursor-pointer"
                      onClick={handleDropdownToggle}
                    >
                      Categories
                    </span>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 py-2 w-[150px] bg-[#C82C2F] rounded-md z-40">
                        <a
                          href="/category1"
                          className="block px-4 py-2 text-white font-Montserrat text-[12px]"
                          onClick={handleDropdownLinkClick}
                        >
                          Real Estate
                        </a>
                        <a
                          href="/category2"
                          className="block px-4 py-2 text-white font-Montserrat text-[12px]"
                          onClick={handleDropdownLinkClick}
                        >
                          Category 2
                        </a>
                        {/* Add more categories as needed */}
                      </div>
                    )}
                  </div>
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
            href="/"
            className="text-black font-medium hover:text-[#052087] font-Montserrat text-[12px]"
          >
            About Us
          </Link>
          <div className="relative inline-block">
            <span
              className="text-black font-medium hover:text-[#052087] font-Montserrat text-[12px] cursor-pointer"
              onClick={handleDropdownToggle}
            >
              Categories
            </span>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 py-2 w-[220px] flex bg-[#C82C2F] rounded-md z-10">
                <div className="mt-2.5 pl-3">
                  <GoDotFill color="#00ADEF" size={12} />
                </div>
                <div className="flex flex-col">
                  <a
                    href="/about"
                    className=" px-4 py-2 text-white inline-flex items-center gap-1 font-Montserrat font-bold text-[10px]"
                    onClick={handleDropdownLinkClick}
                  >
                    Real Estate
                  </a>
                  <a
                    href="/agriculture"
                    className="block px-4 py-2 text-white font-Montserrat font-bold text-[10px]"
                    onClick={handleDropdownLinkClick}
                  >
                    Agriculture
                  </a>
                  <a
                    href="/trading"
                    className="block px-4 py-2 text-white font-Montserrat font-bold text-[10px]"
                    onClick={handleDropdownLinkClick}
                  >
                    Trading
                  </a>
                  <a
                    href="/category2"
                    className="block px-4 py-2 text-white font-Montserrat font-bold text-[10px]"
                    onClick={handleDropdownLinkClick}
                  >
                    Import
                  </a>
                  <a
                    href="/category2"
                    className="block px-4 py-2 text-white font-Montserrat font-bold text-[10px]"
                    onClick={handleDropdownLinkClick}
                  >
                    Business
                  </a>
                  <a
                    href="/category2"
                    className="block px-4 py-2 text-white font-Montserrat font-bold text-[10px]"
                    onClick={handleDropdownLinkClick}
                  >
                    Technology
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
