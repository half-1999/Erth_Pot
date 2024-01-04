import React from "react";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import p1 from "../../assets/banner image of high end circuit board- audyogeek branding (1).jpg";
import photo from '../../assets/architects-concept-engineer-architect-designer-fr-2023-11-27-04-56-27-utc.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from "../Variants";
const Freelance = () => {
    const cards = [
        {
            img: f1,
            title: "Passion",
            paragraph: "Our never-ending passion for developing the best technology for the audio industry.",
        },
        {
            img: f2,
            title: "Technology",
            paragraph: "Developing nature friendly sustainable technology for our users to have a better experience",
        },
        {
            img: f3,
            title: "Learning",
            paragraph: "We strive to improve & attain betterment of our team",
        },
        {
            img: f4,
            title: "Explore",
            paragraph: "We explore opportunities to make your experience better",
        },
    ];
    return (
        <div className=" w-full bg-black pb-7 ">
           <div className="w-[95%] mx-auto ">
           <div 
             
           className="w-full  grid   md:grid-cols-2  gap-2">
                <motion.div
                //  variants={fadeIn("right",0.2)}
                //  initial="hidden"
                //  whileInView={"show"}
                //  viewport={{once:false,amount:0.7}}
                class="h-[400px] flex justify-cente   ">
                    <div className="group">
                    <div className="">
                    <span className="text-4xl text-gray-100 font-bold  ">
                        Purely  
                    </span>
                    {/* <span  className="text-4xl text-[#00b0ea]  font-bold uppercase px-2 ">
                        Indian 
                    </span> */}
                     <span className='group-hover:text-[#00b0ea] text-4xl px-2 font-bold text-gray-100 uppercase'> Indian</span>
                    
                    <h1 className="text-white text-2xl font-medium pt-2">Audio Innovation</h1> 
                    <div className="w-[400px] py-5 text-center">
                    <p className="text-gray-300  text-start md:text-[18px]">
                        Erthpot, a Make in India endeavor, strives to deliver top-notch audio technologies globally,
                        initiative to embodying the principles of groundedness, humility, and honesty in customer
                        interactions, earning the moniker "Erthpot.
                    </p>
                    </div>
                    </div>
                   
                    </div>
                </motion.div>
                
                <motion.div 
                //  variants={fadeIn("left",0.2)}
                //  initial="hidden"
                //  whileInView={"show"}
                //  viewport={{once:false,amount:0.7}}
                
                class=" flex justify-center items-center h-[500px]  ">
                    {/* <img src={p1} className="w-[500px] rounded-tl-none rounded-br-none rounded-[100px]" alt="img" /> */}
                    <img 
                    
                    
                    // src={p1} className="w-[500px] rounded-tl-none rounded-br-none " alt="img" />
                    src={photo} className="grayscale hover:cursor-pointer hover:grayscale-0  object-cover h-full w-full rounded-tl-none rounded-br-none " alt="img" />
                </motion.div>
            </div>
           </div>
        </div>
        
    );
};

export default Freelance;
