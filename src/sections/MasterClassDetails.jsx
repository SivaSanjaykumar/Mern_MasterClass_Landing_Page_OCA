import { motion } from "motion/react";
import { Video, Clock, Calendar, Award, PlayCircle } from "lucide-react";
import RegisterForm from "./RegisterForm";
import Timer from "@/components/Timer";

const details = [
  { icon: <Video size={18} className="text-[#A6FF5D]" />, title: "Live Online", desc: "Interactive Zoom session" },
  { icon: <Clock size={18} className="text-[#A6FF5D]" />, title: "8 Hours Intensive", desc: "Deep dive full-stack training" },
  { icon: <Calendar size={18} className="text-[#A6FF5D]" />, title: "15th Mar 2026", desc: "Mark your calendar" },
  { icon: <Clock size={18} className="text-[#A6FF5D]" />, title: "10 AM – 6 PM", desc: "Full-day learning experience" },
  { icon: <Award size={18} className="text-[#A6FF5D]" />, title: "Certificate of Completion", desc: "Get certified after the masterclass" },
  { icon: <PlayCircle size={18} className="text-[#A6FF5D]" />, title: "Recorded Session Access", desc: "Rewatch anytime at your own pace" },
];

const MasterclassDetails = () => (
  <section id="masterclass-details" className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6">
    {/* Heading */}
    <div className="text-center mb-12 sm:mb-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Masterclass <span className="text-[#A6FF5D]">Details</span>
      </h2>
      <p className="text-gray-400 mt-3 text-sm leading-relaxed px-4">
        Essential insights to help you get started with confidence.
      </p>
    </div>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-11 items-start">

      {/* LEFT — timeline */}
      <div className="relative md:top-8">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-[#A6FF5D]/20 rounded-full" />

        <div className="space-y-8 sm:space-y-10">
          {details.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="flex items-start gap-4 sm:gap-6"
            >
              {/* Icon dot */}
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center
                              rounded-full bg-[#A6FF5D]/10 border border-[#A6FF5D]/40
                              relative z-10">
                {item.icon}
              </div>
              <div className="pt-0.5">
                <h3 className="text-base sm:text-lg font-semibold leading-tight">{item.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-0.5">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT — register form */}
      <div id="register">
        <RegisterForm />
      </div>
      
    </div>
    <div className="mt-15">
      <Timer/>
    </div>
    
  </section>
);

export default MasterclassDetails;