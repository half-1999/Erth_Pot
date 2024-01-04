// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa6";
// import { IoSearch } from "react-icons/io5";
// import { FaBars } from "react-icons/fa6";
// import { motion } from 'framer-motion';
// import Whitelogo from "../../assets/white logo.png";
// import './Navbar.css'
// const Navbar3 = () => {
//   const [isScrolled, setScrolled] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
// };
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };

//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       setMobileMenuOpen(false); // Close the mobile menu on resize
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleMobileMenuToggle = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav
//       className={`fixed top-0 w-full p-4 z-50 ${
//         isScrolled ? "bg-black p-4 duration-700" : "bg-transparent duration-700"
//       }`}
//     >
//       <div className="flex justify-between items-center relative px-3">
//         <div className="flex items-center">
//           <Link to="/">
//             <img
//               // src="https://www.erthpot.com/wp-content/uploads/2022/10/retina-01.png"
//               src={Whitelogo}
//               alt="Logo"
//               className="w-[170px]   mr-4 cursor-pointer"
//             />
//             {/* <span className="text-">Earthpot</span> */}
//           </Link>
//         </div>

//         {isMobile ? (
//           <div className="flex items-center ml-auto duration-1000">
//             <button
//               className="text-black font-extrabold focus:outline-none"
//               onClick={handleMobileMenuToggle}
//             >
//               {/* ☰ */}
//               <FaBars className="text-2xl text-white" />
//             </button>
//             {isMobileMenuOpen && (
//               <div className="fixed top-0 left-0 h-full w-full bg-black text-gray-100 p-4 space-y-6  flex flex-col items-center duration-1000">
//                 <button
//                   className=" focus:outline-none self-end duration-1000"
//                   onClick={handleMobileMenuToggle}
//                 >
//                   <FiX className="text-3xl mr-2 font-bold mt-2" />
//                 </button>
//                 <Link
//                   onClick={handleMobileMenuToggle}
//                   to="/"
//                   className={`cursor-pointer  hover:duration-700  p-1 rounded-md  transition-transform duration-700 transform hover:scale-110${
//                     isScrolled ? "" : ""
//                   }`}
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   onClick={handleMobileMenuToggle}
//                   to="/about"
//                   className={`cursor-pointer   hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110${
//                     isScrolled ? "text-black" : ""
//                   }`}
//                 >
//                   About
//                 </Link>
//                 <Link
//                   onClick={handleMobileMenuToggle}
//                   to="/products"
//                   className={`cursor-pointer   hover:duration-700  p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
//                     isScrolled ? "" : ""
//                   }`}
//                 >
//                   Products
//                 </Link>

//                 <div className="relative group">
//                   <div
//                     className={`cursor-pointer   hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
//                       isScrolled ? "" : ""
//                     }`}
//                   >
//                     Support
//                   </div>
//                   <div className="absolute top-8 hidden bg-black text-gray-100   z-50 group-hover:block  rounded-lg transition-all duration-300 ease-in-out w-[300px] ">
//                     <div className="w-full flex flex-col px-4">
//                       <Link
//                         onClick={handleMobileMenuToggle}
//                         to="/registration-warranty-form"
//                         className="cursor-pointer   hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
//                       >
//                         Registration & Warranty Form
//                       </Link>

//                       <Link
//                         onClick={handleMobileMenuToggle}
//                         to="/partner-with-us"
//                         className="cursor-pointer   hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
//                       >
//                         Partner With Us
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative group">
//                   <div
//                     to="/support"
//                     className={`cursor-pointer   hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
//                       isScrolled ? "" : ""
//                     }`}
//                   >
//                     Case-Studies
//                   </div>
//                   <div className="absolute top-8 hidden bg-black text-gray-100   z-50 group-hover:block  rounded-lg transition-all duration-300 ease-in-out w-[200px] ">
//                     <div className="w-full flex flex-col px-4">
//                       <Link
//                         onClick={handleMobileMenuToggle}
//                         to="/blogs"
//                         className="cursor-pointer   hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
//                       >
//                         Blogs
//                       </Link>

//                       <Link
//                         onClick={handleMobileMenuToggle}
//                         to="/news-events"
//                         className="cursor-pointer   hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
//                       >
//                         News & Events{" "}
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 <Link
//                   to="/contact"
//                   onClick={handleMobileMenuToggle}
//                   className={` cursor-pointer   hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
//                     isScrolled ? "" : ""
//                   }`}
//                 >
//                   Contact
//                 </Link>

