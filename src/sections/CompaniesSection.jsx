// CompaniesSection.jsx
import HCL from "../assets/logos/HCL.png";
import Cognizant from "../assets/logos/Cognizant.svg";
import Hexaware from "../assets/logos/Hexaware.png";
import TCS from "../assets/logos/TCS.png";
import TECHMAHINDRA from "../assets/logos/TECHMAHINDRA.png";
import Capgemini from "../assets/logos/Capgemini.png";

const companies = [
  { name: "HCL", logo: HCL },
  { name: "Hexaware", logo: Hexaware },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png",
  },
  {
    name: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png",
  },
  { name: "TCS", logo: TCS },
  { name: "Cognizant", logo: Cognizant },
  { name: "Tech Mahindra", logo: TECHMAHINDRA },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  },
  {
    name: "Lenovo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1200px-Lenovo_logo_2015.svg.png",
  },
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png",
  },
  { name: "Capgemini", logo: Capgemini },
];

const CompaniesSection = () => (
  <>
    <style>{`
      @keyframes logoScroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .logo-track {
        animation: logoScroll 32s linear infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .logo-track { animation: none; }
      }
    `}</style>

    <section className="bg-black text-white py-14 sm:py-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <span
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]
                         text-gray-500 border border-white/10 rounded-full px-5 py-2 bg-white/3 mb-6"
        >
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

      {/* Divider line */}
      <div className="max-w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#A6FF5D]/20 to-transparent mb-10" />

      {/* Marquee strip */}
      <div className="relative max-w-[82%] mx-auto overflow-hidden">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 h-full w-16 sm:w-28 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #000 30%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 h-full w-16 sm:w-28 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #000 30%, transparent 100%)",
          }}
        />

        {/* Track */}
        <div
          className="logo-track flex items-center gap-8 sm:gap-12 py-4"
          style={{ width: "max-content" }}
        >
          {[...companies, ...companies].map((company, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center
                         w-32 sm:w-40 h-14 sm:h-16 px-5 py-3
                         rounded-2xl border border-white/8 bg-white/[0.03]"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-7 sm:max-h-8 w-auto object-contain
                            opacity-80"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <span
                className="text-xs font-semibold text-gray-500"
                style={{ display: "none" }}
              >
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className="max-w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#A6FF5D]/20 to-transparent mt-10" />

      {/* Stats row */}
    </section>
  </>
);

export default CompaniesSection;
