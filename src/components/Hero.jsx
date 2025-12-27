import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat w-full min-h-[100vh] sm:min-h-screen text-white flex items-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 md:px-16 flex flex-col justify-center text-center sm:text-left items-center sm:items-start py-12 sm:py-0"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Advanced. <br />
          <span className="text-blue-500">Accurate.</span> <br />
          Assured.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 max-w-md sm:max-w-lg"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-semibold text-xl text-blue-400">
            Kanpur’s First Zero-Radiation Diagnostic Centre
          </span>
          , offering world-class Fetal Medicine, Radiology, and Pathology
          services — powered by technology, guided by expertise.
        </motion.p>

        {/* Buttons + Opening Hours */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 w-full sm:w-auto"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Buttons */}
          <div className="flex flex-row sm:flex-row gap-3 w-full sm:w-auto justify-center">
            <Link
              to="/contact"
              className="bg-blue-950 hover:bg-blue-800 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-lg transition text-sm sm:text-base text-center w-1/2 sm:w-auto"
            >
              Book Your Appointment
            </Link>

            <Link
              to="/services"
              className="border border-white hover:bg-gray-700 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-lg transition text-sm sm:text-base text-center w-1/2 sm:w-auto"
            >
              View Services
            </Link>
          </div>

          {/* Opening Hours */}
          <div className="bg-white/10 backdrop-blur-md p-3 sm:p-5 rounded-lg max-w-xs w-full sm:max-w-xs mx-auto sm:mx-0 text-center sm:text-left mt-3 sm:mt-0">
            <h3 className="text-gray-200 font-semibold text-base sm:text-lg mb-1 sm:mb-2">
              Opening Hours
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              <span className="font-medium">Mon - Sat:</span> 10:00 am – 7:00 pm
              <br />
              <span className="font-medium">Sun:</span> 12:00 noon – 7:00 pm
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
