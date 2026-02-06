import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import services from "../data/services.js";
import faqs from "../data/faqs";

/* ----------------------------
   Internal Icons
---------------------------- */
const IconWrapper = ({
  children,
  size = 24,
  className = "",
  strokeWidth = 2,
  fill = "none",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const Activity = (props) => (
  <IconWrapper {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </IconWrapper>
);
const CheckCircle = (props) => (
  <IconWrapper {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </IconWrapper>
);
const ShieldCheck = (props) => (
  <IconWrapper {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </IconWrapper>
);
const Star = (props) => (
  <IconWrapper {...props} fill={props.fill || "none"}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </IconWrapper>
);
const ArrowRight = (props) => (
  <IconWrapper {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </IconWrapper>
);
const ChevronDown = (props) => (
  <IconWrapper {...props}>
    <path d="m6 9 6 6 6-6" />
  </IconWrapper>
);

/* ----------------------------
   Animation Variants
---------------------------- */
const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideCard = {
  hidden: (dir) => ({
    opacity: 0,
    x: dir === "left" ? -80 : 80,
    y: 40,
    scale: 0.96,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const pathologyFaqs = faqs.pathology?.items || [];
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        Service not found.
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="bg-[#2d69ff] py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            {service.intro && (
              <p className="text-blue-100 text-lg max-w-xl">
                {service.intro}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Link
              to="/contact"
              className="bg-white text-[#2d69ff] font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition-all hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Hero Image */}
          {service.hero && (
            <motion.div
              className="mb-12 rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[450px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={service.hero}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          )}

          {/* Description */}
          {service.desc && (
            <motion.div
              className="mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#2d69ff] pl-4">
                About this Service
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          )}

          {/* ================= SECTIONS ================= */}
          {service.sections && (
            <motion.div
              className="grid md:grid-cols-2 gap-8 mb-16"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {service.sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  className="group bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 flex flex-col"
                  variants={slideCard}
                  custom={idx % 2 === 0 ? "left" : "right"}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0px 30px 60px rgba(0,0,0,0.15)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2d69ff]"
                      whileHover={{ rotate: 6, scale: 1.15 }}
                    >
                      <Activity size={24} />
                    </motion.div>
                    <h3 className="text-xl font-bold">
                      {section.heading}
                    </h3>
                  </div>

                  {section.description && (
                    <p className="text-sm text-gray-600 mb-6 italic border-l-2 pl-4">
                      {section.description}
                    </p>
                  )}

                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                        whileHover={{ x: 6 }}
                      >
                        <CheckCircle
                          size={18}
                          className="text-[#4baa7d]"
                        />
                        <span className="text-sm font-medium">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ================= KEY FEATURES ================= */}
          {service.bullets && (
            <motion.div
              className="mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">
                Key Features
              </h3>

              <ul className="grid sm:grid-cols-2 gap-4">
                {service.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 160, damping: 20 }}
                  >
                    <ShieldCheck
                      size={20}
                      className="text-[#2d69ff]"
                    />
                    <span className="text-gray-800 font-medium">
                      {b}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* ================= HIGHLIGHTS ================= */}
          {service.highlights && (
            <motion.div
              className="mb-16 bg-[#eef7ff] rounded-3xl p-8 border-l-4 border-[#2d69ff]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Star size={24} fill="#2d69ff" />
                Why choose this service?
              </h3>
              <ul className="space-y-4">
                {service.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3">
                    <ShieldCheck
                      size={18}
                      className="text-[#4baa7d]"
                    />
                    <span className="text-lg">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* ================= PATHOLOGY FAQs ================= */}
          {slug === "pathology" && pathologyFaqs.length > 0 && (
            <motion.div
              className="mb-16"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">
                {faqs.pathology.title}
              </h3>

              <div className="space-y-4">
                {pathologyFaqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="border rounded-xl overflow-hidden bg-white"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === i ? null : i)
                      }
                      className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50"
                    >
                      <span className="font-semibold">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-2 text-gray-600 border-t">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back */}
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-bold text-[#2d69ff]"
          >
            <span className="rotate-180 bg-blue-50 p-2 rounded-full">
              <ArrowRight size={20} />
            </span>
            Back to all services
          </Link>
        </div>
      </section>
    </div>
  );
}
