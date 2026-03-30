import { CheckCircle } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

// Animated counter hook
const useCounter = (target, inView) => {
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) => {
    if (target.includes("+")) return Math.floor(v) + "+";
    if (target.includes("%")) return Math.floor(v) + "%";
    return Math.floor(v);
  });

  useEffect(() => {
    if (inView) count.set(parseInt(target));
  }, [inView]);

  return display;
};

const StatCard = ({ value, label, delay, inView }) => {
  const num = useCounter(value, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="group relative p-5 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm
                 hover:border-[#A6FF5D]/35 hover:bg-[#A6FF5D]/4 transition-all duration-500 overflow-hidden"
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#A6FF5D]/40 rounded-tl-2xl
                      group-hover:border-[#A6FF5D]/70 transition-colors duration-500"
      />
      <motion.h3 className="text-3xl font-black text-[#A6FF5D] tracking-tight mb-1">
        {num}
      </motion.h3>
      <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
        {label}
      </p>
    </motion.div>
  );
};

const highlights = [
  "Industry-aligned curriculum",
  "Real-world projects",
  "Expert mentors",
  "Placement guidance",
];

const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "10+", label: "Years Experience" },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        @keyframes logoShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .logo-shimmer-border {
          background: linear-gradient(105deg,
            rgba(166,255,93,0.15) 0%,
            rgba(166,255,93,0.4)  40%,
            rgba(255,255,255,0.15) 50%,
            rgba(166,255,93,0.4)  60%,
            rgba(166,255,93,0.15) 100%
          );
          background-size: 250% auto;
          animation: logoShimmer 4s linear infinite;
        }

        @keyframes orbitRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .orbit-ring {
          animation: orbitRing 12s linear infinite;
        }

        @keyframes breatheGlow {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50%       { opacity: 0.28; transform: scale(1.1); }
        }
        .glow-breathe { animation: breatheGlow 5s ease-in-out infinite; }

        @keyframes checkSlide {
          from { transform: scale(0) rotate(-90deg); opacity: 0; }
          to   { transform: scale(1) rotate(0deg);   opacity: 1; }
        }
        .check-pop { animation: checkSlide 0.4s cubic-bezier(.23,1,.32,1) both; }

        .about-divider {
          background: linear-gradient(to bottom, transparent, #A6FF5D, transparent);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-black text-white pt-20 pb-10 px-6 relative overflow-hidden"
      >
        {/* Background ambient orbs */}
        <div className="glow-breathe absolute -top-24 left-1/4 w-[500px] h-[500px] rounded-full bg-[#A6FF5D]/8 blur-[120px] pointer-events-none" />
        <div
          className="glow-breathe absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#A6FF5D]/5 blur-[100px] pointer-events-none"
          style={{ animationDelay: "2.5s" }}
        />

        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center mb-14"
          >
            <span className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-gray-500 border border-white/10 rounded-full px-5 py-2 bg-white/3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF5D]" />
              Who We Are
            </span>
          </motion.div>

          {/* Main card */}
          <div
            className="relative p-[1px] rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(166,255,93,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(166,255,93,0.1) 100%)",
            }}
          >
            <div className="relative bg-[#080808] rounded-3xl overflow-hidden">
              {/* Subtle grid texture */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(166,255,93,1) 1px, transparent 1px), linear-gradient(90deg, rgba(166,255,93,1) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              <div className="relative grid md:grid-cols-[1fr_1px_1fr] gap-0 items-stretch">
                {/* ── LEFT — Logo ── */}
                <motion.div
                  initial={{ opacity: 0, x: -50, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
                  className="flex flex-col items-center justify-center p-12 md:p-16 gap-8"
                >
                  {/* Logo frame with orbit */}
                  <div className="relative flex items-center justify-center">
                    {/* Orbit ring */}
                    <div className="orbit-ring absolute w-52 h-52 rounded-full border border-dashed border-[#A6FF5D]/15" />
                    <div
                      className="orbit-ring absolute w-40 h-40 rounded-full border border-[#A6FF5D]/10"
                      style={{
                        animationDirection: "reverse",
                        animationDuration: "18s",
                      }}
                    />

                    {/* Glow */}
                    <div className="glow-breathe absolute w-36 h-36 bg-[#A6FF5D]/15 blur-2xl rounded-full" />

                    {/* Logo card */}
                    <div className="relative z-10 logo-shimmer-border p-[1.5px] rounded-2xl">
                      <div className="bg-[#0a0a0a] rounded-[14px] p-6 backdrop-blur-xl">
                        <img
                          src="https://masterclass.oceanacademy.in/assets/OA_Logo-BtbyyUkV.svg"
                          alt="Ocean Academy"
                          className="h-24 md:h-28 w-auto opacity-95"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tagline below logo */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-center text-xs text-gray-600 uppercase tracking-[0.18em] max-w-[180px]"
                  >
                    Bridging education & industry
                  </motion.p>
                </motion.div>

                {/* ── DIVIDER ── */}
                <div className="hidden md:block about-divider w-[1px] my-12 opacity-30" />

                {/* ── RIGHT — Content ── */}
                <motion.div
                  initial={{ opacity: 0, x: 50, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.1,
                    ease: [0.23, 1, 0.32, 1],
                    delay: 0.1,
                  }}
                  className="flex flex-col justify-center p-10 md:p-14 gap-8"
                >
                  {/* Heading */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4 tracking-tight">
                      About{" "}
                      <span
                        className="text-[#A6FF5D]"
                        style={{ textShadow: "0 0 40px rgba(166,255,93,0.4)" }}
                      >
                        Ocean Academy
                      </span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-[1.9] max-w-sm">
                      We bridge the gap between college learning and real-world
                      industry skills — making you job-ready with hands-on
                      experience and mentorship.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3">
                    {highlights.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.2 + i * 0.1,
                          duration: 0.7,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                        className="flex items-center gap-2.5 text-xs text-gray-300 group"
                      >
                        <CheckCircle
                          size={15}
                          className="text-[#A6FF5D] flex-shrink-0 check-pop group-hover:scale-110 transition-transform duration-300"
                          style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                        />
                        <span className="group-hover:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    {stats.map((stat, i) => (
                      <StatCard
                        key={i}
                        value={stat.value}
                        label={stat.label}
                        delay={0.4 + i * 0.15}
                        inView={inView}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
