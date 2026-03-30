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
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("in-view"),
        ),
      { threshold: 0.12 },
    );

    [badgeRef, headingRef, certImgRef, certContentRef].forEach(
      (r) => r.current && observer.observe(r.current),
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    listRefs.current.forEach((el) => el && observer.observe(el));

    // Smooth tilt on cards
    const cleanups = [];
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 7;
        card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-4px)`;
      };
      const onLeave = () => {
        card.style.transition = "transform 0.7s cubic-bezier(.23,1,.32,1)";
        card.style.transform =
          "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)";
        setTimeout(() => (card.style.transition = ""), 700);
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── Ambient breathe ── */
        @keyframes breathe {
          0%, 100% { opacity: 0.18; transform: scale(1) translate(0, 0); }
          50%       { opacity: 0.32; transform: scale(1.12) translate(12px, -18px); }
        }

        /* ── Shimmer sweep across cards ── */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        /* ── Gentle float for cert image ── */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        /* ── Soft glow pulse ── */
        @keyframes glowPulse {
          0%, 100% { opacity: 0.2; }
          50%       { opacity: 0.45; }
        }

        /* ── Badge: elegant fade-drop ── */
        .b-badge {
          opacity: 0;
          transform: translateY(-14px);
          filter: blur(4px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.23,1,.32,1), filter 0.8s ease;
        }
        .b-badge.in-view { opacity: 1; transform: translateY(0); filter: blur(0); }

        /* ── Heading: word-by-word lift ── */
        .b-heading {
          opacity: 0;
          transform: translateY(40px);
          filter: blur(6px);
          transition: opacity 1s cubic-bezier(.23,1,.32,1) 0.05s,
                      transform 1s cubic-bezier(.23,1,.32,1) 0.05s,
                      filter 1s ease 0.05s;
        }
        .b-heading.in-view { opacity: 1; transform: translateY(0); filter: blur(0); }

        /* ── Cards: drift up with blur dissolve ── */
        .b-card {
          opacity: 0;
          transform: translateY(50px);
          filter: blur(8px);
          transition:
            opacity 1s cubic-bezier(.23,1,.32,1),
            transform 1s cubic-bezier(.23,1,.32,1),
            filter 1s ease;
          will-change: transform, opacity, filter;
        }
        .b-card.in-view { opacity: 1; transform: translateY(0); filter: blur(0); }
        .b-card-0.in-view { transition-delay: 0ms; }
        .b-card-1.in-view { transition-delay: 130ms; }
        .b-card-2.in-view { transition-delay: 260ms; }

        /* ── Card shimmer line on hover ── */
        .b-card-inner {
          position: relative;
          overflow: hidden;
        }
        .b-card-inner::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(166,255,93,0.07) 50%,
            transparent 60%
          );
          background-size: 200% auto;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .b-card:hover .b-card-inner::after {
          opacity: 1;
          animation: shimmer 1.2s linear infinite;
        }

        /* ── Icon: smooth scale + color bloom ── */
        .b-icon-wrap {
          transition: transform 0.5s cubic-bezier(.23,1,.32,1), box-shadow 0.5s ease;
        }
        .b-card:hover .b-icon-wrap {
          transform: scale(1.18) rotate(-6deg);
          box-shadow: 0 0 24px rgba(166,255,93,0.35);
        }

        /* ── Check tick: spring pop ── */
        @keyframes springPop {
          0%   { transform: scale(0) rotate(-45deg); opacity: 0; }
          60%  { transform: scale(1.3) rotate(5deg);  opacity: 1; }
          100% { transform: scale(1)   rotate(0deg);  opacity: 1; }
        }
        .check-icon { opacity: 0; }
        .b-card.in-view .check-icon {
          animation: springPop 0.55s cubic-bezier(.23,1,.32,1) 0.75s forwards;
        }

        /* ── Cert image: slide + float ── */
        .cert-img {
          opacity: 0;
          transform: translateX(-50px) scale(0.97);
          filter: blur(6px);
          transition:
            opacity 1.2s cubic-bezier(.23,1,.32,1) 0.1s,
            transform 1.2s cubic-bezier(.23,1,.32,1) 0.1s,
            filter 1.2s ease 0.1s;
        }
        .cert-img.in-view {
          opacity: 1;
          transform: translateX(0) scale(1);
          filter: blur(0);
        }
        .cert-img.in-view .cert-float {
          animation: float 5s ease-in-out infinite;
        }

        /* ── Cert content: smooth drift ── */
        .cert-content {
          opacity: 0;
          transform: translateX(50px);
          filter: blur(6px);
          transition:
            opacity 1.2s cubic-bezier(.23,1,.32,1) 0.2s,
            transform 1.2s cubic-bezier(.23,1,.32,1) 0.2s,
            filter 1.2s ease 0.2s;
        }
        .cert-content.in-view { opacity: 1; transform: translateX(0); filter: blur(0); }

        /* ── List items: stagger slide ── */
        .cert-li {
          opacity: 0;
          transform: translateX(28px);
          filter: blur(3px);
          transition:
            opacity 0.8s cubic-bezier(.23,1,.32,1),
            transform 0.8s cubic-bezier(.23,1,.32,1),
            filter 0.8s ease;
        }
        .cert-li.in-view { opacity: 1; transform: translateX(0); filter: blur(0); }
        .cert-li-0 { transition-delay: 0.35s; }
        .cert-li-1 { transition-delay: 0.52s; }
        .cert-li-2 { transition-delay: 0.69s; }

        /* ── Cert glow ── */
        .cert-glow { animation: glowPulse 4s ease-in-out infinite; }

        /* ── Ambient orbs ── */
        .b-orb { animation: breathe ease-in-out infinite; }

        /* ── Accent text glow ── */
        .green-glow {
          text-shadow: 0 0 30px rgba(166,255,93,0.5), 0 0 60px rgba(166,255,93,0.18);
        }

        /* ── Bonus count badge shimmer ── */
        .badge-pill {
          background: linear-gradient(
            105deg,
            rgba(166,255,93,0.08) 0%,
            rgba(166,255,93,0.18) 50%,
            rgba(166,255,93,0.08) 100%
          );
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <section className="bg-black text-white py-10 px-6 relative overflow-hidden">
        {/* Ambient orbs */}
        <div
          className="b-orb absolute -top-32 -left-24 w-96 h-96 rounded-full bg-[#A6FF5D]/8 blur-[80px]"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="b-orb absolute bottom-0 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#A6FF5D]/5 blur-[100px]"
          style={{ animationDuration: "14s", animationDelay: "4s" }}
        />
        <div
          className="b-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#A6FF5D]/3 blur-[60px]"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        />

        {/* Badge */}
        <div ref={badgeRef} className="b-badge flex justify-center mb-6">
          <span className="badge-pill text-[#A6FF5D] px-5 py-1.5 rounded-full text-sm border border-[#A6FF5D]/25 tracking-wide">
            🎁 Exclusive Bonuses
          </span>
        </div>

        {/* Heading */}
        <div id="bonuses" ref={headingRef} className="b-heading text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Exclusive <span className="text-[#A6FF5D] green-glow">Bonus</span>{" "}
            worth ₹4500/-
          </h2>
          <p className="text-gray-500 mt-4 text-sm tracking-wide">
            Beyond the masterclass, you'll get these valuable resources
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {bonuses.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`b-card b-card-${index} relative p-[1px] rounded-2xl cursor-default`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(166,255,93,0.25) 0%, rgba(255,255,255,0.06) 100%)",
              }}
            >
              {/* Soft card glow */}
              <div className="absolute inset-0 rounded-2xl bg-[#A6FF5D]/8 blur-xl opacity-60" />

              <div className="b-card-inner relative bg-[#0d0d0d] rounded-2xl p-7 border border-white/5 hover:border-[#A6FF5D]/30 transition-colors duration-500">
                {/* Check badge */}
                <div className="absolute top-5 right-5 check-icon">
                  <div className="w-6 h-6 rounded-full bg-[#A6FF5D]/15 flex items-center justify-center border border-[#A6FF5D]/30">
                    <Check size={13} className="text-[#A6FF5D]" />
                  </div>
                </div>

                {/* Icon */}
                <div className="b-icon-wrap w-14 h-14 flex items-center justify-center bg-[#A6FF5D]/10 rounded-xl mb-6 relative z-10 border border-[#A6FF5D]/15">
                  {item.icon}
                </div>

                {/* Text */}
                <h3 className="text-base font-semibold mb-2 relative z-10 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm relative z-10 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Section */}
        <div className="mt-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Image */}
          <div
            ref={certImgRef}
            className="cert-img relative flex justify-center"
          >
            <div className="cert-glow absolute w-[85%] h-[85%] bg-[#A6FF5D]/15 blur-[60px] rounded-2xl" />
            <div className="cert-float relative z-10">
              <img
                src={certificate}
                alt="Industry Certificate"
                className="rounded-2xl border border-[#A6FF5D]/20 shadow-2xl w-[90%] h-auto max-w-md object-contain
                           hover:border-[#A6FF5D]/40 hover:shadow-[0_0_60px_rgba(166,255,93,0.15)] transition-all duration-700"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div ref={certContentRef} className="cert-content">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
              Earn an{" "}
              <span className="text-[#A6FF5D] green-glow">
                Industry-Recognized
              </span>{" "}
              Certificate
            </h3>

            <ul className="space-y-5 text-gray-400 text-sm">
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
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-[#A6FF5D]/15 border border-[#A6FF5D]/30 flex items-center justify-center">
                    <span className="text-[#A6FF5D] text-xs">✔</span>
                  </span>
                  <span className="leading-relaxed">{text}</span>
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
