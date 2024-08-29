import React from "react";
import image from "../../../public/resources/questions.png";
import logoImage from "../../../public/resources/logo.png";
import {Facebook} from "lucide-react";
import {Instagram} from "lucide-react";

import Image from "next/image";
const Footer = () => {
  return (
    <div className="">
      <div className=" mt-8 flex items-center p-3 justify-between bg-[#ffeaaa] pb-10">
        {/* Yellow section */}
        <div className=" w-1/2">
          <h1 className=" font-bold">Have a question about Tyres?</h1>
          <p className=" font-light">
            Get an answer in 24 hours from our experts.
          </p>
          <input
            type="text"
            className="p-3 rounded-full mt-3 w-full shadow-md"
            placeholder="Ask or search your question"
          />
        </div>
        <div className=" flex w-1/2 items-center justify-center">
          <Image
            src={image}
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
      {/* facebook logo instagram logo section and above the last  */}
      <div className=" px-8 flex items-center justify-center my-5">
        <div className=" flex-col w-1/4 items-center justify-center">
          <div className="s">
            <Image src={logoImage} />
          </div>
          <div className=" flex w-full items-center justify-start p-5 gap-3">
            <Facebook strokeWidth={0.5} />
            <Instagram strokeWidth={0.5} />
          </div>
        </div>
        <div className="w-1/4 items-center justify-center text-gray-400">
          <div>Who We Are</div>
          <div>Are you a Tyre Dealer?</div>
        </div>
        <div className="w-1/4 items-center justify-center text-gray-400">
          <div>Privacy Policy</div>
          <div>Terms of use</div>
        </div>
        <div className="w-1/4 items-center justify-center text-gray-400">
          <div>Contact Us</div>
          <div>Career</div>
          <div>Shipping & Return Policy</div>
        </div>
      </div>
      <div className="">
        <hr />
        <p className=" items-center justify-center flex p-4 text-gray-400">
          ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
