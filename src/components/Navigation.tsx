"use client";
import { CiSearch } from "react-icons/ci";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineMoon } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";

import { IoMdArrowDropdown } from "react-icons/io";
import { Badge } from "./ui/badge";
import { GenreBadge } from "./GenreBadge";
import { useState, useEffect } from "react";
import axios from "axios";
import { Divide, StarsIcon } from "lucide-react";
import { useRouter } from "next/navigation";
export const Navigation = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const handleOnChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const user = useRouter();
  const ToggleOnClick = (id: string) => {
    user.push(`/details/${id}`);
    setInputValue("");
  };

  const PageSwitcher = (id: string) => {
    user.push(`/genrefilter/${id}`);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}&language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      )
      .then((response) => {
        setData(response.data.results);
      });
  }, [inputValue]);

  console.log(data, "datas");
  return (
    <div className="w-screen flex justify-between px-15 py-5">
      <div className="flex items-center gap-2">
        <img src="film.svg" alt="" />
        <a
          href="http://localhost:3000/"
          className="w-[120px] text-blue-700 font-bold"
        >
          MOVIE Z
        </a>
      </div>
      <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            <IoMdArrowDropdown />
            Genres
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[537px] h-fit p-5">
            <DropdownMenuLabel className="flex flex-col gap-1 justify-start">
              <p>Gengres</p>
              <p className="font-normal">See list of movies by genre</p>
            </DropdownMenuLabel>

            <DropdownMenuItem>
              <GenreBadge onclick={PageSwitcher}></GenreBadge>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2 border-2 rounded-md py-1">
          <CiSearch className="ml-[10px] " />

          <input
            onChange={handleOnChange}
            className="outline-none w-[355px]"
            placeholder="Search.."
            type="text"
          ></input>
        </div>
        <div
          className={`${
            inputValue == "" ? "hidden" : "flex "
          } w-[560px] h-[850px] mt-11 flex-col absolute gap-2 rounded-md  bg-white border-2 border-gray-500 p-10 z-50`}
        >
          {data?.slice(0, 6).map((value) => {
            return (
              <div
                onClick={() => {
                  ToggleOnClick(value.id);
                }}
                className={`flex-col w-full h-fit bg-white border-b-2 `}
              >
                <div className="flex justify-between w-full gap-2">
                  <div className="flex py-1 gap-3">
                    <img
                      className="w-[67px] h-[100px] border-b-2 "
                      src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p>{value.title}</p>
                      <p className="flex items-center ">
                        <IoIosStar color="yellow" />

                        {value.vote_average}
                      </p>
                      <p>{value.release_date}</p>
                    </div>
                  </div>
                  <div>
                    <p>See more </p>
                  </div>
                </div>
                <div></div>
              </div>
            );
          })}
          <div className="pt-10">
            <p onClick={PageSwitcher} className="font-medium ">
              See all results for "{inputValue}"
            </p>
          </div>
        </div>
      </div>
      <div>
        <AiOutlineMoon className="w-[32px] h-[32px] border-2 rounded-md border-slate-300 px-1" />
      </div>
    </div>
  );
};
