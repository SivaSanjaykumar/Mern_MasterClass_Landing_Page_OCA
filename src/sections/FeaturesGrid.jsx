import { motion } from "motion/react";
import {
  Lock, LayoutDashboard, Plug, Code, Rocket,
  Database, Server, ShieldCheck, Cpu, RocketIcon,
} from "lucide-react";
import ReservedSeatBtn from "../components/ReservedSeatBtn";

const features = [
  { icon: <Lock size={24} className="text-[#A6FF5D]" />, title: "Authentication", desc: "Secure login & signup using JWT" },
  { icon: <LayoutDashboard size={24} className="text-[#A6FF5D]" />, title: "Dashboard UI", desc: "Modern UI with React & Tailwind" },
  { icon: <Plug size={24} className="text-[#A6FF5D]" />, title: "API Integration", desc: "Connect frontend with backend" },
  { icon: <Code size={24} className="text-[#A6FF5D]" />, title: "Full Stack App", desc: "Build complete MERN project" },
  { icon: <Database size={24} className="text-[#A6FF5D]" />, title: "MongoDB", desc: "Efficient data modeling & queries" },
  { icon: <Server size={24} className="text-[#A6FF5D]" />, title: "Express & Node", desc: "Backend architecture & APIs" },
  { icon: <ShieldCheck size={24} className="text-[#A6FF5D]" />, title: "Security", desc: "Best practices for secure apps" },
  { icon: <Cpu size={24} className="text-[#A6FF5D]" />, title: "Performance", desc: "Optimize speed & scalability" },
  { icon: <Rocket size={24} className="text-[#A6FF5D]" />, title: "Deployment", desc: "Deploy apps to production" },
];

const FeaturesGrid = () => (
  <section id="curriculum" className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6">
    {/* Heading */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        What You'll <span className="text-[#A6FF5D]">Learn</span>
      </h2>
      <p className="flex items-center justify-center gap-2 text-gray-400 mt-3 text-sm tracking-wide px-4">
        <RocketIcon className="text-[#A6FF5D] shrink-0" size={15} />
        Master full-stack development step by step with real-world projects.
      </p>
    </div>

    {/* Grid */}
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {features.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="group relative p-[1px] rounded-2xl"
          style={{ background: "linear-gradient(135deg, rgba(166,255,93,0.2) 0%, rgba(255,255,255,0.04) 100%)" }}
        >
          <div className="bg-[#0d0d0d] rounded-2xl p-5 sm:p-6 text-center border border-white/5
                          group-hover:border-[#A6FF5D]/35
                          group-hover:shadow-[0_0_30px_rgba(166,255,93,0.1)]
                          group-hover:-translate-y-1
                          transition-all duration-300">
            {/* Icon bubble */}
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center
                            bg-[#A6FF5D]/10 rounded-xl border border-[#A6FF5D]/15
                            group-hover:bg-[#A6FF5D]/18 group-hover:scale-110
                            transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-1.5 text-white">{item.title}</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-14 sm:mt-20">
      <ReservedSeatBtn />
    </div>
  </section>
);

export default FeaturesGrid;