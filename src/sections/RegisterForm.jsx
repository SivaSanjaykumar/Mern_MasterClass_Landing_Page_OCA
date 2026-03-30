import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronDown, X, MessageCircle, Check } from "lucide-react";

// ── Confetti ───────────────────────────────────────────────────────
const COLORS = ["#A6FF5D", "#ffffff", "#4ade80", "#facc15", "#60a5fa"];
const randomBetween = (a, b) => a + Math.random() * (b - a);
const createParticle = (id) => ({
  id,
  x: randomBetween(10, 90),
  delay: randomBetween(0, 0.6),
  duration: randomBetween(1.8, 3.2),
  size: randomBetween(6, 13),
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
  rotation: randomBetween(-360, 360),
  shape: Math.random() > 0.5 ? "circle" : "rect",
});

const Confetti = () => {
  const particles = Array.from({ length: 80 }, (_, i) => createParticle(i));
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: "-20px",
            width: p.shape === "rect" ? p.size * 1.6 : p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            animation: `confettiFall ${p.duration}s ease-in ${p.delay}s forwards`,
            transform: `rotate(${p.rotation}deg)`,
            opacity: 0,
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// ── Success Modal ──────────────────────────────────────────────────
const SuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
    <div
      className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    />
    <div
      className="relative w-full max-w-sm rounded-2xl p-[1px] z-10"
      style={{
        background:
          "linear-gradient(135deg, rgba(166,255,93,0.4) 0%, rgba(255,255,255,0.08) 100%)",
      }}
    >
      <div className="bg-[#0a0a0a] rounded-2xl p-8 flex flex-col items-center text-center gap-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
        <div className="w-20 h-20 rounded-full bg-[#A6FF5D]/10 border-2 border-[#A6FF5D]/40 flex items-center justify-center">
          <svg viewBox="0 0 52 52" className="w-10 h-10">
            <circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              stroke="#A6FF5D"
              strokeWidth="2"
              style={{
                strokeDasharray: 157,
                strokeDashoffset: 157,
                animation: "drawCircle 0.5s ease forwards",
              }}
            />
            <path
              fill="none"
              stroke="#A6FF5D"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 27 l9 9 l16-18"
              style={{
                strokeDasharray: 40,
                strokeDashoffset: 40,
                animation: "drawCheck 0.4s ease 0.5s forwards",
              }}
            />
            <style>{`
              @keyframes drawCircle { to { stroke-dashoffset: 0; } }
              @keyframes drawCheck  { to { stroke-dashoffset: 0; } }
            `}</style>
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">You're Registered!</h3>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            We've received your details. Get ready for an intensive MERN
            masterclass experience!
          </p>
        </div>
        <a
          href="https://chat.whatsapp.com/your-group-link"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm bg-[#25D366] text-white hover:bg-[#1ebe5d] hover:shadow-[0_0_24px_rgba(37,211,102,0.35)] active:scale-[0.98] transition-all duration-300"
        >
          <MessageCircle size={18} />
          Join Our WhatsApp Community
        </a>
        <button
          onClick={onClose}
          className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
        >
          I'll join later
        </button>
      </div>
    </div>
  </div>
);

// ── Custom Select ──────────────────────────────────────────────────
const STATUS_OPTIONS = [
  { value: "student", label: "Student" },
  { value: "fresher", label: "Fresher" },
  { value: "working", label: "Working Professional" },
  { value: "other", label: "Other" },
];

const CustomSelect = ({ value, onChange, disabled }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = STATUS_OPTIONS.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        className={`w-full p-3 bg-black/50 border rounded-xl text-sm text-left flex items-center justify-between
          transition-all duration-200 focus:outline-none disabled:opacity-40
          ${
            open
              ? "border-[#A6FF5D]/60 shadow-[0_0_16px_rgba(166,255,93,0.1)]"
              : "border-[#A6FF5D]/15 hover:border-[#A6FF5D]/35"
          }
          ${selected ? "text-white" : "text-gray-600"}`}
      >
        <span>{selected ? selected.label : "Select your current status"}</span>
        <ChevronDown
          size={15}
          className={`text-gray-500 transition-transform duration-300 ${open ? "rotate-180 text-[#A6FF5D]" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-0 right-0 z-30 mt-2 rounded-xl border border-[#A6FF5D]/15
          bg-[#0e0e0e] shadow-[0_8px_32px_rgba(0,0,0,0.6)]
          overflow-hidden transition-all duration-200 origin-top
          ${open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
      >
        {STATUS_OPTIONS.map((option, i) => {
          const isSelected = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm text-left
                transition-colors duration-150
                ${
                  isSelected
                    ? "bg-[#A6FF5D]/10 text-[#A6FF5D]"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }
                ${i !== 0 ? "border-t border-white/5" : ""}`}
            >
              <span>{option.label}</span>
              {isSelected && <Check size={14} className="text-[#A6FF5D]" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ── Main Form ──────────────────────────────────────────────────────
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const isRegistrationClosed = false;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (isRegistrationClosed) return;
    console.log(formData);
    setShowConfetti(true);
    setShowSuccess(true);
    setTimeout(() => setShowConfetti(false), 3500);
  };

  const handleClose = () => {
    setShowSuccess(false);
    setFormData({ name: "", email: "", phone: "", status: "" });
  };

  return (
    <>
      {showConfetti && <Confetti />}
      {showSuccess && <SuccessModal onClose={handleClose} />}

      <div className="w-full">
        <div
          className="relative p-[1px] rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(166,255,93,0.28) 0%, rgba(255,255,255,0.06) 100%)",
          }}
        >
          <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-[#A6FF5D]/20 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-center">
              Register for <span className="text-[#A6FF5D]">Free</span>
            </h2>

            {isRegistrationClosed && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center px-4 py-3 rounded-xl">
                Registration is closed. Check back for the next session.
              </div>
            )}

            {[
              {
                label: "Full Name",
                name: "name",
                type: "text",
                placeholder: "Enter your full name",
              },
              {
                label: "Email Address",
                name: "email",
                type: "email",
                placeholder: "Enter your email address",
              },
              {
                label: "Phone Number",
                name: "phone",
                type: "tel",
                placeholder: "Enter your phone number",
              },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 tracking-widest uppercase">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  disabled={isRegistrationClosed}
                  className="w-full p-3 bg-black/50 border border-[#A6FF5D]/15 rounded-xl text-white placeholder-gray-700 text-sm focus:outline-none focus:border-[#A6FF5D]/50 transition-colors duration-200 disabled:opacity-40"
                />
              </div>
            ))}

            {/* Custom Status Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 tracking-widest uppercase">
                Current Status
              </label>
              <CustomSelect
                value={formData.status}
                onChange={(val) => setFormData({ ...formData, status: val })}
                disabled={isRegistrationClosed}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isRegistrationClosed}
              className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm transition-all duration-300
                ${
                  isRegistrationClosed
                    ? "bg-white/5 border border-white/10 text-white/30 cursor-not-allowed"
                    : "bg-[#A6FF5D] text-black hover:bg-[#b8ff70] hover:shadow-[0_0_28px_rgba(166,255,93,0.3)] active:scale-[0.98]"
                }`}
            >
              {isRegistrationClosed ? "Registration Closed" : "Register Now"}
              <ArrowRight size={15} />
            </button>

            <p className="text-xs text-gray-700 text-center leading-relaxed">
              By registering, you agree to receive updates about the masterclass
              via email and phone.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
