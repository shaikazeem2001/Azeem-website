import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar />
        <div className="contact-broadsheet-container">
          <div className="news-paper-card contact-telegram-card">
            <div className="news-tape-corner" />

            <div className="contact-header-bar">
              <span className="stamp-classified">TELEGRAPH WIRE</span>
              <h2 className="contact-main-title">LETTER TO THE EDITOR &amp; TELEGRAPH</h2>
              <div className="contact-subline">DIRECT LINE TO AZEEM SHAIK • BIRMINGHAM, AL &amp; NEW YORK</div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span className="field-label">1. SENDER NAME</span>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name or publication"
                  />
                </div>
              </label>

              <label>
                <span className="field-label">2. RETURN EMAIL / TELEGRAPH ADDRESS</span>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                  />
                </div>
              </label>

              <label>
                <span className="field-label">3. DISPATCH MESSAGE</span>
                <div className="input-wrapper">
                  <textarea
                    className="text-area"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your dispatch or inquiry details..."
                  ></textarea>
                </div>
              </label>

              <div className="direct-mail-note">
                <Mail size={16} /> <span>DIRECT TELEGRAPH: shaikazeemcse@gmail.com</span>
              </div>

              <button type="submit" className="news-btn primary-news-btn submit-btn" disabled={status === "sending"}>
                {status === "sending" ? "TRANSMITTING TELEGRAPH..." : "DISPATCH TELEGRAPH MESSAGE ➔"}
              </button>

              {status === "success" && (
                <p className="success-message">
                  ✓ TELEGRAPH TRANSMITTED SUCCESSFULLY! THANK YOU.
                </p>
              )}
              {status === "error" && (
                <p className="error-message">
                  ⚠ TRANSMISSION ERROR. PLEASE TRY DIRECT EMAIL: SHAIKAZEEMCSE@GMAIL.COM
                </p>
              )}
            </form>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default ContactForm;

