import { useEffect, useRef } from "react";
import { FileText, Users, Briefcase, Check } from "lucide-react";
import certificate from "../assets/certificate.png";

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
    desc: "Crack interviews with ready-to-use templates and tips",
  },
];

const Bonuses = () => {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const certImgRef = useRef(null);
  const certContentRef = useRef(null);
  const listRefs = useRef([]);

  useEffect(() => {
    // ── Intersection Observer for scroll reveals ──
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.15 }
    );

    [badgeRef, headingRef, certImgRef, certContentRef].forEach(
      (r) => r.current && observer.observe(r.current)
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    listRefs.current.forEach((el) => el && observer.observe(el));

    // ── Magnetic hover on bonus cards ──
    const cleanups = [];
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
        card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-6px) scale(1.03)`;
      };
      const onLeave = () => {
        card.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)`;
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    // ── Parallax on certificate image ──
    const handleScroll = () => {
      if (!certImgRef.current) return;
      const rect = certImgRef.current.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.06;
      certImgRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      cleanups.forEach((fn) => fn());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── Badge drop-in ── */
        .b-badge {
          opacity: 0;
          transform: scale(0.85) translateY(-10px);
          transition: opacity 0.6s cubic-bezier(.16,1,.3,1),
                      transform 0.6s cubic-bezier(.16,1,.3,1);
        }
        .b-badge.in-view { opacity: 1; transform: scale(1) translateY(0); }

        /* ── Heading cinematic reveal ── */
        .b-heading {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s cubic-bezier(.16,1,.3,1) 0.1s,
                      transform 1s cubic-bezier(.16,1,.3,1) 0.1s;
        }
        .b-heading.in-view { opacity: 1; transform: translateY(0); }

        /* ── Cards staggered slide-in ── */
        .b-card {
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: opacity 0.9s cubic-bezier(.16,1,.3,1),
                      transform 0.9s cubic-bezier(.16,1,.3,1),
                      box-shadow 0.4s ease;
          will-change: transform;
        }
        .b-card.in-view { opacity: 1; transform: translateY(0) scale(1); }
        .b-card-0 { transition-delay: 0ms; }
        .b-card-1 { transition-delay: 120ms; }
        .b-card-2 { transition-delay: 240ms; }

        /* ── Icon pulse on hover ── */
        .b-icon-wrap {
          transition: transform 0.4s cubic-bezier(.16,1,.3,1),
                      background 0.3s ease,
                      box-shadow 0.3s ease;
        }
        .b-card:hover .b-icon-wrap {
          transform: scale(1.15) rotate(-5deg);
          background: rgba(166,255,93,0.2);
          box-shadow: 0 0 20px rgba(166,255,93,0.3);
        }

        /* ── Spotlight sweep on card hover ── */
        .b-card-inner {
          position: relative;
          overflow: hidden;
        }
        .b-card-inner::before {
          content: '';
          position: absolute;
          top: -60%;
          left: -60%;
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(166,255,93,0.08) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
          z-index: 0;
        }
        .b-card:hover .b-card-inner::before {
          opacity: 1;
          transform: translate(60%, 60%);
        }

        /* ── Certificate image reveal ── */
        .cert-img {
          opacity: 0;
          transform: translateX(-60px) scale(0.95);
          transition: opacity 1.1s cubic-bezier(.16,1,.3,1) 0.1s,
                      transform 1.1s cubic-bezier(.16,1,.3,1) 0.1s;
          will-change: transform;
        }
        .cert-img.in-view { opacity: 1; transform: translateX(0) scale(1); }

        /* ── Cert content reveal ── */
        .cert-content {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 1.1s cubic-bezier(.16,1,.3,1) 0.2s,
                      transform 1.1s cubic-bezier(.16,1,.3,1) 0.2s;
        }
        .cert-content.in-view { opacity: 1; transform: translateX(0); }

        /* ── List items cascade ── */
        .cert-li {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.7s cubic-bezier(.16,1,.3,1),
                      transform 0.7s cubic-bezier(.16,1,.3,1);
        }
        .cert-li.in-view { opacity: 1; transform: translateX(0); }
        .cert-li-0 { transition-delay: 0.3s; }
        .cert-li-1 { transition-delay: 0.45s; }
        .cert-li-2 { transition-delay: 0.6s; }

        /* ── Cert image floating glow ── */
        @keyframes certGlow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(1.08); }
        }
        .cert-glow { animation: certGlow 4s ease-in-out infinite; }

        /* ── Check icon spin-in ── */
        @keyframes checkSpin {
          from { transform: rotate(-90deg) scale(0); opacity: 0; }
          to   { transform: rotate(0deg)  scale(1); opacity: 1; }
        }
        .b-card.in-view .check-icon {
          animation: checkSpin 0.5s cubic-bezier(.16,1,.3,1) forwards;
          animation-delay: 0.6s;
        }
        .check-icon { opacity: 0; }

        /* ── Ambient orbs ── */
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(20px, -30px); }
        }
        .b-orb { animation: orbFloat ease-in-out infinite; pointer-events: none; }

        /* ── Green text glow ── */
        .green-glow {
          text-shadow: 0 0 20px rgba(166,255,93,0.4), 0 0 40px rgba(166,255,93,0.15);
        }
      `}</style>

      <section className="bg-black text-white py-14 px-6 relative overflow-hidden">

        {/* Ambient orbs */}
        <div className="b-orb absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#A6FF5D]/5 blur-3xl" style={{ animationDuration: "9s" }} />
        <div className="b-orb absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-[#A6FF5D]/4 blur-3xl" style={{ animationDuration: "13s", animationDelay: "3s" }} />

        {/* Badge */}
        <div ref={badgeRef} className="b-badge flex justify-center mb-6">
          <span className="bg-[#A6FF5D]/10 text-[#A6FF5D] px-4 py-1 rounded-full text-sm border border-[#A6FF5D]/20">
            🎁 Exclusive Bonuses
          </span>
        </div>

        {/* Heading */}
        <div ref={headingRef} className="b-heading text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Exclusive{" "}
            <span className="text-[#A6FF5D] green-glow">Bonus</span>{" "}
            worth ₹4500/-
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Beyond the masterclass, you'll get these valuable resources
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {bonuses.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`b-card b-card-${index} relative p-[1px] rounded-xl bg-gradient-to-r from-[#A6FF5D]/30 to-white/10 cursor-default`}
            >
              <div className="absolute inset-0 bg-[#A6FF5D]/10 blur-2xl rounded-xl" />

              <div className="b-card-inner relative bg-gray-900 rounded-xl p-6 border border-[#A6FF5D]/20 hover:border-[#A6FF5D]/50 transition-colors duration-300">
                {/* Check */}
                <div className="absolute top-4 right-4 check-icon">
                  <Check size={18} className="text-[#A6FF5D]" />
                </div>

                {/* Icon */}
                <div className="b-icon-wrap w-14 h-14 flex items-center justify-center bg-[#A6FF5D]/10 rounded-xl mb-6 relative z-10">
                  {item.icon}
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold mb-2 relative z-10">{item.title}</h3>
                <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Section */}
        <div className="mt-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Left — Image */}
          <div ref={certImgRef} className="cert-img relative flex justify-center">
            <div className="cert-glow absolute w-[90%] h-[90%] bg-[#A6FF5D]/20 blur-3xl rounded-xl" />
            <img
              src={certificate}
              alt="Industry Certificate"
              className="relative z-10 rounded-xl border border-[#A6FF5D]/20 shadow-2xl w-[90%] h-auto max-w-md object-contain
                         hover:border-[#A6FF5D]/50 hover:shadow-[0_0_40px_rgba(166,255,93,0.2)] transition-all duration-500"
            />
          </div>

          {/* Right — Content */}
          <div ref={certContentRef} className="cert-content">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Earn an{" "}
              <span className="text-[#A6FF5D] green-glow">Industry-Recognized</span>{" "}
              Certificate
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              {[
                "Apply your skills by building a real-world project",
                "Get personalized feedback from expert mentors",
                "Receive a verified certificate upon completion",
              ].map((text, i) => (
                <li
                  key={i}
                  ref={(el) => (listRefs.current[i] = el)}
                  className={`cert-li cert-li-${i} flex items-start gap-3`}
                >
                  <span className="text-[#A6FF5D] mt-1">✔</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bonuses;