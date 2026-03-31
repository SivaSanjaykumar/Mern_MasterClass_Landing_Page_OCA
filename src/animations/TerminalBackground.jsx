// TerminalBackground.jsx
import { useEffect, useRef } from "react";

const LINES_LEFT = [
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
];

const LINES_RIGHT = [
  { p: ">", cmd: "JWT.sign(payload, secret, { expiresIn: '7d' })", col: "#ffb300" },
  { p: "→", cmd: "const dispatch = useDispatch()", col: "#61dafb" },
  { p: ">", cmd: "User.findById(req.user.id).lean()", col: "#00ed64" },
  { p: "$", cmd: "git commit -m 'feat: add auth middleware'", col: "#A6FF5D" },
  { p: "✓", cmd: "Server running in production mode", col: "#74b92d" },
  { p: ">", cmd: "Schema({ name: String, email: String })", col: "#00ed64" },
  { p: "→", cmd: "const [auth, setAuth] = useState(null)", col: "#61dafb" },
  { p: ">", cmd: "bcrypt.hash(password, 10)", col: "#ffb300" },
  { p: "$", cmd: "npm run dev → vite ready on :5173", col: "#A6FF5D" },
  { p: "→", cmd: "useNavigate() → redirect to dashboard", col: "#61dafb" },
  { p: ">", cmd: "populate('userId', 'name email')", col: "#00ed64" },
  { p: "✓", cmd: "Build complete — 142kb gzipped", col: "#74b92d" },
  { p: "$", cmd: "docker build -t mern-app .", col: "#A6FF5D" },
];

const TerminalBackground = () => {
  const bgRef     = useRef(null);
  const cvRef     = useRef(null);
  const frameRef  = useRef(null);
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

    const LH     = 22;
    const PAD    = 16;
    const SPEED  = 0.55;

    const totalLeft  = LINES_LEFT.length  * LH * 2;
    const totalRight = LINES_RIGHT.length * LH * 2;

    // column width — each side takes ~22% of canvas
    const colW = () => Math.min(cvs.width * 0.22, 260);

    const drawColumn = (lines, total, xStart, direction, offset) => {
      ctx.font = "11px monospace";
      const w = colW();

      for (let rep = 0; rep < 3; rep++) {
        lines.forEach((line, i) => {
          // direction: 1 = bottom→top (left col), -1 = top→bottom (right col)
          let y;
          if (direction === 1) {
            // scrolls upward: starts at bottom, moves up
            y = i * LH * 2 - (offset % total) + rep * total + PAD;
          } else {
            // scrolls downward: starts at top, moves down
            y = i * LH * 2 + (offset % total) - rep * total + cvs.height;
            y = cvs.height - (i * LH * 2 - (offset % total) + rep * total + PAD);
          }

          if (y < -LH || y > cvs.height + LH) return;

          const alpha = Math.min(1, Math.min(y / 60, (cvs.height - y) / 60));
          if (alpha <= 0) return;

          // clip so text doesn't bleed into center
          ctx.save();
          ctx.beginPath();
          ctx.rect(xStart, 0, w, cvs.height);
          ctx.clip();

          ctx.globalAlpha = alpha * 0.18;
          ctx.fillStyle = "#555";
          ctx.fillText(line.p, xStart + PAD, y);

          ctx.globalAlpha = alpha * 0.28;
          ctx.fillStyle = line.col;
          ctx.fillText(line.cmd, xStart + PAD + 18, y);

          ctx.globalAlpha = 1;
          ctx.restore();
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      // scanlines
      for (let y = 0; y < cvs.height; y += 4) {
        ctx.fillStyle = "rgba(0,0,0,0.14)";
        ctx.fillRect(0, y, cvs.width, 2);
      }

      const w = colW();
      const rightX = cvs.width - w - PAD;

      // LEFT col — bottom to top (direction: 1)
      drawColumn(LINES_LEFT,  totalLeft,  0,      1,  scrollRef.current);

      // RIGHT col — top to bottom (direction: -1)
      drawColumn(LINES_RIGHT, totalRight, rightX, -1, scrollRef.current);

      scrollRef.current += SPEED;
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
      {/* left fade */}
      <div className="absolute inset-0" style={{ zIndex: 2,
        background: "linear-gradient(90deg, #000 0%, transparent 22%, transparent 78%, #000 100%)" }} />
      {/* top + bottom fade */}
      <div className="absolute inset-0" style={{ zIndex: 2,
        background: "linear-gradient(180deg, #000 0%, transparent 25%, transparent 75%, #000 100%)" }} />
      {/* overall dim */}
      <div className="absolute inset-0 bg-black/55" style={{ zIndex: 2 }} />
      <canvas ref={cvRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} />
    </div>
  );
};

export default TerminalBackground;