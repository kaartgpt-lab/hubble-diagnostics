import React from "react";
import { useNavigate } from "react-router-dom";
import services from "../data/services";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-16 w-full">
      <div className="px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-3">
          Services We Offer
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          Our services are beyond measurements and so is our commitment towards
          our patients.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:w-full gap-[2px]">
        {services.map((s) => (
          <div
            key={s.slug}
            onClick={() => navigate(`/services/${s.slug}`)}
            className="bg-blue-950 text-white p-6 sm:p-8 md:p-10 text-center cursor-pointer transition hover:bg-blue-900"
          >
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
              {s.title}
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-snug">
              {s.intro}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
