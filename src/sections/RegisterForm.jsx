import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const RegisterForm = ({ setFlipped }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
  });

  const isRegistrationClosed = false;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isRegistrationClosed) return;
    console.log(formData);
  };

  return (
    // ✅ No fixed height — grows naturally to match front card
    <div className="w-full">
      <div className="w-full p-[1px] rounded-2xl"
        style={{ background: "linear-gradient(135deg, rgba(166,255,93,0.3) 0%, rgba(255,255,255,0.06) 100%)" }}>
        <div className="bg-[#0d0d0d] rounded-2xl p-8 border border-[#A6FF5D]/20">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Register for <span className="text-[#A6FF5D]">Free</span>
          </h2>

          {isRegistrationClosed && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold text-center px-4 py-3 rounded-lg mb-5">
              Registration is closed. Check back for the next session.
            </div>
          )}

          <label className="block text-xs font-semibold text-gray-400 mb-1.5 tracking-wide uppercase">Full Name</label>
          <input
            type="text" name="name" placeholder="Enter your full name"
            value={formData.name} onChange={handleChange} disabled={isRegistrationClosed}
            className="w-full mb-4 p-3 bg-black/40 border border-[#A6FF5D]/20 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#A6FF5D]/50 transition-colors disabled:opacity-40"
          />

          <label className="block text-xs font-semibold text-gray-400 mb-1.5 tracking-wide uppercase">Email Address</label>
          <input
            type="email" name="email" placeholder="Enter your email address"
            value={formData.email} onChange={handleChange} disabled={isRegistrationClosed}
            className="w-full mb-4 p-3 bg-black/40 border border-[#A6FF5D]/20 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#A6FF5D]/50 transition-colors disabled:opacity-40"
          />

          <label className="block text-xs font-semibold text-gray-400 mb-1.5 tracking-wide uppercase">Phone Number</label>
          <input
            type="tel" name="phone" placeholder="Enter your phone number"
            value={formData.phone} onChange={handleChange} disabled={isRegistrationClosed}
            className="w-full mb-4 p-3 bg-black/40 border border-[#A6FF5D]/20 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#A6FF5D]/50 transition-colors disabled:opacity-40"
          />

          <label className="block text-xs font-semibold text-gray-400 mb-1.5 tracking-wide uppercase">Current Status</label>
          <div className="relative mb-6">
            <select
              name="status" value={formData.status} onChange={handleChange} disabled={isRegistrationClosed}
              className="w-full p-3 bg-black/40 border border-[#A6FF5D]/20 rounded-xl text-gray-400 appearance-none text-sm focus:outline-none focus:border-[#A6FF5D]/50 transition-colors disabled:opacity-40"
            >
              <option value="" disabled>Select your current status</option>
              <option value="student">Student</option>
              <option value="fresher">Fresher</option>
              <option value="working">Working Professional</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          <button
            onClick={handleSubmit} disabled={isRegistrationClosed}
            className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm
              ${isRegistrationClosed
                ? "bg-white/5 border border-white/10 text-white/40 cursor-not-allowed"
                : "bg-[#A6FF5D] text-black hover:bg-[#b8ff70] hover:shadow-[0_0_24px_rgba(166,255,93,0.35)] active:scale-[0.98]"
              }`}
          >
            {isRegistrationClosed ? "Registration Closed" : "Register Now"}
            <ArrowRight size={15} />
          </button>

          <p className="text-xs text-gray-600 text-center mt-4 leading-relaxed">
            By registering, you agree to receive updates about the masterclass via email and phone.
          </p>

          <button
            onClick={() => setFlipped(false)}
            className="mt-3 text-sm text-gray-500 hover:text-gray-300 w-full text-center transition-colors duration-200"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;