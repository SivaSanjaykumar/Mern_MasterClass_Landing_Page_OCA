import React from "react";

const FeatureCard = ({ icon, title, desc }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative rounded-xl p-px bg-gray-900 overflow-hidden shadow-lg cursor-pointer"
    >
      {/* 🔥 Glow Effect (MATCHED TO YOUR THEME) */}
      <div
        className={`pointer-events-none blur-3xl rounded-full size-60 absolute z-0 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: position.y - 120,
          left: position.x - 120,
          background:
            "radial-gradient(circle, rgba(166,255,93,0.4) 0%, transparent 70%)",
        }}
      />

      {/* 🔥 Content */}
      <div className="relative z-10 bg-gray-900/80 p-6 h-full w-full rounded-[11px] flex flex-col items-center text-center backdrop-blur">

        {/* ICON */}
        <div className="text-4xl mb-4">{icon}</div>

        {/* TITLE */}
        <h2 className="text-lg font-semibold text-white mb-2">
          {title}
        </h2>

        {/* DESC */}
        <p className="text-sm text-gray-400">
          {desc}
        </p>

      </div>
    </div>
  );
};

export default FeatureCard;