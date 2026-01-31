import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services.js";

/* ----------------------------
   Animation Variants
---------------------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <>
      {/* Header Section */}
      <motion.section
        className="bg-[#2d69ff] text-white py-6 md:py-10"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-0">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Our Services
            </h1>
            <p className="text-gray-200 text-sm sm:text-base mb-2">
              From routine blood tests to advanced imaging — comprehensive
              diagnostics you can trust.
            </p>
          </div>

          <div className="mt-2 md:mt-0">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-[#2d69ff] font-semibold px-4 py-2 rounded-sm hover:bg-[#e1f0ff] transition text-m"
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="bg-[#e1f0ff] py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <div className="container mx-auto px-6 sm:px-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.slug} custom={i} variants={cardVariant}>
              <Link
                to={`/services/${s.slug}`}
                className="block bg-white rounded-xl hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 h-full"
              >
                <img
                  src={s.hero}
                  alt={s.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-[#2d69ff] font-semibold text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {s.intro}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
