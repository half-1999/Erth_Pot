// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { Navigation, Pagination,Autoplay, } from 'swiper/modules';

// export default function Anand() {
//   return (
//     <>

// <Swiper
//                 spaceBetween={30}
//                 centeredSlides={true}
//                 autoplay={{
//                     delay: 2500,

//                     disableOnInteraction: false,
//                 }}
//                 pagination={{
//                     clickable: true,
//                     color:" "
//                 }}
//                 navigation={true}
//                 modules={[
//                     Autoplay,
//                      Pagination, Navigation]}
//                 className="mySwiper h-screen   "
//             >

//   <Swiper
//   spaceBetween={30}
//    autoplay={{
//     delay: 2500,

//     disableOnInteraction: false,
// }}
//     dir="rtl"
//     navigation={true}
//     pagination={{
//       clickable: true,
//     }}
//     modules={[Navigation,Autoplay, Pagination]}
//     className="mySwiper h-screen"
//   >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }




// import React, {useRef, useState} from "react";
// // Import Swiper React components
// import {Swiper, SwiperSlide} from "swiper/react";
// import "./Anand.css";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import p1 from "../../assets/Banners-1-Image.png";
// import bg1 from "../../assets/Banners 1 BG.jpg";

// import novo from "../../assets/Banner/NCS-with-NC5C.D.png";
// import vector from "../../assets/Banner/Vector.png";
// import WiredMic from "../../assets/Banner/Wired mic.png";
// import keyer from "../../assets/Banner/keyer.png";
// import Arche from "../../assets/Banner/Arche.png";
// import {Autoplay, Pagination, Navigation} from "swiper/modules";
// import {TypeAnimation} from "react-type-animation";
// import {motion} from "framer-motion";

// export default function Anand() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const slider_content = [
//         {
//             bg: bg1,
//             title: "keyer",
//             photo: keyer,
//             paragraph: "Audio Processing & Control System",
//             btn: "Explore",
//         },
//         {
//             bg: bg1,
//             title: "Arche",
//             photo: Arche,
//             paragraph: "Wireless Microphones",
//             btn: "Explore",
//         },
//         {
//             bg: bg1,
//             title: "Vector",
//             photo: vector,
//             paragraph: "Wired Microphones",
//             btn: "Explore",
//         },
//         {
//             bg: bg1,
//             title: "NCS",
//             photo: novo,
//             paragraph: " Novo Conference System",
//             btn: "Explore",
//         },
//     ];

//     return (
//         <>
//             {/* <Swiper
//       centeredSlides={true}
//        autoplay={{
//         delay: 2500,
        
//         disableOnInteraction: false,
//     }}
//         dir="rtl"
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Navigation,Autoplay, Pagination]}
//         className="mySwiper h-screen"
//       > */}
//             <Swiper
//                 // spaceBetween={30}
//                 centeredSlides={true}
//                 autoplay={{
//                     delay: 3500,

//                     disableOnInteraction: false,
//                 }}
//                 pagination={{
//                     clickable: true,
//                     color: " ",
//                 }}
//                 navigation={true}
//                 modules={[
//                     // Autoplay, 
//                     Pagination, Navigation]}
//                 className="mySwiper h-screen  overflow-x-hidden  "
//             >
//                 <SwiperSlide>
//                     <div
//                         style={{backgroundImage: `url(${slider_content[0].bg})`}}
//                         className="w-full h-screen bg-center bg-cover duration-1000 md:pt-0 sm:pt-20 sm:bg-red-600 pt-20 "
//                     >
//                         <div className="w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1  ">
//                             <div
//                                 className=" flex justify-center items-center sm:p-24 "
//                                 //  data-aos="zoom-out-up" data-aos-duration="2000"
//                             >
//                                 <div className="mr-8">
//                                     <h1 className="text-white md:text-7xl sm:text-5xl text-4xl  uppercase font-extrabold">
//                                         {/* <TypeAnimation
//                                 sequence={[`${slider_content[0].title}`,"" ]}
//                               speed={15}
//                                 repeat={Infinity}
//                             /> */}

//                                         {slider_content[0].title}
//                                     </h1>
//                                     <p className="text-white md:text-[20px] sm:text-[10px] font-semibold">
//                                         {slider_content[0].paragraph}
//                                     </p>
//                                     {/* <button className='bg-[#00b0ea] text-center rounded-md px-6   mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl'> */}
//                                     <motion.div
//                                         style={{
//                                             width: "100%", // Adjust this according to your layout
//                                         }}
//                                         initial={{x: "-100vw"}}
//                                         animate={{x: 0}}
                                       
