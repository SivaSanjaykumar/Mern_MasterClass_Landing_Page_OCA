import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Play, Pause, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

// ── Video data — replace src/thumb with your actual URLs ──────────
const VIDEOS = [
  {
    id: 1,
    name: "Arjun Krishnamurthy",
    role: "Placed at Infosys",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    quote: "Ocean Academy transformed my career. I went from zero coding knowledge to landing my dream job.",
    stars: 5,
    company: "Infosys",
  },
  {
    id: 2,
    name: "Priya Subramaniam",
    role: "Placed at TCS",
    thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    quote: "The MERN masterclass was intense but incredibly rewarding. Got placed within 2 months!",
    stars: 5,
    company: "TCS",
  },
  {
    id: 3,
    name: "Karthik Rajan",
    role: "Placed at Wipro",
    thumb: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    quote: "Real-world projects and expert mentorship made all the difference. Highly recommend!",
    stars: 5,
    company: "Wipro",
  },
  {
    id: 4,
    name: "Deepa Venkatesh",
    role: "Placed at Cognizant",
    thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    quote: "From struggling with basics to building full-stack apps — this course is a game changer.",
    stars: 5,
    company: "Cognizant",
  },
  {
    id: 5,
    name: "Manoj Selvam",
    role: "Placed at HCL",
    thumb: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    quote: "Best investment I've made. The placement support team was with me every step of the way.",
    stars: 5,
    company: "HCL",
  },
];

