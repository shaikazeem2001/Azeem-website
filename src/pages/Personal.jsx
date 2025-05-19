import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hobbies from "../components/Hobbies";
import "./personal.css";

const Personal = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -90 }}
      transition={{ duration: 0.1 }}
    >
      <Navbar />
      <Hobbies />
      <Footer />
    </motion.div>
  );
};

export default Personal;
