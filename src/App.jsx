import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQS from "./pages/FAQS";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";
import PopupModal from "./components/PopupModal";
import WebinarRegistrationForm from "./pages/WebinarRegisteration";

function AppContent() {
  const location = useLocation();

  // ❌ List of paths where modal should NOT appear
  const hidePopupPaths = ["/youtube-mentorship/webinar-registration"];

  // ✅ If current path is NOT in the list, show the modal
  const shouldShowPopup = !hidePopupPaths.includes(location.pathname);

  return (
    <>
      {shouldShowPopup && <PopupModal />}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        {/* <Route
          path="/youtube-mentorship/webinar-registration"
          element={<WebinarRegistrationForm />}
        /> */}
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
