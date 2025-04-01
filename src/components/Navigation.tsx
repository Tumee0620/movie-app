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

import { IoMdArrowDropdown } from "react-icons/io";

export const Navigation = () => {
  return (
    <div className="w-screen flex justify-between px-15 py-5">
      <div className="flex items-center gap-2">
        <img src="film.svg" alt="" />
        <p className="w-[120px] text-blue-700 font-bold">MOVIE Z</p>
      </div>
      <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            <IoMdArrowDropdown />
            Genres
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2 border-2 rounded-md py-1">
          <CiSearch className="ml-[10px] " />
          <input
            className="outline-none w-[355px]"
            placeholder="Search.."
            type="text"
          ></input>
        </div>
      </div>
      <div>
        <AiOutlineMoon className="w-[32px] h-[32px] border-2 rounded-md border-slate-300 px-1" />
      </div>
    </div>
  );
};
