"use client";
import { FaStar } from "react-icons/fa6";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const MovieCard = ({
  rate,
  title,
  src,
  onClick,
}: {
  onClick: () => void;
  rate: string;
  title: string;
  src: string;
}) => {
  return (
    <div onClick={onClick} className="pl-2">
      <div className=" px-8 pt-10 ">
        <div className=" h-[439px] w-[230px] rounded-md flex flex-col ">
          <div className=" bg-gray-400 w-[230px] h-[340px]">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="h-[119px] w-[230px] bg-[#F4F4F5] items-center">
            <div className="flex px-3 pt-3 items-center">
              <FaStar color="yellow" fill="yellow" />
              {rate}
              <p className="text-gray-500">/10</p>
            </div>
            <p className="pl-[17px]"> {title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