//                                         transition={{type: "spring",
//                                         //  stiffness: 120,delay:1.5,duration:1.5}}
//                                          stiffness: 120,delay:1,duration:1.5}}
//                                     >
//                                         <button className="hover:bg-[#00b0ea] hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-5  pb-[1px]  mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl">
//                                             {slider_content[0].btn}
//                                         </button>
//                                     </motion.div>
//                                 </div>
//                             </div>
//                             {/* <div className='w-full  flex justify-center box- items-center p-16 '> */}
//                             <div
//                                 data-aos="zoom-out-up"
//                                 // data-aos-duration="2000"
//                                 data-aos-duration="1500"
//                                 className="w-full  flex justify-center box- items-center md:p-16 "
//                             >
//                                 <img className="custom-shadow w-[400px]" src={slider_content[0].photo} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div
//                         style={{backgroundImage: `url(${slider_content[1].bg})`}}
//                         className="w-full h-screen bg-center bg-cover duration-1000 md:pt-0 sm:pt-20 sm:bg-red-600 pt-20"
//                     >
//                         <div className="w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1  ">
//                             <div className=" flex justify-center items-center sm:p-24 ">
//                                 <div className="mr-8">
//                                     <h1 className="text-white md:text-7xl sm:text-5xl text-4xl  uppercase font-extrabold">
//                                         {slider_content[1].title}

