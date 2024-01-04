import React, { useState } from "react";

const Line = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center justify-center h-50% bg-black p-4 relative transition-all cursor-pointer ${
        isHovered ? "transform -translate-y-15 shadow text-white" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          height: "55px",
          width: "3px",
          transform: isHovered ? "translateY(-15px)" : "translateY(0)",
        }}
        className="bg-blue-500 rounded-full transition-transform duration-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
    </div>
  );
};

export default Line;
