"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const links = ["Home", "About Us", "Pricing", "Features"];
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <div className="flex gap-8 items-center">
            {" "}
            <div className="w-[120px]">
              <img src="/images/logo.png" alt="logo" className="object-cover" />
            </div>
            <div className="flex gap-[20px] xl:gap-[24px] text-[16px] items-center select-none">
              {links.map((link, index) => (
                <p
                  className={`hover:text-primary hover:font-bold text-[20px] cursor-pointer flex items-center gap-2 font-medium text-black`}
                  key={index}
                >
                  {link}
                </p>
              ))}
            </div>
          </div>

          <div></div>
          <div className="flex items-center gap-[40px] select-none">
            <MainButton text="Download" classes="" />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo.png" alt="logo" className="w-[9rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <p className="text-black cursor-pointer" key={index}>
                  <span>{link}</span>
                </p>
              ))}

              <div className="flex flex-col gap-[40px] select-none">
                <MainButton text="Download" classes="" />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