//                                         {/* <TypeAnimation
//                                 sequence={[`${slider_content[1].title}`,"" ]}
//                               speed={15}
//                                 repeat={Infinity}/> */}
//                                     </h1>
//                                     <p className="text-white md:text-[20px] sm:text-[10px] font-semibold">
//                                         {slider_content[1].paragraph}
//                                     </p>
//                                     <button className="hover:bg-[#00b0ea] hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-5  pb-[1px]  mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl">
//                                         {slider_content[1].btn}
//                                     </button>
//                                 </div>
//                             </div>
//                             {/* <div className='w-full  flex justify-center box- items-center p-16 '> */}
//                             <div className="w-full  flex justify-center box- items-center md:p-16 ">
//                                 <img className="custom-shadow " src={slider_content[1].photo} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div style={{ backgroundImage: `url(${slider_content[1].bg})` }} className='w-full h-screen bg-center bg-cover duration-1000'>
//                         <div className='w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1 '>
//                             <div className=' flex justify-center items-center sm:p-24'>
//                                 <div className='mr-8'>
//                                     <h1 className='text-white md:text-7xl sm:text-4xl  uppercase font-extrabold'>{slider_content[1].title}</h1>
//                                     <p className='text-[#00b0ea] text-[20px] font-semibold'>{slider_content[1].paragraph}</p>
//                                     <button className='bg-[#00b0ea] text-center rounded-md px-6   mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl'>
//                                         {slider_content[1].btn}
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className='w-full  flex justify-center box- items-center p-12 '>
//                                 <img className='custom-shadow ' src={slider_content[1].photo} alt="" />
//                             </div>
//                         </div>
//                     </div> */}
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div
//                         style={{backgroundImage: `url(${slider_content[2].bg})`}}
//                         className="w-full h-screen bg-center bg-cover duration-1000 md:pt-0 sm:pt-20 sm:bg-red-600 pt-20"
//                     >
//                         <div className="w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1  ">
//                             <div className=" flex justify-center items-center sm:p-24 ">
//                                 <div className="mr-8">
//                                     <h1 className="text-white md:text-7xl sm:text-5xl text-4xl  uppercase font-extrabold">
//                                         {slider_content[2].title}
//                                         {/* <TypeAnimation
//                                 sequence={[`${slider_content[2].title}`,"" ]}
//                               speed={15}
//                                 repeat={Infinity}/> */}
//                                     </h1>
//                                     <p className="text-white md:text-[20px] sm:text-[10px] font-semibold">
//                                         {slider_content[2].paragraph}
//                                     </p>
//                                     <button className="hover:bg-[#00b0ea] hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-5  pb-[1px]  mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl">
//                                         {slider_content[2].btn}
//                                     </button>
//                                 </div>
//                             </div>
//                             {/* <div className='w-full  flex justify-center box- items-center p-16 '> */}
//                             <div className="w-full  flex justify-center box- items-center md:p-16 ">
//                                 <img className="custom-shadow " src={slider_content[2].photo} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div style={{ backgroundImage: `url(${slider_content[2].bg})` }} className='w-full h-screen bg-center bg-cover duration-1000'>
//                         <div className='w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1 '>
//                             <div className=' flex justify-center items-center sm:p-24'>
//                                 <div className='mr-8'>
//                                     <h1 className='text-white md:text-7xl sm:text-4xl  uppercase font-extrabold'>{slider_content[2].title}</h1>
//                                     <p className='text-[#00b0ea] text-[20px] font-semibold'>{slider_content[2].paragraph}</p>
//                                     <button className='bg-[#00b0ea] text-center rounded-md px-6   mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl'>
//                                         {slider_content[2].btn}
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className='w-full  flex justify-center box- items-center p-16 '>
//                                 <img className='custom-shadow ' src={slider_content[2].photo} alt="" />
//                             </div>
//                         </div>
//                     </div> */}
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div
//                         style={{backgroundImage: `url(${slider_content[3].bg})`}}
//                         className="w-full h-screen bg-center bg-cover duration-1000 md:pt-0 sm:pt-20 sm:bg-red-600 pt-20"
//                     >
//                         <div className="w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1  ">
//                             <div className=" flex justify-center items-center sm:p-24 ">
//                                 <div className="mr-8">
//                                     <h1 className="text-white md:text-7xl sm:text-5xl text-4xl  uppercase font-extrabold">
//                                         {slider_content[3].title}
//                                         {/* <TypeAnimation
//                                 sequence={[`${slider_content[3].title}`,"" ]}
//                               speed={15}
//                                 repeat={Infinity}/> */}
//                                     </h1>
//                                     <p className="text-white md:text-[20px] sm:text-[10px] font-semibold">
//                                         {slider_content[3].paragraph}
//                                     </p>
//                                     <button className="hover:bg-[#00b0ea] hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-5  pb-[1px]  mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl">
//                                         {slider_content[3].btn}
//                                     </button>
//                                 </div>
//                             </div>
//                             {/* <div className='w-full  flex justify-center box- items-center p-16 '> */}
//                             <div className="w-full  flex justify-center box- items-center md:p-16 ">
//                                 <img className="custom-shadow w-[400px]" src={slider_content[3].photo} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div style={{ backgroundImage: `url(${slider_content[3].bg})` }} className='w-full h-screen bg-center bg-cover duration-1000'>
//                         <div className='w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1 '>
//                             <div className=' flex justify-center items-center sm:p-24'>
//                                 <div className='mr-8'>
//                                     <h1 className='text-white md:text-7xl sm:text-4xl  uppercase font-extrabold'>{slider_content[3].title}</h1>
//                                     <p className='text-[#00b0ea] text-[20px] font-semibold'>{slider_content[3].paragraph}</p>
//                                     <button className='bg-[#00b0ea] text-center rounded-md px-6   mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl'>
//                                         {slider_content[3].btn}
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className='w-full  flex justify-center box- items-center p-16 '>
//                                 <img className='custom-shadow ' src={slider_content[3].photo} alt="" />
//                             </div>
//                         </div>
//                     </div> */}
//                 </SwiperSlide>
//             </Swiper>
//         </>
//     );
// }



import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import "./Anand.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import p1 from "../../assets/Banners-1-Image.png";
import bg1 from "../../assets/Banners 1 BG.jpg";

import novo from "../../assets/Banner/NCS-with-NC5C.D.png";
import vector from "../../assets/Banner/Vector.png";
import WiredMic from "../../assets/Banner/Wired mic.png";
import keyer from "../../assets/Banner/keyer.png";
import Arche from "../../assets/Banner/Arche.png";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";

import b1 from '../../assets/Sample 1 White.png'
import b2 from '../../assets/Sample 2 Black.png'
import b3 from '../../assets/Sample 3 blue.png'

