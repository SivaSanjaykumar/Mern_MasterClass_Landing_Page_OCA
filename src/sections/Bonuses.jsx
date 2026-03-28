import { FileText, Users, Briefcase, Check } from "lucide-react";
import certificate from "../assets/certificate.png"

const bonuses = [
  {
    icon: <FileText className="text-[#A6FF5D]" size={28} />,
    title: "Career Roadmap PDF",
    desc: "Step-by-step roadmap to become a full-stack developer",
  },
  {
    icon: <Users className="text-[#A6FF5D]" size={28} />,
    title: "Mentorship Access",
    desc: "Get guidance from industry experts and our Staffs",
  },
  {
    icon: <Briefcase className="text-[#A6FF5D]" size={28} />,
    title: "Resume + Interview Kit",
    desc: "Crack interviews with ready-to-use templates",
  },
];

const Bonuses = () => {
  return (
    <section className="bg-black text-white py-14 px-6">
      {/* 🔥 Badge */}
      <div className="flex justify-center mb-6">
        <span className="bg-[#A6FF5D]/10 text-[#A6FF5D] px-4 py-1 rounded-full text-sm">
          🎁 Exclusive Bonuses
        </span>
      </div>

      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Exclusive <span className="text-[#A6FF5D]">Bonus</span> worth ₹4500/-
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          Beyond the masterclass, you'll get these valuable resources
        </p>
      </div>

      {/* 🔥 Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {bonuses.map((item, index) => (
          <div
            key={index}
            className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#A6FF5D]/30 to-white/10"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[#A6FF5D]/10 blur-2xl rounded-xl"></div>

            <div className="relative bg-gray-900 rounded-xl p-6 border border-[#A6FF5D]/20 hover:border-[#A6FF5D]/40 transition duration-300">
              {/* Check Icon */}
              <div className="absolute top-4 right-4">
                <Check size={18} className="text-[#A6FF5D]" />
              </div>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-[#A6FF5D]/10 rounded-xl mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* Desc */}
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* 🔥 CERTIFICATE SECTION */}
      <div className="mt-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* 🔥 LEFT IMAGE */}
        <div className="relative flex justify-center">
          {/* Glow Frame */}
          <div className="absolute w-[90%] h-[90%] bg-[#A6FF5D]/20 blur-3xl rounded-xl"></div>

          <img
            src={certificate}
            alt="Industry Certificate"
            className="relative z-10 rounded-xl border border-[#A6FF5D]/20 shadow-2xl w-[90%] h-auto max-w-md object-contain"
          />
        </div>

        {/* 🔥 RIGHT CONTENT */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Earn an <span className="text-[#A6FF5D]">Industry-Recognized</span>{" "}
            Certificate
          </h3>

          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#A6FF5D] mt-1">✔</span>
              Apply your skills by building a real-world project
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#A6FF5D] mt-1">✔</span>
              Get personalized feedback from expert mentors
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#A6FF5D] mt-1">✔</span>
              Receive a verified certificate upon completion
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
