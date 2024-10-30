"use client";
import React, { useState } from "react";
import "primeicons/primeicons.css";
import Link from "next/link";

const Navebar = () => {
  const [menuShow, setMenuShow] = React.useState(false);
  return (
    <div>
      <nav className="flex justify-between items-center relative">
        <div className="p-4 text-2xl font-bold text-[#14B8A6] cursor-pointer lg:px-[6rem]">
          Logo
        </div>

        <div className="flex items-center lg:hidden">
          <li
            className="pi pi-user  p-3  rounded cursor-pointer"
            style={{ fontSize: "1.5rem" }}
          ></li>
          <li
            className="pi pi-shopping-cart  p-4 cursor-pointer rounded relative"
            style={{ fontSize: "1.5rem" }}
          >
            <span className="bg-red-500 text-white absolute  top-2 px-1.5 font-semibold rounded-full right-2 z-10 text-sm">
              3
            </span>
          </li>
          <i
            onClick={() => setMenuShow(!menuShow)}
            className="pi pi-align-justify px-2 text-gray-500 cursor-pointer"
            style={{ fontSize: "2rem" }}
          ></i>
        </div>

        {/* This menu is for mobile only  */}
        {menuShow && (
          <ul className="absolute top-0 left-0 bg-slate-200 w-full flex flex-col justify-between items-center text-xl text-[#1E293B] font-medium lg:hidden">
            <i
              onClick={() => setMenuShow(!menuShow)}
              className="pi pi-times w-full text-right p-2 cursor-pointer"
              style={{ fontSize: "2.5rem" }}
            ></i>
            <li className="p-4 border-y border-white w-full text-center cursor-pointer">
              Home
            </li>
            <li className="p-4 border-b border-white w-full text-center cursor-pointer">
              Categories
            </li>
            <li className="p-4 border-b border-white w-full text-center cursor-pointer">
              Explore
            </li>
            <li className="p-4 border-b border-white w-full text-center cursor-pointer">
              About
            </li>
            <li className="p-4 border-b border-white w-full text-center cursor-pointer">
              Blog
            </li>
            <li className="p-4 border-b border-white w-full text-center cursor-pointer">
              Contact Us
            </li>
          </ul>
        )}

        {/* This is menu is for desktop only  */}
        <ul className="hidden lg:flex justify-between items-center text-sm text-[#1E293B] font-medium pr-[3rem]">
          <li className="px-4 cursor-pointer">Home</li>
          <li className="px-4 cursor-pointer">Categories</li>
          <li className="px-4 cursor-pointer">Explore</li>
          <li className="px-4 cursor-pointer">About</li>
          <li className="px-4 cursor-pointer">Blog</li>
          <li className="px-4 cursor-pointer">Contact Us</li>
          <li className="pi pi-search mx-4 bg-slate-100 rounded p-2 cursor-pointer"></li>
          <li className="pi pi-user mx-4 p-2 bg-slate-100 rounded cursor-pointer"></li>
          <Link href={"/cart"}>
            <li className="pi pi-shopping-cart mx-4 p-2 bg-slate-100 rounded relative cursor-pointer">
              <span className="bg-red-500 text-white absolute -top-3 px-1.5 font-semibold rounded-full -right-3 z-10 text-sm">
                3
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navebar;
