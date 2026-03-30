import React from "react";
import { scrollToSection } from "../lib/scrollTo";

const ReservedSeatBtn = ({ onClick, label = "Reserve Your Seat" }) => {
  const handleClick = () => {
    scrollToSection("masterclass-details");
    if (onClick) onClick();
  };

  return (
    <>
      <style>{`
        @keyframes urgency-jitter {
          0%   { transform: translateX(0) rotate(0deg); }
          15%  { transform: translateX(-2px) rotate(-0.4deg); }
          30%  { transform: translateX(2px) rotate(0.4deg); }
          45%  { transform: translateX(-1px) rotate(-0.2deg); }
          60%  { transform: translateX(1px) rotate(0.2deg); }
          75%  { transform: translateX(-1px) rotate(0deg); }
          90%  { transform: translateX(1px) rotate(0deg); }
          100% { transform: translateX(0) rotate(0deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 8px 2px rgba(239,68,68,0.4); }
          50%       { box-shadow: 0 0 18px 6px rgba(239,68,68,0.7); }
        }

        .urgency-jitter {
          animation:
            urgency-jitter 0.5s ease-in-out 2s 3,       /* jitters 3× after 2s pause */
            urgency-jitter 0.5s ease-in-out 6s infinite; /* then repeats every 8s */
        }

        .urgency-jitter:hover {
          animation: none; /* stop jitter on hover — user is already engaged */
          transform: scale(1.05);
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