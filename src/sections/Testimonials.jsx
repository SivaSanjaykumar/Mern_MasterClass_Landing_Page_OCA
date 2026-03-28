const Testimonials = () => {
  const cardsData = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Rahul Kumar",
      role: "Frontend Developer",
      text: "This masterclass helped me build real projects and gain confidence in MERN stack.",
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Priya Sharma",
      role: "Full Stack Developer",
      text: "The structured roadmap made learning so easy. I finally understand backend properly.",
    },
    {
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
      name: "Arjun Verma",
      role: "Software Engineer",
      text: "I built production-level apps and cracked my first developer role.Thanks For my Stepping Path.",
    },
    {
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200",
      name: "Sneha Reddy",
      role: "MERN Developer",
      text: "Best investment for my career. Learned everything from scratch to deployment.",
    },
  ];

  const Card = ({ card }) => (
    <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#A6FF5D]/30 to-white/10 w-72 shrink-0">

      {/* Glow */}
      <div className="absolute inset-0 bg-[#A6FF5D]/10 blur-2xl rounded-xl"></div>

      <div className="relative bg-gray-900 rounded-xl p-5 border border-[#A6FF5D]/20 hover:border-[#A6FF5D]/50 transition duration-300">

        {/* Top */}
        <div className="flex items-center gap-3 mb-4">
          <img
            className="w-11 h-11 rounded-full object-cover"
            src={card.image}
            alt="user"
          />
          <div>
            <p className="text-white text-sm font-semibold">{card.name}</p>
            <span className="text-xs text-gray-400">{card.role}</span>
          </div>
        </div>

        {/* Text */}
        <p className="text-sm text-gray-300 leading-relaxed">
          {card.text}
        </p>

      </div>
    </div>
  );

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">

      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          What Our <span className="text-[#A6FF5D]">Students Say</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm">
          Real results from real learners 🚀
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

        .reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* 🔥 ROW 1 */}
      <div className="relative max-w-6xl mx-auto overflow-hidden">

        {/* Gradient Fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-black to-transparent"></div>

        <div className="marquee flex gap-6 min-w-[200%] py-4">
          {[...cardsData, ...cardsData].map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>

      {/* 🔥 ROW 2 */}
      <div className="relative max-w-6xl mx-auto overflow-hidden mt-6">

        <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-black to-transparent"></div>

        <div className="marquee reverse flex gap-6 min-w-[200%] py-4">
          {[...cardsData, ...cardsData].map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;