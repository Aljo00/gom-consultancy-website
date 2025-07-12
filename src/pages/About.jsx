import React, { Suspense, lazy } from "react";
import { User, Target, Users as UsersIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ceoImage from "../assets/CEO.jpg";

const Values = lazy(() => import("../components/Values"));
const Team = lazy(() => import("../components/Team"));

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Hero Section */}
      <section ref={ref} className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <User className="w-4 h-4 mr-2" />
              About Us
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              From Vision to
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another digital agency. We're your partners in transformation, 
              turning ambitious ideas into measurable success stories.
            </p>
          </motion.div>

          {/* CEO Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ceoImage}
                  alt="Amal Gopal - CEO"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">8+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Amal Gopal</h2>
                <p className="text-purple-600 font-semibold mb-6">CEO & Founder</p>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  My journey began with chaos, confusion, and an unrelenting drive to figure things out. 
                  Starting with a YouTube channel in India with no team, no tools, and unreliable internet — 
                  just pure curiosity and hunger to grow.
                </p>
                
                <p>
                  Failures were constant. Videos flopped, clients backed out, and countless hours were spent 
                  just trying to move forward. But those struggles taught me how the digital world truly works — 
                  not in theory, but in the trenches.
                </p>
                
                <p>
                  Today, GOM Digital Consultancy stands as proof that resilience pays off. We've supported 
                  100+ creators and brands, scaling YouTube channels, launching businesses, and driving growth — 
                  often without paid ads.
                </p>
                
                <p className="text-purple-600 font-semibold">
                  This isn't just about digital growth — it's about building something real. 
                  And we're just getting started.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative digital solutions that drive real growth, 
                build authentic connections, and create lasting impact in the digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in digital transformation, helping businesses of all sizes 
                achieve their full potential through strategic innovation and exceptional execution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values and Team */}
      <Suspense fallback={
        <div className="py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
        </div>
      }>
        <Values />
        <Team />
      </Suspense>
    </div>
  );
};

export default About;