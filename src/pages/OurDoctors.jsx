import doctors from "../data/doctors";
import { motion } from "framer-motion";

/* ----------------------------
   Animation Variants
---------------------------- */
const pageVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const heroVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function OurDoctors() {
  return (
    <motion.main
      className="bg-gray-50 min-h-screen pb-24"
      variants={pageVariant}
      initial="hidden"
      animate="visible"
    >
      {/* ================= HERO ================= */}
      <motion.section
        className="relative bg-[#6395ee] py-20 text-white overflow-hidden"
        variants={heroVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our Doctors
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Experienced, compassionate, research-driven clinicians.
          </p>
        </div>
      </motion.section>

      {/* ================= DOCTORS ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-16 relative z-20">
        <div className="flex flex-col gap-16">
          {doctors.map((doc) => (
            <motion.div
              key={doc.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="group bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col lg:flex-row "
            >
              {/* ================= IMAGE ================= */}
              <div className="lg:w-2/5 relative h-[420px] lg:h-auto overflow-hidden bg-gray-100">
                <motion.img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 lg:opacity-30" />
              </div>

              {/* ================= CONTENT ================= */}
              <div className="lg:w-3/5 p-8 md:p-12 flex flex-col">
                {/* Name + specialization */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {doc.name}
                  </h2>
                  <p className="text-[#122056] font-semibold text-lg md:text-xl mb-4">
                    {doc.specialization}
                  </p>

                  <div className="inline-flex bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100">
                    {doc.qualification}
                  </div>
                </div>

                {/* Bio / Description */}
                {(doc.bio || doc.description) && (
                  <div className="mb-8 pl-5 border-l-4 border-[#122056] bg-gray-50/60 rounded-r-xl">
                    <p className="italic text-gray-700 leading-relaxed">
                      {doc.bio || doc.description}
                    </p>
                  </div>
                )}

                {/* Expertise */}
                {doc.expertise && (
                  <div className="mb-6 bg-blue-50 border border-blue-100 rounded-2xl p-5">
                    <p className="font-semibold text-blue-700 mb-3">
                      Areas of Expertise
                    </p>
                    <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                      {doc.expertise.split("\n").map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

               {doc.achievements && (
                    <div className="bg-blue-50 border mb-6 border-blue-100 rounded-xl p-4">
                      <p className="font-semibold text-blue-700 text-sm mb-2">
                        Honors & Awards
                      </p>

                      {Array.isArray(doc.achievements) ? (
                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                          {doc.achievements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {doc.achievements}
                        </p>
                      )}
                    </div>
                  )}

                {/* International Training */}
                {doc.internationalTraining && (
                  <div className="mb-6 bg-blue-50 border border-blue-100 rounded-2xl p-5">
                    <p className="font-semibold text-blue-700 mb-2">
                      International Training
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {doc.internationalTraining}
                    </p>
                  </div>
                )}

                {/* Publications */}
                {doc.publications && (
                  <div className="mt-auto pt-6 border-t border-gray-100 text-sm text-gray-600">
                    <span className="font-bold text-gray-800">
                      Publications:
                    </span>{" "}
                    {doc.publications}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
