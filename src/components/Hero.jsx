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
    <section className="relative w-full sm:pt-45 text-zinc-900 flex items-center overflow-hidden">
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

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-3 sm:px-8 py-4 sm:py-8 flex flex-col"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Heading – always visible */}
        <motion.h1
          className="
            text-lg leading-tight mb-4
            sm:text-3xl sm:leading-snug sm:mb-2
            md:text-4xl
            font-bold
          "
          variants={slideLeft}
        >
          Advanced. <br />
          <span className="text-[#4baa7d]">Accurate.</span> <br />
          Assured.
        </motion.h1>

        {/* Description – desktop only */}
        <motion.p
          className="
            hidden sm:block
            text-sm text-gray-800 mb-4 max-w-xl
          "
          variants={slideRight}
        >
          <span className="font-semibold text-base text-[#4baa7d] block mb-1">
            Kanpur’s First Zero-Radiation Diagnostic Centre
          </span>
          World-class Fetal Medicine, Radiology, and Pathology — powered by
          technology and guided by global expertise.
        </motion.p>

        {/* Buttons + Hours */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
          variants={slideUp}
        >
          {/* Buttons – always visible */}
          <div className="flex gap-2 sm:gap-3">
            <Link
              to="/contact"
              className="
                bg-[#2d69ff] hover:bg-[#4baa7d] text-white
                px-3 py-1.5 text-xs
                sm:px-4 sm:py-2 sm:text-sm
                rounded-md font-medium shadow transition
              "
            >
              Book Appointment
            </Link>

            <Link
              to="/services"
              className="
                border border-gray-200 text-gray-200
                px-3 py-1.5 text-xs
                sm:px-4 sm:py-2 sm:text-sm
                rounded-md font-medium
                hover:bg-gray-200 hover:text-[#2d69ff]
                transition
              "
            >
              View Services
            </Link>
          </div>

          {/* Opening Hours – desktop only */}
          <div
            className="
              hidden sm:block
              bg-white/20 backdrop-blur-lg
              p-3 text-sm
              rounded-md shadow max-w-[180px]
            "
          >
            <h3 className="font-semibold text-sm mb-1">Opening Hours</h3>
            <p className="text-gray-800 leading-tight">
              <span className="font-medium">Mon – Sat:</span> 10am – 7pm
              <br />
              <span className="font-medium">Sun:</span> 12pm – 7pm
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
