import React from "react";
import showcaseImg from "../assets/showcase.png"
import ReservedSeatBtn from "../components/ReservedSeatBtn";

const ShowCase = () => {
  return (
    <section className="bg-black text-white py-24 px-6 text-center relative overflow-hidden">
      {/* 🔥 Heading */}
      <p className="text-sm text-gray-400 mb-2">Introducing...</p>

      <h2 className="text-3xl md:text-5xl font-bold mb-12">
        MERN Stack <span className="text-[#A6FF5D]">Masterclass</span>
      </h2>

      {/* 🔥 Glow Gradient Line (THEME MATCH) */}
      <div className="absolute left-0 right-0 top-[55%] h-24 bg-gradient-to-r from-transparent via-[#A6FF5D]/30 to-transparent blur-2xl z-0"></div>

      {/* 🔥 Center Image */}
      <div className="relative z-10 flex justify-center">
        <img
          src={showcaseImg}
          alt="Course Preview"
          className="rounded-xl shadow-2xl max-w-5xl w-full"
        />
      </div>
      <ReservedSeatBtn/>

      {/* 🔥 Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#A6FF5D]/10 to-transparent blur-2xl">
      
      </div>
    </section>
  );
};

export default ShowCase;
