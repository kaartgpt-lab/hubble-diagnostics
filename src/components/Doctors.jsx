import doctors from "../data/doctors";
import { motion } from "framer-motion";

/* ----------------------------
   Animation variants
---------------------------- */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function HomeDoctors() {
  const homeDoctors = doctors.filter((doc) => doc.home);

  return (
    <motion.section
      className="w-full bg-blue-950 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <motion.h1
          className="text-4xl font-bold text-gray-200 mb-8 text-center"
          variants={card}
        >
          Our Doctors
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={container}
        >
          {homeDoctors.map((doc) => (
            <motion.div
              key={doc.id}
              className="bg-white text-blue-950 rounded-lg overflow-hidden flex flex-col text-center"
              variants={card}
            >
              {/* Image */}
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-76 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col items-center">
                <div className="mt-2 font-semibold text-lg">{doc.name}</div>

                <div className="text-blue-700 text-sm mt-1">
                  {doc.specialization}
                </div>

                <div className="text-blue-600 text-xs mt-2 mb-4">
                  {doc.qualification}
                </div>

                {/* Learn More Button */}
                <motion.button
                  onClick={() => (window.location.href = "/ourdoctors")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-900 text-blue-900 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-900 hover:text-white transition"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
