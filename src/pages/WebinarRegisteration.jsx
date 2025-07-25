import React, { useState } from "react";
import { CheckCircle2, Loader2, CalendarHeart } from "lucide-react";
import webinarVideo from "../assets/webinar-video.mp4";

const WebinarForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxiTGc6ldnnIPyD23JtITc2H_A1EYecp-qpDuiANlPgW09DBVuPTT90bOYxLqEK5Lwq/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2 rounded-full items-center gap-2 mb-6 text-sm font-semibold shadow-lg text-white">
            <CalendarHeart size={18} />
            <span>Webinar Registration</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Free{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              YouTube Mentorship
            </span>{" "}
            Webinar Registration Form
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join our exclusive online webinar and learn how to grow your brand
            and reach using YouTube. Limited seats available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Video Section */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-white">
              <video
                src={webinarVideo}
                className="w-full h-auto aspect-video object-cover rounded-2xl"
                controls
                preload="metadata"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Registered", value: "2K+" },
                { label: "Interactive", value: "Live" },
                { label: "Access", value: "Free" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                >
                  <div className="text-2xl font-bold text-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="order-1 lg:order-2">
            <form
              onSubmit={handleSubmit}
              className="relative bg-white shadow-2xl border border-gray-200 rounded-3xl p-8 lg:p-10"
            >
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900">
                  Secure Your Seat
                </h2>
                <p className="text-gray-500">
                  Fill in your details to get instant access
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { name: "name", placeholder: "Your full name" },
                  {
                    name: "email",
                    placeholder: "you@example.com",
                    type: "email",
                  },
                  { name: "phone", placeholder: "10-digit phone number" },
                ].map(({ name, placeholder, type }, idx) => (
                  <div key={idx} className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 capitalize">
                      {name}
                    </label>
                    <input
                      name={name}
                      type={type || "text"}
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    />
                    {errors[name] && (
                      <p className="text-red-500 text-sm">{errors[name]}</p>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 disabled:opacity-50 px-6 py-4 rounded-xl text-white font-semibold text-lg transition-transform transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin" size={20} />{" "}
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Register Now <CalendarHeart size={20} />
                    </span>
                  )}
                </button>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" /> Secure
                  Registration
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" /> Instant
                  Access
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Registration Successful!
            </h2>
            <p className="text-gray-600 mb-6">
              You will receive the webinar link shortly. Check your email.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold transition hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebinarForm;
