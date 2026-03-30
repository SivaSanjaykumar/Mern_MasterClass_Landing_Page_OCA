import { testimonialsData } from "@/data/testimonialsData";
import { Star } from "lucide-react";
const Testimonials = () => {
  const Card = ({ card }) => (
    <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#A6FF5D]/30 to-white/10 w-[20%] shrink-0">
      {/* Glow */}
      <div className="absolute inset-0 bg-[#A6FF5D]/10 blur-2xl rounded-xl"></div>

      <div className="relative bg-gray-900 rounded-xl h-[220px] p-5 border border-[#A6FF5D]/20 hover:border-[#A6FF5D]/50 transition duration-300">
        {/* Top */}
        <div className="flex items-center gap-3 mb-4">
          <img
            className="w-11 h-11 rounded-full object-cover "
            src={card.image}
            alt="user"
          />
          <div>
            <p className="text-white text-sm font-semibold">{card.name}</p>
            <span className="text-xs text-gray-400">{card.role}</span>
          </div>
        </div>

        {/* Text */}
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
          {card.text}
        </p>
        <div className="flex items-center gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-[#e2ff52] fill-[#e6f51c]" />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-black text-white py-10 px-6 overflow-hidden">
      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          What Our <span className="text-[#A6FF5D]">Students Say</span>
        </h2>
        <p className="text-gray-400 text-sm text-center tracking-wide leading-relaxed">
          Real results from learners who have successfully transitioned into
          full-stack developers.
        </p>
      </div>

      {/* 🔥 ANIMATION STYLES */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          animation: marqueeScroll 30s linear infinite;
        }


      `}</style>

      {/* 🔥 ROW 1 */}
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Gradient Fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-black to-transparent"></div>

        <div className="marquee flex gap-8 min-w-[200%] py-4">
          {[...testimonialsData, ...testimonialsData].map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
