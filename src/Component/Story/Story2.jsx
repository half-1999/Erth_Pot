import React from 'react'
import bridging from '../../assets/bridging the future.jpg'
import made_in_india from '../../assets/made in india made for the world (1).jpg'
import sustainability from '../../assets/sustainability banner.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from "../Variants";
const Story2 = () => {
    return (
        <div className='w-full bg-black md:py-1 pb-24'
        
    //     data-aos="fade-down"
    //  data-aos-easing="linear"
    //  data-aos-duration="1500"
        >

            <div 
            
            
            
            className='w-[95%] mx-auto  '
            //  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000"
            >
                <div className=' group grid grid-cols-1  md:grid-cols-3 gap-1 sm:grid-cols-1 py-5 mb-1'>
                    <motion.div
                    //  variants={fadeIn("right",0.2)}
                     variants={fadeIn("up",0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once:false,amount:0.7}}
                    className='group sm:text-center w-full'
                //   data-aos="zoom-in-down"
                //   data-aos-delay="400"
                //   data-aos-duration="2000"
                    >
                    <h1 className='md:text-start text-center pb-10'> <span className="text-3xl text-gray-100 font-bold sm:text-center col-span-1 "
                        
                        >
                            The Erthpot 
                        </span>
                        <span className='group-hover:text-[#00b0ea] text-4xl px-2 font-bold text-gray-100  block'>Story</span></h1>
                    </motion.div>
                    <motion.div
                    
                    
                    // variants={fadeIn("left",0.2)}
                    variants={fadeIn("up",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false,amount:0.7}}

                    className='col-span-2 pb-10'
                //      data-aos="fade-up"
                //      data-aos-delay="400"
                //   data-aos-duration="2000"
                
                    >
                    <p className="text-gray-300 md:text-[18px]">
                        {/* Established in 2018, Erthpot tackles the trust deficit within India's AV industry, offering
                        cost-effective, high-quality alternatives. Launched in 2022 by Heena Golani, Vikram Yadav,
                        Vijay Sinha & Shailesh Awasthi, Erthpot is dedicated to delivering indigenous, sustainable
                        audio solutions.  */}
                        Symbolizing innovation and environmental consciousness, the brand draws
                        inspiration from the timeless relevance of earthen pots in our culture. With an unwavering
                        commitment to quality and sustainability, Erthpot aims to make a distinctive impact in the
                        competitive AV market.
                    </p>
                </motion.div>
                </div>
                
                <div className=' w-full  grid md:grid-cols-6 gap-8 sm:grid-cols-1   '>
                    <div
                    
                   
                    className=' md:col-span-4 relative w-full  h-[64vh] '
                                    //    data-aos="fade-down-right"
                                    //     data-aos-duration="1500"
                    >
                        <img className='object-cover h-full w-full group grayscale hover:cursor-pointer hover:grayscale-0 ' src={made_in_india} alt="" />
                        <div className='absolute bottom-5  left-4'>
                        <span className='text-xl font-bold text-white '>Teamwork</span>
                        <p className='text-white'>Commited and creative</p>
                        </div>
                    </div>
                    <div className='md:col-span-2  w-full'>
                        <div className='flex flex-col gap-8 w-full  h-[60vh]'
                        // data-aos="fade-down"
                        // data-aos="zoom-out"
                        // data-aos-duration="1500"
                        >
                            <div className='relative md:h-[30vh]'
                            >
                                <img  className=' object-cover h-full w-full grayscale hover:cursor-pointer hover:grayscale-0 ' src={sustainability} alt="" />
                                <div className='absolute bottom-5  left-4'>
                        <span className='text-xl font-bold text-white '>Creativity</span>
                        <p className='text-white'>striving for success</p>
                        </div>
                            </div>
                            <div className='relative md:h-[29vh]'
                            // data-aos="fade-up-left"
                            // data-aos="zoom-out"
                            // data-aos-duration="1500"
                            > 
                                <img className=' object-cover h-full w-full relative grayscale hover:cursor-pointer hover:grayscale-0 ' src={bridging} alt="" />
                                <div className='absolute bottom-5  left-4'>
                        <span className='text-xl font-bold text-white '>Innovation</span>
                        <p className='text-white'>leading in industry</p>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story2