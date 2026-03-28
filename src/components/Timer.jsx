import React from "react";

const Timer = () => {
  return(
  <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-8 justify-center">
    {/* DAYS */}
    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#A6FF5D] to-white/40 shadow-[0_0_15px_rgba(166,255,93,0.3)]">
      <div className="flex flex-col items-center justify-center px-4 py-3 bg-gray-900 rounded-xl">
        <span className="countdown font-mono text-4xl md:text-5xl text-[#A6FF5D]">
          <span style={{ "--value": 15 }}>15</span>
        </span>
        <span className="text-xs text-gray-400 mt-1">days</span>
      </div>
    </div>

    {/* HOURS */}
    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#A6FF5D] to-white/40 shadow-[0_0_15px_rgba(166,255,93,0.3)]">
      <div className="flex flex-col items-center justify-center px-4 py-3 bg-gray-900 rounded-xl">
        <span className="countdown font-mono text-4xl md:text-5xl text-[#A6FF5D]">
          <span style={{ "--value": 10 }}>10</span>
        </span>
        <span className="text-xs text-gray-400 mt-1">hours</span>
      </div>
    </div>

    {/* MINUTES */}
    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#A6FF5D] to-white/40 shadow-[0_0_15px_rgba(166,255,93,0.3)]">
      <div className="flex flex-col items-center justify-center px-4 py-3 bg-gray-900 rounded-xl">
        <span className="countdown font-mono text-4xl md:text-5xl text-[#A6FF5D]">
          <span style={{ "--value": 24 }}>24</span>
        </span>
        <span className="text-xs text-gray-400 mt-1">min</span>
      </div>
    </div>

    {/* SECONDS */}
    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#A6FF5D] to-white/40 shadow-[0_0_15px_rgba(166,255,93,0.3)]">
      <div className="flex flex-col items-center justify-center px-4 py-3 bg-gray-900 rounded-xl">
        <span className="countdown font-mono text-4xl md:text-5xl text-[#A6FF5D]">
          <span style={{ "--value": 59 }}>59</span>
        </span>
        <span className="text-xs text-gray-400 mt-1">sec</span>
      </div>
    </div>
  </div>
  )
  
};

export default Timer;
