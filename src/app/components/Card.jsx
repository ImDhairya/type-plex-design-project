import React from "react";

const Card = () => {
  return (
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
              Excellent service from start to finish. 100% satisfaction with the
              job, professionalism and overall service.We were delighted with
              your courteous , prompt and professional service. We would plan to
              reuse your services and recommend these to friends and family. You
              came to us as a recommendation and this proved accurate.
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
  );
};

export default Card;
