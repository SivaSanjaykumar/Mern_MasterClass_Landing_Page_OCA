import { testimonialsData } from "@/data/testimonialsData";
import { Star } from "lucide-react";
import { useRef } from "react";

const Testimonials = () => {
  const rowRef = useRef(null);

  const Card = ({ card }) => (
    <div
      className="relative p-[1px] rounded-2xl shrink-0"
      style={{
        width: "clamp(260px, 80vw, 300px)",
        background: "linear-gradient(135deg, rgba(166,255,93,0.25) 0%, rgba(255,255,255,0.05) 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[#A6FF5D]/6 blur-xl rounded-2xl pointer-events-none" />

      <div className="relative bg-[#0d0d0d] rounded-2xl p-5 border border-[#A6FF5D]/15
                      hover:border-[#A6FF5D]/40 transition-colors duration-300 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <img
            src={card.image}
            alt={card.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-[#A6FF5D]/20 shrink-0"
          />
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold truncate">{card.name}</p>
            <span className="text-xs text-gray-500 truncate block">{card.role}</span>
          </div>
        </div>

        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className="text-[#e2ff52] fill-[#e2ff52]" />
          ))}
        </div>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
          {card.text}
        </p>
      </div>
    </div>
  );

  const pause  = () => { if (rowRef.current) rowRef.current.style.animationPlayState = "paused"; };
  const resume = () => { if (rowRef.current) rowRef.current.style.animationPlayState = "running"; };

  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee { animation: marquee 35s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>

      <section className="bg-black text-white py-12 sm:py-16 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            What Our <span className="text-[#A6FF5D]">Students Say</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto leading-relaxed tracking-wide">
            Real results from learners who have successfully transitioned into full-stack developers.
          </p>
        </div>

        {/* Single marquee row */}
        <div className="relative overflow-hidden max-w-[80%] mx-auto">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 h-full w-16 sm:w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #000, transparent)" }} />
          <div className="absolute right-0 top-0 h-full w-16 sm:w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #000, transparent)" }} />

          <div
            ref={rowRef}
            className="marquee flex gap-4 sm:gap-6 py-3"
            style={{ width: "max-content" }}
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            {[...testimonialsData, ...testimonialsData, ...testimonialsData].map((card, i) => (
              <Card key={i} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;