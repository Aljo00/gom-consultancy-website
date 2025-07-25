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
import PopupModal from "./components/PopupModal";
import WebinarRegistrationForm from "./pages/WebinarRegisteration";

function App() {
  return (
    <Router>
      <PopupModal />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        <Route
          path="/youtube-mentorship/webinar-registration"
          element={<WebinarRegistrationForm />}
        />
      </Routes>
      <Footer />
      <WhatsAppButton /> {/* ✅ Add here so it's globally visible */}
    </Router>
  );
}

export default App;
