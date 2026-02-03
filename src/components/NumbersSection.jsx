export default function NumbersSection() {
  const stats = [
    ["15+", "Years of Expertise"],
    ["1,00,000+", "Patients Served"],
    ["100%", "Radiation-Free Care"],
    ["24-48 hrs", "Report Turnaround"],
  ];

  return (
    <section className="w-full py-20 bg-[#2d69ff] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(([value, label], i) => (
          <div
            key={i}
            className="animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="text-3xl font-bold mb-2">{value}</div>
            <p className="text-sm tracking-wide opacity-90">{label}</p>
          </div>
        ))}
      </div>

      {/* Inline keyframes for this section */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
