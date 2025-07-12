import React from "react";
import { Heart, Target, Lightbulb, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const valuesData = [
  {
    icon: Heart,
    title: "Customer Centric",
    description: "Our primary focus is on our clients' needs. We emphasize identifying their specific obstacles and goals, modifying our strategies to offer personalized service.",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "We are committed to nurturing robust alliances through transparent communication and mutual respect with our clients.",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Customer demands are constantly evolving, so we adapt creatively to deliver meaningful value and stay ahead of expectations.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Maintaining Simplicity",
    description: "We prioritize ethical standards, transparency, and authenticity. Simplicity is at the heart of everything we do.",
    gradient: "from-green-500 to-teal-500"
  },
];

const Values = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Our Values
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stand For
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our core values guide every decision we make and every relationship we build, 
            ensuring we deliver exceptional results with integrity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map(({ icon: Icon, title, description, gradient }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;