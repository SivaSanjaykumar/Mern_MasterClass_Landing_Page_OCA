// TerminalBackground.jsx
import { useEffect, useRef } from "react";

const LINES = [
  { p: "$", cmd: "npm create-react-app mern-app", col: "#A6FF5D" },
  { p: "$", cmd: "cd mern-app && npm install express", col: "#A6FF5D" },
  { p: ">", cmd: "mongoose.connect('mongodb://localhost')", col: "#00ed64" },
  { p: ">", cmd: "const app = express()", col: "#ffb300" },
  { p: ">", cmd: "app.use(express.json())", col: "#ffb300" },
  { p: "→", cmd: "const [data, setData] = useState([])", col: "#61dafb" },
  { p: "→", cmd: "useEffect(() => { fetchData() }, [])", col: "#61dafb" },
  { p: ">", cmd: "router.get('/api/users', async(req,res) => {})", col: "#74b92d" },
  { p: ">", cmd: "res.json({ success: true, data })", col: "#74b92d" },
  { p: "$", cmd: "node server.js → listening on :5000", col: "#A6FF5D" },
  { p: "✓", cmd: "MongoDB connected successfully", col: "#00ed64" },
  { p: "→", cmd: "Building component tree...", col: "#61dafb" },
  { p: "$", cmd: "npm run build → compiled successfully", col: "#A6FF5D" },
  { p: ">", cmd: "JWT.sign(payload, secret, { expiresIn: '7d' })", col: "#ffb300" },
  { p: "→", cmd: "const dispatch = useDispatch()", col: "#61dafb" },
  { p: ">", cmd: "User.findById(req.user.id).lean()", col: "#00ed64" },
  { p: "$", cmd: "git commit -m 'feat: add auth middleware'", col: "#A6FF5D" },
  { p: "✓", cmd: "Server running in production mode", col: "#74b92d" },
];

const TerminalBackground = () => {
  const bgRef   = useRef(null);
  const cvRef   = useRef(null);
  const frameRef = useRef(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const bg  = bgRef.current;
    const cvs = cvRef.current;
    const ctx = cvs.getContext("2d");

    const resize = () => {
      const parent = bg.parentElement;
      cvs.width  = parent.offsetWidth;
      cvs.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const ro = new ResizeObserver(resize);
    ro.observe(bg.parentElement);

    const LH = 22;
    const PAD = 16;
    const totalH = LINES.length * LH * 2;

    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      // scanline overlay — slightly stronger to further dim
      for (let y = 0; y < cvs.height; y += 4) {
        ctx.fillStyle = "rgba(0,0,0,0.14)";
        ctx.fillRect(0, y, cvs.width, 2);
      }

      ctx.font = "11px monospace";
      const off = scrollRef.current % totalH;

      for (let rep = 0; rep < 3; rep++) {
        LINES.forEach((line, i) => {
          const y = i * LH * 2 - off + rep * totalH + PAD;
          if (y < -LH || y > cvs.height + LH) return;

          const alpha = Math.min(1, Math.min(y / 50, (cvs.height - y) / 50));
          if (alpha <= 0) return;

          // ↓ was 0.45 — dimmed to 0.18
          ctx.globalAlpha = alpha * 0.38;
          ctx.fillStyle = "#555";
          ctx.fillText(line.p, PAD, y);

          // ↓ was 0.75 — dimmed to 0.28
          ctx.globalAlpha = alpha * 0.58;
          ctx.fillStyle = line.col;
          ctx.fillText(line.cmd, PAD + 18, y);

          ctx.globalAlpha = 1;
        });
      }

      scrollRef.current += 0.55;
      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* left + right fade — wider and darker than before */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #000 0%, transparent 25%, transparent 75%, #000 100%)",
          zIndex: 2,
        }}
      />
      {/* top + bottom fade — stronger black hold */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #000 0%, transparent 25%, transparent 75%, #000 100%)",
          zIndex: 2,
        }}
      />
      {/* overall dim layer — knocks everything back uniformly */}
      <div
        className="absolute inset-0 bg-black/55"
        style={{ zIndex: 2 }}
      />
      <canvas ref={cvRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} />
    </div>
  );
};

export default TerminalBackground;