import { useState } from "react";
import { motion } from "motion/react";
import { Video, Clock, Calendar, Gift, Zap, Users } from "lucide-react";
import ReservedSeatBtn from "../components/ReservedSeatBtn";
import RegisterForm from "./RegisterForm";
import DecryptedText from "@/animations/DecryptedText";

const details = [
  {
    icon: <Video size={20} className="text-[#A6FF5D]" />,
    title: "Live Online",
    desc: "Interactive Zoom session",
  },
  {
    icon: <Clock size={20} className="text-[#A6FF5D]" />,
    title: "8 Hours Intensive",
    desc: "Deep dive full-stack training",
  },
  {
    icon: <Calendar size={20} className="text-[#A6FF5D]" />,
    title: "15th Mar 2026",
    desc: "Mark your calendar",
  },
  {
    icon: <Clock size={20} className="text-[#A6FF5D]" />,
    title: "10 AM – 6 PM",
    desc: "Full-day learning experience",
  },
];

const perks = [
  { icon: <Zap size={14} />, text: "Lifetime recording access" },
  { icon: <Users size={14} />, text: "Private community access" },
  { icon: <Gift size={14} />, text: "Bonus resources worth ₹4500" },
];

const MasterclassDetails = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <style>{`
        .perspective { perspective: 1200px; }
        .flip-container { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }

        /* Both faces are absolute — the wrapper needs an explicit height.
           We use a CSS custom property set by JS-free trick: just use min-h */
        .flip-wrapper {
          position: relative;
          /* height is driven by the taller of the two faces via this padding trick */
        }

        @keyframes shimmerSlide {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(105deg, #A6FF5D 30%, #ffffff 50%, #A6FF5D 70%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerSlide 3s linear infinite;
        }

        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(166,255,93,0); }
          50%       { box-shadow: 0 0 0 8px rgba(166,255,93,0.08); }
        }
        .pulse-ring { animation: softPulse 3s ease-in-out infinite; }

        @keyframes badgePing {
          0%   { transform: scale(1); opacity: 1; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .badge-ping::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: rgba(166,255,93,0.35);
          animation: badgePing 1.8s ease-out infinite;
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .gift-float { animation: floatY 3s ease-in-out infinite; }
      `}</style>

      <section id="masterclass-details" className="bg-black text-white py-10 px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">
            Masterclass <span className="text-[#A6FF5D]">Details</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Everything you need to know before joining 🚀
          </p>
        </div>

        {/* Main Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">

          {/* LEFT */}
          <div className="relative flex flex-col justify-center">
            <div className="absolute left-4 top-0 h-full w-[2px] bg-[#A6FF5D]/20" />
            <div className="space-y-10">
              {details.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#A6FF5D]/10 border border-[#A6FF5D]/40">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Flip Card — height matches whichever face is taller */}
          <div className="perspective">
            <div
              className={`flip-container relative transition-transform duration-700 ${
                flipped ? "[transform:rotateY(-180deg)]" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* ── FRONT ── */}
              <div
                className="backface-hidden w-full"
                style={{ visibility: flipped ? "hidden" : "visible" }}
              >
                <div className="relative p-[1px] rounded-2xl h-full"
                  style={{ background: "linear-gradient(135deg, rgba(166,255,93,0.3) 0%, rgba(255,255,255,0.06) 100%)" }}>
                  <div className="absolute inset-0 bg-[#A6FF5D]/8 blur-3xl rounded-2xl" />

                  <div className="relative bg-[#0d0d0d] rounded-2xl p-8 border border-[#A6FF5D]/20 flex flex-col items-center text-center gap-5">

                    {/* Live badge */}
                    <div className="relative badge-ping flex items-center gap-2 bg-[#A6FF5D]/10 border border-[#A6FF5D]/25 rounded-full px-4 py-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#A6FF5D]" />
                      <span className="text-[#A6FF5D] text-xs font-semibold tracking-widest uppercase">Limited Seats</span>
                    </div>

                    {/* Icon */}
                    <div className="gift-float w-16 h-16 flex items-center justify-center bg-[#A6FF5D]/10 rounded-2xl border border-[#A6FF5D]/20 pulse-ring">
                      <Gift className="text-[#A6FF5D]" size={30} />
                    </div>

                    {/* Title */}
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Early Bird Offer</p>
                      <div className="flex items-baseline justify-center gap-3">
                        <span className="text-gray-600 line-through text-lg">₹1999</span>
                        <span className="shimmer-text text-5xl font-bold">FREE</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-1">for first 50 registrations only</p>
                    </div>

                    {/* Perks list */}
                    <ul className="w-full space-y-2.5 text-left">
                      {perks.map((p, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <span className="w-6 h-6 flex-shrink-0 rounded-full bg-[#A6FF5D]/12 border border-[#A6FF5D]/25 flex items-center justify-center text-[#A6FF5D]">
                            {p.icon}
                          </span>
                          {p.text}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <ReservedSeatBtn onClick={() => setFlipped(true)} label="Register here — It's Free" />

                    <p className="text-xs text-red-400/80 animate-pulse">
                      ⚠️ Only a few spots left
                    </p>
                  </div>
                </div>
              </div>

              {/* ── BACK ── */}
              <div
                className="backface-hidden w-full absolute top-0 left-0 [transform:rotateY(-180deg)]"
                style={{ visibility: flipped ? "visible" : "hidden" }}
              >
                <RegisterForm setFlipped={setFlipped} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MasterclassDetails;