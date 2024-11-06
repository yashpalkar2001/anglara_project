"use client";
import React, { useEffect, useState } from "react";
import man from "@/app/icons/man.png";
import woman from "@/app/icons/woman.png";
import kid from "@/app/icons/kid.png";
import cosmatic from "@/app/icons/cosmetics.png";
import accessories from "@/app/icons/sunglasses.png";
import home from "@/app/icons/home.png";
import shoe from "@/app/icons/shoe.png";
import sport from "@/app/icons/football.png";
import Image from "next/image";
import Card1 from "@/components/Card1";
import hero3 from "@/app/hero3.jpg";

const Categories = () => {
  const [post, setPost] = useState([]);
  // const myLoader = ({ src }) => {
  //   return '${post.image}.https://fakestoreapi.com/user/photo/${blog.postedBy.username}`;
  //   // "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  // };
  useEffect(() => {
    const getApiData = async () => {
      const data = await fetch("https://fakestoreapi.com/products?limit=4");
      const res = await data.json();

      setPost(res);
      console.log(res);
    };
    getApiData();
  }, []);
  const icon = [
    {
      img: man,
      name: "Men",
      //   style: "text-"
    },
    {
      img: woman,
      name: "Woman",
    },
    {
      img: kid,
      name: "Kid",
    },
    {
      img: cosmatic,
      name: "Cosmatics",
    },
    {
      img: accessories,
      name: "Accessories",
    },
    {
      img: home,
      name: "Home",
    },
    {
      img: shoe,
      name: "Footwears",
    },
    {
      img: sport,
      name: "Sports",
    },
  ];
  return (
    <>
      <h2 className="pt-[5rem] text-[2rem] font-semibold text-center lg:text-left md:px-[4rem]">
        Categaories
      </h2>
      <div className="my-[2rem] flex items-center justify-center flex-wrap ">
        {icon.map((item, i) => (
          <div key={i} className=" text-center w-fit  m-3">
            <Image
              src={item.img}
              width={90}
              alt=""
              className="bg-slate-100 rounded-full p-5"
            />
            <p className="text-sm font-semibold text-slate-500 pt-2">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full pt-[5rem] bg-[#F8FAFC] md:px-[4rem]">
        <div className="flex items-center justify-center flex-wrap lg:justify-between">
          <h2 className="text-[2rem] font-semibold text-center lg:text-left">
            Features Products
          </h2>

          <button className="px-[5rem] p-3 text-[0.8rem] bg-[#14B8A6] font-medium rounded text-white m-3">
            View All
          </button>
        </div>
        {/* <div className="py-[3rem] grid grid-cols-1 justify-center items-center lg:grid-cols-4 "> */}
        <div className="w-full py-[3rem] gap-5 grid grid-cols-1 justify-center items-center lg:grid-cols-4">
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
      <div className="flex flex-wrap items-center justify-center py-[3rem]">
        <div className="flex items-center py-4  lg:px-2 ">
          <i className="pi pi-truck" style={{ fontSize: "2rem" }}></i>
          <div className="px-4">
            <h2 className="text-[1rem] font-semibold ">Free Shipping</h2>
            <p className="text-[0.9rem] ">Above all Orders 200rs.</p>
          </div>
        </div>
        <div className="flex items-center py-4  lg:px-2 ">
          <i className="pi pi-indian-rupee" style={{ fontSize: "2rem" }}></i>
          <div className="px-4">
            <h2 className="text-[1rem] font-semibold ">Money Guarantee</h2>
            <p className="text-[0.9rem] ">45 Days for Exchange </p>
          </div>
        </div>
        <div className="flex items-center py-4  lg:px-2 ">
          <i className="pi pi-headphones" style={{ fontSize: "2rem" }}></i>
          <div className="px-4">
            <h2 className="text-[1rem] font-semibold ">Online Support</h2>
            <p className="text-[0.9rem] ">24/7 Customer Care</p>
          </div>
        </div>
        <div className="flex items-center py-4  lg:px-2 ">
          <i className="pi pi-credit-card" style={{ fontSize: "2rem" }}></i>
          <div className="px-4">
            <h2 className="text-[1rem] font-semibold ">Flexible Payment</h2>
            <p className="text-[0.9rem] ">Pay with multiple Credit Card</p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Categories;
