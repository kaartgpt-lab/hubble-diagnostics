import { useState } from "react";
import { motion } from "framer-motion";

/* ----------------------------
   Animation variants
---------------------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="w-full bg-blue-950 text-white py-16"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            We’re here to help.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="w-full py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <motion.div className="space-y-6" variants={itemVariant}>
            <h2 className="text-2xl font-semibold text-blue-950">
              Contact Info
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Phone:</strong> +91 98765 43210
              </li>
              <li>
                <strong>Email:</strong> info@hubblediagnostics.example
              </li>
              <li>
                <strong>Address:</strong> 45, Health Avenue, Your City
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-950 mt-6">
              Location
            </h3>
            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.900928649747!2d80.299632!3d26.475973699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39fb8fd56ac5%3A0x94f78060c31163!2sHubble%20Diagnostics%20and%20Fetal%20Medicine%20Centre%20-Hubble%20Health!5e1!3m2!1sen!2sin!4v1762837127119!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariant}>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Send a Message
            </h2>

            <motion.form
              onSubmit={handleSubmit}
              className="grid gap-4"
              variants={containerVariant}
            >
              <motion.input
                variants={itemVariant}
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <motion.input
                variants={itemVariant}
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <motion.input
                variants={itemVariant}
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <motion.textarea
                variants={itemVariant}
                rows="5"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <motion.button
                variants={itemVariant}
                type="submit"
                className="bg-blue-950 text-white font-semibold rounded-lg px-5 py-2.5 hover:bg-blue-800 transition"
              >
                Submit
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
