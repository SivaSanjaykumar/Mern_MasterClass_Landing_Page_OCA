import React from 'react'

const PainPoints = () => {
  const items = [
    {
      icon: "😵‍💫",
      text: "Staring at code, feeling stuck while building projects?"
    },
    {
      icon: "📐",
      text: "Struggling to create clean, scalable full-stack apps?"
    },
    {
      icon: "💪",
      text: "Want to become confident in MERN development?"
    },
    {
      icon: "👀",
      text: "Looking to learn real-world workflows from experts?"
    },
    {
      icon: "⚡",
      text: "Want to build faster and smarter with best practices?"
    },
    {
      icon: "⚖️",
      text: "Confused between frontend & backend balance?"
    },
    {
      icon: "😫",
      text: "Feeling overwhelmed with too many tutorials?"
    },
    {
      icon: "🏆",
      text: "Want to go from beginner to job-ready developer?"
    },
    {
      icon: "🚀",
      text: "Ready to crack MNC jobs with real skills?"
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6">

      {/* 🔥 Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 mb-2">
          Is This You?
        </p>

        <h2 className="text-3xl md:text-5xl font-bold">
          Are You{" "}
          <span className="text-[#A6FF5D]">...</span>
        </h2>
      </div>

      {/* 🔥 Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {items.map((item, index) => (
          <div
            key={index}
            className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#A6FF5D]/30 to-white/10"
          >
            <div className="flex items-start gap-4 bg-gray-900 rounded-xl p-5 hover:scale-[1.03] transition duration-300">

              <span className="text-2xl">{item.icon}</span>

              <p className="text-sm text-gray-300 leading-relaxed">
                {item.text}
              </p>

            </div>
          </div>
        ))}

      </div>

      {/* 🔥 Bottom Line */}
      <p className="text-center text-gray-400 mt-12 text-sm">
        If you relate to any of these, this{" "}
        <span className="text-[#A6FF5D] font-medium">
          MERN Masterclass
        </span>{" "}
        is for you 🚀
      </p>

    </section>
  );
};



export default PainPoints
