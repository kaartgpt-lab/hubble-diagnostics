import React, { useRef, useState } from "react";
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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

export default function Testimonials() {
  const containerRef = useRef();

  // Scroll buttons
  const scrollBy = (distance) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  // Stars
  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= count ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <motion.section
      className="w-full bg-gray-100 py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-950 mb-8 text-center"
        variants={sectionVariant}
      >
        What Our Patients Say
      </motion.h2>

      {/* Scrollable container */}
      <motion.div
        ref={containerRef}
        className="flex gap-4 px-6 sm:px-12 w-full overflow-x-auto scroll-smooth scrollbar-hide cursor-grab"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((t, idx) => (
          <motion.div key={idx} variants={cardVariant}>
            <TestimonialCard testimonial={t} renderStars={renderStars} />
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scrollBy(-300)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-950 hover:bg-blue-900 text-white p-2 sm:p-3 rounded-full shadow-md transition"
      >
        &#8592;
      </button>

      <button
        onClick={() => scrollBy(300)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-950 hover:bg-blue-900 text-white p-2 sm:p-3 rounded-full shadow-md transition"
      >
        &#8594;
      </button>
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
    <div className="flex-none w-72 sm:w-80 bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
      <div>
        <p className="text-gray-700 mb-4 leading-relaxed">"{displayText}"</p>

        {isLong && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="text-blue-600 text-xs font-medium hover:underline"
          >
            Read more
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 mt-4">
        <div>
          <h4 className="font-semibold text-blue-950">{testimonial.name}</h4>
          <div className="text-sm">{renderStars(testimonial.rating || 5)}</div>
        </div>
      </div>
    </div>
  );
}
