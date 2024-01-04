// import React from "react";
// import { Link } from "react-router-dom";

// import { urlFor } from "./urlFor.jsx";

// const HeroBanner2 = (props) => {
//   const heroBanner = {
//     image: {
//       _type: "image",
//       asset: {
//         _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
//         _type: "reference",
//       },
//     },
//   };
//   const largeText1 = props.largeText1;
//   const buttonText = props.buttonText;
//   const desc = props.desc;
//   // const image = props.image;
//   const largeText2 = props.largeText2;
//   const product = props.largeText1;

//   const containerStyle = {
//     padding: "100px 40px",
//     backgroundColor: "#00b0ef",
//     borderRadius: "15px",
//     position: "relative",
//     height: "500px",
//     lineHeight: "0.9",
//     width: "100%",
//     marginBottom: "20px",
//   };

//   const h1Style = {
//     color: "black",
//     fontSize: "60px",
//     marginRight: "10px",
//     textTransform: "uppercase",
//     marginTop: "5%",
//     fontWeight: "800",
//   };

//   const h3Style = {
//     fontSize: "40px",
//     marginTop: "2%",
//     fontWeight: "800",
//     marginLeft: "4%",
//     width: "50vw",
//   };

//   const imgStyle = {
//     position: "absolute",
//     top: "-5%",
//     // right: "10%",
//     width: "500px",
//     height: "500px",
//     cursor: "pointer",
//     marginLeft: "-20px",
//   };

//   const buttonStyle = {
//     borderRadius: "15px",
//     padding: "10px 16px",
//     backgroundColor: "#fff",
//     color: "#00b0ef",
//     border: "2px solid #fff",
//     marginTop: "40px",
//     marginLeft: "50%  ",
//     fontSize: "18px",
//     fontWeight: "800",
//     cursor: "pointer",
//     zIndex: "10000 !important",
//   };

//   const descStyle = {
//     position: "absolute",
//     right: "73%",
//     bottom: "5%",
//     width: "300px",
//     lineHeight: "1.3",
//     display: "flex",
//     flexDirection: "column",
//     color: "#324d67",
//   };

//   const descTextStyle = {
//     color: "#000",
//     marginBottom: "12px",
//     marginLeft: "7px",
//     fontWeight: "800",
//     fontSize: "20px",
//     // alignSelf: "flex-end",
//   };

//   const descParaStyle = {
//     color: "#fff",
//     fontWeight: "800",
//     textAlign: "end",
//     width: "130%",
//   };
//   const span = {
//     color: "#fff",
//     fontWeight: "800",
//     fontSize: "41px",
//   };
//   const beats = {
//     marginLeft: "48%",
//     marginTop: "5%",
//   };

//   return (
//     <div style={containerStyle}>
//       <div>
//         <div className="beats" style={beats}>
//           <h1 style={h1Style}>
//             {largeText1}
//             <span style={span}>Series</span>
//           </h1>
//           <h3 style={h3Style}>
//             <span style={span}>Digital Processing</span>
//             {largeText2}
//           </h3>
//         </div>
//         <img src={urlFor(heroBanner.image)} alt="mic" style={imgStyle} />

//         <div>
//           <Link to={`/allproducts/${largeText1}`}>
//             <button type="button" style={buttonStyle}>
//               {buttonText}
//             </button>
//           </Link>
//           <div style={descStyle}>
//             <h5 style={descTextStyle}>Description</h5>
//             <p style={descParaStyle}>{desc}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner2;



import React from "react";
import { Link } from "react-router-dom";

import { urlFor } from "./urlFor.jsx";
import kyerimg from '../../assets/Banner/keyer.png'
import vactor_img from '../../assets/Banner/Vector.png'

