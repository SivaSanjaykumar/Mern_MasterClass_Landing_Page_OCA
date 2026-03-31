import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, ChevronDown, MessageCircle, Target, Wrench } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    label: "General",
    emoji: <Target size={16} />,
    faqs: [
      {
        question: "Is this masterclass suitable for complete beginners?",
        answer:
          "Absolutely. This masterclass is designed ground-up for beginners. We start with the very fundamentals of JavaScript and web development before gradually progressing to full-stack MERN applications. No prior coding experience is required — just a laptop and the willingness to learn.",
      },
      {
        question: "How is this different from free YouTube tutorials?",
        answer:
          "YouTube gives you fragments. This masterclass gives you a structured, mentor-guided journey — live sessions, real-world projects, doubt clearing, placement support, and a peer community. You don't just watch; you build, deploy, and get hired.",
      },
      {
        question: "What is the duration of the masterclass?",
        answer:
          "The live masterclass is an 8-hour intensive session held on a single day. After that, you get lifetime access to all recordings, project files, and resources so you can revisit at your own pace.",
      },
      {
        question: "Will the sessions be recorded?",
        answer:
          "Yes. Every session is recorded in HD and will be available in your student dashboard within 24 hours. You get lifetime access to all recordings, including any bonus content added in the future.",
      },
      {
        question: "What tech stack will be covered?",
        answer:
          "We cover the complete MERN stack — MongoDB, Express.js, React.js, and Node.js — along with essential tools like Git, REST APIs, JWT authentication, deployment on Vercel & Render, and best practices for clean, scalable code.",
      },
      {
        question: "Is there a certificate on completion?",
        answer:
          "Yes. Upon completing the masterclass and submitting your project, you will receive a verified Certificate of Completion that you can add to your LinkedIn profile and resume to stand out to recruiters.",
      },
      {
        question: "What if I miss the live session?",
        answer:
          "No worries. You can watch the full recording at your convenience. We also host periodic doubt-clearing sessions that you can attend to get your questions answered by the mentors.",
      },
    ],
  },
  {
    label: "Placement",
    emoji: <Briefcase size={16} />,
    faqs: [
      {
        question: "Do you guarantee placement after the masterclass?",
        answer:
          "We provide strong placement assistance — resume reviews, mock interviews, LinkedIn profile optimization, and direct referrals to hiring partners. While we cannot guarantee a job (no honest program can), our track record speaks for itself: 95% of our students who actively engage with placement support land roles within 3 months.",
      },
      {
        question: "Which companies have your students been placed in?",
        answer:
          "Our students have been placed in top MNCs and product companies including TCS, Infosys, Wipro, Cognizant, HCL, Accenture, Capgemini, and several funded startups. We also have alumni in companies like Zoho, Freshworks, and global product firms.",
      },
      {
        question: "Will I get interview preparation support?",
        answer:
          "Yes. Our placement team conducts mock technical interviews, HR rounds, and aptitude sessions. You will also get access to our curated question bank covering DSA basics, JavaScript fundamentals, React, Node.js, and system design concepts frequently asked in MNC interviews.",
      },
      {
        question:
          "Is placement support available for freshers and career switchers?",
        answer:
          "Absolutely. Our program is specifically designed for freshers with no experience and professionals switching careers into tech. We tailor the resume and interview preparation based on your background to maximize your chances.",
      },
      {
        question: "How long does the placement support last?",
        answer:
          "You get 6 months of dedicated placement support after course completion. Our placement coordinators will actively match your profile with relevant openings and prep you for each interview cycle.",
      },
      {
        question: "Do you help with portfolio and GitHub profile building?",
        answer:
          "Yes. During the masterclass you will build 2–3 production-quality projects that will directly form your portfolio. We guide you on how to document, deploy, and present these projects professionally on GitHub and your personal portfolio site.",
      },
    ],
  },
  {
    label: "Tech",
    emoji: <Wrench size={16} />,
    faqs: [
      {
        question: "What tech stack will be taught in detail?",
        answer:
          "We cover the full MERN stack — MongoDB for database, Express.js for server-side APIs, React.js for the frontend UI, and Node.js as the runtime. We also touch on essential tooling: Git & GitHub, REST API design, JWT authentication, environment variables, and deployment pipelines.",
      },
      {
        question: "Will I learn how to deploy real applications?",
        answer:
          "Yes. Deployment is a core part of the curriculum. You will learn to deploy your backend on Render, your frontend on Vercel, and your database on MongoDB Atlas. By the end, your projects will be live on the internet with real URLs you can share with recruiters.",
      },
      {
        question: "Do I need to know JavaScript before joining?",
        answer:
          "Basic familiarity with JavaScript is helpful but not mandatory. We start with a focused JS revision covering ES6+ concepts like arrow functions, promises, async/await, destructuring, and modules — everything you need to confidently work with the MERN stack.",
      },
      {
        question: "Will we cover React hooks and state management?",
        answer:
          "Absolutely. We cover all essential React hooks — useState, useEffect, useContext, useRef, and custom hooks. We also cover React Router for navigation and introduce state management patterns so you can build complex, scalable UIs.",
      },
      {
        question: "Is MongoDB covered from scratch?",
        answer:
          "Yes. We cover MongoDB fundamentals including collections, documents, CRUD operations, schema design with Mongoose, relationships, indexing, and query optimization. You will understand how to model real-world data efficiently.",
      },
      {
        question: "Will authentication and security be covered?",
        answer:
          "Yes. We implement a complete authentication system from scratch — user registration, login, password hashing with bcrypt, JWT token generation and verification, protected routes on both frontend and backend, and security best practices to prevent common vulnerabilities.",
      },
      {
        question: "What kind of projects will I build?",
        answer:
          "You will build production-grade MERN projects including a full-stack task manager with auth, a REST API with CRUD and role-based access, and a deployable portfolio project. These are not toy apps — they are structured to be recruiter-ready and GitHub-portfolio worthy.",
      },
    ],
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <div
    className="relative rounded-xl overflow-hidden"
    style={{
      background: isOpen
        ? "linear-gradient(135deg, rgba(166,255,93,0.07) 0%, rgba(255,255,255,0.02) 100%)"
        : "transparent",
      border: isOpen
        ? "1px solid rgba(166,255,93,0.25)"
        : "1px solid rgba(255,255,255,0.07)",
      transition: "border-color 0.3s, background 0.3s",
    }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-start justify-between gap-4 p-5 text-left"
    >
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: isOpen
              ? "rgba(166,255,93,0.15)"
              : "rgba(255,255,255,0.06)",
            color: isOpen ? "#A6FF5D" : "#666",
            border: isOpen
              ? "1px solid rgba(166,255,93,0.3)"
              : "1px solid rgba(255,255,255,0.1)",
            transition: "all 0.3s",
            fontSize: "10px",
          }}
        >
          {index + 1}
        </span>
        <h3
          className="text-sm md:text-base font-medium leading-snug transition-colors duration-300"
          style={{ color: isOpen ? "#fff" : "#ccc" }}
        >
          {faq.question}
        </h3>
      </div>

      <div
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300"
        style={{
          background: isOpen
            ? "rgba(166,255,93,0.15)"
            : "rgba(255,255,255,0.05)",
          border: isOpen
            ? "1px solid rgba(166,255,93,0.3)"
            : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <ChevronDown
          size={13}
          className="transition-transform duration-300"
          style={{
            color: isOpen ? "#A6FF5D" : "#666",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden"
        >
          <p className="text-gray-400 text-sm leading-relaxed px-5 pb-5 pl-14">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const handleCategoryChange = (i) => {
    setActiveCategory(i);
    setOpenIndex(null);
  };

  return (
    <section className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <style>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.8; }
        }
        .faq-orb { animation: glowPulse 4s ease-in-out infinite; }
      `}</style>

      {/* Ambient orb */}
      <div className="faq-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#A6FF5D]/4 blur-[120px] pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Frequently Asked{" "}
          <span
            className="text-[#A6FF5D]"
            style={{ textShadow: "0 0 30px rgba(166,255,93,0.4)" }}
          >
            Questions
          </span>
        </h2>
        <p className="text-gray-500 mt-3 text-sm">
          Everything you need to know before joining the masterclass.
        </p>
      </motion.div>

      {/* Category tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center gap-2 sm:gap-3 mb-8 flex-wrap"
      >
        {FAQ_CATEGORIES.map((cat, i) => (
          <button
            key={cat.label}
            onClick={() => handleCategoryChange(i)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            style={{
              background:
                activeCategory === i
                  ? "rgba(166,255,93,0.12)"
                  : "rgba(255,255,255,0.04)",
              border:
                activeCategory === i
                  ? "1px solid rgba(166,255,93,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
              color: activeCategory === i ? "#A6FF5D" : "#888",
              boxShadow:
                activeCategory === i
                  ? "0 0 16px rgba(166,255,93,0.12)"
                  : "none",
            }}
          >
            <span>{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* FAQ list */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-3xl mx-auto flex flex-col gap-3"
      >
        {FAQ_CATEGORIES[activeCategory].faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </motion.div>

      {/* Still have questions CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto mt-10"
      >
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl p-5 sm:p-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(166,255,93,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(166,255,93,0.15)",
          }}
        >
          <div>
            <p className="text-white font-semibold text-sm sm:text-base">
              Still have questions?
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
              Our team typically replies within a few hours.
            </p>
          </div>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex-shrink-0"
            style={{
              background: "rgba(37,211,102,0.12)",
              border: "1px solid rgba(37,211,102,0.3)",
              color: "#25D366",
            }}
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
