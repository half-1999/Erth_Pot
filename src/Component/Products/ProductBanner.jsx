import React from "react";
import {Link} from "react-router-dom";
// import "./HeroBanner.css";
import novo_img from "../../assets/Banner/NCS-with-NC5C.D.png";
import arch_img from "../../assets/Banner/Arche.png";
import kyer_img from "../../assets/Banner/keyer.png";
import vector_img from "../../assets/Banner/Vector.png";

const ProductBanner = (props) => {
    const bannerItem = [
        {
            title: "ARCHE",
            heading1: "Wireless",
            heading2: "Microphones",
            photo: arch_img,
            links: "#",
        },
        {
            title: "novo",
            heading1: "Conferencs ",
            heading2: " System",
            photo: novo_img,
            links: "#",
        },
        {
            title: "keyer",
            heading1: "Digital Processing",
            heading2: "& Control",
            photo: kyer_img,
            links: "#",
        },
        {
            title: "Vector",
            heading1: "Digital Processing",
            heading2: "System",
            photo: vector_img,
            links: "#",
        },
    ];

    return (
        <div class="bg-black w-full py-10 gap-2">
            {bannerItem.map((item, index) => (
                <div
                    class={`w-[95%] bg-gray-100 h-[340px] mx-auto flex gap-1 mt-10  ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                    <div class="h-full  flex items-center w-[50%] md:pl-[100px]">
                        <div>
                            <h1 className="uppercase">
                                <span className="md:text-5xl text-xl font-extrabold ">
                                    {/* {largeText1} */}
                                    {item.title}
                                </span>
                            </h1>
                            <span className="text-[#00b0ea] font-medium md:text-4xl text-lg  ">{item.heading1}</span>
                            <span className="text-black md:text-4xl text-lg  font-medium px-2">{item.heading2}</span>
                            <div className=" ">
                                {/* <Link to={`/allproducts/${largeText1}`}> */}
                                <Link to="">
                                    <button className="hover:bg-[#00b0ea] hover:text-gray-100 hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-3  pb-[1px]  mt-4 text-[#00b0ea] font-semibold md:text-[14px] sm:text-[14px]">
                                        Watch More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="relative  h-full  w-[50%] p-2">
                        <div className="w-full">
                            <img
                                src={item.photo}
                                class="absolute inset-0 w-full h-full object-cover transition-transform scale-90"
                                alt="mic"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductBanner;
