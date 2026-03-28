import BorderGlow from "../components/BorderGlow";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 🔥 MAIN GLOW CARD */}
        <BorderGlow
          className="p-10 md:p-14"
          glowColor="120 100 70"
          borderRadius={28}
          glowRadius={50}
          glowIntensity={1.2}
          animated={true}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* ================= LEFT ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Glow behind logo */}
                <div className="absolute w-60 h-60 bg-[#A6FF5D]/20 blur-3xl rounded-full"></div>

                <div className="relative border border-[#A6FF5D]/20 rounded-2xl p-10 bg-black/50 backdrop-blur-xl">
                  {/* <div className="absolute w-64 h-64 bg-[#A6FF5D]/20 blur-3xl rounded-full"></div> */}

                  <img
                    src="https://masterclass.oceanacademy.in/assets/OA_Logo-BtbyyUkV.svg"
                    alt="OA Logo"
                    className="pulse-logo h-28 md:h-32 lg:h-40 w-auto opacity-90"
                  />
                </div>
              </div>
            </motion.div>

            {/* ================= RIGHT ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                About <span className="text-[#A6FF5D]">Ocean Academy</span>
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We bridge the gap between college learning and real-world
                industry skills. Our mission is to make you job-ready with
                hands-on experience and mentorship.
              </p>

              {/* 🔥 HIGHLIGHTS */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Industry-aligned curriculum",
                  "Real-world projects",
                  "Expert mentors",
                  "Placement guidance",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <CheckCircle size={16} className="text-[#A6FF5D]" />
                    {item}
                  </div>
                ))}
              </div>

              {/* 🔥 STATS */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1000+", label: "Students Trained" },
                  { value: "10+", label: "Years Experience" },
                  { value: "95%", label: "Placement Rate" },
                  { value: "50+", label: "Projects Built" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-[#A6FF5D]/20 bg-black/50 text-center hover:border-[#A6FF5D]/40 transition"
                  >
                    <h3 className="text-xl font-bold text-[#A6FF5D]">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
};

export default AboutSection;
