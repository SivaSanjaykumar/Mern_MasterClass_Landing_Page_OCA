import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#0B1D2A] text-white px-6 py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* ================= LEFT ================= */}
        <div>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://oceanacademy.in/_next/static/media/oa.9c315ba3.png"
              alt="Ocean Academy"
              className="h-10"
            />
            
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
            Ocean was founded on the principle of building and implementing
            great ideas that drive progress for students and clients.
          </p>

          {/* Social */}
          <h3 className="text-[#A6FF5D] font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4">
            {[
              { Icon: FaFacebookF,  href: "https://www.facebook.com/oceanacademy.co.in/" },
              { Icon: FaYoutube,    href: "https://youtube.com/@ocean_academy?si=ZuVRL9lTglv3WI9S" },
              { Icon: FaInstagram,  href: "https://www.instagram.com/oceanacademy_official?igsh=Z2Z0Y2plMWQyd2lo" },
              { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/oceanacademyedu/" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-[#A6FF5D]/40 hover:scale-110 transition cursor-pointer"
              >
                <Icon size={18} className="text-gray-400 hover:text-[#A6FF5D]" />
              </a>
            ))}
          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div>

          <h3 className="text-[#A6FF5D] font-semibold mb-6 text-lg">
            Contact Info
          </h3>

          <div className="space-y-6 text-sm text-gray-300">

            {/* Address */}
            <div className="flex gap-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 h-fit">
                <MapPin size={18} />
              </div>
              <p>
                No. 10, 2nd Floor, 45 Feet Road, Vengateswara Nagar,
                Near HDFC Bank, Saram, Puducherry – 605013.
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Phone size={18} />
              </div>
              <p>0413-2240580</p>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Mail size={18} />
              </div>
              <p>info@oceanacademy.in</p>
            </div>

          </div>

          {/* CTA */}
          <button onClick={() => navigate("/faq")} className="mt-8 bg-[#A6FF5D] text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
            FAQs
          </button>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

        <p>© 2026 Ocean Academy. All Rights Reserved.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 md:mt-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#A6FF5D] text-black hover:scale-110 transition"
        >
          <ArrowUp size={18} />
        </button>

      </div>

    </footer>
  );
};

export default Footer;