// import React from "react";
// import { Link } from "react-router-dom";
// import "./HeroBanner.css";
// import { urlFor } from "./urlFor.jsx";

// const HeroBanner = (props) => {
//   const largeText1 = props.largeText1;
//   const buttonText = props.buttonText;
//   const desc = props.desc;
//   const largeText2 = props.largeText2;
//   const product = props.largeText1;

//   const heroBanner = {
//     image: {
//       _type: "image",
//       asset: {
//         _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
//         _type: "reference",
//       },
//     },
//   };

//   return (
//     <div className="hero-banner-container-banner">
//       <div>
//         <h1>
//           {largeText1}
//           <span>
//             {largeText1 === "Arche " ? "Series" : "  Conference System"}
//           </span>
//         </h1>
//         <h3>
//           <span>
//             {largeText2 === " Microphones" ? "Wireless" : " Conference"}
//           </span>
//           {largeText2}
//         </h3>
//         <img src={urlFor(heroBanner.image)} alt="mic" />

//         <div>
//           <Link to={`/allproducts/${largeText1}`}>
//             <button type="button">{buttonText}</button>
//           </Link>
//           <div className="desc">
//             {/* <h5>Description</h5> */}
//             <p>{desc}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;



import React from "react";
import { Link } from "react-router-dom";
// import "./HeroBanner.css";
import novo_img from '../../assets/Banner/NCS-with-NC5C.D.png'
import arch_img from '../../assets/Banner/Arche.png'

const HeroBanner = (props) => {
  const largeText1 = props.largeText1;
  const buttonText = props.buttonText;
  const desc = props.desc;
  const largeText2 = props.largeText2;
  const product = props.largeText1;

  const heroBanner = {
    image: {
      _type: "image",
      asset: {
        _ref: largeText1 === "Arche " ? arch_img : novo_img,
      },
    },
  };

  return (
    <div className=" w-full py-10 gap-2 bg-black">
      <Link to={`/allproducts/${largeText1}`}>
      <div className={`w-[95%]  h-[340px] mx-auto flex gap-1 pt-10  bg-gray-100`} >
        <div className="h-full  flex items-center w-[50%] md:pl-[100px]  p-2">
          <div>
            <h1 className="uppercase md:text-6xl text-xl font-extrabold">
              {largeText1}
            </h1>
            <span className="text-[#00b0ea] font-medium md:text-4xl text-lg  ">{largeText2 === " Microphones" ? "Wireless " : " Conference "}</span>
            <span className="text-black md:text-4xl text-lg  font-medium px-2">{largeText2}</span>
            <div className=" ">
            <Link to={`/allproducts/${largeText1}`}>
                <button className="hover:bg-[#00b0ea] hover:text-gray-100 hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-3  pb-[1px]  mt-4 text-[#00b0ea] font-semibold md:text-[14px] sm:text-[14px]">
                  {buttonText}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative  h-full  w-[50%] p-2">
          <div className="w-full">
            <img
              src={heroBanner.image.asset._ref}
              className="absolute inset-0 w-full h-full object-cover transition-transform scale-90"
              alt="mic"
            />
          </div>
        </div>

      </div>
      </Link>  
    </div>
  );
};

export default HeroBanner;
