import {
  BookOpen,
  Brain,
  Code2,
  Eye,
  Rocket,
  Scale,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import React, { useEffect, useRef } from "react";

const PainPoints = () => {
  const items = [
    {
      icon: Brain,
      title: "Feeling Stuck",
      text: "Staring at code, feeling stuck while building projects?",
    },
    {
      icon: Code2,
      title: "Messy Codebase",
      text: "Struggling to create clean, scalable full-stack apps?",
    },
    {
      icon: Rocket,
      title: "Lack of Confidence",
      text: "Want to become confident in MERN development?",
    },
    {
      icon: Eye,
      title: "Real-World Learning",
      text: "Looking to learn real-world workflows from experts?",
    },
    {
      icon: Zap,
      title: "Build Smarter",
      text: "Want to build faster and smarter with best practices?",
    },
    {
      icon: Scale,
      title: "Frontend vs Backend",
      text: "Confused between frontend & backend balance?",
    },
    {
      icon: BookOpen,
      title: "Tutorial Overload",
      text: "Feeling overwhelmed with too many tutorials?",
    },
    {
      icon: Trophy,
      title: "Job Ready",
      text: "Want to go from beginner to job-ready developer?",
    },
    {
      icon: Target,
      title: "Crack MNC Jobs",
      text: "Ready to crack MNC jobs with your real skills?",
    },
  ];

  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (bottomRef.current) observer.observe(bottomRef.current);
    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        ${items.map((_, i) => `.card-${i} { transition-delay: ${i * 80}ms; }`).join("\n")}

        .pain-card:hover .card-inner {
          box-shadow: 0 0 24px rgba(166, 255, 93, 0.15);
        }

        .pain-card:hover .card-icon {
          animation: floatIcon 0.6s ease forwards;
        }
        @keyframes floatIcon {
          0%   { transform: scale(1)   translateY(0); }
          50%  { transform: scale(1.3) translateY(-4px); }
          100% { transform: scale(1.1) translateY(-2px); }
        }

        .glow-pulse {
          animation: glowPulse 2.5s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 8px rgba(166,255,93,0.4); }
          50%       { text-shadow: 0 0 24px rgba(166,255,93,0.9), 0 0 48px rgba(166,255,93,0.4); }
        }

        .pain-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: linear-gradient(120deg, transparent 30%, rgba(166,255,93,0.12) 50%, transparent 70%);
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .pain-card:hover::before {
          opacity: 1;
          animation: shimmer 0.8s ease forwards;
        }
        @keyframes shimmer {
          from { background-position: 200% 0; }
          to   { background-position: -200% 0; }
        }
      `}</style>

      <section className="bg-black text-white py-10 px-6 overflow-hidden">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold">
            Are You <span className="text-[#A6FF5D] glow-pulse">...</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`pain-card relative p-[1px] rounded-2xl bg-gradient-to-br from-[#A6FF5D]/20 to-white/5 fade-up card-${index} cursor-default w-full max-w-[260px]`}
            >
              <div className="card-inner flex flex-col items-center text-center gap-3 bg-[#111827] rounded-2xl p-6 transition-all duration-300 h-full min-h-[180px] justify-center">
                {/* Icon box */}
                <div className="card-icon w-14 h-14 flex items-center justify-center rounded-2xl bg-[#A6FF5D]/10 border border-[#A6FF5D]/20 text-[#A6FF5D]">
                  <item.icon size={26} strokeWidth={2} />
                </div>
                {/* Title */}
                <p className="text-white font-bold text-base leading-snug">
                  {item.title}
                </p>
                {/* Subtitle */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <p
          ref={bottomRef}
          className="text-center text-gray-400 mt-10 text-sm tracking-wide fade-up"
        >
          If you relate to any of these, this{" "}
          <span className="text-[#A6FF5D] font-semibold">MERN Masterclass</span>{" "}
          will help you become a job-ready developer.
        </p>
      </section>
    </>
  );
};

export default PainPoints;