import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#e1f0ff] overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        {/* Heading – slide from left */}
        <h2 className="text-3xl text-[#122056] font-bold mb-6 animate-[slideInLeft_0.9s_ease-out_forwards]">
          About Hubble
        </h2>

        {/* Subheading – slide from left */}
        <h2 className="text-2xl text-gray-700 mb-4 animate-[slideInLeft_1.1s_ease-out_forwards]">
          Redefining Diagnostic Excellence in Kanpur
        </h2>

        {/* Description – slide from right */}
        <p className="text-gray-700 mb-4 animate-[slideInRight_0.9s_ease-out_forwards]">
          At Hubble Diagnostics & Fetal Medicine Centre, we’re transforming the
          diagnostic experience through advanced imaging, international
          expertise, and compassionate care.
        </p>

        <p className="text-gray-700 mb-6 animate-[slideInRight_1.1s_ease-out_forwards]">
          Our commitment is to provide fast, transparent, and accurate
          diagnostics for every patient.
        </p>

        {/* Button – fade up */}
        <button
          onClick={() => navigate("/ourdoctors")}
          className="border-2 border-[#122056] text-[#122056]
                     font-semibold px-6 py-2 rounded-md
                     hover:bg-[#6395ee] hover:text-white
                     transition animate-[fadeUp_0.7s_ease-out_forwards]"
        >
          Meet our Specialists
        </button>
      </div>

      {/* Inline keyframes for this section */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
