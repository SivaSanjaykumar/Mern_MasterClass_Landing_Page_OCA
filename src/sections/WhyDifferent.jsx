import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const data = [
  {
    title: "Learning Approach",
    other: "Random tutorials, no structure",
    you: "Step-by-step structured roadmap",
  },
  {
    title: "Projects",
    other: "Only basic demos",
    you: "Real-world production projects",
  },
  {
    title: "Support",
    other: "No guidance",
    you: "Mentorship + community support",
  },
  {
    title: "Career Focus",
    other: "Just theory",
    you: "Job-ready skills + placement prep",
  },
];

const WhyDifferent = () => {
  return (
    <section className="bg-black text-white py-28 px-6">

      {/* 🔥 Heading */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why This <span className="text-[#A6FF5D]">Masterclass?</span>
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          Not just another course — this is a complete transformation 🚀
        </p>
      </div>

      {/* 🔥 Comparison Rows */}
      <div className="max-w-5xl mx-auto space-y-8">

        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative grid md:grid-cols-3 gap-4 items-center"
          >

            {/* 🔥 CENTER TITLE */}
            <div className="text-center md:text-left font-semibold text-white">
              {item.title}
            </div>

            {/* ❌ OTHER */}
            <div className="relative p-[1px] rounded-xl bg-white/5">

              <div className="bg-gray-900/60 rounded-xl p-4 flex items-center gap-3 text-gray-400">

                <X size={18} className="text-red-400" />
                <span className="text-sm">{item.other}</span>

              </div>

            </div>

            {/* ✅ YOU */}
            <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#A6FF5D]/40 to-white/10">

              {/* 🔥 Glow */}
              <div className="absolute inset-0 bg-[#A6FF5D]/10 blur-2xl rounded-xl"></div>

              <div className="relative bg-gray-900 rounded-xl p-4 flex items-center gap-3">

                <Check size={18} className="text-[#A6FF5D]" />
                <span className="text-sm text-white">{item.you}</span>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* 🔥 Bottom Statement */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-gray-400 mt-16 text-sm"
      >
        This isn’t just learning — it’s a{" "}
        <span className="text-[#A6FF5D] font-semibold">
          career transformation system
        </span>
      </motion.p>

    </section>
  );
};

export default WhyDifferent;