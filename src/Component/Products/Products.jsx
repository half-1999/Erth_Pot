import React from "react";
// import "./Products.css";
import HeroBanner from "./HeroBanner";
import HeroBanner2 from "./HeroBanner2";
import kyerimg from '../../assets/Banner/keyer.png'
import novo_img from '../../assets/Banner/NCS-with-NC5C.D.png'
import arch_img from '../../assets/Banner/Arche.png'
import vactor_img from '../../assets/Banner/Vector.png'
const Products = () => {
  const bannerProps = {
    largeText1: "Arche ",
    buttonText: "Watch More",
    desc: "Best Wireless Microphones on the market",
    image: {
      asset: {
        _ref: arch_img,
      },
      _type: "image",
    },
    largeText2: " Microphones",
    _type: "banner",
  };
  const bannerProps2 = {
    largeText1: "Keyer ",
    buttonText: "Watch More",
    desc: "Best Digital Processing & Control on the market",
    image: {
      asset: {
        // _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
        _ref: kyerimg,
      },
      _type: "image",
    },
    largeText2: " & Control",
    _type: "banner",
  };
  const bannerProps3 = {
    largeText1: "Novo ",
    buttonText: "Watch More",
    desc: "Best Audio Conference System on the market",
    image: {
      asset: {
        // _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
        _ref: novo_img,
      },
      _type: "image",
    },
    largeText2: " System",
    _type: "banner",
  };
  const bannerProps4 = {
    largeText1: "Vector ",
    buttonText: "Watch More",
    desc: "Best Vector Conference System on the market",
    image: {
      asset: {
        // _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
        _ref: vactor_img,
      },
      _type: "image",
    },
    largeText2: " System",
    _type: "banner",
  };
  return (
    <>
      <div className="navbar-container py-14 bg-black">
        <HeroBanner {...bannerProps} />
        <HeroBanner2 {...bannerProps2} />
        <HeroBanner {...bannerProps3} />
        <HeroBanner2 {...bannerProps4} />
      </div>
    </>
  );
};

export default Products;
