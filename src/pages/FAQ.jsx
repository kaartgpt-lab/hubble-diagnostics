import { useState } from "react";
import faqs from "../data/faqs";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState({}); // store open index per category

  const toggle = (category, index) => {
    setOpenIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <main className="w-full bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-12 text-center">
          Frequently Asked Questions
        </h1>

        {faqs.map((cat, catIdx) => (
          <div key={catIdx} className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              {cat.category}
            </h2>

            <div className="space-y-4">
              {cat.items.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow p-5 cursor-pointer transition"
                  onClick={() => toggle(cat.category, idx)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-blue-950 font-semibold text-lg">
                      {faq.question}
                    </h3>
                    <span className="text-blue-600 font-bold text-xl">
                      {openIndex[cat.category] === idx ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex[cat.category] === idx && (
                    <p className="mt-3 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
