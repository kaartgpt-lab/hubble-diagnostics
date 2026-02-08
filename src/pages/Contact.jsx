import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Smartphone, Mail, MapPin } from "lucide-react";

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

    const whatsappNumber = "919044104040";

    const message = `
New Contact Enquiry 👇

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
  `;

    const encodedMessage = encodeURIComponent(message.trim());

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="w-full bg-[#6395ee] text-white py-16"
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
        className="w-full py-16 bg-[#e1f0ff]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <motion.div className="space-y-6" variants={itemVariant}>
            <h2 className="text-2xl font-semibold text-[#122056]">
              Contact Info
            </h2>

            <ul className="space-y-4 text-gray-700">
              {/* Mobile */}
              <li className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-[#122056] mt-1" />
                <span>
                  <strong>Mobile:</strong>{" "}
                  <a href="tel:+919044104040" className="hover:underline">
                    +91 90441 04040
                  </a>
                </span>
              </li>

              {/* Landline */}
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#122056] mt-1" />
                <span>
                  <strong>Landline:</strong>{" "}
                  <span className="select-text">0512-7961554</span>
                </span>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#122056] mt-1" />
                <span>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:hubblediagnotics@gmail.com"
                    className="hover:underline"
                  >
                    hubblediagnotics@gmail.com
                  </a>
                </span>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#122056] mt-1" />
                <span>
                  <strong>Address:</strong>
                  <br />
                  G-1, A/10, Sarvodaya Nagar,
                  <br />
                  Opposite Kakadeo Police Station,
                  <br />
                  Kanpur
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#122056] mt-6">
              Location
            </h3>

            <div className="overflow-hidden rounded-lg border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.900928649747!2d80.299632!3d26.475973699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39fb8fd56ac5%3A0x94f78060c31163!2sHubble%20Diagnostics%20and%20Fetal%20Medicine%20Centre%20-Hubble%20Health!5e1!3m2!1sen!2sin!4v1762837127119!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariant}>
            <h2 className="text-2xl font-semibold text-[#122056] mb-4">
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
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4baa7d]"
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
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4baa7d]"
              />

              <motion.input
                variants={itemVariant}
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4baa7d]"
              />

              <motion.textarea
                variants={itemVariant}
                rows="5"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4baa7d]"
              />

              <motion.button
                variants={itemVariant}
                type="submit"
                className="bg-green-500 text-white font-semibold rounded-lg px-5 py-2.5 hover:bg-[#4baa7d] transition"
              >
                Submit on Whatsapp
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
