import React from "react";
import Image from "next/image";

const Card = ({ srcImg, productName, descreption, price }) => {
  return (
    <>
      <div className="w-fit border border-gray-300 rounded">
        <Image src={srcImg} alt="img" width={250} />

        <div className=" border border-red-600 w-[100%]">
          <h3 className="text-base font-semibold">{productName}</h3>
          <p className="text-xs text-slate-500 py-3 text-wrap w-[70%]">
            {descreption}
          </p>
          <p className="font-semibold">{price}</p>
          <button className="w-full py-2 text-sm rounded text-white font-semibold bg-[#14B8A6]">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
