import React, { useState, useEffect } from "react";

// 🎯 Set your target date here
const TARGET_DATE = new Date("2026-04-01T00:00:00");

const TimerBox = ({ value, label }) => (
  <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#A6FF5D] to-white/40 shadow-[0_0_15px_rgba(166,255,93,0.3)]">
    <div className="flex flex-col items-center justify-center px-4 py-3 bg-gray-900 rounded-xl">
      <span className="countdown font-mono text-4xl md:text-5xl text-[#A6FF5D]">
        <span style={{ "--value": value }}>{String(value).padStart(2, "0")}</span>
      </span>
      <span className="text-xs text-gray-400 mt-1">{label}</span>
    </div>
  </div>
);

const Timer = () => {
  const calculateTimeLeft = () => {
    const diff = TARGET_DATE - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-8 justify-center">
      <TimerBox value={timeLeft.days}    label="days"  />
      <TimerBox value={timeLeft.hours}   label="hours" />
      <TimerBox value={timeLeft.minutes} label="min"   />
      <TimerBox value={timeLeft.seconds} label="sec"   />
    </div>
  );
};

export default Timer;