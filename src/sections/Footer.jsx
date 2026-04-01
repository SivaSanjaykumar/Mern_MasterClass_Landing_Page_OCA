import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0B1D2A] text-white px-6  sm:px-10 lg:px-10 py-14">
      {/* Container */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-16 text-center md:text-left">
        {/* ================= LEFT ================= */}
        <div className="flex flex-col items-center md:items-start space-y-5 gap-4 max-w-sm">
          {/* Logo */}
          <img
            src="https://oceanacademy.in/_next/static/media/oa.9c315ba3.png"
            alt="Ocean Academy"
            className="h-16"
          />

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            Ocean was founded on the principle of building and implementing
            great ideas that drive progress for students and clients.
          </p>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-[#A6FF5D] font-semibold">Follow Us</h3>

            <div className="flex gap-4">
              {[
                {
                  Icon: FaFacebookF,
                  href: "https://www.facebook.com/oceanacademy.co.in/",
                },
                {
                  Icon: FaYoutube,
                  href: "https://youtube.com/@ocean_academy?si=ZuVRL9lTglv3WI9S",
                },
                {
                  Icon: FaInstagram,
                  href: "https://www.instagram.com/oceanacademy_official?igsh=Z2Z0Y2plMWQyd2lo",
                },
                {
                  Icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/company/oceanacademyedu/",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 hover:border-[#A6FF5D]/40 hover:bg-white/5 hover:scale-110 transition"
                >
                  <Icon
                    size={17}
                    className="text-gray-400 hover:text-[#A6FF5D] transition"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex flex-col items-center md:items-start space-y-6 max-w-sm">
          <h3 className="text-[#A6FF5D] font-semibold text-lg">Contact Info</h3>

          <div className="space-y-5 text-sm text-gray-300 w-full">
            {/* Address */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <MapPin size={18} />
              </div>
              <p className="leading-relaxed">
                No. 10, 2nd Floor, 45 Feet Road, Vengateswara Nagar, Near HDFC
                Bank, Saram, Puducherry – 605013.
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-3 justify-start sm:flex flex-row items-center">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Phone size={18} />
              </div>
              <p>0413-2240580</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-3 justify-start md:flex flex-row items-center">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Mail size={18} />
              </div>
              <p>info@oceanacademy.in</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/faq")}
            className="mt-4 bg-[#A6FF5D] text-black px-6 py-3 rounded-xl font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(166,255,93,0.4)] transition"
          >
            FAQs
          </button>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
        <p>© 2026 Ocean Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
