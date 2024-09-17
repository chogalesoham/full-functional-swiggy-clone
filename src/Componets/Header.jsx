import React from "react";
import SwiggyLogo from "../assets/Swiggy-logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoHelpBuoy, IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAddCard } from "react-icons/md";
import { TiShoppingBag } from "react-icons/ti";

const Header = () => {
  return (
    <nav className=" w-full flex items-center justify-center shadow-lg p-3  m-auto">
      <div className=" w-[95%] flex items-center justify-between">
        <div className="flex">
          <img src={SwiggyLogo} alt="logo" className=" w-20" />
          <span className=" flex items-center gap-2 justify-center">
            <p className="text-slate-950 underline underline-offset-1">
              {" "}
              Othor
            </p>
            <IoIosArrowDown />
          </span>
        </div>
        <div className=" flex items-center justify-center gap-10">
          <a className=" flex items-center justify-center gap-2 text-lg from-neutral-700 transition ease-in-out hover:text-orange-600 cursor-pointer">
            {" "}
            <TiShoppingBag className="  text-[20px] text-gray-800" />
            Swiggy Corporate
          </a>
          <a className=" flex items-center justify-center gap-2 text-lg from-neutral-700 transition ease-in-out hover:text-orange-600 cursor-pointer">
            <IoSearch className="  text-[20px] text-gray-800" />
            Search
          </a>
          <a className=" flex items-center justify-center gap-2 text-lg from-neutral-700 transition ease-in-out hover:text-orange-600 cursor-pointer">
            <BiSolidOffer className="  text-[20px] text-gray-800" />
            Offers
          </a>
          <a className=" flex items-center justify-center gap-2 text-lg from-neutral-700 transition ease-in-out hover:text-orange-600 cursor-pointer">
            {" "}
            <IoHelpBuoy className="  text-[20px] text-gray-800" />
            Help
          </a>
          <a className=" flex items-center justify-center gap-2 text-lg from-neutral-700 transition ease-in-out hover:text-orange-600 cursor-pointer">
            {" "}
            <CgProfile className="  text-[20px] text-gray-800" />
            Sign In
          </a>
          <a className=" flex items-center justify-center gap-2 text-lg from-neutral-700 transition ease-in-out hover:text-orange-600 cursor-pointer">
            {" "}
            <MdOutlineAddCard className="  text-[20px] text-gray-800" />
            Card
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
