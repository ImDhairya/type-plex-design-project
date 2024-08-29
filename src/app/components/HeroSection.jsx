import React from "react";
import image from "../../../public/resources/full-tyre.png";
import Image from "next/image";
import {House, MapPin, MessageSquareText, Star} from "lucide-react";
import {ShieldCheck} from "lucide-react";
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <div className="flex bg-white w-full h-screen items-center justify-center ">
      {/* Image on left side */}

      <div className="h-screen flex items-center justify-center mt-5 bg-white w-2/5">
        <Image
          src={image}
          alt="abc"
          width={300}
          height={200}
        />
      </div>

      {/* Content on the righ hand side  */}
      <div className="h-screen w-3/5 mt-5 bg-white">
        <div className=" ">
          <h1 className="font-bold text-lg">
            Michelin Latitude Sport 3 265/45 R20
          </h1>
        </div>
        <div className=" flex items-center justify-start ">
          <div className="flex items-center justify-center h-3 p-1 mr-3 rounded-sm text-white bg-green-600 w-fit">
            <Star
              fill="white"
              size={17}
            />
            <label
              htmlFor=""
              className=" text-sm"
            >
              4.9
            </label>
          </div>
          <div className=" text-[13px] text-gray-500 ">9 Reviews</div>
        </div>

        <div className="flex items-baseline">
          <div className=" font-bold">$ 35,981</div>
          <div className=" ml-4 text-[13px] line-through ">$37,374</div>
          <div className="ml-4 text-[15px] text-green-700 font-semibold ">
            4% off
          </div>
        </div>

        <div className="">
          <div className="text-[15px] bg-[#fff1c5] w-fit flex ">
            <ShieldCheck
              size={20}
              className=" text-white"
              fill="black"
              strokeWidth={0.75}
            />
            6 Year Manufacturer's Warranty
          </div>
        </div>
        <div className="">
          <hr className=" mt-1.5" />
          <div className=" pt-1 text-[11px]">
            <label>Type</label>:{" "}
            <label className=" text-gray-400">Tubeless</label>
          </div>
          <hr className=" mt-1.5" />
          <div className=" text-[15px] mt-2 mb-2 flex ">
            <label className="">Pincode</label>
            <div className=" ">
              <input
                type="text"
                className=" ml-2 w-fit underline"
                placeholder="Enter Pincode"
              />
            </div>
          </div>
        </div>
        {/* Dealsers card */}
        <div className=" font-bold text-[17px] p-2 bg-[#b5b1bab3] ">
          20 Dealers Found
        </div>
        <div className="">
          <div className=" h-fit border rounded-lg p-2 mr-2 mt-2 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div className=" mt-3 flex items-center">
                <House
                  strokeWidth={0.5}
                  className=" mr-2"
                />
                <h2 className=" font-semibold text-[17px] ">
                  SHREE HEMKUNT TYRES AND SERVICES
                </h2>
                <ShieldCheck
                  size={20}
                  className=" text-white ml-2"
                  fill="green"
                  strokeWidth={0.75}
                />
                <p className=" text-[13px] text-green-500 ">Verified</p>
              </div>
              <div className=" text-[15px] flex mr-3 text-gray-500 ">
                <MapPin />
                In your locality
              </div>
            </div>
            {/* rating row */}
            <div className="mt-3 flex items-center  ">
              <div className="flex items-center justify-center h-4 p-1  rounded-sm text-white bg-green-600 w-fit">
                <label
                  htmlFor=""
                  className=" text-[15px] "
                >
                  4.9
                </label>
              </div>
              <div className=" flex gap-1 ml-2">
                <Star
                  fill="gold"
                  strokeWidth={0}
                  bord
                />
                <Star
                  fill="gold"
                  strokeWidth={0}
                  bord
                />
                <Star
                  fill="gold"
                  strokeWidth={0}
                  bord
                />
                <Star
                  fill="gold"
                  strokeWidth={0}
                  bord
                />
                <Star
                  fill="gold"
                  strokeWidth={0}
                  bord
                />
              </div>
              <div className="">
                <div className=" text-[17px] text-gray-500  ml-2 ">
                  2278 Ratings
                </div>
              </div>
            </div>
            {/* deals in */}
            <div className="flex items-center mt-2">
              <p className=" font-bold text-[15px] ">Deals In</p>
              <p className=" text-[14px] border w-fit ml-3 bg-gray-100 rounded-xl p-2 ">
                Car Types
              </p>
              <p className=" text-[14px] border w-fit ml-3 bg-gray-100 rounded-xl p-2 ">
                Bike Types
              </p>
              <p className=" text-[14px] border w-fit ml-3 bg-gray-100 rounded-xl p-2 ">
                Scooter Types
              </p>
            </div>
            {/* THe chats */}
            <div className=" mt-3 flex ">
              <div>
                <MessageSquareText
                  strokeWidth={0.5}
                  className=" mr-3"
                />
              </div>
              <div>
                <p className="mr-4 text-[18px] text-gray-600 mb-3">
                  Excellent service from start to finish. 100% satisfaction with
                  the job, professionalism and overall service.We were delighted
                  with your courteous , prompt and professional service. We
                  would plan to reuse your services and recommend these to
                  friends and family. You came to us as a recommendation and
                  this proved accurate.
                </p>
              </div>
            </div>
            <hr className="" />
            <div className="flex justify-between p-4">
              <div className=" bg-gray-100 text-[18px] items-center flex">
                <p>+9195*****666</p>
              </div>
              <div>
                <button className=" text-red-600 text-[18px] ring-1 rounded-md pl-1 pr-1 h-8 ring-red-600">
                  View Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className=" underline text-[20px] p-2 mt-7 mb-4">
            View More{" "}
          </button>
        </div>
        <div className=" text-[18px] flex justify-between mb-5">
          <div className=" flex">
            <p>Fits in Bentley Mulsanne Sedian-</p>
            <p className=" font-bold  ">Front & Rear</p>
          </div>
          <div>
            <button className="mr-20 text-blue-500">(Change Vehicle)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
