import React from "react";

const ReservedSeatBtn = ({onClick}) => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="cta-glow relative z-0 overflow-hidden p-[2px] rounded-full hover:scale-105 transition duration-300">
        <button onClick={onClick} className="px-8 py-3 text-sm md:text-base text-white rounded-full font-semibold bg-gray-900 flex items-center gap-2">
          Reserve Your Seat
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default ReservedSeatBtn;
