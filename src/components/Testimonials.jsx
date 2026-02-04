import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import testimonials from "../data/testimonials";

/* ----------------------------
   Animation variants
---------------------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Testimonials() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  /* ----------------------------
     Auto Scroll
  ---------------------------- */
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!containerRef.current) return;

      containerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });

      // Loop back
      if (
        containerRef.current.scrollLeft + containerRef.current.clientWidth >=
        containerRef.current.scrollWidth
      ) {
        containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  /* ----------------------------
     Scroll buttons
  ---------------------------- */
  const scrollBy = (distance) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  /* ----------------------------
     Stars
  ---------------------------- */
  const renderStars = (count = 5) =>
    [...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));

  return (
    <motion.section
      className="w-full bg-[#e1f0ff] py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#2d69ff] mb-12 text-center"
        variants={sectionVariant}
      >
        What Our Patients Say
      </motion.h2>

      {/* Scrollable container */}
      <motion.div
        ref={containerRef}
        className="flex gap-6 px-6 sm:px-12 overflow-x-auto scroll-smooth cursor-grab no-scrollbar"
        variants={containerVariant}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {testimonials.map((t, idx) => (
          <motion.div key={idx} variants={cardVariant}>
            <TestimonialCard testimonial={t} renderStars={renderStars} />
          </motion.div>
        ))}
      </motion.div>

      {/* Left Button */}
      <motion.button
        onClick={() => scrollBy(-320)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-2 top-3/5 -translate-y-1/2 bg-[#2d69ff] text-white p-3 rounded-full shadow-lg hidden sm:flex"
      >
        ←
      </motion.button>

      {/* Right Button */}
      <motion.button
        onClick={() => scrollBy(320)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-2 top-3/5 -translate-y-1/2 bg-[#2d69ff] text-white p-3 rounded-full shadow-lg hidden sm:flex"
      >
        →
      </motion.button>
    </motion.section>
  );
}

/* ----------------------------
   Testimonial Card
---------------------------- */
function TestimonialCard({ testimonial, renderStars }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 120;

  const isLong = testimonial.message.length > maxLength;
  const displayText = expanded
    ? testimonial.message
    : testimonial.message.slice(0, maxLength) + (isLong ? "..." : "");

  return (
    <motion.div
      className="flex-none w-72 sm:w-80 bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between relative overflow-hidden"
      whileHover={{
        y: -10,
        scale: 1.04,
        boxShadow: "0px 28px 60px rgba(0,0,0,0.18)",
      }}
      transition={{ type: "spring", stiffness: 160, damping: 22 }}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-t from-[#e1f0ff]/40 via-transparent to-transparent" />

      <div className="relative z-10">
        <p className="text-gray-700 mb-4 leading-relaxed">“{displayText}”</p>

        {isLong && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="text-[#4baa7d] text-xs font-medium hover:underline"
          >
            Read more
          </button>
        )}
      </div>

      <div className="relative z-10 mt-5">
        <h4 className="font-semibold text-[#2d69ff]">{testimonial.name}</h4>
        <div className="text-sm">{renderStars(testimonial.rating)}</div>
      </div>
    </motion.div>
  );
}
