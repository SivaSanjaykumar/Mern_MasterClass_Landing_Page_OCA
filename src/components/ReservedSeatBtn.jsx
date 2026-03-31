import React from "react";
import { scrollToSection } from "../lib/scrollTo";

const ReservedSeatBtn = ({ onClick, label = "Reserve Your Seat" }) => {
  const handleClick = () => {
    scrollToSection("register");
    if (onClick) onClick();
  };

  return (
    <>
      <style>{`
  @keyframes urgency-jitter {
    0%, 100% { transform: scale(1); }
    30% { transform: scale(1.04) rotate(-0.3deg); }
    50% { transform: scale(1.02) rotate(0.3deg); }
    70% { transform: scale(1.04); }
  }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 10px 3px rgba(166,255,93,0.5); }
    50% { box-shadow: 0 0 24px 8px rgba(166,255,93,0.8); }
  }

  .urgency-jitter {
    animation:
      urgency-jitter 0.7s ease-in-out 3s infinite;
  }

  .urgency-jitter:hover {
    animation: none;
    transform: scale(1.06);
    transition: transform 0.3s ease;
  }
`}</style>

      <div className="mt-10 flex justify-center">
        <div
          className="urgency-jitter cta-glow relative z-0 overflow-hidden p-[2px] rounded-full"
          style={{ animation: undefined }} /* let CSS handle it */
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              animation: "pulse-glow 1.8s ease-in-out infinite",
              borderRadius: "inherit",
            }}
          />
          <button
            onClick={handleClick}
            className="relative px-8 py-3 text-sm md:text-base text-white rounded-full font-semibold bg-gray-900 flex items-center gap-2"
          >
            {label}
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReservedSeatBtn;