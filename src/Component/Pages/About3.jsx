import React from 'react'
import p1 from "../../assets/customer-support.png";

import p2 from "../../assets/high-quality.png";
import p3 from "../../assets/search.png";
import p4 from "../../assets/prestige.png";
import { motion } from "framer-motion";
const About3 = () => {
    const transition = {
        duration: 1,
        type: "spring",
    };
    return (
        <>
            <div className='min-h-screen bg-red-300 flex justify-center items-center'>
            
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                // data-aos="zoom-out"
                // data-aos-duration="2000"

                // data-aos="flip-right"
                // data-aos-delay="700"
                // data-aos-duration="2000"
                >
                    <div
                        className="cursor-pointer group bg-white hover:bg-[#00b0ea] hover:duration-500 duration-700 px-5 py-10 bg-opacity-80 hover:-translate-y-3"

                    >
                        {/* <div className="cursor-pointer group bg-white hover:bg-[#00b0ea] hover:duration-500 duration-700  bg-opacity-80 hover:-translate-y-3"> */}
                        <div className="text-center flex w-full justify-center text-[#00AFAE] group-hover:text-gray-100 duration-700 group-hover:duration-700">
                            {/* <GiAudioCassette className="text-6xl  " /> */}
                            <img src={p1} className=" w-[60px]" />
                        </div>
                        <h3 className="text-center text-lg font-semibold group-hover:text-gray-100 group-hover:duration-700 duration-700 py-4">
                            {/* <h3 className="text-center text-lg font-semibold group-hover:text-gray-100 group-hover:duration-700 duration-700"> */}
                            Audio Consulting
                        </h3>
                        <p className="text-[12px] group-hover:text-gray-100 group-hover:duration-700 duration-700">
                            The tech team of Erthpot ensures that the customers know and understand the technology behind
                            our products
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="w-[95%] mx-auto grid  md:grid-cols-3 sm:grid-cols-2 gap-1 pt-20">

                
                <div
                    className="cursor-pointer group bg-white hover:bg-[#00b0ea] hover:duration-500 duration-700 px-5 py-10 bg-opacity-80 hover:-translate-y-3"
                    // data-aos="zoom-out"
                    // data-aos-duration="3000"

                    data-aos="flip-up"
                    data-aos-delay="900"
                    data-aos-duration="2000"
                >
                    {/* <div className="cursor-pointer group bg-white hover:bg-[#00b0ea] hover:duration-500 duration-700  bg-opacity-80 hover:-translate-y-3"> */}
                    <div className="text-center flex w-full justify-center text-[#00AFAE] group-hover:text-gray-100 duration-700 group-hover:duration-700">
                        {/* <GiAudioCassette className="text-6xl  " /> */}
                        <img src={p4} className=" w-[60px]" />
                    </div>
                    <h3 className=" text-center text-lg font-semibold group-hover:text-gray-100 group-hover:duration-700 duration-700 py-4">
                        {/* <h3 className=" text-center text-lg font-semibold group-hover:text-gray-100 group-hover:duration-700 duration-700 "> */}
                        User Experience
                    </h3>
                    <p className="text-[12px] group-hover:text-gray-100 group-hover:duration-700 duration-700 ">
                        Since Erthpot is into simplify complex audio applications, the softwares & systems designed by
                        Erthpot team ensure smooth operations & easy to learn
                    </p>
                </div>
                <div
                    className="cursor-pointer group bg-white hover:bg-[#00b0ea] hover:duration-500 duration-700 px-5 py-10 bg-opacity-80 hover:-translate-y-3"
                    //    data-aos="zoom-out"
                    //    data-aos-duration="4000"

                    data-aos="flip-down"
                    data-aos-delay="400"
                    data-aos-duration="2000"
                >
                    {/* <div className="cursor-pointer group bg-white hover:bg-[#00b0ea] hover:duration-500 duration-700 bg-opacity-80 hover:-translate-y-3"> */}
                    <div className="text-center flex w-full justify-center text-[#00AFAE] group-hover:text-gray-100 duration-700 group-hover:duration-700">
                        {/* <GiAudioCassette className="text-6xl  " /> */}
                        <img src={p2} className=" w-[60px]" />
                    </div>
                    <h3 className=" text-center text-lg font-semibold group-hover:text-gray-100 group-hover:duration-700 duration-700 py-4">
                        {/* <h3 className=" text-center text-lg font-semibold group-hover:text-gray-100 group-hover:duration-700 duration-700 "> */}
                        Brand Credibility
                    </h3>
                    <p className="text-[12px] group-hover:text-gray-100 group-hover:duration-700 duration-700 ">
                        Erthpot products are certified for quality & aspirations. The various certificates we hold like
                        StartUp India, Make in India, UDYAM & ISO speak for our commitment.
                    </p>
                </div>
            </div>


        </>
    )
}

export default About3