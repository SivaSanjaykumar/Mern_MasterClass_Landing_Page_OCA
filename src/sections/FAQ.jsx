import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "Is this masterclass suitable for beginners?",
      answer:
        "Yes, this masterclass starts from basics and gradually moves to advanced concepts.",
    },
    {
      question: "Will I get lifetime access?",
      answer:
        "Yes, you will get lifetime access to recordings and all resources.",
    },
    {
      question: "Do I need prior coding knowledge?",
      answer:
        "No, everything will be explained step-by-step from scratch.",
    },
    {
      question: "Will there be real-world projects?",
      answer:
        "Yes, you will build production-level MERN applications.",
    },
    {
      question: "Is there placement support?",
      answer:
        "Yes, we provide resume guidance, interview prep, and career support.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">

      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Frequently Asked <span className="text-[#A6FF5D]">Questions</span>
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          Everything you need to know before joining 🚀
        </p>
      </div>

      {/* 🔥 FAQ LIST */}
      <div className="max-w-3xl mx-auto flex flex-col gap-5">

        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="relative p-[1px] rounded-xl bg-gradient-to-r from-[#A6FF5D]/30 to-white/10"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-[#A6FF5D]/10 blur-2xl rounded-xl"></div>

            <div className="relative bg-gray-900 rounded-xl border border-[#A6FF5D]/20">

              {/* 🔥 Question */}
              <div
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center p-5 cursor-pointer"
              >
                <h3 className="text-sm md:text-base font-medium">
                  {faq.question}
                </h3>

                {/* Arrow */}
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#A6FF5D]" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {/* 🔥 Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 px-5 pb-5"
                    : "max-h-0 opacity-0 px-5"
                }`}
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default FAQ;