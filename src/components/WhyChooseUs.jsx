import { motion } from "framer-motion";
import {
  Microscope,
  ShieldCheck,
  User,
  Activity,
  Clock,
  HeartPulse,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Microscope size={40} />,
      title: "Most Advanced Ultrasound in Kanpur",
      desc: "Experience precision with our state-of-the-art imaging technology.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Zero Radiation Centre",
      desc: "Safe diagnostic procedures prioritizing your long-term health.",
    },
    {
      icon: <User size={40} />,
      title: "Globally Trained Specialists",
      desc: "Expert care from doctors trained at top international institutions.",
    },
    {
      icon: <Activity size={40} />,
      title: "Integrated Diagnostics",
      desc: "Seamless coordination between various diagnostic modalities.",
    },
    {
      icon: <Clock size={40} />,
      title: "Fast & Accurate Reporting",
      desc: "Quick turnaround times without compromising on precision.",
    },
    {
      icon: <HeartPulse size={40} />,
      title: "Patient-Centric Care",
      desc: "Compassionate service designed around your comfort and needs.",
    },
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
    <section className="py-20 bg-white">
      {/* Heading */}
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-sm font-semibold text-[#122056] uppercase tracking-widest mb-2">
            Why Choose Us?
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#122056] mb-4">
            The Hubble Advantage
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what sets Hubble Health apart.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariant}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-[#e1f0ff] transition-colors duration-300"
            >
              <div className="text-[#122056] mb-4 flex justify-center">
                {feat.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feat.title}
              </h3>

              <p className="text-gray-600 text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}