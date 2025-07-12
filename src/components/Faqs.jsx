import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What makes GOM different from other digital agencies?",
    answer: "We focus on personalized strategy, consistent communication, and result-driven execution. We treat your brand like our own, providing dedicated support and allowing a maximum of 3 revisions per creative."
  },
  {
    question: "How does your content creation process work?",
    answer: "You send us raw photos and videos → We plan and create engaging content → You review and request revisions (if needed) → We schedule and publish it."
  },
  {
    question: "How many revisions do you offer?",
    answer: "We allow a maximum of 3 revisions per creative. Additional revisions may be charged based on scope."
  },
  {
    question: "What is the typical timeline for deliverables?",
    answer: "We usually deliver content within 1–3 working days, depending on the complexity of the task."
  },
  {
    question: "Can I track the progress of my project?",
    answer: "Yes, we maintain transparency by updating you regularly through shared project dashboards or communication channels like WhatsApp, Google chat."
  },
];

const Faqs = ({ showAll = false }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQs
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600">
            Everything you need to know about our services and process
          </p>
        </motion.div>

        <div className="space-y-4">
          {displayedFaqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggle(i)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/faqs"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View All FAQs
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Faqs;