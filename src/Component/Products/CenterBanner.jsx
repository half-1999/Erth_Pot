import React from "react";
import kyerimg from "../../assets/Banner/keyer.png";
import vactor_img from "../../assets/Banner/Vector.png";
import novo_img from "../../assets/Banner/NCS-with-NC5C.D.png";
import arch_img from "../../assets/Banner/Arche.png";
import dummyProducts from "./DummyProducts";
import { useParams } from "react-router";

const FooterBanner = () => {
  const { productName } = useParams();

  const filteredProducts = dummyProducts.filter(
    (product) => product.productName === productName
  );

  let productImage;
  switch (productName) {
    case "Arche":
      productImage = arch_img;
      break;
    case "Keyer":
      productImage = kyerimg;
      break;
    case "Novo":
      productImage = novo_img;
      break;
    case "Vector":
      productImage = vactor_img;
      break;
    default:
      // Set a default image or handle other cases
      productImage = arch_img;
  }

  return (
    <div className="md:mt-20 lg:mt-30">
      <div className=" bg-white rounded-lg relative p-4 md:p-8 lg:p-12 h-auto md:h-80 lg:h-96 text-black w-full md:max-w-2xl lg:max-w-full mx-auto">
        <div className=" flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex items-center mb-100 md:mb-100 md:mr-4 md:mb-100">
            <h3
              className="font-bold text-xl mt-100 md:text-3xl lg:text-6xl"
              style={{ marginTop: "70%" }}
            >
              {productName}
            </h3>
          </div>

          <div className="relative">
            <img
              src={productImage}
              className="cursor-pointer h-80 md:h-120 lg:h-160 w-auto md:w-120 lg:w-160 mx-auto md:mx-0 -top-4 md:-top-10 lg:-top-20"
              alt={productName}
              style={{ marginTop: "-30%", height: "500px", width: "500px" }}
            />
          </div>
          <div className="text-center md:text-left mt-10 md:mt-0">
            <h3
              className="font-semibold text-base md:text-2xl lg:text-5xl mt-50"
              style={{ marginTop: "30%" }}
            >
              {filteredProducts[0].category.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <br />}
                  {word}
                </React.Fragment>
              ))}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
