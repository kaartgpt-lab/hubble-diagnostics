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
        className="w-full bg-[#2d69ff] text-white"
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
              className="bg-white text-[#2d69ff] font-semibold px-4 py-2 rounded-sm hover:bg-[#e1f0ff] transition text-m sm:text-base"
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>

      {/* Doctors Grid */}
      <motion.section
        className="w-full bg-[#e1f0ff] py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={gridContainerVariant}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doc) => (
              <motion.div
                key={doc.id}
                className="bg-white text-[#2d69ff] rounded-lg overflow-hidden flex flex-col"
                variants={cardVariant}
              >
                {/* Image section */}
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-102 object-cover"
                />

                {/* Text content */}
                <div className="p-6 flex flex-col text-left space-y-3">
                  {/* Name */}
                  <h3 className="font-semibold text-2xl leading-tight">
                    {doc.name}
                  </h3>

                  {/* Specialization */}
                  <p className="text-black text-sm font-medium">
                    {doc.specialization}
                  </p>

                  {/* Qualification */}
                  <p className="text-gray-800 text-xs">{doc.qualification}</p>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#e1f0ff]" />

                  {/* Expertise */}
                  {doc.expertise && (
                    <div>
                      <p className="font-semibold text-[#2d69ff] text-sm mb-1">
                        Areas of Expertise
                      </p>
                      <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                        {doc.expertise.split("\n").map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Bio */}
                  {(doc.bio || doc.description) && (
                    <p className="text-gray-800 text-sm leading-relaxed">
                      {doc.bio || doc.description}
                    </p>
                  )}

                  {/* Achievements */}
                  {doc.achievements && (
                    <div>
                      <p className="font-semibold text-[#2d69ff] text-sm mb-1">
                        Honors & Awards
                      </p>
                      <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                        {doc.achievements.split("\n").map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* International Training */}
                  {doc.internationalTraining && (
                    <div>
                      <p className="font-semibold text-[#2d69ff] text-sm mb-1">
                        International Training
                      </p>
                      <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                        {doc.internationalTraining
                          .split("\n")
                          .map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  )}

                  {/* Publications */}
                  {doc.publications && (
                    <div>
                      <p className="font-semibold text-[#2d69ff] text-sm mb-1">
                        Publications
                      </p>
                      <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                        {doc.publications.split("\n").map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
