import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* About Header */}
      <section className="w-full bg-blue-950 text-white py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-0">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Who are we ?
            </h1>
            <p className="text-gray-200 text-sm sm:text-sm mb-2">
              Comprehensive lab, radiology, and preventive health checkups with
              fast, reliable reports.
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

      {/* Hero Image */}
      <section className="w-full h-64 md:h-96">
        <img
          src="/hero-bg.jpg"
          alt="About Hero"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Info Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl space-y-6 text-center md:text-left">
          <p className="text-gray-700 text-lg">
            Hubble Diagnostics is dedicated to providing accurate, reliable, and
            timely diagnostic services. With state-of-the-art laboratories and
            advanced radiology equipment, we ensure every patient receives the
            highest quality of care.
          </p>
          <p className="text-gray-700 text-lg">
            Our team of board-certified pathologists and radiologists work
            meticulously to deliver precise results, supporting doctors and
            patients alike in making informed healthcare decisions.
          </p>
          <p className="text-gray-700 text-lg">
            We also prioritize patient convenience with services like home
            sample collection, online reports, and easy appointment scheduling.
            At Hubble Diagnostics, we combine technology, expertise, and
            compassion to provide healthcare you can trust.
          </p>
        </div>
      </section>

      {/* Full-width YouTube Video */}
      <section className="w-full bg-gray-100 py-8 sm:py-16">
        <div
          className="w-full h-0 relative"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Hubble Diagnostics Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}
