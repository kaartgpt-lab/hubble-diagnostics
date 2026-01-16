import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    ["🩻", "Most Advanced Ultrasound in Kanpur"],
    ["☢️", "Zero Radiation Centre"],
    ["👩‍⚕️", "Globally Trained Specialists"],
    ["🧠", "Integrated Diagnostics"],
    ["⏱️", "Fast & Accurate Reporting"],
    ["🌿", "Patient-Centric Care"],
  ];

  /* ----------------------------
     Animation variants for cards
  ---------------------------- */
  const cardVariant = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -80 : 80, // alternate left/right
      scale: 0.96,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-20 bg-[#e1f0ff]">
      {/* Heading */}
      <div className="container mx-auto px-4 text-center max-w-3xl mb-14">
        <h3 className="text-sm font-semibold text-[#2d69ff] uppercase tracking-widest mb-2">
          Why Choose Us?
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d69ff] mb-6">
          The Hubble Advantage
        </h2>
        <p className="text-gray-700 text-lg">
          Discover what sets Hubble Health apart.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {features.map(([icon, title], i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariant}
            className="bg-white rounded-xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition"
          >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-[#2d69ff]">
              {title}
            </h3>
            <p className="text-gray-700 text-sm">
              Experience world-class diagnostic excellence.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
