import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services";

/* ----------------------------
   Animation variants
---------------------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
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
      className="bg-gray-100 py-20 w-full overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      {/* Heading */}
      <motion.div
        className="px-8 text-center max-w-3xl mx-auto"
        variants={sectionVariant}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d69ff] mb-3">
          Services We Offer
        </h2>
        <p className="text-gray-700 mb-12 text-center">
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
            className="group bg-[#2d69ff] text-white p-6 sm:p-8 md:p-10 text-center cursor-pointer relative overflow-hidden"
            whileHover={{
              y: -12,
              scale: 1.04,
              boxShadow: "0px 28px 60px rgba(0,0,0,0.35)",
              backgroundColor: "#0f1f4a",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 22,
            }}
          >
            {/* Floating highlight glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-[#2d69ff]/40 via-transparent to-transparent" />

            {/* Content */}
            <motion.h3
              className="relative z-10 font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {s.title}
            </motion.h3>

            <motion.p
              className="relative z-10 text-sm sm:text-base text-[#e1f0ff] leading-snug"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {s.intro}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
