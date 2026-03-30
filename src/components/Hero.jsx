import { Briefcase, Clock, Star, Users } from "lucide-react";
import ReservedSeatBtn from "./ReservedSeatBtn";
import Timer from "./Timer";
import BlurText from "@/animations/BlurText";
const Hero = () => {
  return (
    <header className='bg-black text-white flex flex-col items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-5'>
      {/* 🔥 TOP BAR (simple) */}
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-4">
        <img
          src="https://oceanacademy.in/_next/static/media/oa.9c315ba3.png"
          alt="Ocean Academy"
          className="h-12 md:h-16 lg:h-20 object-contain"
        />
        <div className="relative inline-block">
          {/* 🔥 Glow Background */}
          <div className="absolute inset-0 rounded-full blur-lg bg-white opacity-20 animate-glow"></div>

          {/* 🔥 Button */}
          <button className="relative z-10 bg-[#A6FF5D] text-gray-900 px-6 py-3 rounded-full text-m font-semibold animate-shake-soft hover:scale-105 transition">
            Enroll Now
          </button>
        </div>
      </div>

      {/* 🔥 Badge */}
      <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-[1px] flex items-center justify-center rounded-full">
        <div className="flex items-center gap-3 px-5 py-2.5 text-white rounded-full bg-gray-900/80 backdrop-blur">
          <div className="relative flex size-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#A6FF5D] opacity-75 animate-ping"></span>
            <span className="relative inline-flex size-2 rounded-full bg-[#A6FF5D]"></span>
          </div>

          <span className="text-xs font-medium tracking-wide">
            Live MERN Training + Placement Support
          </span>
        </div>
      </div>

      {/* 🔥 Heading */}
      <div className="text-4xl md:text-[64px] font-bold text-center max-w-4xl mt-6 leading-tight px-4 flex flex-wrap justify-center gap-x-4">
        <BlurText
          text="Become a"
          delay={120}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
        />
        <BlurText
          text="MERN"
          delay={120}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
          className="text-[#A6FF5D]" // 👈 green only for MERN
        />
        <BlurText
          text="Stack Developer & Crack"
          delay={120}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
        />
        <BlurText
          text="MNC Jobs"
          delay={120}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
        />
      </div>

      {/* 🔥 Subtext */}
      <BlurText
        text="Learn MongoDB, Express, React & Node by building real-world projects with expert mentorship."
        delay={80}
        animateBy="words"
        direction="top"
        stepDuration={0.3}
        className="text-sm md:text-base text-gray-300 text-center max-w-2xl mx-auto mt-4 px-4 leading-relaxed flex flex-wrap justify-center"
      />

      {/* 🔥 Buttons */}
      <ReservedSeatBtn />
      {/* 🔥 Social Proof */}
      <div className="flex flex-wrap justify-center gap-8 mt-6 text-sm md:text-base text-gray-300">
        <div className="flex items-center gap-2">
          <Star className="text-[#A6FF5D]" size={18} strokeWidth={2.5} />
          <span className="font-medium">4.8 Rating</span>
        </div>

        <div className="flex items-center gap-2">
          <Users className="text-[#A6FF5D]" size={18} strokeWidth={2.5} />
          <span className="font-medium">1000+ Students</span>
        </div>

        <div className="flex items-center gap-2">
          <Briefcase className="text-[#A6FF5D]" size={18} strokeWidth={2.5} />
          <span className="font-medium">Placement Assistance</span>
        </div>
      </div>

      <Timer />

      <div className="flex justify-center mt-8">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full 
bg-red-500/10 border border-red-500/20 backdrop-blur 
animate-[pulse_2s_ease-in-out_infinite]"
        >
          <Clock className="text-red-400" size={16} />

          <span className="text-sm font-medium text-red-400 tracking-wide">
            Offer Ending Soon
          </span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
