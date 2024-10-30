"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import hero3 from "@/app/hero2.jpg";
import Image from "next/image";
// changc from here photo
import man from "@/app/icons/adidas.png";
import woman from "@/app/icons/lg.png";
import kid from "@/app/icons/puma.png";
import cosmatic from "@/app/icons/lizzard.png";
import accessories from "@/app/icons/sunglasses.png";
import home from "@/app/icons/home.png";
import shoe from "@/app/icons/shoe.png";
import sport from "@/app/icons/football.png";
import Card1 from "./Card1";

const Mpp = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const data = await fetch("https://fakestoreapi.com/products?limit=8");
      const res = await data.json();

      setPost(res);
      console.log(res);
    };
    getApiData();
  }, []);
  const mppIcon = [
    {
      img: man,

      //   style: "text-"
    },
    {
      img: woman,
    },
    {
      img: kid,
    },
    {
      img: cosmatic,
    },
    {
      img: accessories,
    },
    {
      img: home,
    },
    {
      img: shoe,
    },
    {
      img: sport,
    },
  ];
  return (
    <>
      {" "}
      <div className="w-full py-[5rem] bg-[#F8FAFC] md:px-[4rem]">
        <div className="flex items-center justify-center flex-wrap lg:justify-between">
          <h2 className="text-[2rem] font-semibold text-center lg:text-left">
            Most Popular Products
          </h2>

          <button className="px-[5rem] p-3 text-[0.8rem] bg-[#14B8A6] font-medium rounded text-white m-3">
            View All
          </button>
        </div>
        <div className="w-full py-[3rem]  gap-5 grid grid-cols-1 justify-center items-center lg:grid-cols-4">
          {post.map((item) => (
            <div className="" key={item.id}>
              <Card1
                // srcImg={item.image}
                productName={item.title.slice(0, 20)}
                descreption={item.description.slice(0, 70)}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-[5rem] md:px-[4rem]">
        <h2 className="text-[2rem] font-semibold text-center lg:text-left">
          Popular Brands
        </h2>

        <div className="my-[2rem] flex items-center justify-center overflow-x-auto">
          {mppIcon.map((item, i) => (
            <div key={i} className=" text-center w-fit  mx-6">
              <Image
                src={item.img}
                width={100}
                alt=""
                // className="bg-slate-100 rounded-full p-5"
              />
              <p className="text-sm font-semibold text-slate-500 pt-2">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mpp;
