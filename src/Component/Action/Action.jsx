import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from "../Variants";
const   Action = () => {
  return (
    // <div className='w-full min-h-screen bg-black p-2 flex justify-center flex-col gap-20'>
    // <div className='w-full min-h-screen  bg-orange-600'>
    <div className='w-full bg-black pt-10 pb-5'
   
    >
      {/* <div className='w-[95%] mx-auto   flex justify-center flex-col gap-10 pt-9' */}
      <div className='w-[95%] mx-auto   flex justify-center flex-col gap-10 '
      
      // data-aos="fade-up"
      // data-aos-anchor-placement="top-center"
      // data-aos-delay="400"
      // data-aos-duration="2000"
      >
      <motion.div
       variants={fadeIn("up",0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false,amount:0.7}}
      
      className='pb-5 group pn-10'>
        <h1 className='text-4xl text-center text-gray-100  font-bold'>Products in <span className='group-hover:text-[#00b0ea]'>Action</span>
        </h1>
      </motion.div>
      <div className='mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-2 b'>


        {/* <div className="relative w-full h-full group cursor-pointer overflow-hidden "> */}
        <div className="relative  group cursor-pointer overflow-hidden "
        //  data-aos="flip-left"
        //  data-aos-easing="ease-out-cubic"
        // //  data-aos-delay="600"
        //  data-aos-duration="1500"
        >
          <img
            // className="w-full grayscale group-hover:cursor-pointer group-hover:grayscale-0  object-cover duration-700 gropu-hover:duration-700  overflow-hidden transition-transform transform-gpu group-hover:scale-110"
            className=" grayscale group-hover:cursor-pointer group-hover:grayscale-0  object-cover duration-700 gropu-hover:duration-700  overflow-hidden transition-transform transform-gpu group-hover:scale-110"

            src="https://gentium.pixerex.com/wp-content/uploads/2019/01/04-min-1-1024x683.jpg"
            alt=""
          />
          <div className="group absolute inset-0 flex items-center justify-center flex-col">
            <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-[#00afac] group-hover:translate-x-3">Hello</h1>
            <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-gray-100 group-hover:translate-x-3">Anand</h1>
          </div>
        </div>
        {/* <div className="relative w-full h-full group cursor-pointer overflow-hidden "> */}
        <div className="relative  group cursor-pointer overflow-hidden "
        //  data-aos="flip-left"
        //  data-aos-easing="ease-out-cubic"
        // //  data-aos-delay="700"
        //  data-aos-duration="1500"
        
        >
          <img
            // className="w-full h-full grayscale group-hover:cursor-pointer group-hover:grayscale-0 object-cover duration-700 gropu-hover:duration-700  overflow-hidden transition-transform transform-gpu group-hover:scale-110"
            className=" grayscale group-hover:cursor-pointer group-hover:grayscale-0 object-cover duration-700 gropu-hover:duration-700  overflow-hidden transition-transform transform-gpu group-hover:scale-110"

            src="https://gentium.pixerex.com/wp-content/uploads/2019/01/07-min-1024x683.jpg"
            alt=""
          />
          <div className="group absolute inset-0 flex items-center justify-center flex-col">
            <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-[#00afac] group-hover:translate-x-3">Hello</h1>
            <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-gray-100 group-hover:translate-x-3">Anand</h1>
          </div>
        </div>
        {/* <div className="relative w-full h-full group cursor-pointer overflow-hidden "> */}
        <div className="relative  group cursor-pointer overflow-hidden "
        //  data-aos="flip-left"
        //  data-aos-easing="ease-out-cubic"
        // //  data-aos-delay="800"
        //  data-aos-duration="1500"
        >
          <img
            // className="w-full grayscale group-hover:cursor-pointer group-hover:grayscale-0 h-full object-cover duration-700 gropu-hover:duration-700  overflow-hidden transition-transform transform-gpu group-hover:scale-110"
            className=" grayscale group-hover:cursor-pointer group-hover:grayscale-0  object-cover duration-700 gropu-hover:duration-700  overflow-hidden transition-transform transform-gpu group-hover:scale-110"

            src="https://gentium.pixerex.com/wp-content/uploads/2019/01/03-min-1-1024x683.jpg"
            alt=""
          />
          <div className="group absolute inset-0 flex items-center justify-center flex-col">
            <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-[#00afac] group-hover:translate-x-3">Hello</h1>
            <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-gray-100 group-hover:translate-x-3">Anand</h1>
          </div>
        </div>
        {/* <div className="relative group cursor-pointer w-full  bg-pink-700">
    <img
      className="w-full h-full object-cover duration-1000 gropu-hover:duration-1000  overflow-hidden transition-transform transform-gpu group-hover:scale-110"
      src="https://www.erthpot.com/wp-content/uploads/2022/12/Advanced-Audio-Processing.png"
      alt=""
    />
    <div className="group absolute inset-0 flex items-center justify-center flex-col">
      <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-[#00afac] group-hover:translate-x-3">Hello</h1>
      <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-gray-100 group-hover:translate-x-3">Anand</h1>
    </div>
  </div> */}
        {/* <div className="relative group cursor-pointer w-full bg-pink-700">
    <img
      className="w-full h-full object-cover duration-1000 gropu-hover:duration-1000  overflow-hidden transition-transform transform-gpu group-hover:scale-110"
      src="https://cdn.sanity.io/images/vfxfwnaw/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp"
      alt=""
    />
    <div className="group absolute inset-0 flex items-center justify-center flex-col">
      <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-[#00afac] group-hover:translate-x-3">Hello</h1>
      <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-gray-100 group-hover:translate-x-3">Anand</h1>
    </div>
  </div>
  <div className="relative group cursor-pointer w-full">
    <img
      className="w-full h-full object-cover duration-1000 gropu-hover:duration-1000  overflow-hidden transition-transform transform-gpu group-hover:scale-110"
      src="https://www.erthpot.com/wp-content/uploads/2023/01/usb-aaudip.png"
      alt=""
    />
    <div className="group absolute inset-0 flex items-center justify-center flex-col">
      <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-[#00afac] group-hover:translate-x-3">Hello</h1>
      <h1 className=" group-hover:visible text-3xl font-bold invisible duration-700 group-hover:duration-300  text-gray-100 group-hover:translate-x-3">Anand</h1>
    </div>
  </div> */}

      </div>
    </div>
    </div>
  )
}

export default Action