const HeroBanner2 = (props) => {
 
  const largeText1 = props.largeText1;
  const buttonText = props.buttonText;
  const desc = props.desc;
  // const image = props.image;
  const largeText2 = props.largeText2;
  const product = props.largeText1;
  const heroBanner = {
    image: {
      _type: "image",
      asset: {
        _ref: largeText1 === "Keyer " ? kyerimg : vactor_img,
      },
    },
  };
  const containerStyle = {
    padding: "100px 40px",
    backgroundColor: "#00b0ef",
    borderRadius: "15px",
    position: "relative",
    height: "500px",
    lineHeight: "0.9",
    width: "100%",
    marginBottom: "20px",
  };

  const h1Style = {
    color: "black",
    fontSize: "60px",
    marginRight: "10px",
    textTransform: "uppercase",
    marginTop: "5%",
    fontWeight: "800",
  };

  const h3Style = {
    fontSize: "40px",
    marginTop: "2%",
    fontWeight: "800",
    marginLeft: "4%",
    width: "50vw",
  };

  const imgStyle = {
    position: "absolute",
    top: "-5%",
    // right: "10%",
    width: "500px",
    height: "500px",
    cursor: "pointer",
    marginLeft: "-20px",
  };

  const buttonStyle = {
    borderRadius: "15px",
    padding: "10px 16px",
    backgroundColor: "#fff",
    color: "#00b0ef",
    border: "2px solid #fff",
    marginTop: "40px",
    marginLeft: "50%  ",
    fontSize: "18px",
    fontWeight: "800",
    cursor: "pointer",
    zIndex: "10000 !important",
  };

  const descStyle = {
    position: "absolute",
    right: "73%",
    bottom: "5%",
    width: "300px",
    lineHeight: "1.3",
    display: "flex",
    flexDirection: "column",
    color: "#324d67",
  };

  const descTextStyle = {
    color: "#000",
    marginBottom: "12px",
    marginLeft: "7px",
    fontWeight: "800",
    fontSize: "20px",
    // alignSelf: "flex-end",
  };

  const descParaStyle = {
    color: "#fff",
    fontWeight: "800",
    textAlign: "end",
    width: "130%",
  };
  const span = {
    color: "#fff",
    fontWeight: "800",
    fontSize: "41px",
  };
  const beats = {
    marginLeft: "48%",
    marginTop: "5%",
  };


  return (

    // <div className="w-full py-3 md:flex justify-center items-center   ">
    // <div className="w-[100%] mx-auto bg-[#00B0ea] grid md:grid-cols-2 sm:grid-cols-2 grid-cols-2 rounded-sm">
    // {/* // <div className="w-full px-1 bg-black md:flex justify-center items-center ">
  
    // // <div className="w-[100%] mx-auto bg-[#00B0ea] grid md:grid-cols-2 sm:grid-cols-2 grid-cols-2 rounded-xl"> */}
    //  {/* <div className="flex justify-center items-center w-[95%] mx-auto">
    //       <img  className="max-w-[400px] w-[90%]  transition-transform duration-700 transform group-hover:scale-110 group-hover:cursor-pointer" src={urlFor(heroBanner.image)} alt="mic" />
    //       <div  className="relative md:-top-14 -top-3 sm:text-[12px] text-[12px] " >
    //         <h5 >Description</h5>
    //         <p >{desc}</p>
    //       </div>
    //     </div> */}
    //      <div className="flex group justify-center items-center flex-col ">
    //      <img
    //         className="max-w-[300px] w-[90%] transition-transform duration-700 transform group-hover:scale-110 group-hover:cursor-pointer"
    //         src={heroBanner.image.asset._ref}
    //         alt="mic"
    //       />      
    //         {/* <h5>Description</h5> */}
    //         {/* <p className="relative md:-top-14 -top-1 sm:text-[12px] text-[10px] px-4">{desc}</p> */}
    //         <p className="relative md:-top-[20px]  sm:text-[12px] text-[10px] px-4">{desc}</p>
          
    //    </div>
    //    <div className="flex justify-center items-center w-[95%] mx-auto">
    //     <div >
    //       <h1  className="uppercase">
    //       <span className="md:text-6xl text-2xl font-extrabold ">
    //        {largeText1}
    //        </span>
    //        <span className="text-gray-100 md:text-4xl text-xl  font-extrabold">
    //         Series
    //         </span>
    //       </h1>
    //       <h3 >
    //       <span className="text-gray-100 md:text-4xl text-xl font-extrabold">Digital Processing</span>
    //         <span className="md:text-4xl text-xl font-extrabold">
    //         {largeText2}
    //         </span>
    //       </h3>
    //       {/* <div className="pt-4">
    //       <Link to={`/allproducts/${largeText1}`}>
    //         <button className="bg-gray-100 px-3 py-1 rounded-lg text-[#00b0ea] font-bold" type="button" >
    //           {buttonText}
    //         </button>
    //       </Link>
    //       </div> */}
    //       <div className="pt-4">
    //       <Link to={`/allproducts/${largeText1}`}>
    //         {/* <button type="button" className="bg-gray-100 text-[#00b0ea] md:px-3 md:py-1 rounded-lg text-[12px] py-1 px-2  md:font-bold"> */}
    //         <button className="hover:bg-gray-100  text-gray-100 hover:duration-700 duration-700 uppercase text-center border-2 border-gray-100 rounded-md px-3  pb-[1px]  mt-6 hover:text-[#00b0ea] font-semibold md:text-xl sm:text-xl">
    //           {buttonText}</button>
    //       </Link>
          
    //     </div>
    //     </div>
    //     </div>



    //   </div>
    // </div>

<div className=" w-full  gap-2 bg-black">
<Link to={`/allproducts/${largeText1}`}>
<div className={`w-[95%]  h-[340px] mx-auto flex gap-1  bg-gray-100`} >
  <div className="relative  h-full  w-[50%] p-2">
    <div className="w-full">
      <img
        src={heroBanner.image.asset._ref}
        className="absolute inset-0 w-full h-full object-cover transition-transform scale-90"
        alt="mic"
      />
    </div>
  </div>
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

</div>
</Link>
</div>
  );
};

export default HeroBanner2;
