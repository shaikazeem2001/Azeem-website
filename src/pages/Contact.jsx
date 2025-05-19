import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

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
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1.2, scale: 1 }}
      exit={{ opacity: 0,x:-90 }}
      transition={{ duration: 0.1 }}
    >
      <Navbar />
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
          </label>
          <label>
            Email
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
          </label>
          <label>
            Message
            <div className="input-wrapper">
              <textarea
                className="text-area"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="mailid">
              <img src="/mail.png" alt="error" />
              <email >shaikazeemcse@gmail.com</email>
            </div>
          </label>
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="success-message">
              Thank you! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="error-message">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
      </motion.div>
    </>
  );
};

export default ContactForm;
