import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services";
import { ArrowRight } from "lucide-react";

/* ----------------------------
   Animation Variants (SAME)
---------------------------- */

// Section fade + lift
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// Stagger container
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// Card slide-in (alternate left / right)
const cardVariant = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
    y: 20,
    scale: 0.96,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="py-20 bg-gray-50 w-full overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <div className="container mx-auto px-6">
        {/* Header Row (Gemini-style) */}
        <motion.div
          className="flex justify-between items-end mb-12 gap-6"
          variants={sectionVariant}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122056] mb-2">
              Our Services
            </h2>
            <p className="text-gray-600">
              Our services are beyond measurements and so is our commitment
              towards our patients.
            </p>
          </div>

          {/* View All (desktop) */}
          <button
            onClick={() => navigate("/services")}
            className="hidden md:flex text-[#122056] font-semibold items-center gap-2 hover:gap-3 transition-all"
          >
            View all services <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Services Grid (UI changed only) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariant}
        >
          {services.map((s, index) => (
            <motion.div
              key={s.slug}
              custom={index}
              variants={cardVariant}
              onClick={() => navigate(`/services/${s.slug}`)}
              className="group bg-white rounded-2xl p-8 text-left cursor-pointer border border-gray-200 hover:border-[#122056]/40 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
            >
              {/* Title */}
              <motion.h3
                className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#122056] transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {s.title}
              </motion.h3>

              {/* Intro */}
              <motion.p
                className="text-sm text-gray-600 leading-relaxed"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                {s.intro}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* View All (mobile) */}
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => navigate("/services")}
            className="text-[#122056] font-semibold"
          >
            View all services →
          </button>
        </div>
      </div>
    </motion.section>
  );
}