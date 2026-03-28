import { useState } from "react";

const FlipWrapper = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-6xl h-[600px] perspective">
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "-rotate-y-180" : ""
          }`}
        >
          {/* FRONT */}
          <div className="absolute w-full h-full backface-hidden">
            {front({ setFlipped })}
          </div>

          {/* BACK */}
          <div className="absolute w-full h-full [transform:rotateY(-180deg)] backface-hidden">
            {back({ setFlipped })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipWrapper;