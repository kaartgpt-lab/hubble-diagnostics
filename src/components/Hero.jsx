import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat w-full min-h-[70vh] sm:min-h-screen text-white flex items-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 flex flex-col justify-center text-center sm:text-left items-center sm:items-start py-12 sm:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
          Kanpur's first <br />
          <span className="text-blue-700">Zero Radiation</span> <br />
          Diagnostic Centre
        </h1>

        <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-lg">
          Latest & high-end ultrasound machine for pregnancy, women imaging,
          interventional fetal medicine, radiology, and more.
        </p>

        {/* Buttons + Opening Hours */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/book-appointment"
              className="bg-blue-950 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg transition text-sm text-center"
            >
              Book Your Appointment
            </Link>
            <Link
              to="/contact"
              className="border border-white hover:bg-gray-700 text-white hover:text-white px-5 py-2.5 rounded-lg transition text-sm text-center"
            >
              Contact Us
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-lg max-w-xs mx-auto sm:mx-0">
            <h3 className="text-gray-200 font-semibold text-lg mb-2">
              Opening Hours
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              <span className="font-medium">Monday - Saturday:</span> 10:00 am -
              7:00 pm
              <br />
              <span className="font-medium">Sunday:</span> 12:00 noon - 7:00 pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
