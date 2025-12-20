import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqs from "../data/faqs";

/* ----------------------------
   Animation variants
---------------------------- */
const pageVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const categoryVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const answerVariant = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState({});

  const toggle = (category, index) => {
    setOpenIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <motion.main
      className="w-full bg-gray-100 min-h-screen py-16"
      initial="hidden"
      animate="visible"
      variants={pageVariant}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-12 text-center">
          Frequently Asked Questions
        </h1>

        {faqs.map((cat, catIdx) => (
          <motion.div
            key={catIdx}
            className="mb-10"
            variants={categoryVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              {cat.category}
            </h2>

            <div className="space-y-4">
              {cat.items.map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariant}
                  className="bg-white rounded-lg shadow p-5 cursor-pointer transition"
                  onClick={() => toggle(cat.category, idx)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-blue-950 font-semibold text-lg">
                      {faq.question}
                    </h3>
                    <span className="text-blue-600 font-bold text-xl">
                      {openIndex[cat.category] === idx ? "−" : "+"}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {openIndex[cat.category] === idx && (
                      <motion.p
                        className="mt-3 text-gray-700 overflow-hidden"
                        variants={answerVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
