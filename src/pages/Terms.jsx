import React from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Terms = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const termsData = [
    {
      title: "Acceptance of Terms",
      content: "By engaging the services of GOM Digital Consultancy, you agree to be bound by these terms and conditions. Please read them carefully and seek legal advice if needed."
    },
    {
      title: "Services",
      content: "We will provide digital marketing services as outlined in the agreed-upon proposal or contract. Scope, deliverables, and pricing will be detailed separately."
    },
    {
      title: "Client Responsibilities",
      content: "The client agrees to cooperate in a timely manner by providing access, information, and materials required for service fulfillment. Delays caused by the client may affect timelines and results."
    },
    {
      title: "Payment Terms",
      content: "Payment details will be specified in the contract. Invoices are due on the agreed-upon schedule. Non-payment may result in paused services or contract termination."
    },
    {
      title: "Confidentiality",
      content: "Both parties agree to maintain confidentiality of any proprietary or sensitive information shared during the engagement."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white">
      <section ref={ref} className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Terms & Conditions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Terms of
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Engagement
              </span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Clear, transparent terms that govern our professional relationship and service delivery
            </p>
          </motion.div>

          <div className="space-y-8">
            {termsData.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {index + 1}. {term.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {term.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;