//                 <div className="flex items-center mt-4">
//                   <div className="transition-transform duration-300 transform hover:scale-110">
//                     <IoSearch
//                       title="Search"
//                       className="text-2xl text-[#00b0ea] cursor-pointer mr-4"
//                     />
//                   </div>
//                   <div className="transition-transform duration-300 transform hover:scale-110">
//                     <Link
//                       onClick={handleMobileMenuToggle}
//                       title="Whatsapp"
//                       to="https://api.whatsapp.com/send?phone=918460351801&text=I%20want%20to%20know%20more%20about%20Erthpot.%20"
//                     >
//                       <FaWhatsapp className="text-2xl text-[#00b0ea] cursor-pointer" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//             //  variants={fadeIn}
//             //  initial="hidden"
//             //  animate="visible"

//             //  initial={{ opacity: 0, y: -50 }}
//             //  animate={{ opacity: 1, y: 0 }}
//             //  transition={{ delay: 0.5, duration: 1 }}
//         ) : (
//           <motion.div
//           variants={fadeIn}
//              initial="hidden"
//              animate="visible"
//           >
//             <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             className={`z-50 flex items-center justify-center space-x-12  rounded-full p-2  text-black  bg-cyan-800${
//               isScrolled
//                 // ? "justify-center  z-50 w-1/2 bg-banner-background rounded-full p-2 space-x-12"
//                 ? "justify-center  z-50  bg-banner-background rounded-full p-2 space-x-12"
//                 : "space-x-4"
//             }`}
//           >
//             <Link
//               to="/"
//               // data-aos="zoom-out-down"
//               // data-aos="zoom-out-right"
//               // className={`hover_animation text-gray-100  text-[13px]  cursor-pointer hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110${
//               className={`hover_animation text-gray-100  text-[13px]  cursor-pointer hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110${
//                 isScrolled ? "text-black" : ""
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className={`hover_animation text-gray-100  text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110${
//                 isScrolled ? "text-white" : ""
//               }`}
//             >
//               About
//             </Link>
//             <Link
//               to="/products"
//               className={` hover_animation text-gray-100  text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700  p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
//                 isScrolled ? "text-white" : ""
//               }`}
//             >
//               Products
//             </Link>

//             <div className="relative group">
//               <div
//                 className={`hover_animation text-gray-100  text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
//                   isScrolled ? "text-white" : ""
//                 }`}
//               >
//                 Support
//               </div>
//               <div className={`absolute top-7 py-5 hidden    z-50 group-hover:block  rounded-lg transition-all duration-300 ease-in-out w-[200px]
//              ${
//               isScrolled ? "bg-black":""
//              }
//               `}>
//                 <div className="w-full flex flex-col bg-black">
//                   <Link
//                     to="/registration-warranty-form"
//                     // className="text-xl cursor-pointer  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
//                     className=" cursor-pointer text-gray-100  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md hover:bg-slate-800  transition-transform duration-700 transform hover:scale-110"
//                   >
//                     Registration & Warranty Form
//                   </Link>

//                   <Link
//                     to="/partner-with-us"
//                     // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
//                     className="text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  hover:bg-slate-800 transition-transform duration-700 transform hover:scale-110"
//                   >
//                     Partner With Us
//                   </Link>
//                   <Link
//                     to="/design-solution"
//                     // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
//                     className="text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  hover:bg-slate-800 transition-transform duration-700 transform hover:scale-110"
//                   >
//                     design-solution
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="relative group">
//               <div
//                 to="/support"
//                 className={` hover_animation text-gray-100  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
//                   isScrolled ? "text-white" : ""
//                 }`}
//               >
//                 Studies
//               </div>
//               <div className={`absolute top-7 hidden  text-[13px]  z-50 group-hover:block group-hover:duration-1000 duration-1000  rounded-lg transition-all ease-in-out w-[150px] ${
//                 isScrolled ? "bg-black":""
//               }`}>
//                 <div className="w-full flex flex-col">
//                   <Link
//                     to="/blogs"
//                     className=" cursor-pointer text-gray-100  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md hover:bg-slate-800 transition-transform duration-700 transform hover:scale-110 "

//                     // className="text-gray-100 text-xl text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
//                   >
//                     Blogs
//                   </Link>

//                   <Link
//                     to="/news-events"
//                     className=" cursor-pointer text-gray-100  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md hover:bg-slate-800  transition-transform duration-700 transform hover:scale-110"

//                     // className="text-gray-100 text-xl text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110"
//                   >
//                     News & Events{" "}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <Link
//               to="/contact"
//               className={` hover_animation text-gray-100   text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  transition-transform duration-700 transform hover:scale-110 ${
//                 isScrolled ? "text-white" : ""
//               }`}
//             >
//               Contact
//             </Link>

