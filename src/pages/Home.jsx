import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../components/Services.jsx";
import Hero from "../components/Hero.jsx";
import Blogs from "../components/Blogs.jsx";
import YouTubeSection from "../components/Youtube.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Doctors from "../components/Doctors.jsx";
import { FaInstagram } from "react-icons/fa";
import HomeFAQs from "../components/FAQSection.jsx";

/* ---------------------------------
   Reusable animation variant
--------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero (already animated internally) */}
      <Hero />

      {/* About Section */}
      <motion.section
        className="py-16 bg-gray-100"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl text-blue-950 font-bold mb-6">
            About Hubble
          </h2>
          <h2 className="text-2xl text-gray-700 mb-4">
            Redefining Diagnostic Excellence in Kanpur
          </h2>
          <p className="text-gray-700 mb-4">
            At Hubble Diagnostics & Fetal Medicine Centre, we’re transforming
            the diagnostic experience through advanced imaging, international
            expertise, and compassionate care.
          </p>
          <p className="text-gray-700 mb-4">
            Our commitment is to provide fast, transparent, and accurate
            diagnostics for every patient.
          </p>
          <button
            onClick={() => navigate("/doctors")}
            className="border-2 border-blue-950 text-blue-950 font-semibold px-6 py-2 rounded-md transition"
          >
            Meet our Specialists
          </button>
        </div>
      </motion.section>

      {/* YouTube */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <YouTubeSection />
      </motion.div>

      {/* Doctors */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Doctors />
      </motion.div>

      {/* Services */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Services />
      </motion.div>

      {/* Why Choose Us */}
      <motion.section
        className="w-full py-16 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl mb-10">
          <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-widest mb-2">
            Why Choose Us?
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            The Hubble Advantage
          </h2>
          <p className="text-gray-700 text-lg">
            Discover what sets Hubble Health apart.
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {[
            ["🩻", "Most Advanced Ultrasound in Kanpur"],
            ["☢️", "Zero Radiation Centre"],
            ["👩‍⚕️", "Globally Trained Specialists"],
            ["🧠", "Integrated Diagnostics"],
            ["⏱️", "Fast & Accurate Reporting"],
            ["🌿", "Patient-Centric Care"],
          ].map(([icon, title], i) => (
            <motion.div
              key={i}
              className="bg-gray-50 text-blue-950 rounded-lg shadow p-6 flex flex-col items-center text-center"
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-700 text-sm">
                Experience world-class diagnostic excellence.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Vision */}
      <motion.section
        className="w-full py-16 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-widest mb-2">
            Our Vision
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            Technology, Compassion, and Clinical Excellence
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Redefining diagnostics in Kanpur with care and innovation.
          </p>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonials />
      </motion.div>

      {/* Instagram */}
      <motion.section
        className="w-full bg-gray-100 py-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full px-2 sm:px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8 text-center">
            Instagram
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
            {[
              "https://www.instagram.com/p/DLXmJ9ESrsB/",
              "https://www.instagram.com/p/DGAkSPCS3gR/",
              "https://www.instagram.com/p/DSFqM8MjBp3/",
              "https://www.instagram.com/p/DRw_uBUAWgf/",
              "https://www.instagram.com/p/DRUiqk9D1RO/",
              "https://www.instagram.com/p/DREzN5OD9Vq/",
            ].map((url, i) => (
              <motion.div
                key={i}
                className="overflow-hidden border border-gray-200 bg-white h-[420px] sm:h-[440px] lg:h-[480px]"
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <iframe
                  src={`${url}embed`}
                  allow="encrypted-media"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="https://www.instagram.com/hubble.health/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-sm transition"
            >
              <FaInstagram className="w-5 h-5 text-white" />
              Visit Our Instagram
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
