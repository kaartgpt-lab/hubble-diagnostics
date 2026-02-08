import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ----------------------------
   Animation Variants
---------------------------- */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-start sm:items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
      </video>

      {/* Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 pt-20 sm:pt-24 md:pt-20 pb-10 flex flex-col"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="
            text-3xl leading-tight mb-4
            sm:text-5xl sm:leading-tight sm:mb-3
            md:text-6xl
            font-bold text-white
          "
          variants={slideLeft}
        >
          Advanced. <br />
          <span className="text-[#6395ee]">Accurate.</span> <br />
          Assured.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="
            text-base text-white/90 max-w-2xl leading-relaxed
            mb-4 sm:mb-5 md:mb-4 lg:mb-3
          "
          variants={slideRight}
        >
          <span className="font-semibold text-lg text-[#6395ee] block mb-2">
            Kanpur’s First Zero-Radiation Diagnostic Centre
          </span>
          World-class Fetal Medicine, Radiology, and Pathology — powered by
          technology and guided by global expertise.
        </motion.p>

        {/* Buttons + Hours */}
        <motion.div
          className="
            flex flex-col gap-6
            sm:flex-row sm:items-center sm:justify-between
            w-full
          "
          variants={slideUp}
        >
          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="
                bg-[#5B65DC] hover:bg-[#6395ee] text-white
                px-5 py-2.5 text-sm sm:text-base
                rounded-lg font-semibold shadow-lg shadow-blue-500/30
                transition-all
              "
            >
              Book Appointment
            </Link>

            <Link
              to="/services"
              className="
                bg-white/10 hover:bg-white
                text-white hover:text-[#122056]
                border border-white/30
                px-5 py-2.5 text-sm sm:text-base
                rounded-lg font-semibold
                transition-all backdrop-blur-sm
              "
            >
              View Services
            </Link>
          </div>

          {/* Opening Hours */}
          <div
            className="
              sm:w-[280px] w-80
              bg-white/85 backdrop-blur-lg
              border border-white/30
              p-4 sm:p-5
              rounded-2xl shadow-xl
            "
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3 border-b border-gray-200/60 pb-3">
              <div className="p-2 bg-[#6395ee]/10 rounded-lg text-[#122056]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                  Opening Hours
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                  </span>
                  <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">
                    Open Today
                  </span>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="space-y-2 text-sm text-gray-800">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600">Mon – Sat</span>
                <span className="font-bold text-gray-900">
                  9:00 AM – 7:00 PM
                </span>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-gray-200/60">
                <span className="font-medium text-gray-600">Sunday</span>
                <span className="font-bold text-gray-900">
                  9:00 AM – 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
