import { Briefcase, Clock, Star, Users, Menu, X } from "lucide-react";
import ReservedSeatBtn from "./ReservedSeatBtn";
import Timer from "./Timer";
import BlurText from "@/animations/BlurText";
import TerminalBackground from "@/animations/TerminalBackground";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "https://oceanacademy.in/" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Bonuses", href: "#bonuses" },
  { label: "Testimonials", href: "#testimonials" },
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    // ✅ If external link → allow default navigation
    if (href.startsWith("http")) return;

    // ✅ Only prevent for internal scroll links
    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const yOffset = -80;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className='relative bg-black text-white flex flex-col items-center overflow-x-hidden bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-6'>
      <TerminalBackground />

      {/* ── NAVBAR ── */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-12 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src="https://oceanacademy.in/_next/static/media/oa.9c315ba3.png"
            alt="Ocean Academy"
            className="h-10 sm:h-12 md:h-14 object-contain"
          />

          {/* Desktop Nav (RIGHT SIDE) */}
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                {link.label}

                {/* underline */}
                <span
                  className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-0 h-[1.5px]
                           bg-[#A6FF5D] group-hover:w-full
                           transition-all duration-300 rounded-full"
                />
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center
                 rounded-full border border-white/10 bg-white/5 text-white
                 hover:border-[#A6FF5D]/40 transition-colors duration-200"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500
    ${menuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
        >
          <div className="rounded-2xl border border-white/8 bg-black/80 backdrop-blur-xl p-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setMenuOpen(false);
                }}
                className="px-4 py-3 rounded-xl text-sm text-gray-400
                     hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="relative z-10 rainbow bg-white/15 overflow-hidden p-[1px] flex items-center justify-center rounded-full mx-4 mt-2">
        <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 text-white rounded-full bg-gray-900/80 backdrop-blur text-[11px] sm:text-xs md:text-sm">
          <div className="relative flex size-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#A6FF5D] opacity-75 animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-[#A6FF5D]" />
          </div>
          <span className="font-medium tracking-wide text-center">
            Live MERN Training + Placement Support
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-2xl sm:text-3xl md:text-5xl lg:text-[64px] font-bold text-center max-w-4xl mt-6 leading-snug px-4 flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 md:gap-x-4">
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
          className="text-[#A6FF5D]"
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

      {/* Subtext */}
      <div className="relative z-10 text-xs sm:text-sm md:text-base text-gray-300 text-center max-w-4xl mt-4 leading-snug px-4 flex flex-wrap justify-center gap-x-2 sm:gap-x-3 md:gap-x-4">
        <BlurText
          text="Build real-world projects,"
          delay={60}
          animateBy="words"
          direction="top"
          stepDuration={0.25}
        />
        <BlurText
          text="gain hands-on experience,"
          delay={60}
          animateBy="words"
          direction="top"
          stepDuration={0.25}
        />
        <BlurText
          text="and confidently step into your career as a MERN developer."
          delay={60}
          animateBy="words"
          direction="top"
          stepDuration={0.25}
        />
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-2 sm:mt-6 items-center">
        <ReservedSeatBtn />
      </div>

      {/* Social Proof */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 text-xs sm:text-sm md:text-base text-gray-300 px-4 text-center">
        <div className="flex items-center gap-2">
          <Star className="text-[#A6FF5D]" size={16} />
          <span className="font-medium">4.8 Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="text-[#A6FF5D]" size={16} />
          <span className="font-medium">1000+ Students</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="text-[#A6FF5D]" size={16} />
          <span className="font-medium">Placement Assistance</span>
        </div>
      </div>

      {/* Timer */}
      <div className="relative z-10 mt-6 w-full flex justify-center px-4">
        <Timer />
      </div>

      {/* Offer */}
      <div className="relative z-10 flex justify-center mt-6 sm:mt-8 px-4 mb-2">
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur animate-[pulse_2s_ease-in-out_infinite] text-xs sm:text-sm">
          <Clock className="text-red-400" size={14} />
          <span className="font-medium text-red-400 tracking-wide text-center">
            Offer Ending Soon
          </span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
