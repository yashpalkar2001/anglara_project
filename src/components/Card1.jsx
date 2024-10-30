import Image from "next/image";
import React from "react";
import hero2 from "@/app/hero3.jpg";

const Card1 = ({ srcImg, productName, descreption, price }) => {
  return (
    <>
      <div className="w-fit ">
        {/* <div> */}
        <Image
          src={srcImg}
          alt="img"
          width={250}
          // height={100}
          className=""
        />
        {/* </div> */}

        <div className="bg-slate-200 p-3">
          <h3 className="text-base font-semibold ">{productName}</h3>
          <p className="text-sm text-slate-500 text-wrap">{descreption}</p>
          <p className="font-semibold text-sm">Rs.{price}</p>
          <button className="w-full py-2 text-sm rounded text-white font-semibold bg-[#14B8A6]">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card1;