//           </motion.div>
//           </motion.div>
//         )}

//         {isMobileMenuOpen && isMobile && (
//           <div className="flex items-center ml-auto">
//             <div className="mr-4">
//               {/* <FiSearch className={`text-black size={24}`} /> */}
//             </div>
//             <div>
//               {/* <FiShoppingCart className={`text-black size={24}`} /> */}
//             </div>
//           </div>
//         )}

//         {!isMobile && (
//           <div className="flex items-center space-x-5 group">
//             <div className="flex gap-2 items-center transition-transform duration-300 transform hover:scale-110 mr-3">
//               <IoSearch
//                 title="Whatsapp"
//                 className="text-2xl group-hover:text-[#00b0ea] text-white cursor-pointer"
//               />
//               <span className="group-hover:text-[#00b0ea] text-white cursor-pointer text-[13px]">Search</span>
//             </div>
//             {/* <div className="transition-transform duration-300 transform hover:scale-110">
//               <Link
//                 title="Whatsapp"
//                 to="https://api.whatsapp.com/send?phone=918460351801&text=I%20want%20to%20know%20more%20about%20Erthpot.%20"
//               >
//                 <FaWhatsapp className="text-2xl hover:text-[#00b0ea] text-white cursor-pointer" />
//               </Link>
//             </div> */}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar3;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import Whitelogo from "../../assets/white logo.png";
import "./Navbar.css";
const Navbar3 = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setMobileMenuOpen(false); // Close the mobile menu on resize
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full p-4 z-50 ${
        isScrolled
          ? "bg-black p-4 duration-700"
          : "bg-transparent duration-700 "
      }`}
    >
      <div className="flex justify-between items-center relative px-3 bg-black">
        <div className="flex items-center">
          <Link to="/">
            <img
              // src="https://www.erthpot.com/wp-content/uploads/2022/10/retina-01.png"
              src={Whitelogo}
              alt="Logo"
              className="w-[170px]   mr-4 cursor-pointer  rounded-sm"
            />
            {/* <span className="text-">Earthpot</span> */}
          </Link>
        </div>

        {isMobile ? (
          <div className="flex items-center ml-auto duration-1000">
            <button
              className="text-black font-extrabold focus:outline-none"
              onClick={handleMobileMenuToggle}
            >
              {/* ☰ */}
              <FaBars className="text-2xl text-white" />
            </button>
            {isMobileMenuOpen && (
              <div className="fixed top-0 left-0 h-full w-full bg-black text-gray-100 p-4 space-y-6  flex flex-col items-center duration-1000">
                <button
                  className=" focus:outline-none self-end duration-1000"
                  onClick={handleMobileMenuToggle}
                >
                  <FiX className="text-3xl mr-2 font-bold mt-2" />
                </button>
                <Link
                  onClick={handleMobileMenuToggle}
                  to="/"
                  className={`hover_animation cursor-pointer  hover:duration-700  p-1 rounded-md ${
                    isScrolled ? "" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  onClick={handleMobileMenuToggle}
                  to="/about"
                  className={`hover_animation cursor-pointer   hover:duration-700    p-1 rounded-md ${
                    isScrolled ? "" : ""
                  }`}
                >
                  About
                </Link>
                <Link
                  onClick={handleMobileMenuToggle}
                  to="/products"
                  className={`hover_animation cursor-pointer   hover:duration-700  p-1 rounded-md  ${
                    isScrolled ? "" : ""
                  }`}
                >
                  Products
                </Link>

                <div className="relative group">
                  <div
                    className={`hover_animation cursor-pointer hover:duration-700  p-1 rounded-md  ${
                      isScrolled ? "" : ""
                    }`}
                  >
                    {/* Support */}
                    <span className="flex items-center gap-1">
                      {" "}
                      Support{" "}
                      <FaAngleDown className="pt-1 text-base group-hover:rotate-180 group-hover:duration-700 duration-700" />
                    </span>
                  </div>
                  <div className="absolute top-8 hidden bg-black text-gray-100   z-50 group-hover:block  rounded-lg transition-all duration-300 ease-in-out w-[300px] ">
                    <div className="w-full flex flex-col px-4">
                      <Link
                        onClick={handleMobileMenuToggle}
                        to="/registration-warranty-form"
                        className=" hover_animation cursor-pointer   hover:duration-700    p-1 rounded-md "
                      >
                        Registration & Warranty Form
                      </Link>

                      <Link
                        onClick={handleMobileMenuToggle}
                        to="/partner-with-us"
                        className="hover_animation cursor-pointer   hover:duration-700    p-1 rounded-md "
                      >
                        Partner With Us
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div
                    to="/support"
                    className={`hover_animation cursor-pointer   hover:duration-700    p-1 rounded-md  ${
                      isScrolled ? "" : ""
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      {" "}
                      Case-Studies{" "}
                      <FaAngleDown className="pt-1 text-base group-hover:rotate-180 group-hover:duration-700 duration-700" />
                    </span>
                    {/* Case-Studies */}
                  </div>
                  <div className="absolute top-8 hidden bg-black text-gray-100   z-50 group-hover:block  rounded-lg transition-all duration-300 ease-in-out w-[200px] ">
                    <div className="w-full flex flex-col px-4">
                      <Link
                        onClick={handleMobileMenuToggle}
                        to="/blogs"
                        className="hover_animation cursor-pointer   hover:duration-700    p-1 rounded-md "
                      >
                        Blogs
                      </Link>

                      <Link
                        onClick={handleMobileMenuToggle}
                        to="/news-events"
                        className="hover_animation cursor-pointer   hover:duration-700    p-1 rounded-md "
                      >
                        News & Events{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  onClick={handleMobileMenuToggle}
                  className={` hover_animation cursor-pointer   hover:duration-700    p-1 rounded-md  ${
                    isScrolled ? "" : ""
                  }`}
                >
                  Contact
                </Link>

                <div className="flex items-center mt-4">
                  <div className="transition-transform duration-300 transform hover:scale-110">
                    <IoSearch
                      title="Search"
                      className="text-2xl text-[#00b0ea] cursor-pointer mr-4"
                    />
                  </div>
                  <div className="transition-transform duration-300 transform hover:scale-110">
                    <Link
                      onClick={handleMobileMenuToggle}
                      title="Whatsapp"
                      to="https://api.whatsapp.com/send?phone=918460351801&text=I%20want%20to%20know%20more%20about%20Erthpot.%20"
                    >
                      <FaWhatsapp className="text-2xl text-[#00b0ea] cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          //  variants={fadeIn}
          //  initial="hidden"
          //  animate="visible"

          //  initial={{ opacity: 0, y: -50 }}
          //  animate={{ opacity: 1, y: 0 }}
          //  transition={{ delay: 0.5, duration: 1 }}
          <div>
            <div
              className={`z-50 flex items-center justify-center   space-x-12  rounded-full p-2  text-black  bg-cyan-800${
                isScrolled
                  ? // ? "justify-center  z-50 w-1/2 bg-banner-background rounded-full p-2 space-x-12"
                    "justify-center  z-50  bg-banner-background rounded-full p-2 space-x-12 "
                  : "space-x-4 "
              }`}
            >
              <Link
                to="/"
                // data-aos="zoom-out-down"
                // data-aos="zoom-out-right"
                // className={`hover_animation text-gray-100  text-[13px]  cursor-pointer hover:text-gray-100 hover:duration-700    p-1 rounded-md ${
                className={`hover_animation   text-[13px] text-gray-100  cursor-pointer hover:text-gray-100 hover:duration-700    p-1 rounded-md ${
                  isScrolled ? "" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`hover_animation   text-[13px] cursor-pointer text-gray-100 hover:text-gray-100 hover:duration-700    p-1 rounded-md ${
                  isScrolled ? "text-white" : ""
                }`}
              >
                About
              </Link>
              {/* <Link
                                to="/products"
                                className={` hover_animation text-gray-100  text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700  p-1 rounded-md  ${
                                    isScrolled ? "text-white" : ""
                                }`}
                            >
                                Products
                            </Link> */}

              <div className="relative group">
                <div
                  className={`hover_animation    text-[13px] cursor-pointer text-gray-100 hover:text-gray-100 hover:duration-700    p-1 rounded-md  ${
                    isScrolled ? "text-white" : ""
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {" "}
                    Products
                    <FaAngleDown className="pt-1 text-base group-hover:rotate-180 group-hover:duration-700 duration-700" />
                  </span>
                </div>
                <div
                  className={`absolute top-7 py-3 hidden    z-50 group-hover:block  rounded-lg transition-all duration-300 ease-in-out w-[200px] 
                                             ${isScrolled ? "bg-black" : ""}
                                                                       `}
                >
                  <div className="w-full flex flex-col bg-black px-2">
                    <Link
                      to="/products"
                      // className="text-xl cursor-pointer  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                      className="hover_animation cursor-pointer text-gray-100  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md  "
                    >
                      All Products
                    </Link>
                    <Link
                      to="/allproducts/Keyer"
                      // className="text-xl cursor-pointer  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                      className="hover_animation cursor-pointer text-gray-100  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md  "
                    >
                      DSP & Controls
                    </Link>

                    <Link
                      to="/allproducts/Novo"
                      // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                      className="hover_animation text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                    >
                      Audio Conference System
                    </Link>
                    <Link
                      to="/allproducts/Arche"
                      // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                      className="hover_animation text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  "
                    >
                      Wireless Mircophones
                    </Link>
                    <Link
                      to="/allproducts/Vector"
                      // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                      className="hover_animation text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  "
                    >
                      Vector
                    </Link>
                    {/* <Link
                                            to="/After-sales-support"
                                            // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                                            className="hover_animation text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  "
                                        >
                                            After Sales Support
                                        </Link> */}
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div
                  className={`hover_animation text-gray-100   text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  ${
                    isScrolled ? "text-white" : ""
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {" "}
                    Support{" "}
                    <FaAngleDown className="pt-1 text-base group-hover:rotate-180 group-hover:duration-700 duration-700" />
                  </span>
                </div>
                <div
                  className={`absolute top-7 py-3 hidden    z-50 group-hover:block  rounded-lg transition-all duration-300 ease-in-out w-[200px] 
                                             ${isScrolled ? "bg-black" : ""}
                                                                       `}
                >
                  <div className="w-full flex flex-col bg-black px-2">
                    <Link
                      to="/registration-warranty-form"
                      // className="text-xl cursor-pointer  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                      className="hover_animation cursor-pointer text-gray-100  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md  "
                    >
                      Registration & Warranty Form
                    </Link>

                    <Link
                      to="/partner-with-us"
                      // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                      className="hover_animation text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                    >
                      Partner With Us
                    </Link>
                    <Link
                      to="/design-solution"
                      // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                      className="hover_animation text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  "
                    >
                      design-solution
                    </Link>
                    <Link
                      to="/After-sales-support"
                      // className="text-gray-100 text-xl  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                      className="hover_animation text-gray-100   cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  "
                    >
                      After Sales Support
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group ">
                <div
                  to="/support"
                  className={` hover_animation text-gray-100  cursor-pointer text-[13px]  hover:text-gray-100 hover:duration-700    p-1 rounded-md  ${
                    isScrolled ? "text-white" : ""
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {" "}
                    Studies{" "}
                    <FaAngleDown className="pt-1 text-base group-hover:rotate-180 group-hover:duration-700 duration-700" />
                  </span>
                </div>
                <div
                  className={`absolute top-7 py-3 hidden  text-[13px]  z-50 group-hover:block group-hover:duration-1000 duration-1000  rounded-lg transition-all ease-in-out w-[150px] ${
                    isScrolled ? "bg-black" : ""
                  }`}
                >
                  <div className="w-full flex flex-col bg-black">
                    <Link
                      to="/blogs"
                      className="hover_animation cursor-pointer  text-gray-100 text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md  "

                      // className="text-gray-100 text-xl text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                    >
                      Blogs
                    </Link>

                    <Link
                      to="/news-events"
                      className=" hover_animation cursor-pointer text-gray-100  text-[13px] hover:text-gray-100 hover:duration-700    p-1 rounded-md  "

                      // className="text-gray-100 text-xl text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md "
                    >
                      News & Events{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className={` hover_animation text-gray-100   text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  ${
                  isScrolled ? "text-white" : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}

        {isMobileMenuOpen && isMobile && (
          <div className="flex items-center ml-auto">
            <div className="mr-4">
              {/* <FiSearch className={`text-black size={24}`} /> */}
            </div>
            <div>
              {/* <FiShoppingCart className={`text-black size={24}`} /> */}
            </div>
          </div>
        )}

        {!isMobile && (
          <div className="flex items-center space-x-5 group">
            <div className="flex gap-2 items-center  mr-3">
              <IoSearch
                title="Whatsapp"
                className="text-2xl group-hover:text-[#00b0ea] text-white cursor-pointer"
              />
              <span className="group-hover:text-[#00b0ea] text-white cursor-pointer text-[13px]">
                Search
              </span>
            </div>
            {/* <div className="transition-transform duration-300 transform hover:scale-110">
              <Link
                title="Whatsapp"
                to="https://api.whatsapp.com/send?phone=918460351801&text=I%20want%20to%20know%20more%20about%20Erthpot.%20"
              >
                <FaWhatsapp className="text-2xl hover:text-[#00b0ea] text-white cursor-pointer" />
              </Link>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar3;
