import { Link } from "react-router-dom";
import services from "../data/services.js";

export default function Services() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-blue-950 text-white py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-0">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Our Services
            </h1>
            <p className="text-gray-200 text-sm sm:text-base mb-2">
              From routine blood tests to advanced imaging — comprehensive
              diagnostics you can trust.
            </p>
          </div>

          <div className="mt-2 md:mt-0">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-blue-950 font-semibold px-4 py-2 rounded-sm hover:bg-blue-100 transition text-m"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 sm:px-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
            >
              <img
                src={s.hero}
                alt={s.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-blue-950 font-semibold text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
