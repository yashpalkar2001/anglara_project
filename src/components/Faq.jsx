"use client";
import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import Card1 from "./Card1";
import photo1 from "@/app/images/pexels1.jpg";
import photo2 from "@/app/images/pexels2.jpg";
import photo3 from "@/app/images/pexels3.jpg";
import photo4 from "@/app/images/pexels4.jpg";
import photo5 from "@/app/images/pexels5.jpg";
import rating from "@/app/icons/rating.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Faq = () => {
  const data = [
    {
      name: "John remsy",
      photo: photo5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Tara jay",
      photo: photo1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Robert ams",
      photo: photo2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Floyed Miles",
      photo: photo3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "haveab nayaib",
      photo: photo4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full py-[5rem] bg-[#F8FAFC] md:px-[4rem]">
        <h2 className="text-[2rem] font-semibold text-center lg:text-left">
          FAQ
        </h2>
        <div className="card">
          <Accordion activeIndex={0}>
            <AccordionTab
              header="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?"
              className="p-2 border-b border-slate-400 text-lg font-medium my-2 "
            >
              <p className="m-0  text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab
              header="2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?"
              className="p-2 border-b border-slate-400 text-lg font-medium  my-2"
            >
              <p className="m-0  text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab
              header="3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?"
              className="p-2 border-b border-slate-400 text-lg font-medium my-3 "
            >
              <p className="m-0  text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
      <div className="w-full py-[5rem] md:px-[4rem]">
        <h2 className="text-[2rem] font-semibold text-center lg:text-left">
          Customer Review{" "}
        </h2>
        <div className="">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                className="border border-gray-400 w-[30%] p-3 gap-4 rounded-md"
                key={index}
              >
                <div className="flex justify-between items-center">
                  <Image src={item.photo} width={50} height={25} alt="img" />
                  <Image
                    src={rating}
                    width={80}
                    // height={25}
                    alt="rating"
                    // className="border border-black"
                  />
                </div>
                <h2 className="font-semibold text-base py-3 ">{item.name}</h2>
                <p className="text-sm pt-1 text-slate-400">{item.review}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Faq;
