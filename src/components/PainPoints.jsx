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
      text: "Staring at code, feeling stuck while building projects?",
    },
    {
      icon: Code2,
      text: "Struggling to create clean, scalable full-stack apps?",
    },
    { icon: Rocket, text: "Want to become confident in MERN development?" },
    { icon: Eye, text: "Looking to learn real-world workflows from experts?" },
    {
      icon: Zap,
      text: "Want to build faster and smarter with best practices?",
    },
    { icon: Scale, text: "Confused between frontend & backend balance?" },
    { icon: BookOpen, text: "Feeling overwhelmed with too many tutorials?" },
    { icon: Trophy, text: "Want to go from beginner to job-ready developer?" },
    { icon: Target, text: "Ready to crack MNC jobs with your real skills?" },
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
      { threshold: 0.15 },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (bottomRef.current) observer.observe(bottomRef.current);
    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* Base hidden state */
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Staggered card delays */
        ${items.map((_, i) => `.card-${i} { transition-delay: ${i * 80}ms; }`).join("\n")}

        /* Glowing border on hover */
        .pain-card:hover .card-inner {
          background: #111827;
          box-shadow: 0 0 20px rgba(166, 255, 93, 0.15);
        }

        /* Floating icon animation */
        .pain-card:hover .card-icon {
          animation: floatIcon 0.6s ease forwards;
        }
        @keyframes floatIcon {
          0%   { transform: scale(1)   translateY(0); }
          50%  { transform: scale(1.3) translateY(-4px); }
          100% { transform: scale(1.1) translateY(-2px); }
        }

        /* Pulse glow on the heading accent */
        .glow-pulse {
          animation: glowPulse 2.5s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 8px rgba(166,255,93,0.4); }
          50%       { text-shadow: 0 0 24px rgba(166,255,93,0.9), 0 0 48px rgba(166,255,93,0.4); }
        }

        /* Shimmer sweep on card border */
        .pain-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          background: linear-gradient(120deg, transparent 30%, rgba(166,255,93,0.15) 50%, transparent 70%);
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.3s;
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
          <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">
            Is This You?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Are You <span className="text-[#A6FF5D] glow-pulse">...</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`pain-card relative p-[1px] rounded-xl bg-gradient-to-r from-[#A6FF5D]/30 to-white/10 fade-up card-${index} cursor-default`}
            >
              <div className="card-inner flex items-start gap-4 bg-gray-900 rounded-xl p-5 transition-all duration-300">
                <div className="card-icon p-2 rounded-lg bg-[#A6FF5D]/10 text-[#A6FF5D]">
                  <item.icon size={20} strokeWidth={2.2} />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
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
