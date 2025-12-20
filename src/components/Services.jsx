import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services";

/* ----------------------------
   Animation variants
---------------------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="bg-gray-100 py-16 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      {/* Heading */}
      <motion.div className="px-8 text-center" variants={sectionVariant}>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-3">
          Services We Offer
        </h2>
        <p className="text-gray-700 mb-10 text-center">
          Our services are beyond measurements and so is our commitment towards
          our patients.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:w-full gap-[2px]"
        variants={containerVariant}
      >
        {services.map((s) => (
          <motion.div
            key={s.slug}
            variants={cardVariant}
            onClick={() => navigate(`/services/${s.slug}`)}
            className="bg-blue-950 text-white p-6 sm:p-8 md:p-10 text-center cursor-pointer transition hover:bg-blue-900"
          >
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
              {s.title}
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-snug">
              {s.intro}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
