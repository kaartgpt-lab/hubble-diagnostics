import { Link, useNavigate } from "react-router-dom";
import services from "../data/services.js";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-blue-950 text-white">
      {/* Main Footer */}
      <section className="py-12 px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/15 grid place-items-center font-bold rounded">
                HD
              </div>
              <span className="font-bold text-lg">Hubble Diagnostics</span>
            </div>
            <p className="text-gray-200">
              Comprehensive diagnostic and lab testing services.
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
            <ul className="space-y-1 text-gray-200 mb-4">
              <li>+91 98765 43210</li>
              <li>info@hubblediagnostics.example</li>
              <li>45, Health Avenue, Your City</li>
            </ul>
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-950 font-semibold px-4 py-2 rounded-sm hover:bg-blue-100 transition"
            >
              Contact Us
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
