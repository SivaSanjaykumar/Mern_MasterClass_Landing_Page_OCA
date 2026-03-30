import { motion } from "motion/react";
import {
  Lock,
  LayoutDashboard,
  Plug,
  Code,
  Rocket,
  Database,
  Server,
  ShieldCheck,
  Cpu,
  RocketIcon,
} from "lucide-react";
import ReservedSeatBtn from "../components/ReservedSeatBtn";

const features = [
  {
    icon: <Lock className="text-[#A6FF5D]" size={28} />,
    title: "Authentication",
    desc: "Secure login & signup using JWT",
  },
  {
    icon: <LayoutDashboard className="text-[#A6FF5D]" size={28} />,
    title: "Dashboard UI",
    desc: "Modern UI with React & Tailwind",
  },
  {
    icon: <Plug className="text-[#A6FF5D]" size={28} />,
    title: "API Integration",
    desc: "Connect frontend with backend",
  },
  {
    icon: <Code className="text-[#A6FF5D]" size={28} />,
    title: "Full Stack App",
    desc: "Build complete MERN project",
  },
  {
    icon: <Database className="text-[#A6FF5D]" size={28} />,
    title: "MongoDB",
    desc: "Efficient data modeling & queries",
  },
  {
    icon: <Server className="text-[#A6FF5D]" size={28} />,
    title: "Express & Node",
    desc: "Backend architecture & APIs",
  },
  {
    icon: <ShieldCheck className="text-[#A6FF5D]" size={28} />,
    title: "Security",
    desc: "Best practices for secure apps",
  },
  {
    icon: <Cpu className="text-[#A6FF5D]" size={28} />,
    title: "Performance",
    desc: "Optimize speed & scalability",
  },
  {
    icon: <Rocket className="text-[#A6FF5D]" size={28} />,
    title: "Deployment",
    desc: "Deploy apps to production 🚀",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          What You’ll <span className="text-[#A6FF5D]">Learn</span>
        </h2>
        
        <p className="flex items-center justify-center gap-2 text-gray-400 mt-3 text-sm tracking-wide">
          <RocketIcon className="text-[#A6FF5D]" size={16} />
          Master full-stack development step by step with real-world projects.
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="group relative rounded-xl bg-[#A6FF5D] "
          >
            {/* 🔥 CARD */}
            <div
              className="bg-gray-900 rounded-xl p-6 text-center border border-[#A6FF5D]/20 
              group-hover:border-[#A6FF5D] 
              group-hover:shadow-[0_0_30px_rgba(166,255,93,0.15)]
              transform group-hover:-translate-y-2 
              transition duration-300"
            >
              {/* ICON */}
              <div className="mb-4 flex justify-center">{item.icon}</div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-20">
        <ReservedSeatBtn />
      </div>
      
    </section>
  );
};

export default FeaturesGrid;
