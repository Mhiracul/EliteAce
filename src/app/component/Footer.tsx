"use client";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="bg-[#fff]  h-full md:py-10 py-0 flex items-center">
      <div className="container mx-auto py-20 px-6 bg-[#ffffff]">
        <div className="flex lg:flex-row md:flex-col gap-6 flex-col ">
          <div className="flex flex-col gap-16">
            <h3 className="text-black md:text-start text-center  md:text-2xl text-lg font-semibold">
              Subscribe to our <br /> Newsletter
            </h3>

            <div className="bg-[#f5f4f4] py-2 px-4 flex items-center justify-between">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent md:text-sm text-xs border-none outline-none font-semibold text-white placeholder-black placeholder-opacity-[75%] flex-1"
              />

              <div className="bg-[#052087] rounded-sm p-2 ml-2">
                <FaLongArrowAltRight color="white" size={12} />
              </div>
            </div>
            <p className="text-black text-xs hidden lg:block text-opacity-[35%] py-3 font-semibold">
              Copyright 2023 EliteAndAce Properties. All Rights Reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 py-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 mx-auto">
            <div className="col-span-1">
              <h4 className="text-black font-semibold md:text-lg text-sm mb-4">
                Useful Links
              </h4>

              <ul className="text-black text-opacity-[35%] font-semibold md:text-xs text-[8px]">
                <li>
                  <Link href="/Services" className="cursor-pointer">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-black font-semibold md:text-lg text-sm mb-4">
                About
              </h4>
              <ul className="text-black text-opacity-[35%] font-semibold md:text-xs text-[8px]">
                <li>
                  <Link href="/Service" className="cursor-pointer">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" className="cursor-pointer">
                    Contact Us
                  </Link>
                </li>
              </ul>{" "}
            </div>

            <div className="col-span-1">
              <h4 className="text-black font-semibold md:text-lg text-sm mb-4">
                Terms
              </h4>
              <ul className="text-black text-opacity-[35%] font-semibold md:text-xs text-[8px]">
                <li>
                  <Link href="/PrivacyAndPolicy">Privacy Policy</Link>
                </li>
              </ul>{" "}
            </div>

            <div className="col-span-1">
              <h4 className="text-black font-semibold md:text-lg text-sm mb-4">
                Contact
              </h4>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  className="text-black text-opacity-[35%] font-semibold md:text-xs text-[8px]"
                  href="/"
                >
                  First Floor, <br />
                  Merit house, Maitama. <br />
                  +2348076478400 <br />
                  +2348076478400
                </Link>
              </div>
            </div>
          </div>
          <p className="lg:hidden mt-10 text-center md:text-xs text-[8px] border-t border-black  border-opacity-40 text-black text-opacity-[35%] py-3 font-semibold">
            Copyright 2023 EliteAndAce Properties. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
