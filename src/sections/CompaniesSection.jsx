// CompaniesSection.jsx
import HCL from "../assets/logos/HCL.png";
import Cognizant from "../assets/logos/cognizant.png";
import Hexaware from "../assets/logos/Hexaware.png";
import TCS from "../assets/logos/TCS.png";
import TECHMAHINDRA from "../assets/logos/TECHMAHINDRA.png";
import Capgemini from "../assets/logos/Capgemini.png";
import accenture from "../assets/logos/accenture.png";
import Google from "../assets/logos/Google.png";
import Lenovo from "../assets/logos/Lenovo.png";
import Wipro from "../assets/logos/Wipro.png";
import Infosys from "../assets/logos/Infosys.png";

const companies = [
  { name: "HCL", logo: HCL },
  { name: "Hexaware", logo: Hexaware },
  {
    name: "Infosys",
    logo: Infosys,
  },
  {
    name: "Wipro",
    logo: Wipro,
  },
  { name: "TCS", logo: TCS },
  { name: "Cognizant", logo: Cognizant, grayscaleOnly: true },
  { name: "Tech Mahindra", logo: TECHMAHINDRA, large: true },
  {
    name: "Google",
    logo: Google,
  },
  {
    name: "Lenovo",
    logo: Lenovo,
  },
  { name: "Accenture", logo: accenture, invert: true, large: true },
  { name: "Capgemini", logo: Capgemini, large: true },
];

const getFilter = (company) => {
  if (company.grayscaleOnly) {
    // Cognizant has black bg — invert to white then grayscale to true mid-gray
    return "invert(1) grayscale(100%) brightness(1.8) opacity(0.9)";
  }
  if (company.invert) {
    // Dark logos like Accenture — invert so they show as light gray
    return "invert(1) grayscale(100%) brightness(1.8) opacity(0.9)";
  }
  return "grayscale(100%) brightness(2) opacity(0.9)";
};

const LogoCard = ({ company }) => (
  <div className="shrink-0 flex items-center justify-center px-8 sm:px-6.5 py-4">
    <img
      src={company.logo}
      alt={company.name}
      className={`w-auto object-contain max-h-17 sm:max-h-16 `}
      style={{ filter: getFilter(company) }}
      onError={(e) => {
        e.target.style.display = "none";
        e.target.nextSibling.style.display = "block";
      }}
    />
    <span className="text-xs font-semibold text-gray-500 hidden">
      {company.name}
    </span>
  </div>
);

const CompaniesSection = () => (
  <>
    <style>{`
      @keyframes logoScroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .logo-track {
        display: flex;
        align-items: center;
        width: max-content;
        animation: logoScroll 30s linear infinite;
        will-change: transform;
      }
      @media (prefers-reduced-motion: reduce) {
        .logo-track { animation: none; }
      }
    `}</style>

    <section className="bg-black text-white py-14 sm:py-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500 border border-white/10 rounded-full px-5 py-2 bg-white/3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF5D]" />
          Placement Partners
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
          Our Students{" "}
          <span
            className="text-[#A6FF5D]"
            style={{ textShadow: "0 0 40px rgba(166,255,93,0.35)" }}
          >
            Work At
          </span>
        </h2>

        <p className="text-gray-500 text-sm mt-4 max-w-sm mx-auto leading-relaxed">
          We don't just teach — we help shape careers. Our students have secured
          placements across top firms and MNCs.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#A6FF5D]/20 to-transparent mb-10" />

      {/* Marquee strip */}
      <div className="relative max-w-[80%] mx-auto overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-16 sm:w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #000 30%, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 h-full w-16 sm:w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #000 30%, transparent)" }}
        />

        <div className="logo-track">
          {[...companies, ...companies].map((company, i) => (
            <LogoCard key={i} company={company} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#A6FF5D]/20 to-transparent mt-10" />
    
    </section>
  </>
);

export default CompaniesSection;