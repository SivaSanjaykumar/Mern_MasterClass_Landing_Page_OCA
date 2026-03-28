import { useState } from "react";
import { motion } from "motion/react";
import { Video, Clock, Calendar, Gift } from "lucide-react";
import ReservedSeatBtn from "../components/ReservedSeatBtn";
import Timer from "../components/Timer";
import RegisterForm from "./RegisterForm"; // adjust path if needed

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

const MasterclassDetails = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="masterclass-details" className="bg-black text-white py-28 px-6">

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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-[#A6FF5D]/20"></div>

          <div className="space-y-10">
            {details.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-6"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#A6FF5D]/10 border border-[#A6FF5D]/40">
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

        {/* RIGHT — Flip Card */}
        <div className="relative w-full h-[420px] perspective">
          <div
            className={`flip-container relative w-full h-full transition-transform duration-700 ${
              flipped ? "[transform:rotateY(-180deg)]" : ""
            }`}
          >

            {/* FRONT */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-[#A6FF5D]/40 to-white/10">
                <div className="absolute inset-0 bg-[#A6FF5D]/10 blur-3xl rounded-2xl"></div>

                <div className="relative bg-gray-900 rounded-2xl p-10 text-center border border-[#A6FF5D]/20 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#A6FF5D]/10 rounded-xl">
                    <Gift className="text-[#A6FF5D]" size={28} />
                  </div>

                  <p className="text-gray-400 text-sm mb-2">🔥 Early Bird Offer</p>

                  <h3 className="text-5xl font-bold text-[#A6FF5D] mb-2 animate-pulse">
                    FREE
                  </h3>

                  <p className="text-gray-500 text-xs line-through mb-3">
                    Worth ₹1999
                  </p>

                  <Timer />

                  <div className="flex justify-center mt-6">
                    <ReservedSeatBtn onClick={() => setFlipped(true)} />
                  </div>

                  <p className="text-xs text-red-400 mt-3 animate-pulse">
                    ⚠️ Limited seats available
                  </p>
                </div>
              </div>
            </div>

            {/* BACK */}
            <div className="absolute w-full h-full [transform:rotateY(-180deg)] backface-hidden">
              <RegisterForm setFlipped={setFlipped} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MasterclassDetails;