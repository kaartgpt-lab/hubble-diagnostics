import { motion } from "framer-motion";
import YouTubeSection from "../components/Youtube";

/* ----------------------------
   Animation variants
---------------------------- */
const pageVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const heroTextVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
  },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function FoundationPage() {
  return (
    <motion.main
      className="w-full bg-gray-100 min-h-screen"
      variants={pageVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="w-full py-10 bg-[#2d69ff] text-white">
        <div className="container mx-auto px-6 sm:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <motion.div
            className="text-center md:text-left md:max-w-2xl"
            variants={heroTextVariant}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Hubble Education
            </h1>
            <p className="text-gray-200 text-base sm:text-lg max-w-2xl">
              Committed to improving health and wellness in our communities.
            </p>
          </motion.div>

          <motion.div className="mt-4 md:mt-0" variants={buttonVariant}>
            <motion.button
              onClick={() => (window.location.href = "/contact")}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="bg-white text-[#2d69ff] font-semibold px-5 py-2.5 rounded-sm
             hover:bg-[#e1f0ff] transition text-sm sm:text-base"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Full-width YouTube Video */}
      <motion.section
        className="w-full bg-gray-100 py-8 px-48 sm:py-16"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="w-full h-0 relative"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/jlcBM-M52FQ?si=uy3spu241vsE8gtw"
            title="Hubble Diagnostics Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      {/* Additional YouTube Section */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <YouTubeSection />
      </motion.div>
    </motion.main>
  );
}
