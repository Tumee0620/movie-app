"use client";
import { FaStar } from "react-icons/fa6";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const CardTwoFor = ({
  rate,
  title,
  src,
  onClick,
}: {
  onClick: () => void;
  rate: string;
  title: string;
  src: string;
  results: string;
}) => {
  return (
    <div
      onClick={() => {
        onClick();
      }}
    >
      <div className=" pt-14 flex flex-wrap">
        <div className=" h-[331px] w-[200px] rounded-md flex flex-col ">
          <div className=" bg-gray-400 w-[170px] h-[200px]">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="h-[90px] w-[170px] bg-[#F4F4F5] items-center">
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
