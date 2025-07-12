import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Get instant responses to your queries",
      contact: "+1 437 908 4422",
      action: "Send Message",
      link: "https://wa.me/+14379084422?text=Hi! I'm interested in your services. Can we discuss more?",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Send us detailed project requirements",
      contact: "gomdigitalconsultancy@gmail.com",
      action: "Send Email",
      link: "mailto:gomdigitalconsultancy@gmail.com?subject=Collaboration%20Request&body=Hi%20GOM%20Team%2C%20I%20would%20like%20to%20collaborate%20with%20you...",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      description: "Speak directly with our team",
      contact: "+1 437 908 4422",
      action: "Call Now",
      link: "tel:+14379084422",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white">
      <section ref={ref} className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Start Your
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Journey
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? We're here to help you achieve your digital goals. 
              Choose your preferred way to connect with our team.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${method.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                
                <p className="text-gray-800 font-semibold mb-6">
                  {method.contact}
                </p>
                
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center bg-gradient-to-r ${method.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Office Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-sm text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Office</h3>
            
            <div className="text-gray-600 space-y-2">
              <p className="text-lg">200 Elm Street</p>
              <p className="text-lg">Toronto, Ontario, Canada</p>
              <p className="text-lg">Postal Code: M5T 1K4</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;