// ── Single Video Card ─────────────────────────────────────────────
const VideoCard = ({ video, isCenter, onClick }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!isCenter) { onClick(); return; }
    if (playing) { videoRef.current?.pause(); setPlaying(false); }
    else { videoRef.current?.play(); setPlaying(true); }
  };

  useEffect(() => {
    if (!isCenter && playing) { videoRef.current?.pause(); setPlaying(false); }
  }, [isCenter]);

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex-shrink-0 cursor-pointer select-none"
      style={{ width: isCenter ? "min(280px, 55vw)" : "min(110px, 18vw)" }}
      animate={{
        scale: isCenter ? 1 : 0.78,
        filter: isCenter ? "brightness(1)" : "brightness(0.35)",
        zIndex: isCenter ? 10 : 1,
      }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Card shell */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          aspectRatio: "9/13",
          background: "#0d0d0d",
          boxShadow: isCenter
            ? "0 0 60px rgba(166,255,93,0.18), 0 30px 80px rgba(0,0,0,0.8)"
            : "0 10px 40px rgba(0,0,0,0.6)",
        }}
      >
        {/* Thumbnail */}
        <img
          src={video.thumb}
          alt={video.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: playing ? "brightness(0.3)" : "brightness(0.6)" }}
        />

        {/* Video element */}
        <video
          ref={videoRef}
          src={video.src}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: playing ? 1 : 0, transition: "opacity 0.4s" }}
          playsInline
          loop
        />

        {/* Green gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.95) 100%)",
          }}
        />

        {/* Top badge */}
        {isCenter && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide"
            style={{ background: "rgba(166,255,93,0.15)", border: "1px solid rgba(166,255,93,0.3)", color: "#A6FF5D" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF5D] animate-pulse" />
            Student Story
          </motion.div>
        )}

        {/* Play button */}
        <motion.button
          onClick={togglePlay}
          animate={{ scale: hovered && isCenter ? 1.1 : 1 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: playing ? "rgba(0,0,0,0.6)" : "rgba(166,255,93,0.92)",
              boxShadow: playing ? "none" : "0 0 40px rgba(166,255,93,0.5)",
              backdropFilter: "blur(4px)",
            }}
          >
            {playing
              ? <Pause size={15} className="text-white" />
              : <Play size={15} className="text-black ml-0.5" fill="black" />
            }
          </div>
        </motion.button>

        {/* Bottom info — only on center */}
        {isCenter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="absolute bottom-0 left-0 right-0 p-3 z-10"
          >
            {/* Stars */}
            {/* <div className="flex gap-0.5 mb-2">
              {Array(video.stars).fill(0).map((_, i) => (
                <Star key={i} size={12} fill="#A6FF5D" className="text-[#A6FF5D]" />
              ))}
            </div>
            {/* Quote */}
            {/* <p className="text-white text-xs leading-relaxed mb-2 line-clamp-2">
              "{video.quote}"
            </p> */} 
            <div className="flex items-center gap-2">
              <img src={video.thumb} className="w-7 h-7 rounded-full object-cover border border-[#A6FF5D]/40" alt="" />
              <div>
                <p className="text-white text-xs font-semibold leading-none">{video.name}</p>
                <p className="text-[#A6FF5D] text-[10px] mt-0.5">{video.role}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// ── Main Section ──────────────────────────────────────────────────
const ShowCase = () => {
  const [active, setActive] = useState(2);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const prev = () => setActive((a) => (a - 1 + VIDEOS.length) % VIDEOS.length);
  const next = () => setActive((a) => (a + 1) % VIDEOS.length);

  // Drag support
  const dragStart = useRef(null);
  const onDragStart = (e) => { dragStart.current = e.clientX ?? e.touches?.[0]?.clientX; };
  const onDragEnd = (e) => {
    const end = e.clientX ?? e.changedTouches?.[0]?.clientX;
    if (dragStart.current === null || end === undefined) return;
    const diff = dragStart.current - end;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStart.current = null;
  };

  // Visible order: prev-prev, prev, center, next, next-next
  const getOrder = () => {
    const len = VIDEOS.length;
    return [
      (active - 2 + len) % len,
      (active - 1 + len) % len,
      active,
      (active + 1) % len,
      (active + 2) % len,
    ];
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="bg-black text-white py-10 sm:py-12 overflow-hidden relative"
    >
      <style>{`
        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(166,255,93,0.3); }
          50%       { text-shadow: 0 0 50px rgba(166,255,93,0.7), 0 0 80px rgba(166,255,93,0.3); }
        }
        .title-glow { animation: titleGlow 3s ease-in-out infinite; }

        @keyframes floatOrb {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(20px,-30px) scale(1.1); }
        }
        .float-orb { animation: floatOrb ease-in-out infinite; }

        @keyframes scanLine {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>

      {/* Ambient orbs */}
      <div className="float-orb absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#A6FF5D]/4 blur-3xl pointer-events-none" style={{ animationDuration: "9s" }} />
      <div className="float-orb absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#A6FF5D]/4 blur-3xl pointer-events-none" style={{ animationDuration: "12s", animationDelay: "3s" }} />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="text-center mb-8 px-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-widest uppercase"
          style={{ background: "rgba(166,255,93,0.08)", border: "1px solid rgba(166,255,93,0.2)", color: "#A6FF5D" }}>
          <Quote size={12} />
          Real Stories
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Hear From Our{" "}
          <span className="text-[#A6FF5D] title-glow">Students</span>
        </h2>
        <p className="text-gray-500 mt-3 text-sm">
          1000+ students placed. Their words, not ours.
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="relative flex items-center justify-center gap-3 sm:gap-4 px-4"
        style={{ minHeight: "min(340px, 55vw)" }}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
      >
        {getOrder().map((videoIdx, position) => (
          <VideoCard
            key={VIDEOS[videoIdx].id}
            video={VIDEOS[videoIdx]}
            isCenter={position === 2}
            onClick={() => setActive(videoIdx)}
          />
        ))}
      </motion.div>

      {/* Nav arrows */}
      <div className="flex items-center justify-center gap-4 mt-5">
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <ChevronLeft size={18} className="text-gray-400" />
        </motion.button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? 24 : 6,
                height: 6,
                background: i === active ? "#A6FF5D" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        <motion.button
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <ChevronRight size={18} className="text-gray-400" />
        </motion.button>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-8 px-6"
      >
        {[
          { value: "1000+", label: "Students Trained" },
          { value: "4.8", label: "Average Rating" },
          { value: "95%", label: "Placement Rate" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-[#A6FF5D]">{stat.value}</p>
            <p className="text-gray-500 text-xs mt-1 tracking-wide">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ShowCase;