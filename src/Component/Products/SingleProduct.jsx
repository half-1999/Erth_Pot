import React, { useEffect, useState, useRef } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "./drop.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import p1 from "../../assets/Arche Wireless Series.png";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Line from "../Line.jsx";
import dummyProducts from "./DummyProducts.jsx";

const SingleProductPage = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeAllAccordions = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };

  const toggleAccordion = (accordionNumber) => {
    closeAllAccordions(); // Close all accordions before opening the selected one
    switch (accordionNumber) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      case 5:
        setIsOpen5(!isOpen5);
        break;
      case 6:
        setIsOpen6(!isOpen6);
        break;
      default:
        break;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //  dropdown end

  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const foundProduct = dummyProducts.find((p) => p.name === productName);
    console.log(foundProduct);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle the case where the product is not found
      console.error(`Product with name ${productName} not found.`);
    }
  }, [productName]);

  if (!product) {
    return <div className="mt-[20px]">Loading...</div>;
  }

  const handleDownloadClick = () => {
    if (product.download) {
      window.open(product.download, "_blank");
    }
  };
  return (
    // <main className="main-container">
    <main className="w-full bg-black">
      <div>
        <div className="w-[95%] mx-auto pt-20">
          <div class="grid grid-cols-1 md:grid-cols-8 gap-2   ">
            <div className="md:col-span-5 flex ">
              <div className="right">
                <Swiper
                  onClick={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  direction="vertical"
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper mt-2 w-[130px] h-[550px]"
                >
                  <SwiperSlide className="h-[400px]">
                    <img
                      className="object-cover w-full h-full scale-90"
                      src={p1}
                      alt="Slide 1"
                    />
                  </SwiperSlide>

                  <SwiperSlide className="h-full">
                    <img
                      src={p1}
                      className="object-cover w-full h-full custom-shadow"
                      alt="Slide 2"
                    />
                  </SwiperSlide>

                  <SwiperSlide className="h-full">
                    <img
                      src={p1}
                      className="w-full h-full object-cover"
                      alt="Slide 3"
                    />
                  </SwiperSlide>

                  <SwiperSlide className="h-full">
                    <img
                      src={p1}
                      className="object-cover w-full h-full"
                      alt="Slide 4"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="left mt-6">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 h-[450px] w-[600px] mr-2 block"
                >
                  <SwiperSlide>
                    <img src={product.image} className=" h-[400px]" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div class=" p-1 flex   md:col-span-3 ">
              <div className=" pl-5 mt-2 ">
                <h1 className="font-semibold text-blue-500 text-6xl">
                  {product.name}
                </h1>
                <h4 className="font-semibold text-1xl text-gray-100 p-3 text-[15px] ">
                  <ul>
                    {Array.isArray(product.des) ? (
                      product.des.map((description, index) => (
                        <li className="list-disc" key={index}>
                          {description}
                        </li>
                      ))
                    ) : (
                      <li className="list-disc">{product.des}</li>
                    )}
                  </ul>
                </h4>

                <h1>
                  <span className="text-sm font-medium text-gray-100">
                    Categories : {product.category}
                  </span>
                </h1>
                <div className="flex mt-4">
                  <p className="text-white mr-2">Share : </p>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-500 mr-3"
                    />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-blue-400 mr-3"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-pink-500 mr-3"
                    />
                  </a>
                  <a
                    href="https://www.pinterest.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faPinterest}
                      className="text-red-500 mr-3"
                    />
                  </a>
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="text-blue-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Line />
          {/* ------------------------------------------------------------------------------------------------ */}
          {/* Accordion */}
          <div className="py-[15px]">
            {product.description && (
              <div
                className={isOpen1 ? "dropdown active" : "dropdown"}
                onClick={() => toggleAccordion(1)}
              >
                <div className="dropdown__text w-full b-red-500 uppercase">
                  Description
                </div>
                <div className="dropdown__items group-focus:block text-gray-100">
                  <p className="p-3">{product.description}</p>
                </div>
              </div>
            )}

            {product.keyFeatures && product.keyFeatures.length > 0 && (
              <div
                className={isOpen2 ? "dropdown active" : "dropdown"}
                onClick={() => toggleAccordion(2)}
              >
                <div className="dropdown__text w-full b-red-500 uppercase">
                  Key Features
                </div>
                <div className="dropdown__items text-gray-100 px-7">
                  <ul className="p-2">
                    {product.keyFeatures.map((features, index) => (
                      <li className="list-disc" key={index}>
                        {features}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {product.technicalSpecification &&
              Object.keys(product.technicalSpecification).length > 0 && (
                <div
                  className={isOpen3 ? "dropdown active" : "dropdown"}
                  onClick={() => toggleAccordion(3)}
                >
                  <div className="dropdown__text w-full b-red-500 uppercase">
                    Technical Specifications
                  </div>
                  <div className="dropdown__items group-focus:block text-gray-100 px-4">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-gray-100 dark:bg-gray-800"
                            >
                              Parameter
                            </th>
                            <th scope="col" className="px-6 py-3 text-white">
                              Value
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(product.technicalSpecification).map(
                            ([parameter, value], index) => (
                              <tr
                                key={index}
                                className="border-b border-gray-200 dark:border-gray-700"
                              >
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium whitespace-nowrap text-gray-100 dark:text-white dark:bg-gray-800"
                                >
                                  {parameter}:
                                </th>
                                <td className="px-6 py-4 text-white">
                                  {value}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

            {product.download && (
              <div
                className={isOpen4 ? "dropdown active" : "dropdown"}
                onClick={() => toggleAccordion(4)}
              >
                <div className="dropdown__text w-full b-red-500 uppercase">
                  Download User Manual
                </div>
                <div className="dropdown__items text-gray-100 px-6">
                  <ul className="p-2">
                    <li
                      className="cursor-pointer"
                      onClick={() => handleDownloadClick()}
                    >
                      {product.download}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
