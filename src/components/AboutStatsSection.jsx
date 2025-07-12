import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, Users, Clock, Award, Target } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const stats = [
  { 
    label: "Projects Completed", 
    value: 541, 
    suffix: "+", 
    icon: Target,
    color: "text-purple-600"
  },
  { 
    label: "Years of Experience", 
    value: 8, 
    suffix: "+", 
    icon: TrendingUp,
    color: "text-pink-600"
  },
  { 
    label: "Client Satisfaction", 
    value: 99, 
    suffix: "%", 
    icon: Award,
    color: "text-purple-600"
  },
  { 
    label: "Client Support", 
    value: "24x7", 
    isStatic: true, 
    icon: Clock,
    color: "text-pink-600"
  },
  { 
    label: "Happy Clients", 
    value: 100, 
    suffix: "+", 
    icon: Users,
    color: "text-purple-600"
  },
];

const AboutStatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

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
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Impact
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Driving Success Through
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Strategic Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We blend creativity with data-driven strategies to deliver measurable results 
            that transform businesses and accelerate growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.isStatic ? (
                    stat.value
                  ) : (
                    inView && <CountUp end={stat.value} duration={2.5} />
                  )}
                  {!stat.isStatic && stat.suffix}
                </div>
                
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Learn More About Us</span>
            <TrendingUp className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStatsSection;