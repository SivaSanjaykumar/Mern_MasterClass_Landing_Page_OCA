import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const RegisterForm = ({ setFlipped }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
  });

  const isRegistrationClosed = false; // toggle this to open/close

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isRegistrationClosed) return;
    console.log(formData);
  };

  return (
    <div className="bg-black text-white h-120 flex flex-col justify-center items-center px-6 py-8">
      <div className="w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-r from-[#A6FF5D]/40 to-white/10">
        <div className="bg-gray-900 rounded-2xl p-8 border border-[#A6FF5D]/20">

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-5 text-center">
            Register for <span className="text-[#A6FF5D]">Free</span>
          </h2>

          {/* Registration Closed Banner */}
          {/* {isRegistrationClosed && (
            <div className="bg-red-500 text-white text-sm font-semibold text-center px-4 py-3 rounded-lg mb-5">
              Registration is closed. Please check back for the next session.
            </div>
          )} */}

          {/* Full Name */}
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            disabled={isRegistrationClosed}
            className="w-full mb-4 p-3 bg-[#0d1f2d] border border-[#A6FF5D]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#A6FF5D]/50 disabled:opacity-50"
          />

          {/* Email */}
          <label className="block text-sm font-semibold mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            disabled={isRegistrationClosed}
            className="w-full mb-4 p-3 bg-[#0d1f2d] border border-[#A6FF5D]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#A6FF5D]/50 disabled:opacity-50"
          />

          {/* Phone */}
          <label className="block text-sm font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            disabled={isRegistrationClosed}
            className="w-full mb-4 p-3 bg-[#0d1f2d] border border-[#A6FF5D]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#A6FF5D]/50 disabled:opacity-50"
          />

          {/* Current Status */}
          <label className="block text-sm font-semibold mb-1">Current Status</label>
          <div className="relative mb-5">
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled={isRegistrationClosed}
              className="w-full p-3 bg-[#0d1f2d] border border-[#A6FF5D]/20 rounded-lg text-gray-400 appearance-none focus:outline-none focus:border-[#A6FF5D]/50 disabled:opacity-50"
            >
              <option value="" disabled>Select your current status</option>
              <option value="student">Student</option>
              <option value="fresher">Fresher</option>
              <option value="working">Working Professional</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isRegistrationClosed}
            className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition
              ${isRegistrationClosed
                ? "bg-gradient-to-r from-cyan-500/50 to-blue-500/50 text-white/60 cursor-not-allowed"
                : "bg-[#A6FF5D] text-black hover:opacity-90"
              }`}
          >
            {isRegistrationClosed ? "Registration Closed" : "Register Now"}
            <ArrowRight size={16} />
          </button>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center mt-4">
            By registering, you agree to receive updates about the masterclass via email and phone.
          </p>

          {/* Back */}
          <button
            onClick={() => setFlipped(false)}
            className="mt-3 text-sm text-gray-400 w-full text-center"
          >
            ← Go Back
          </button>

        </div>
      </div>
    </div>
  );
};

export default RegisterForm;