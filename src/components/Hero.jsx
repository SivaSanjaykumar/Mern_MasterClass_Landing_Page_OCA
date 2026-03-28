import ReservedSeatBtn from "./ReservedSeatBtn";
import Timer from "./Timer";

const Hero = () => {
  return (
    <header className='bg-black text-white flex flex-col items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-20'>
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
      <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-px flex items-center justify-center rounded-full mt-15 md:mt-15">
        <button className="flex items-center gap-3 px-5 py-3 text-white rounded-full bg-gray-900/80 backdrop-blur">
          <div className="relative flex size-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#A6FF5D] opacity-75 animate-ping"></span>
            <span className="relative inline-flex size-2 rounded-full bg-[#A6FF5D]"></span>
          </div>
          <span className="text-s">Live MERN Training + Placement Support</span>
        </button>
      </div>

      {/* 🔥 Heading */}
      <h1 className="text-4xl md:text-[64px]/[82px] text-center max-w-4xl mt-6 leading-tight px-4">
        Become a <span className="text-[#A6FF5D]">MERN Stack Developer</span> &
        Crack MNC Jobs
      </h1>

      {/* 🔥 Subtext */}
      <p className="text-sm md:text-base text-gray-300 text-center max-w-lg mt-4 px-4">
        Learn MongoDB, Express, React & Node by building real-world projects
        with expert mentorship.
      </p>

      {/* 🔥 Buttons */}
      <ReservedSeatBtn/>

      {/* 🔥 Social Proof */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 text-m text-gray-300">
        <span>⭐ 4.8 Rating</span>
        <span>👨‍🎓 500+ Students</span>
        <span>💼 Placement Assistance</span>
      </div>

      <Timer />

      
      <p className="text-xl text-green-400 text-center mt-12 animate-pulse">
        ⏳ Offer Ending Soon
      </p>
    </header>
  );
};

export default Hero;
