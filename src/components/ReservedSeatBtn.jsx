import React from "react";
import { scrollToSection } from "../lib/scrollTo";

const ReservedSeatBtn = ({ onClick }) => {
  const handleClick = () => {
    scrollToSection("masterclass-details"); // ✅ smooth scroll
    if (onClick) onClick(); // ✅ runs any extra logic passed via prop
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="cta-glow relative z-0 overflow-hidden p-[2px] rounded-full hover:scale-105 transition duration-300">
        <button onClick={handleClick} className="px-8 py-3 text-sm md:text-base text-white rounded-full font-semibold bg-gray-900 flex items-center gap-2">
          Reserve Your Seat
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default ReservedSeatBtn;