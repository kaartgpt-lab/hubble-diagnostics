import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full text-white flex items-end overflow-hidden h-[90vh] sm:h-[85vh]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content at Bottom */}
      <div className="relative z-10 w-full px-4 sm:px-8 py-6 sm:py-8 flex flex-col justify-end text-left">
        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Advanced. <br />
          <span className="text-blue-500">Accurate.</span> <br />
          Assured.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xs sm:text-sm md:text-sm text-gray-200 mb-4 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <span className="font-semibold text-sm sm:text-base text-blue-400 block mb-1">
            Kanpur’s First Zero-Radiation Diagnostic Centre
          </span>
          World-class Fetal Medicine, Radiology, and Pathology — powered by
          technology and guided by global expertise.
        </motion.p>

        {/* Buttons + Hours */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          {/* Buttons */}
          <div className="flex gap-3 justify-start">
            <Link
              to="/contact"
              className="bg-blue-950 hover:bg-blue-800 px-4 py-2 rounded-md font-medium text-sm shadow transition"
            >
              Book Appointment
            </Link>

            <Link
              to="/services"
              className="border border-white px-4 py-2 rounded-md font-medium text-sm hover:bg-white hover:text-blue-950 transition"
            >
              View Services
            </Link>
          </div>

          {/* Opening Hours */}
          <div className="bg-white/10 backdrop-blur-lg p-3 rounded-lg shadow text-left text-xs sm:text-sm max-w-[200px]">
            <h3 className="font-semibold text-sm mb-1">Opening Hours</h3>
            <p className="text-gray-200 leading-tight">
              <span className="font-medium">Mon – Sat:</span> 10am – 7pm
              <br />
              <span className="font-medium">Sun:</span> 12pm – 7pm
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
