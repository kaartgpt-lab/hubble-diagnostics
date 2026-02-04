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
    <section className="relative  w-full sm:pt-45 text-zinc-900 flex items-center overflow-x-hidden">
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
            text-white
          "
          variants={slideLeft}
        >
          Advanced. <br />
          <span className="text-white">Accurate.</span> <br />
          Assured.
        </motion.h1>

        {/* Description – desktop only */}
        <motion.p
          className="
            hidden sm:block
            text-sm text-white mb-4 max-w-xl
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
          <div className="flex w-full ">
              {/* Buttons – always visible */}
              <div className="flex  gap-2 sm:gap-3">
            <Link
              to="/contact"
              className="
                bg-[#2d69ff] hover:bg-[#4baa7d] text-white
                px-3 py-0.5 text-xs max-h-fit
                sm:px-4 sm:py-2 sm:text-sm
                rounded-md font-medium shadow transition
              "
            >
              Book Appointment
            </Link>

            <Link
              to="/services"
              className="
                border border-gray-200 text-gray-200 max-h-fit
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
    bg-white/50 backdrop-blur-lg
    border border-white/30
    p-4 text-sm
    rounded-xl shadow-lg
    max-w-[220px]
  "
>
  {/* Header */}
  <div className="flex items-center gap-3 mb-3 border-b border-white/30 pb-2">
    <div className="p-2 bg-[#2d69ff]/10 rounded-lg text-[#2d69ff]">
      {/* Clock Icon */}
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
      <h3 className="font-semibold text-sm text-gray-900">Opening Hours</h3>

      {/* Open Today */}
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
  <div className="space-y-2 text-xs text-gray-800">
    <div className="flex justify-between border-b gap-2 border-white/30 pb-2">
      <span className="font-medium text-gray-700">Mon – Sat</span>
      <span className="font-semibold">9:00 AM – 7:00 PM</span>
    </div>

    <div className="flex justify-between pt-1">
      <span className="font-medium text-gray-700">Sunday</span>
      <span className="font-semibold">9:00 AM – 6:00 PM</span>
    </div>
  </div>
</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
