import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./Products.css";
import "./Card.css";
import FooterBanner from "./CenterBanner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dummyProducts from "./DummyProducts";
const ProductCard = ({ product: { name, category, image }, index }) => {
  const handleClick = () => {
    console.log("Clicked on:", name, category, image);
  };

  return (
    <Link
      to={`/product/${name}`}
      onClick={() => handleClick({ name, category })}
      className={` ${index % 2 === 0 ? "even" : "odd"} bg-gray-800 p-3 card `}
    >
      {image && image.length > 0 && (
        <img src={image} className="card__img" alt={name} />
      )}
      <h1 className="  card__title font-semibold text-2xl mt-4">{name}</h1>
      <div class="card__content">
        <div className="card__sizeContainer">
          {/* <p className="">Category : {category.replace(/\bSystems\b/g, "")}</p> */}
        </div>
      </div>
    </Link>
  );
};

const AllProducts = ({ handleClick }) => {
  const { productName } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  const myobject1 = {
    Arche: [
      {
        title: "The Arche Wireless Microphones",
        // images: ["image1.jpg", "image2.jpg", "image3.jpg"],
        image: require("../../assets/Arche Wireless Series.png"),
        description:
          "Arche wireless Microphone systems are designed with one goal in mind – Efficient Connectivity. What you get is a stable and reliable RF connectivity right out of the box. With its wide operating frequency range 522-936MHz and RF boost (40mW) in the entire UHF spectrum, these wireless microphones give flexibility and long working range.  Whether it’s a seminar hall, a live stage, or a classroom, working with Arche Wireless systems is a cake walk",
      },
      {
        title: "AFS (Automatic Frequency Selection)",
        image: require("../../assets/Specification/Archie1.webp"),
        description:
          "Press the “AFS” (Auto Frequency Selection) button 3 sec and the receiver will auto-scan and lock on to an open, interference-free frequency",
      },
      {
        title: "Compatible systems",
        image: require("../../assets/Specification/Archei1.webp"),
        description:
          "Maximum 24 sets can be used simultaneously by using multiple frequency bands in one venue.",
      },
      {
        title: "IR Infrared Sync",
        image: require("../../assets/Specification/archie3.webp"),
        description:
          "Press [IR] button to automatically pair the receiver frequency with the transmitter.",
      },
    ],
    Novo: [
      {
        title: "NOVO Conference System",
        // images: ["image1.jpg", "image2.jpg", "image3.jpg"],
        image: require("../../assets/Specification/Novo/Novo0.webp"),
        description:
          "Novo Conference System is a wired simple and affordable conference discussion system with exquisite design focusing on plug n play operation. Its various applications include small to medium conference rooms, assembly halls & classrooms. ",
      },
      {
        title: "Wired loop In-Out connectivity ",
        image: require("../../assets/Specification/Novo/Novo1.webp"),
        description:
          "Wired loop In-Out connectivity to microphone units on standard Cat5e Network Cables",
      },
      {
        title: "System Expandability",
        image: require("../../assets/Specification/Novo/Novo2.webp"),
        description:
          "System Expandability of up to 110 units using external power supply for discussion units          ",
      },
      {
        title: "IR Infrared Sync",
        image: require("../../assets/Specification/Novo/Novo3.webp"),
        description:
          "Press [IR] button to automatically pair the receiver frequency with the transmitter.",
      },
    ],
    Vector: [
      // Similarly structured objects for 'vector'
      {
        title: "The Arche Wireless Microphones",
        // images: ["image1.jpg", "image2.jpg", "image3.jpg"],
        image: require("../../assets/Arche Wireless Series.png"),
        description:
          "Arche wireless Microphone systems are designed with one goal in mind – Efficient Connectivity. What you get is a stable and reliable RF connectivity right out of the box. With its wide operating frequency range 522-936MHz and RF boost (40mW) in the entire UHF spectrum, these wireless microphones give flexibility and long working range.  Whether it’s a seminar hall, a live stage, or a classroom, working with Arche Wireless systems is a cake walk",
      },
      {
        title: "AFS (Automatic Frequency Selection)",
        image: require("../../assets/Specification/Archie1.webp"),
        description:
          "Press the “AFS” (Auto Frequency Selection) button 3 sec and the receiver will auto-scan and lock on to an open, interference-free frequency",
      },
      {
        title: "Compatible systems",
        image: require("../../assets/Specification/Archei1.webp"),
        description:
          "Maximum 24 sets can be used simultaneously by using multiple frequency bands in one venue.",
      },
      {
        title: "IR Infrared Sync",
        image: require("../../assets/Specification/archie3.webp"),
        description:
          "Press [IR] button to automatically pair the receiver frequency with the transmitter.",
      },
    ],
    Keyer: [
      // Similarly structured objects for 'keyer'
      {
        title: "The Keyer Series ",
        // images: ["image1.jpg", "image2.jpg", "image3.jpg"],
        image: require("../../assets/Specification/Keyer/keyer-img-updated0.webp"),
        description: "Digital Processing & Control ",
      },
      {
        title: "Dante Audio Transmission",
        image: require("../../assets/Specification/Keyer/keyer1.webp"),
        description:
          "The Dante technology from Audinate provides smooth and hassle-free digital audio transmission over the local area networks.        Dante-enabled devices can share multiple channels of high-resolution digital audio with each other over a local area network.  ",
      },
      {
        title: "Acoustic Echo Cancellation ",
        image: require("../../assets/Specification/Keyer/keyer2.webp"),
        description:
          "The Keyer Series of DSP have advanced AEC algorithms to create much faster echo or double talk eliminations and thereby providing a disturbance-free Intelligent voice quality. ",
      },
      {
        title: "Advanced Audio Processing",
        image: require("../../assets/Specification/Keyer/Keyer3.webp"),
        description: `Keyer DSPs boast much-needed algorithms like

          ANS(Automatic Noise Suppression)
          AFC (Adaptive Feedback Control)
          AGC (Automatic Gain Control) to provide you with a comprehensible audio output.
          `,
      },
    ],
  };

  const myobject = myobject1[productName];

  const filteredProducts = dummyProducts.filter(
    (product) => product.productName === productName
  );

  const renderProductCards = () => {
    return filteredProducts.map((product, index) => {
      return (
        <div key={index} className="px-2">
          <ProductCard
            product={product}
            index={index}
            handleClick={() => handleClick(product)}
          />
        </div>
      );
    });
  };

  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Adjust the number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <div className="pt-10 bg-black">
      <div className="p-2">
        <FooterBanner />
      </div>
      <div className="w-[95%] mx-auto bg-black py-10">
        {/* Banner */}
        <div className=" relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 m-4">
          <div className="inset-y-0 custom top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 testing">
            <img
              className="object-cover w-full  rounded shadow-lg lg:rounded-none lg:shadow-none md:h-80 lg:h-full custom-img"
              src={myobject[0].image}
              alt=""
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <h3 className="mb-5 font-sans text-3xl font-bold tracking-tight text-[#00b0ea] sm:text-4xl sm:leading-none">
                {myobject[0].title}
              </h3>
              <p className="pr-5 mb-5 text-base text-white md:text-lg">
                {myobject[0].description}
              </p>
            </div>
          </div>
        </div>
        {/* Featured Products */}
        <div className="mb-20">
          <h3 className="text-center font-bold text-gray-100 text-5xl font-extralight ">
            Featured Products
          </h3>
        </div>
        <Slider {...carouselSettings}>{renderProductCards()}</Slider>
      </div>

      {/* 1 */}
      <div className="w-[95%]  mx-auto p-2 ">
        {/* Second Banner */}
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 m-4">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ml-auto">
            <h3 className="mb-5 font-sans text-3xl font-bold tracking-tight text-[#00b0ea] sm:text-4xl sm:leading-none">
              {/* Acoustic Echo Cancellation */}
              {myobject[1].title}
            </h3>
            <p className="pr-5 mb-5 text-base text-white md:text-lg">
              {myobject[1].description}
            </p>
          </div>

          <div className="relative inset-y-0 custom top-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 ml-auto order-last">
            <img
              className="object-cover w-90  rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full custom-img"
              src={myobject[1].image}
              alt=""
            />
          </div>
        </div>
        {/* Third Banner */}
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 m-4">
          <div className="inset-y-0 custom top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <img
              className="object-cover w-full  rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src={myobject[2].image}
              alt=""
            />
          </div>

          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <h3 className="mb-5 font-sans text-3xl font-bold tracking-tight text-[#00b0ea] sm:text-4xl sm:leading-none">
                {myobject[2].title}
              </h3>
              <p className="pr-5 mb-5 text-base text-white md:text-lg">
                {myobject[2].description}
              </p>
            </div>
          </div>
        </div>
        {/* Fourth Banner */}
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 m-4">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ml-auto ">
            <h3 className="mb-5 font-sans text-3xl font-bold tracking-tight text-[#00b0ea] sm:text-4xl sm:leading-none">
              {myobject[3].title}
            </h3>
            <p className="pr-5 mb-5 text-base text-white md:text-lg">
              {myobject[3].description}
            </p>
          </div>

          <div className="relative inset-y-0 custom top-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 ml-auto order-last">
            <img
              className="object-cover w-90  rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src={myobject[3].image}
              alt=""
            />
          </div>
        </div>
        {/* More Products */}
        <div class="maylike-products-wrapper">
          <h3 className="text-white">You may also like</h3>
          <div className="marquee">
            <div class="maylike-products-container track">
              {filteredProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <img
                    src={product.image} // Replace with the actual path to your image
                    width="250"
                    height="350"
                    class="product-image"
                    alt={product.name}
                  />
                  <p class="product-name">{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
