import React, { useEffect, useRef } from "react";
import showcaseImg from "../assets/showcase.png";
import ReservedSeatBtn from "../components/ReservedSeatBtn";

const ShowCase = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // --- Scroll-triggered fade-ups ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
      },
      { threshold: 0.15 }
    );
    [headingRef, imgRef, btnRef].forEach((r) => r.current && observer.observe(r.current));

    // --- Parallax on image ---
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const offset = (rect.top + rect.height / 2 - center) * 0.08;
      imgRef.current.style.transform = `translateY(${offset}px) scale(1.01)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // --- Mouse tilt on image ---
    const img = imgRef.current;
    const handleMouseMove = (e) => {
      if (!img) return;
      const rect = img.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      img.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.03)`;
    };
    const handleMouseLeave = () => {
      if (img) img.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
    };
    img?.addEventListener("mousemove", handleMouseMove);
    img?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      img?.removeEventListener("mousemove", handleMouseMove);
      img?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── Floating particles ── */
        @keyframes floatParticle {
          0%   { transform: translateY(0px)   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-120px); opacity: 0; }
        }
        .particle {
          position: absolute;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #A6FF5D;
          animation: floatParticle linear infinite;
          pointer-events: none;
        }

        /* ── Heading reveal ── */
        .sc-heading {
          opacity: 0;
          transform: translateY(30px) skewY(1deg);
          transition: opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1);
        }
        .sc-heading.visible {
          opacity: 1;
          transform: translateY(0) skewY(0deg);
        }

        /* ── Image reveal ── */
        .sc-img-wrap {
          opacity: 0;
          transform: translateY(60px) scale(0.96);
          transition: opacity 1.1s cubic-bezier(.16,1,.3,1) 0.2s,
                      transform 1.1s cubic-bezier(.16,1,.3,1) 0.2s;
        }
        .sc-img-wrap.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .sc-img-wrap img {
          transition: transform 0.4s cubic-bezier(.16,1,.3,1),
                      box-shadow 0.4s ease;
          will-change: transform;
        }
        .sc-img-wrap:hover img {
          box-shadow: 0 0 60px rgba(166,255,93,0.25), 0 30px 80px rgba(0,0,0,0.6);
        }

        /* ── Scanning beam on image ── */
        .sc-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(166,255,93,0.06) 50%,
            transparent 100%
          );
          background-size: 100% 200%;
          animation: scanBeam 4s ease-in-out infinite;
          pointer-events: none;
          z-index: 2;
        }
        @keyframes scanBeam {
          0%   { background-position: 0% -100%; }
          50%  { background-position: 0% 100%; }
          100% { background-position: 0% -100%; }
        }

        /* ── Corner brackets ── */
        .bracket::before, .bracket::after,
        .bracket > span::before, .bracket > span::after {
          content: '';
          position: absolute;
          width: 20px; height: 20px;
          border-color: #A6FF5D;
          border-style: solid;
          opacity: 0.6;
          transition: opacity 0.3s, width 0.3s, height 0.3s;
        }
        .bracket::before  { top: -4px;    left: -4px;  border-width: 2px 0 0 2px; }
        .bracket::after   { top: -4px;    right: -4px; border-width: 2px 2px 0 0; }
        .bracket > span::before { bottom: -4px; left: -4px;  border-width: 0 0 2px 2px; }
        .bracket > span::after  { bottom: -4px; right: -4px; border-width: 0 2px 2px 0; }
        .sc-img-wrap:hover .bracket::before,
        .sc-img-wrap:hover .bracket::after,
        .sc-img-wrap:hover .bracket > span::before,
        .sc-img-wrap:hover .bracket > span::after {
          width: 32px; height: 32px; opacity: 1;
        }

        /* ── Button ── */
        .sc-btn {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
        }
        .sc-btn.visible { opacity: 1; transform: translateY(0); }

        /* ── Glow line pulse ── */
        @keyframes glowLinePulse {
          0%, 100% { opacity: 0.3; transform: scaleX(0.8); }
          50%       { opacity: 0.7; transform: scaleX(1); }
        }
        .glow-line { animation: glowLinePulse 3s ease-in-out infinite; }

        /* ── Ambient orbs ── */
        @keyframes orbDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(30px, -20px) scale(1.1); }
          66%       { transform: translate(-20px, 15px) scale(0.95); }
        }
        .orb { animation: orbDrift ease-in-out infinite; }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-black text-white py-24 px-6 text-center relative overflow-hidden"
      >
        {/* Ambient orbs */}
        <div className="orb absolute top-10 left-10 w-72 h-72 rounded-full bg-[#A6FF5D]/5 blur-3xl pointer-events-none" style={{ animationDuration: "8s" }} />
        <div className="orb absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#A6FF5D]/5 blur-3xl pointer-events-none" style={{ animationDuration: "11s", animationDelay: "2s" }} />

        {/* Floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${8 + i * 8}%`,
              bottom: `${10 + (i % 3) * 8}%`,
              animationDuration: `${3 + (i % 4)}s`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0,
              width: i % 3 === 0 ? "6px" : "3px",
              height: i % 3 === 0 ? "6px" : "3px",
            }}
          />
        ))}

        {/* Heading */}
        <div ref={headingRef} className="sc-heading relative z-10">
          <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">Introducing...</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            MERN Stack{" "}
            <span className="text-[#A6FF5D]" style={{
              textShadow: "0 0 30px rgba(166,255,93,0.5)"
            }}>
              Masterclass
            </span>
          </h2>
        </div>

        {/* Glow line */}
        <div className="glow-line absolute left-0 right-0 top-[55%] h-24 bg-gradient-to-r from-transparent via-[#A6FF5D]/30 to-transparent blur-2xl z-0 pointer-events-none" />

        {/* Image */}
        <div ref={imgRef} className="sc-img-wrap bracket relative z-10 flex justify-center inline-block">
          <span /> {/* needed for bracket pseudo-elements */}
          <img
            src={showcaseImg}
            alt="Course Preview"
            className="rounded-xl shadow-2xl max-w-5xl w-full"
          />
        </div>

        {/* CTA Button */}
        <div ref={btnRef} className="sc-btn relative z-10 mt-8">
          <ReservedSeatBtn />
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#A6FF5D]/10 to-transparent blur-2xl pointer-events-none" />
      </section>
    </>
  );
};

export default ShowCase;