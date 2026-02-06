import { motion } from "framer-motion";

export default function ServiceSections({ sections }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition"
        >
          {/* Section Heading */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {section.heading}
          </h3>

          {/* Optional Description */}
          {section.description && (
            <p className="text-sm text-gray-600 mb-4">
              {section.description}
            </p>
          )}

          {/* Items */}
          {section.items && (
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 text-sm"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#2d69ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}
