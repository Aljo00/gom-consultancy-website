import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton"; // ✅ Import it
import Home from "./pages/home";
import About from "./pages/About";
import FAQS from "./pages/FAQS";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQS />} />
      </Routes>
      <Footer />
      <WhatsAppButton /> {/* ✅ Add here so it's globally visible */}
    </Router>
  );
}

export default App;
