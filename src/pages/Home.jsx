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
        className="py-16 bg-[#e1f0ff]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl text-[#2d69ff] font-bold mb-6">
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
          <motion.button
            onClick={() => navigate("/ourdoctors")}
            whileHover={{
              y: -4,
              boxShadow: "0px 12px 24px rgba(23, 37, 84, 0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="
              border-2 border-[#2d69ff] text-[#2d69ff]
              font-semibold px-6 py-2 rounded-md
              bg-transparent
            "
          >
            Meet our Specialists
          </motion.button>
        </div>
      </motion.section>

      {/* Numbers */}
      <motion.section
        className="w-full py-20 bg-[#2d69ff] text-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["15+", "Years of Expertise"],
            ["50,000+", "Patients Served"],
            ["100%", "Radiation-Free Care"],
            ["24–48 hrs", "Report Turnaround"],
          ].map(([value, label], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="text-4xl font-bold mb-2">{value}</div>
              <p className="text-sm tracking-wide opacity-90">{label}</p>
            </motion.div>
          ))}
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
        className="w-full py-20 bg-[#e1f0ff]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.div
          className="container mx-auto px-4 sm:px-8 text-center max-w-3xl mb-14"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: "easeOut" },
            },
          }}
        >
          <h3 className="text-sm font-semibold text-[#2d69ff] uppercase tracking-widest mb-2">
            Why Choose Us?
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d69ff] mb-6">
            The Hubble Advantage
          </h2>
          <p className="text-gray-700 text-lg">
            Discover what sets Hubble Health apart.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="container mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
        >
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
              className="group bg-white text-[#2d69ff] rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden"
              variants={{
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
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 28px 60px rgba(0,0,0,0.18)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 22,
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-[#e1f0ff]/50 via-transparent to-transparent" />

              {/* Icon */}
              <motion.div
                className="relative z-10 text-4xl mb-4"
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {icon}
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 font-semibold text-lg mb-2">
                {title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-700 text-sm">
                Experience world-class diagnostic excellence.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Vision */}
      <motion.section
        className="w-full py-16 bg-[#e1f0ff]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <h3 className="text-sm font-semibold text-[#2d69ff] uppercase tracking-widest mb-2">
            Our Vision
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d69ff] mb-6">
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

      {/* Instagram – Images Only */}
      <motion.section
        className="w-full bg-[#e1f0ff] py-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full px-2 sm:px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d69ff] mb-8 text-center">
            Instagram
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
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
                className="relative overflow-hidden rounded-md bg-black aspect-square"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* HARD-CROPPED IMAGE ZONE */}
                <div className="absolute inset-0 overflow-hidden">
                  <iframe
                    src={`${url}embed/?hidecaption=1`}
                    className="
        absolute
        left-0
        -top-[64px]
        w-full
        h-[520px]
      "
                    frameBorder="0"
                    scrolling="no"
                    allow="encrypted-media"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="https://www.instagram.com/hubble.health/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2d69ff] hover:bg-[#4baa7d] text-white font-medium px-6 py-3 rounded-sm transition"
            >
              <FaInstagram className="w-5 h-5" />
              Visit Our Instagram
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
