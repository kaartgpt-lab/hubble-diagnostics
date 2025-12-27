import { Link, useNavigate } from "react-router-dom";
import services from "../data/services.js";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-blue-950 text-white">
      {/* Main Footer */}
      <section className="py-12 px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 ml-4">
              <img
                src="/logo.png"
                alt="Hubble Diagnostics Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-gray-200">Ready for a Clearer Diagnosis?</p>
            <br />
            <p className="text-sm text-gray-300">
              Experience precision imaging and fetal care that prioritizes
              safety, comfort, and accuracy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-gray-200 font-semibold text-sm mb-3">
              Navigation
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/foundation"
                  className="hover:text-blue-300 transition"
                >
                  Hubble Health Foundation
                </Link>
              </li>
              <li>
                <Link
                  to="/ourdoctors"
                  className="hover:text-blue-300 transition"
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-300 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-blue-300 transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-300 transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* All Services */}
          <div>
            <h2 className="text-gray-200 font-semibold text-sm mb-3">
              All Services
            </h2>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-blue-300 transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-gray-200 font-semibold text-sm mb-3">
              Contact
            </h2>

            <ul className="space-y-2 text-gray-200 mb-4 text-sm">
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1 text-blue-300" />
                <div>
                  <a href="tel:+919044104040" className="hover:underline block">
                    +91 90441 04040
                  </a>
                  <a href="tel:05127961554" className="hover:underline block">
                    0512-7961554
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-300" />
                <a
                  href="mailto:hubblediagnotics@gmail.com"
                  className="hover:underline"
                >
                  hubblediagnotics@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-blue-300" />
                <span className="leading-snug">
                  G-1, A/10, Sarvodaya Nagar,
                  <br />
                  Opp. Kakadeo Police Station,
                  <br />
                  Kanpur
                </span>
              </li>
            </ul>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-blue-950 font-semibold px-4 py-2 rounded-sm hover:bg-blue-100 transition"
              >
                Contact Us
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/J1cvboa3tHB54q19A",
                    "_blank"
                  )
                }
                className="text-white border border-white font-semibold px-4 py-2 rounded-sm hover:bg-white/10 transition"
              >
                Locate Us
              </button>
            </div>

            {/* Book Appointment */}
            <button
              onClick={() => navigate("/contact")}
              className="w-full bg-blue-800 text-white font-semibold px-4 py-2 rounded-sm hover:bg-blue-900 transition"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="border-t border-white/25">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-3 px-6 sm:px-12 text-gray-200 text-sm">
          <div>© {new Date().getFullYear()} Hubble Diagnostics</div>
          <div className="mt-2 sm:mt-0">Precision. Care. Trust.</div>
        </div>
      </div>
    </footer>
  );
}
