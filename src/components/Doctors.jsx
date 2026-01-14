import doctors from "../data/doctors";
import { motion } from "framer-motion";

/* ----------------------------
   Animation variants
---------------------------- */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function HomeDoctors() {
  const homeDoctors = doctors.filter((doc) => doc.home);

  return (
    <motion.section
      className="w-full bg-[#2d69ff] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="container mx-auto px-4 sm:px-8">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-gray-200 mb-12 text-center"
          variants={card}
        >
          Our Doctors
        </motion.h1>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={container}
        >
          {homeDoctors.map((doc) => (
            <motion.div
              key={doc.id}
              className="group bg-white text-[#2d69ff] rounded-xl overflow-hidden flex flex-col text-center"
              variants={card}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0px 30px 60px rgba(0,0,0,0.25)",
              }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 22,
              }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-76 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center">
                <div className="mt-2 font-semibold text-lg">{doc.name}</div>

                <div className="text-[#4baa7d] text-sm mt-1">
                  {doc.specialization}
                </div>

                <div className="text-[#4baa7d] text-xs mt-2 mb-6">
                  {doc.qualification}
                </div>

                {/* Learn More Button */}
                <motion.button
                  onClick={() => (window.location.href = "/ourdoctors")}
                  className="relative overflow-hidden border border-[#2d69ff] text-[#2d69ff] px-6 py-2 rounded-md text-sm font-medium"
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#4baa7d",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
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
