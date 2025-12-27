import doctors from "../data/doctors";
import { motion } from "framer-motion";

/* ----------------------------
   Animation Variants
---------------------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const gridContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function OurDoctors() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="w-full bg-blue-950 text-white"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10 md:py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Doctors</h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Experienced, compassionate, research-driven clinicians.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-blue-950 font-semibold px-4 py-2 rounded-sm hover:bg-blue-100 transition text-m sm:text-base"
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>

      {/* Doctors Grid */}
      <motion.section
        className="w-full bg-gray-100 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={gridContainerVariant}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {doctors.map((doc) => (
            <motion.div
              key={doc.id}
              className="bg-white text-blue-950 rounded-lg overflow-hidden flex flex-col"
              variants={cardVariant}
            >
              {/* Image section */}
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-102 object-cover"
              />

              {/* Text content */}
              <div className="p-6 flex flex-col items-start text-left">
                <div className="font-semibold text-2xl mb-1">{doc.name}</div>

                <div className="text-blue-700 text-sm mb-2">
                  {doc.specialization}
                </div>

                <div className="text-blue-600 text-xs mb-3">
                  {doc.qualification}
                </div>

                {/* Expertise */}
                {doc.expertise && (
                  <div className="mb-3 text-sm">
                    <span className="font-semibold text-blue-800">
                      Expertise:{" "}
                    </span>
                    <span className="text-blue-700 whitespace-pre-line">
                      {doc.expertise}
                    </span>
                  </div>
                )}

                {/* Bio / Description */}
                {(doc.bio || doc.description) && (
                  <p className="text-blue-800 text-sm leading-relaxed mb-3">
                    {doc.bio || doc.description}
                  </p>
                )}

                {/* Achievements */}
                {doc.achievements && (
                  <div className="mb-3 text-sm">
                    <span className="font-semibold text-blue-800">
                      Honors & Awards:{" "}
                    </span>
                    <span className="text-blue-700">{doc.achievements}</span>
                  </div>
                )}

                {/* International Training */}
                {doc.internationalTraining && (
                  <div className="mb-3 text-sm">
                    <span className="font-semibold text-blue-800">
                      International Training:{" "}
                    </span>
                    <span className="text-blue-700">
                      {doc.internationalTraining}
                    </span>
                  </div>
                )}

                {/* Publications */}
                {doc.publications && (
                  <div className="text-sm">
                    <span className="font-semibold text-blue-800">
                      Publications:{" "}
                    </span>
                    <span className="text-blue-700">{doc.publications}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
