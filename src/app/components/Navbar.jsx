"use client";
import React from "react";
import Image from "next/image";
import logoimage from "../../../public/resources/logo.png";
import {Search} from "lucide-react";
import services from "../data/Services";
import {User} from "lucide-react";
const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-around shadow-lg shadow-[#e8e8eb]">
      <div className=" flex items-center h-9 bg-white text-black">
        {/* company logo */}
        <div className=" p-5">
          <Image
            src={logoimage}
            alt="company logo"
            height={150}
            width={150}
          />
        </div>
        {/* search box */}
        <div className=" bg-gray-200 rounded-full p-1 mr-5 flex items-center ">
          <Search
            className=" mr-2"
            size={20}
          />
          <input
            className=" focus:outline-none text-xs bg-gray-200 relative sm:w-2 lg:w-[150px] md:w-5"
            placeholder="Search for Michelin Car tyres"
          />
        </div>
        {/* Sercvices buttons */}
        {console.log(services)}
        <div className=" flex  gap-2.5">
          <div className=" text-[17px] font-bold hover:underline hover:cursor-pointer ">
            Car Tyres
          </div>
          <div className=" text-[17px] font-bold hover:underline hover:cursor-pointer">
            Bike Tyres
          </div>
          <div className=" text-[17px] font-bold hover:underline hover:cursor-pointer">
            Tyre Pressure
          </div>
          <div className=" text-[17px] font-bold hover:underline hover:cursor-pointer ">
            Commercial Tyres
          </div>
          <div className=" text-[17px] font-bold hover:underline hover:cursor-pointer">
            Accessories
          </div>
          <div className=" text-[17px] font-bold hover:underline hover:cursor-pointer">
            More
          </div>
        </div>
      </div>{" "}
      <div className=" flex items-center text-black ">
        <User
          size={20}
          strokeWidth={0.75}
        />
        <label className=" font-bold text-sm">Login</label>
      </div>
    </div>
  );
};

export default Navbar;
