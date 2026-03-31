import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const data = [
  {
    title: "Learning Approach",
    icon: "🗺️",
    other: "Random tutorials, no structure",
    you: "Step-by-step structured roadmap",
  },
  {
    title: "Projects",
    icon: "🚀",
    other: "Only basic demos",
    you: "Real-world production projects",
  },
  {
    title: "Support",
    icon: "🤝",
    other: "No guidance whatsoever",
    you: "Mentorship + community support",
  },
  {
    title: "Career Focus",
    icon: "💼",
    other: "Just theory, no direction",
    you: "Job-ready skills + placement prep",
  },
  {
    title: "Projects Deployed",
    icon: "🌐",
    other: "Local only, never goes live",
    you: "Deployed on Vercel & Render",
  },
  {
    title: "Certificate",
    icon: "🏆",
    other: "No proof of learning",
    you: "Verified completion certificate",
  },
];

const WhyDifferent = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      <style>{`
        @keyframes shimmerBorder {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .shimmer-card {
          background: linear-gradient(90deg,
            rgba(166,255,93,0.3) 0%,
            rgba(166,255,93,0.6) 40%,
            rgba(166,255,93,0.3) 100%
          );
          background-size: 200% auto;
          animation: shimmerBorder 3s linear infinite;
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-20px); }
        }
        .orb-float { animation: floatOrb 6s ease-in-out infinite; }
      `}</style>

      {/* Orb */}
      <div className="orb-float absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#A6FF5D]/5 blur-[100px] pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Why This <span className="text-[#A6FF5D]" style={{ textShadow: "0 0 30px rgba(166,255,93,0.5)" }}>Masterclass?</span>
        </h2>
        <p className="text-gray-500 mt-3 text-sm px-2">
          Not just another course —{" "}
          <span className="text-white font-medium">a complete career transformation.</span>
        </p>
      </motion.div>

      {/* ── DESKTOP: 3-col table ── */}
      <div className="hidden md:block max-w-5xl mx-auto">
        {/* Header row */}
        <div className="grid grid-cols-3 gap-4 mb-4 px-2">
          <div />
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-600 px-4 py-1.5 rounded-full border border-white/8 bg-white/3">
              Others
            </span>
          </div>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A6FF5D] px-4 py-1.5 rounded-full border border-[#A6FF5D]/30 bg-[#A6FF5D]/8">
              Ocean Academy
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 items-center"
            >
              {/* Title */}
              <div className="flex items-center gap-2.5 px-2">
                <span className="text-lg">{item.icon}</span>
                <span className="font-semibold text-sm text-white">{item.title}</span>
              </div>

              {/* Others */}
              <div className="bg-white/3 border border-white/8 rounded-xl p-4 flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <X size={11} className="text-red-400" />
                </div>
                <span className="text-sm text-gray-500">{item.other}</span>
              </div>

              {/* You */}
              <div className="relative p-[1px] rounded-xl shimmer-card">
                <div className="relative bg-[#0d0d0d] rounded-xl p-4 flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#A6FF5D]/15 border border-[#A6FF5D]/40 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-[#A6FF5D]" />
                  </div>
                  <span className="text-sm text-white font-medium">{item.you}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MOBILE: stacked cards ── */}
      <div className="md:hidden space-y-4 max-w-sm mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
          >
            {/* Card title */}
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className="text-base">{item.icon}</span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">{item.title}</span>
            </div>

            {/* Split card */}
            <div className="rounded-2xl overflow-hidden border border-white/8"
              style={{ background: "#0a0a0a" }}
            >
              {/* Others row */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/6">
                <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X size={12} className="text-red-400" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-600 mb-0.5">Others</p>
                  <p className="text-sm text-gray-500">{item.other}</p>
                </div>
              </div>

              {/* You row — highlighted */}
              <div
                className="flex items-center gap-3 px-4 py-3.5 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(166,255,93,0.07) 0%, rgba(166,255,93,0.02) 100%)" }}
              >
                {/* left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full bg-[#A6FF5D]" />
                <div className="w-6 h-6 rounded-full bg-[#A6FF5D]/15 border border-[#A6FF5D]/40 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-[#A6FF5D]" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-[#A6FF5D]/70 mb-0.5">Ocean Academy</p>
                  <p className="text-sm text-white font-medium">{item.you}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom statement */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mt-12 sm:mt-16"
      >
        <p className="text-gray-500 text-sm">
          This isn't just learning —{" "}
          <span className="text-[#A6FF5D] font-semibold">a career transformation system.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default WhyDifferent;