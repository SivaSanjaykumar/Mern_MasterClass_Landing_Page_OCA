import {
  Code,
  Layout,
  Server,
  Database,
  Rocket
} from "lucide-react";

const levels = [
  {
    level: "Level 1",
    icon: <Layout className="text-[#A6FF5D]" size={28} />,
    title: "Frontend Basics",
    desc: "Master HTML, CSS & UI fundamentals.",
  },
  {
    level: "Level 2",
    icon: <Code className="text-[#A6FF5D]" size={28} />,
    title: "React Development",
    desc: "Build dynamic and interactive apps.",
  },
  {
    level: "Level 3",
    icon: <Server className="text-[#A6FF5D]" size={28} />,
    title: "Backend APIs",
    desc: "Create REST APIs using Node & Express.",
  },
  {
    level: "Level 4",
    icon: <Database className="text-[#A6FF5D]" size={28} />,
    title: "Database Mastery",
    desc: "Work with MongoDB & data modeling.",
  },
  {
    level: "Level 5",
    icon: <Rocket className="text-[#A6FF5D]" size={28} />,
    title: "Deployment",
    desc: "Deploy apps and become job-ready 🚀",
  },
];

const LevelUp = () => {
  return (
    <section className="bg-black text-white py-24 px-6">

      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Your <span className="text-[#A6FF5D]">Level-Up Journey</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm">
          Progress step-by-step and become a MERN developer 🚀
        </p>
      </div>

      {/* 🔥 Levels Container */}
      <div className="flex gap-6 overflow-x-auto pb-4 justify-start md:justify-center">

        {levels.map((item, index) => (
          <div
            key={index}
            className="min-w-[260px] relative p-[1px] rounded-xl bg-gradient-to-r from-[#A6FF5D]/30 to-white/10"
          >
            <div className="bg-gray-900 rounded-xl p-6 h-full flex flex-col items-center text-center hover:scale-[1.05] transition duration-300">

              {/* Level Badge */}
              <span className="text-xs text-[#A6FF5D] mb-2 font-semibold">
                {item.level}
              </span>

              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-400">
                {item.desc}
              </p>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default LevelUp;