import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // 👈 trigger after hero
      setShow(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className={`
        fixed bottom-6 right-6 z-50
        w-11 h-11 flex items-center justify-center
        rounded-full bg-[#A6FF5D] text-black
        shadow-[0_0_20px_rgba(166,255,93,0.4)]
        transition-all duration-300
        
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default ScrollToTopBtn;