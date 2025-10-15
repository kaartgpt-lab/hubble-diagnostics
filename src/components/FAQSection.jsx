import { Link } from "react-router-dom";
import { useState } from "react";
import faqs from "../data/faqs";

export default function HomeFAQs() {
  const [openIndex, setOpenIndex] = useState({});

  const toggle = (index) => {
    setOpenIndex((prev) => ({
      0: prev[0] === index ? null : index,
    }));
  };

  // Get only the "General" category
  const generalCategory = faqs.find((cat) => cat.category === "General");

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-10 text-center">
          Frequently Asked Questions
        </h2>

        {generalCategory && (
          <div className="mb-8">
            {/* <h3 className="text-xl font-semibold text-blue-950 mb-4">
              {generalCategory.category}
            </h3> */}

            <div className="divide-y divide-gray-300">
              {generalCategory.items.slice(0, 4).map((faq, idx) => (
                <div
                  key={idx}
                  className="py-4 cursor-pointer"
                  onClick={() => toggle(idx)}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-blue-950 font-medium">{faq.question}</p>
                    <span className="text-blue-600 font-bold text-lg">
                      {openIndex[0] === idx ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex[0] === idx && (
                    <p className="mt-2 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <Link
            to="/faqs"
            className="inline-block bg-blue-950 !text-white font-medium px-6 py-3 rounded-sm hover:bg-blue-900 transition"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
