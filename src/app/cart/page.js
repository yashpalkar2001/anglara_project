"use client";
import Image from "next/image";
import React from "react";
import hero from "@/app/images/pexels2.jpg";

const Cart = () => {
    return (
        <div className="w-full ">
            <table className="w-full  text-slate-500 overflow-x-auto">
                <thead className="bg-[#f0fdfa] text-[0.8rem] overflow-x-auto">
                    <tr>
                        <th className="py-4">PRODUCT DETAILS</th>
                        <th>PRICE </th>
                        <th>QUNTITY</th>
                        <th>SHIPPING</th>
                        <th>SUBTOTAL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center text-[0.8rem]">
                        <td className="mx-auto flex">
                            <div className="flex items-center py-2 mx-auto">
                                <Image src={hero} width={80} className="rounded" />
                                <div className="text-slate-500 text-left mx-2">
                                    <h3 className="text-[0.9rem] font-semibold ">
                                        somthing somthing{" "}
                                    </h3>
                                    <p className="py-1">Color: Yellow</p>
                                    <p className="">Size :M</p>
                                </div>
                            </div>
                        </td>
                        <td>Rs.1000</td>
                        <td>
                            {" "}
                            <span className="text-sm bg-slate-300 p-2 rounded-full px-4">
                                {" "}
                                - 1 +
                            </span>
                        </td>
                        <td>FREE</td>
                        <td>RS.1000</td>
                        <td>
                            <i className="pi pi-trash" style={{ fontSize: "1.5rem" }}></i>
                        </td>
                    </tr>
                    <tr className="text-center text-[0.8rem]">
                        <td className="mx-auto flex">
                            <div className="flex items-center py-2 mx-auto">
                                <Image src={hero} width={80} className="rounded" />
                                <div className="text-slate-500 text-left mx-2">
                                    <h3 className="text-[0.9rem] font-semibold ">
                                        somthing somthing{" "}
                                    </h3>
                                    <p className="py-1">Color: Yellow</p>
                                    <p className="">Size :M</p>
                                </div>
                            </div>
                        </td>
                        <td>Rs.1000</td>
                        <td>
                            {" "}
                            <span className="text-sm bg-slate-300 p-2 rounded-full px-4">
                                {" "}
                                - 1 +
                            </span>
                        </td>
                        <td>FREE</td>
                        <td>RS.1000</td>
                        <td>
                            <i className="pi pi-trash" style={{ fontSize: "1.5rem" }}></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className=" justify-between  bg-[#f8fafc] md:flex md:flex-row-reverse md:px-[6rem] md:pb-[2rem]">
                <div className="bg-[#f0fdfa] text-[0.8rem] px-[2rem] py-4  ">
                    <table className="">
                        <tr className="py-2">
                            <td>Sub Total</td>
                            <td className="py-2">Rs.2000</td>
                        </tr>
                        <tr className="py-2">
                            <td className="py-2">Shipping</td>
                            <td>Rs.00</td>
                        </tr>

                        <tr className="border-t border-black">
                            <td className="py-2">Grand Total</td>
                            <td>Rs.2000</td>
                        </tr>
                    </table>

                    <div className="p-4  border-t-2 border-slate-600">
                        <button className="px-[2rem] p-2 bg-[#14B8A6] text-white rounded">
                            Apply Coupon
                        </button>
                    </div>
                </div>
                <div className="py-3">
                    <h3 className="text-[0.8rem] font-semibold">Discount Codes</h3>
                    <p className="text-slate-400 py-2">
                        Enter your coupon code if you have one
                    </p>
                    <div className="flex items-center  py-3">
                        <input className="border p-2 border-[#14b8A6]" />
                        <button className="p-2 bg-[#14B8A6] text-white ">
                            Apply Coupon
                        </button>
                    </div>

                    <button className="px-[3rem] p-2 border border-[#14B8A6]  text-[#14B8A6] rounded">
                        Countinue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
