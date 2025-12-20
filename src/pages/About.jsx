import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

const imageVariant = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* About Header */}
      <motion.section
        className="w-full bg-blue-950 text-white py-6 md:py-10"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Who are we ?
            </h1>
            <p className="text-gray-200 text-sm mb-2">
              Comprehensive lab, radiology, and preventive health checkups with
              fast, reliable reports.
            </p>
          </div>

          <div className="mt-2 md:mt-0">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-blue-950 font-semibold px-4 py-2 rounded-sm hover:bg-blue-100 transition text-m"
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>

      {/* Hero Image */}
      <motion.section
        className="w-full h-64 md:h-96 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariant}
      >
        <img
          src="/hero-bg.jpg"
          alt="About Hero"
          className="w-full h-full object-cover"
        />
      </motion.section>

      {/* Info Section */}
      <motion.section
        className="w-full bg-gray-100 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl space-y-6 text-center md:text-left">
          <h2 className="text-3xl text-gray-700">
            Redefining Diagnostic Excellence in Kanpur
          </h2>
          <p className="text-gray-700 text-lg">
            At Hubble Diagnostics & Fetal Medicine Centre, we’re transforming
            the diagnostic experience through advanced imaging, international
            expertise, and compassionate care. With Kanpur’s most advanced
            ultrasound system and zero-radiation technology, we bring precision,
            comfort, and safety together — ensuring confidence in every
            diagnosis.
          </p>
        </div>
      </motion.section>

      {/* Full-width YouTube Video */}
      <motion.section
        className="w-full bg-gray-100 py-8 sm:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </motion.section>
    </>
  );
}
