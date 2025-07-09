import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "What services does your agency offer?",
    answer:
      "This question helps potential clients understand the range of services your agency provides, such as digital marketing, social media management, content creation, SEO, PPC, email marketing, and more.",
  },
  {
    question: "How can your agency help my business?",
    answer:
      "We identify growth opportunities, enhance your brand visibility, and use strategic content and marketing to boost your conversions.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing based on project scope and goals. We provide transparent estimates with no hidden costs.",
  },
  {
    question: "What sets your agency apart from competitors?",
    answer:
      "We combine creativity, data-driven insights, and personalized strategies to deliver impactful results. We care about your brand like our own.",
  },
  {
    question: "How do you stay up-to-date with trends?",
    answer:
      "Our team constantly researches, tests, and adapts to the latest industry changes to keep your business ahead of the curve.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full py-20 px-4 md:px-12"
      id="faqs"
    >
      {/* 🔹 Capsule Heading */}
      <div className="text-center mb-4">
        <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-medium border border-purple-300 text-sm bg-purple-100 text-purple-700">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1 rounded-full">
            <FaQuestionCircle size={14} />
          </span>
          FAQs
        </p>
      </div>

      {/* 🔹 Section Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-black">
        Frequently{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Asked Questions
        </span>
      </h2>

      {/* 🔹 FAQ List */}
      <div className="max-w-5xl mx-auto space-y-10">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-b border-gray-300/20 pb-4 transition-all duration-300"
          >
            {/* Question Row */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggle(i)}
            >
              <h3 className="text-lg md:text-xl font-semibold flex items-center text-black">
                <span className="text-purple-500 font-bold mr-2">
                  {String(i + 1).padStart(2, "0")}/
                </span>
                {faq.question}
              </h3>
              <motion.span
                className="text-purple-600"
                initial={false}
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaChevronDown size={20} />
              </motion.span>
            </div>

            {/* Answer Animated */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 mt-4 text-[1rem] font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Faqs;
