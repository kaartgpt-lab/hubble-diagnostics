import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative w-full
        min-h-[100svh] sm:min-h-screen
        text-white flex items-center
        bg-cover bg-no-repeat
      "
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundPosition: "center top",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 py-24 sm:py-0 flex flex-col justify-center text-center sm:text-left items-center sm:items-start">
        {/* Heading – LEFT */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          Advanced. <br />
          <span className="text-blue-500">Accurate.</span> <br />
          Assured.
        </motion.h1>

        {/* Description – RIGHT */}
        <motion.p
          className="text-sm sm:text-lg text-gray-200 mb-8 max-w-lg"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <span className="font-semibold text-xl text-blue-400 block mb-2">
            Kanpur’s First Zero-Radiation Diagnostic Centre
          </span>
          World-class Fetal Medicine, Radiology, and Pathology — powered by
          technology and guided by global expertise.
        </motion.p>

        {/* Buttons + Hours – BOTTOM */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          {/* Buttons */}
          <div className="flex gap-4 justify-center sm:justify-start">
            <Link
              to="/contact"
              className="bg-blue-950 hover:bg-blue-800 px-6 py-3 rounded-lg font-medium shadow-lg transition"
            >
              Book Appointment
            </Link>

            <Link
              to="/services"
              className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-950 transition"
            >
              View Services
            </Link>
          </div>

          {/* Opening Hours */}
          <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-xl text-left max-w-xs mx-auto sm:mx-0">
            <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              <span className="font-medium">Mon – Sat:</span> 10:00 am – 7:00 pm
              <br />
              <span className="font-medium">Sun:</span> 12:00 noon – 7:00 pm
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
