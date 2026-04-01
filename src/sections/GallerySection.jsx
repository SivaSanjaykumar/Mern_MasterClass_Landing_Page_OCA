// GallerySection.jsx
import img1 from "../assets/gallery/image1.png";
import img2 from "../assets/gallery/image2.png";
import img3 from "../assets/gallery/image3.png";
import img4 from "../assets/gallery/image7.png";
import img5 from "../assets/gallery/image5.png";
import img6 from "../assets/gallery/image4.png";

const images = [
  { src: img1, label: "Live Session" },
  { src: img2, label: "Hands-on Practice" },
  { src: img3, label: "Classroom Training" },
  { src: img4, label: "Project Workshop" },
  { src: img5, label: "Mentor Session" },
  { src: img6, label: "Course Session" },
];

const GallerySection = () => {
  return (
    <>
      <style>{`
        @keyframes galleryFadeUp {
          from { opacity: 0; transform: translateY(40px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        .gallery-card {
          opacity: 0;
          animation: galleryFadeUp 0.8s cubic-bezier(.23,1,.32,1) forwards;
        }
        .gallery-card:nth-child(1) { animation-delay: 0.05s; }
        .gallery-card:nth-child(2) { animation-delay: 0.15s; }
        .gallery-card:nth-child(3) { animation-delay: 0.25s; }
        .gallery-card:nth-child(4) { animation-delay: 0.35s; }
        .gallery-card:nth-child(5) { animation-delay: 0.45s; }
        .gallery-card:nth-child(6) { animation-delay: 0.55s; }

        .gallery-card img {
          transition: transform 0.6s cubic-bezier(.23,1,.32,1);
        }
        .gallery-card:hover img {
          transform: scale(1.06);
        }
        .gallery-overlay {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }

        @keyframes breatheGlow {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.3; }
        }
        .glow-orb { animation: breatheGlow 5s ease-in-out infinite; }
      `}</style>

      <section className="bg-black text-white py-14 sm:py-10 px-4 sm:px-6 relative overflow-hidden">

        {/* Ambient orbs */}
        <div className="glow-orb absolute -top-20 left-1/4 w-80 h-80 rounded-full bg-[#A6FF5D]/10 blur-[100px] pointer-events-none" />
        <div className="glow-orb absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#A6FF5D]/8 blur-[80px] pointer-events-none"
          style={{ animationDelay: "2.5s" }} />

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 relative z-10">
   

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
            Learning Moments{" "}
            <span
              className="text-[#A6FF5D]"
              style={{ textShadow: "0 0 40px rgba(166,255,93,0.35)" }}
            >
              Gallery
            </span>
          </h2>

          <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            A quick look at our sessions, practice time, and classroom
            experience at Ocean Academy.
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#A6FF5D]/20 to-transparent mb-12" />

        {/* Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 relative z-10">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-card group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(166,255,93,0.15) 0%, rgba(255,255,255,0.03) 100%)",
                padding: "1px",
              }}
            >
              {/* Border gradient wrapper */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d0d]">

                {/* Image */}
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover overlay */}
                <div className="gallery-overlay absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 rounded-2xl">
                  {/* Green corner accents */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#A6FF5D] rounded-tl-md" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#A6FF5D] rounded-tr-md" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#A6FF5D] rounded-bl-md" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#A6FF5D] rounded-br-md" />

                  {/* Label */}
                  <span className="text-[#A6FF5D] text-xs font-semibold uppercase tracking-widest
                                   border border-[#A6FF5D]/40 rounded-full px-4 py-1.5 bg-[#A6FF5D]/10">
                    {img.label}
                  </span>
                </div>

                {/* Bottom label bar — always visible */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3
                                bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xs font-medium tracking-wide">{img.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#A6FF5D]/20 to-transparent mt-12" />

      </section>
    </>
  );
};

export default GallerySection;