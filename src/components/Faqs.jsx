import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What makes GOM different from other digital agencies?",
    answer:
      "We focus on personalized strategy, consistent communication, and result-driven execution. We treat your brand like our own, providing dedicated support and allowing a maximum of 3 revisions per creative.",
  },
  {
    question: "How does your content creation process work?",
    answer:
      "You send us raw photos and videos → We plan and create engaging content → You review and request revisions (if needed) → We schedule and publish it.",
  },
  {
    question: "How many revisions do you offer?",
    answer:
      "We allow a maximum of 3 revisions per creative. Additional revisions may be charged based on scope.",
  },
  {
    question: "What is the typical timeline for deliverables?",
    answer:
      "We usually deliver content within 1–3 working days, depending on the complexity of the task.",
  },
  {
    question: "Can I track the progress of my project?",
    answer:
      "Yes, we maintain transparency by updating you regularly through shared project dashboards or communication channels like WhatsApp, Google chat.",
  },
  {
    question: "Do you offer long-term or monthly packages?",
    answer:
      "Yes, we offer both project-based services and monthly retainers depending on your needs and goals.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with a wide range of industries including, Fashion & Lifestyle, Events & Weddings, Travel & Tourism, Local BusinessesYouTube, Content Creators",
  },
  {
    question: "What platforms do you manage?",
    answer: "We primarily manage: Youtube, Instagram",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing depends on the scope of work, deliverables, and duration. We offer transparent and customized quotes after understanding your requirements.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work globally. Our team operates flexibly, and key members like Amal Gopal coordinate based on Toronto time for North American clients.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply contact us through WhatsApp, email, or our website. We’ll schedule a discovery call to understand your goals and propose a customized plan.",
  },
];

const Faqs = ({ showAll = false }) => {
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

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full py-20 px-4 md:px-12"
      id="faqs"
    >
      {/* Capsule Heading */}
      <div className="text-center mb-4">
        <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-medium border border-purple-300 text-sm bg-purple-100 text-purple-700">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1 rounded-full">
            <FaQuestionCircle size={14} />
          </span>
          FAQs
        </p>
      </div>
      {/* Hero Text */}
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-black">
        Frequently{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Asked Questions
        </span>
      </h2>
      {/* FAQ List */}
      <div className="max-w-5xl mx-auto space-y-10">
        {displayedFaqs.map((faq, i) => (
          <div
            key={i}
            className="border-b border-gray-300/20 pb-4 transition-all duration-300"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggle(i)}
            >
              <h3 className="text-lg md:text-xl font-semibold flex items-center text-black">
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

      {/* Load More Button */}
      {!showAll && (
        <div className="text-center mt-12">
          <Link
            to="/faqs"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View All FAQs
          </Link>
        </div>
      )}
    </motion.section>
  );
};

export default Faqs;
