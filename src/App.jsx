import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton"; // ✅ Import it
import Home from "./pages/Home";
import About from "./pages/About";
import FAQS from "./pages/FAQS";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
      <WhatsAppButton /> {/* ✅ Add here so it's globally visible */}
    </Router>
  );
}

export default App;
