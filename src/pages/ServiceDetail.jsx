import { useParams, Link } from "react-router-dom";
import services from "../data/services.js";
import { motion } from "framer-motion";

/* ----------------------------
   Animation Variants
---------------------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = services.find((s) => s.slug === slug);

  if (!svc)
    return (
      <section className="py-16">
        <div className="container mx-auto px-6 text-center text-gray-600">
          Service not found.
        </div>
      </section>
    );

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="bg-blue-950 py-10 text-white"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="container mx-auto px-4 sm:px-8 md:px-12 py-8 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="md:max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              {svc.title}
            </h1>
            <p className="text-gray-200 text-sm sm:text-base opacity-90">
              {svc.intro}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-blue-950 font-semibold px-4 py-2 rounded-sm hover:bg-blue-100 transition text-m"
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <div className="container mx-auto">
          {/* Hero Image */}
          {svc.hero && (
            <motion.img
              src={svc.hero}
              alt={svc.title}
              className="w-full object-cover rounded-2xl shadow mb-8"
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
            />
          )}

          {/* About Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About this Service
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-2xl mb-4">
            {svc.desc ||
              "Each service is delivered with stringent quality controls. We explain preparation, timelines, and what your report means in simple terms."}
          </p>

          {/* Bullet Points */}
          {svc.bullets && (
            <ul className="list-disc pl-5 space-y-1 text-gray-700 max-w-2xl">
              {svc.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          {/* Back Link */}
          <div className="mt-8">
            <Link
              to="/services"
              className="text-blue-900 font-medium hover:underline"
            >
              ← Back to all services
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