export default function Anand() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slider_content = [
        {
            // bg: bg1,
            bg:b1,
            title: "keyer",
            photo: keyer,
            paragraph: "Audio Processing & Control System",
            btn: "Explore",
        },
        {
            // bg: bg1,
            bg: b2,
            title: "Arche",
            photo: Arche,
            paragraph: "Wireless Microphones",
            btn: "Explore",
        },
        {
            // bg: bg1,
            bg: b3,
            title: "Vector",
            photo: vector,
            paragraph: "Wired Microphones",
            btn: "Explore",
        },
        {
            bg: bg1,
            title: "NCS",
            photo: novo,
            paragraph: " Novo Conference System",
            btn: "Explore",
        },
    ];

    return (
        <>
            {/* <Swiper
      centeredSlides={true}
       autoplay={{
        delay: 2500,
        
        disableOnInteraction: false,
    }}
        dir="rtl"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Autoplay, Pagination]}
        className="mySwiper h-screen"
      > */}
            <Swiper
                // spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,

                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    color: " ",
                }}
                navigation={true}
                modules={[
                    // Autoplay, 
                    Pagination, Navigation]}
                className="mySwiper h-screen  overflow-x-hidden  "
            >
                <SwiperSlide>
                    <div
                        style={{backgroundImage: `url(${slider_content[0].bg})`}}
                        className="w-full h-screen bg-center bg-cover duration-1000 md:pt-0 sm:pt-20  pt-20 "
                    >
                        <div className="w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1  ">
                            <div
                                className=" flex justify-center items-center sm:p-24 "
                                //  data-aos="zoom-out-up" data-aos-duration="2000"
                            >
                                <div className="mr-8">
                                    <h1 className="text-white md:text-7xl sm:text-5xl text-4xl  uppercase font-extrabold">
                                        {/* <TypeAnimation
                                sequence={[`${slider_content[0].title}`,"" ]}
                              speed={15}
                                repeat={Infinity}
                            /> */}

                                        {slider_content[0].title}
                                    </h1>
                                    <p className="text-white md:text-[20px] sm:text-[10px] font-semibold">
                                        {slider_content[0].paragraph}
                                    </p>
                                    {/* <button className='bg-[#00b0ea] text-center rounded-md px-6   mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl'> */}
                                    <motion.div
                                        style={{
                                            width: "100%", // Adjust this according to your layout
                                        }}
                                        initial={{x: "-100vw"}}
                                        animate={{x: 0}}
                                       
                                        transition={{type: "spring",
                                        //  stiffness: 120,delay:1.5,duration:1.5}}
                                         stiffness: 120,delay:1,duration:1.5}}
                                    >
                                        <button className="hover:bg-[#00b0ea] hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-5  pb-[1px]  mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl">
                                            {slider_content[0].btn}
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                            {/* <div className='w-full  flex justify-center box- items-center p-16 '> */}
                            <div
                                data-aos="zoom-out-up"
                                // data-aos-duration="2000"
                                data-aos-duration="1500"
                                className="w-full  flex justify-center box- items-center md:p-16 "
                            >
                                <img className="custom-shadow w-[400px]" src={slider_content[0].photo} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{backgroundImage: `url(${slider_content[1].bg})`}}
                        className="w-full h-screen bg-center bg-cover duration-1000 md:pt-0 sm:pt-20 sm:bg-red-600 pt-20"
                    >
                        <div className="w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1  ">
                            <div className=" flex justify-center items-center sm:p-24 ">
                                <div className="mr-8">
                                    <h1 className="text-white md:text-7xl sm:text-5xl text-4xl  uppercase font-extrabold">
                                        {slider_content[1].title}

                                        {/* <TypeAnimation
                                sequence={[`${slider_content[1].title}`,"" ]}
                              speed={15}
                                repeat={Infinity}/> */}
                                    </h1>
                                    <p className="text-white md:text-[20px] sm:text-[10px] font-semibold">
                                        {slider_content[1].paragraph}
                                    </p>
                                    <button className="hover:bg-[#00b0ea] hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-5  pb-[1px]  mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl">
                                        {slider_content[1].btn}
                                    </button>
                                </div>
                            </div>
                            {/* <div className='w-full  flex justify-center box- items-center p-16 '> */}
                            <div className="w-full  flex justify-center box- items-center md:p-16 ">
                                <img className="custom-shadow " src={slider_content[1].photo} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div style={{ backgroundImage: `url(${slider_content[1].bg})` }} className='w-full h-screen bg-center bg-cover duration-1000'>
                        <div className='w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1 '>
                            <div className=' flex justify-center items-center sm:p-24'>
                                <div className='mr-8'>
                                    <h1 className='text-white md:text-7xl sm:text-4xl  uppercase font-extrabold'>{slider_content[1].title}</h1>
                                    <p className='text-[#00b0ea] text-[20px] font-semibold'>{slider_content[1].paragraph}</p>
                                    <button className='bg-[#00b0ea] text-center rounded-md px-6   mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl'>
                                        {slider_content[1].btn}
                                    </button>
                                </div>
                            </div>
                            <div className='w-full  flex justify-center box- items-center p-12 '>
                                <img className='custom-shadow ' src={slider_content[1].photo} alt="" />
                            </div>
                        </div>
                    </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{backgroundImage: `url(${slider_content[2].bg})`}}
                        className="w-full h-screen bg-center bg-cover duration-1000 md:pt-0 sm:pt-20 sm:bg-red-600 pt-20"
                    >
                        <div className="w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1  ">
                            <div className=" flex justify-center items-center sm:p-24 ">
                                <div className="mr-8">
                                    <h1 className="text-white md:text-7xl sm:text-5xl text-4xl  uppercase font-extrabold">
                                        {slider_content[2].title}
                                        {/* <TypeAnimation
                                sequence={[`${slider_content[2].title}`,"" ]}
                              speed={15}
                                repeat={Infinity}/> */}
                                    </h1>
                                    <p className="text-white md:text-[20px] sm:text-[10px] font-semibold">
                                        {slider_content[2].paragraph}
                                    </p>
                                    <button className="hover:bg-[#00b0ea] hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-5  pb-[1px]  mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl">
                                        {slider_content[2].btn}
                                    </button>
                                </div>
                            </div>
                            {/* <div className='w-full  flex justify-center box- items-center p-16 '> */}
                            <div className="w-full  flex justify-center box- items-center md:p-16 ">
                                <img className="custom-shadow " src={slider_content[2].photo} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div style={{ backgroundImage: `url(${slider_content[2].bg})` }} className='w-full h-screen bg-center bg-cover duration-1000'>
                        <div className='w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1 '>
                            <div className=' flex justify-center items-center sm:p-24'>
                                <div className='mr-8'>
                                    <h1 className='text-white md:text-7xl sm:text-4xl  uppercase font-extrabold'>{slider_content[2].title}</h1>
                                    <p className='text-[#00b0ea] text-[20px] font-semibold'>{slider_content[2].paragraph}</p>
                                    <button className='bg-[#00b0ea] text-center rounded-md px-6   mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl'>
                                        {slider_content[2].btn}
                                    </button>
                                </div>
                            </div>
                            <div className='w-full  flex justify-center box- items-center p-16 '>
                                <img className='custom-shadow ' src={slider_content[2].photo} alt="" />
                            </div>
                        </div>
                    </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{backgroundImage: `url(${slider_content[3].bg})`}}
                        className="w-full h-screen bg-center bg-cover duration-1000 md:pt-0 sm:pt-20 sm:bg-red-600 pt-20"
                    >
                        <div className="w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1  ">
                            <div className=" flex justify-center items-center sm:p-24 ">
                                <div className="mr-8">
                                    <h1 className="text-white md:text-7xl sm:text-5xl text-4xl  uppercase font-extrabold">
                                        {slider_content[3].title}
                                        {/* <TypeAnimation
                                sequence={[`${slider_content[3].title}`,"" ]}
                              speed={15}
                                repeat={Infinity}/> */}
                                    </h1>
                                    <p className="text-white md:text-[20px] sm:text-[10px] font-semibold">
                                        {slider_content[3].paragraph}
                                    </p>
                                    <button className="hover:bg-[#00b0ea] hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-5  pb-[1px]  mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl">
                                        {slider_content[3].btn}
                                    </button>
                                </div>
                            </div>
                            {/* <div className='w-full  flex justify-center box- items-center p-16 '> */}
                            <div className="w-full  flex justify-center box- items-center md:p-16 ">
                                <img className="custom-shadow w-[400px]" src={slider_content[3].photo} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div style={{ backgroundImage: `url(${slider_content[3].bg})` }} className='w-full h-screen bg-center bg-cover duration-1000'>
                        <div className='w-[95%] mx-auto h-full  grid md:grid-cols-2 sm:grid-cols-1 '>
                            <div className=' flex justify-center items-center sm:p-24'>
                                <div className='mr-8'>
                                    <h1 className='text-white md:text-7xl sm:text-4xl  uppercase font-extrabold'>{slider_content[3].title}</h1>
                                    <p className='text-[#00b0ea] text-[20px] font-semibold'>{slider_content[3].paragraph}</p>
                                    <button className='bg-[#00b0ea] text-center rounded-md px-6   mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl'>
                                        {slider_content[3].btn}
                                    </button>
                                </div>
                            </div>
                            <div className='w-full  flex justify-center box- items-center p-16 '>
                                <img className='custom-shadow ' src={slider_content[3].photo} alt="" />
                            </div>
                        </div>
                    </div> */}
                </SwiperSlide>
            </Swiper>
        </>
    );
}

