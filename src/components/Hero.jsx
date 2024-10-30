import Image from "next/image";
import React from "react";
import hero1 from "@/app/hero1.jpg";
// import { hero } from "./hero1.jpg";

const Hero = () => {
  return (
    <>
      {" "}
      <div className=" bg-[#F8FAFC] lg:flex flex-row-reverse w-full items-center">
        <div className="w-full relative ">
          <Image src={hero1} alt="img" className="w-full h-full" />
          <div className="absolute bottom-4 right-[2rem] z-10">
            <i
              className="pi pi-arrow-left mx-4 bg-[#14B8A6] text p-2 rounded-full"
              style={{ fontSize: "0.6rem" }}
            ></i>
            <i
              className="pi pi-arrow-right bg-slate-300 p-2 rounded-full"
              style={{ fontSize: "0.6rem" }}
            ></i>
          </div>
        </div>
        <div className="pt-5 lg:w-full lg:px-[4rem] lg:py-[2rem] ">
          <h1 className="text-[3rem] text-center font-semibold tracking-tight lg:text-left ">
            Lorem, ipsum dolor sit{" "}
          </h1>
          <p className=" pt-[1rem]  text-[1.2rem] text-justify tracking-tight lg:text-[0.8rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eaque
            soluta dolores, ipsam cum porro delectus explicabo libero quas sed
            aliquid perferendis beatae rerum doloribus quisquam provident
            eligendi quasi iusto Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Minima.
          </p>
          <div className="text-[#14B8A6] flex flex-wrap items-center justify-center w-full mt-5 lg:justify-start">
            <button className="px-[4rem] p-3 border border-[#14B8A6] m-5">
              Explore
            </button>
            <button className="px-[4rem] p-3 border border-[#14B8A6] m-5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[5rem] w-full flex justify-center items-center flex-wrap">
        <div className=" bg-slate-200 rounded p-[2rem] px-[3rem] m-5 text-center ">
          <h3 className="text-xl font-semibold">93%</h3>
          <h5 className="text-base">Happy Customer </h5>
        </div>

        <div className=" bg-slate-200 rounded p-[2rem] px-[3.5rem] m-5 text-center ">
          <h3 className="text-xl font-semibold">1 Million+</h3>
          <h5 className="text-base">Yeaarly Sales</h5>
        </div>

        <div className=" bg-slate-200 rounded p-[2rem] px-[3rem] m-5 text-center ">
          <h3 className="text-xl font-semibold">20k+</h3>
          <h5 className="text-base">Customer Rating</h5>
        </div>
      </div>
    </>
  );
};

export default Hero;
