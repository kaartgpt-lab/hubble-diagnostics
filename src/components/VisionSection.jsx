import { motion } from "framer-motion";

export default function VisionSection() {
  /* ----------------------------
     Slide-in variants
  ---------------------------- */
  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-16 bg-[#e1f0ff]">
      <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
        <motion.h3
          className="text-sm font-semibold text-[#2d69ff] uppercase tracking-widest mb-2"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Vision
        </motion.h3>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#2d69ff] mb-6"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Technology, Compassion, and Clinical Excellence
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Redefining diagnostics in Kanpur with care and innovation.
        </motion.p>
      </div>
    </section>
  );
}
