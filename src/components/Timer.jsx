import React, { useState, useEffect } from "react";

// 🎯 Set your target date here
const TARGET_DATE = new Date("2026-04-01T00:00:00");

const TimerBox = ({ value, label }) => (
  <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#A6FF5D] to-white/40 shadow-[0_0_10px_rgba(166,255,93,0.25)]">
    
    <div
      className="
        flex flex-col items-center justify-center
        px-2 py-2 
        sm:px-3 sm:py-2.5 
        md:px-4 md:py-3
        bg-gray-900 rounded-xl
        min-w-[60px] sm:min-w-[70px] md:min-w-[80px]
      "
    >
      {/* NUMBER */}
      <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl text-[#A6FF5D]">
        <span style={{ "--value": value }}>
          {String(value).padStart(2, "0")}
        </span>
      </span>

      {/* LABEL */}
      <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 mt-1 tracking-wide">
        {label}
      </span>
    </div>
  </div>
);

const Timer = () => {
  const calculateTimeLeft = () => {
    const diff = TARGET_DATE - new Date();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="
        grid grid-flow-col auto-cols-max
        gap-2 sm:gap-3 md:gap-5
        mt-6 justify-center
        px-4 max-w-full overflow-x-hidden
      "
    >
      <TimerBox value={timeLeft.days} label="days" />
      <TimerBox value={timeLeft.hours} label="hours" />
      <TimerBox value={timeLeft.minutes} label="min" />
      <TimerBox value={timeLeft.seconds} label="sec" />
    </div>
  );
};

export default Timer;