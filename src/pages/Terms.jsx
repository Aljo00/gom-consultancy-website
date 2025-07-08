import React from "react";
import { MdGavel } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Terms = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen pt-28 pb-20 px-6 md:px-20 bg-gradient-to-br from-[#e6f4ff] to-[#f7fbff]"
    >
      {/* Capsule Header */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold border border-blue-300">
          <MdGavel size={18} className="text-blue-600" />
          Terms & Conditions
        </span>
      </div>

      {/* Hero Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
        Our <span className="text-blue-600">Terms</span> of Engagement
      </h1>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto text-gray-800 text-lg leading-relaxed space-y-8 font-medium">
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By engaging the services of GOM Digital Consultancy, you agree to be
            bound by these terms and conditions. Please read them carefully and
            seek legal advice if needed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            2. Services
          </h2>
          <p>
            We will provide digital marketing services as outlined in the
            agreed-upon proposal or contract. Scope, deliverables, and pricing
            will be detailed separately.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            3. Client Responsibilities
          </h2>
          <p>
            The client agrees to cooperate in a timely manner by providing
            access, information, and materials required for service fulfillment.
            Delays caused by the client may affect timelines and results.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            4. Payment Terms
          </h2>
          <p>
            Payment details will be specified in the contract. Invoices are due
            on the agreed-upon schedule. Non-payment may result in paused
            services or contract termination.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            5. Confidentiality
          </h2>
          <p>
            Both parties agree to maintain confidentiality of any proprietary or
            sensitive information shared during the engagement.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Terms;
