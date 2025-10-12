import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* About Header */}
      <section className="bg-blue-600 text-white p-5">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Diagnostics you can trust.
            </h1>
            <p className="text-white/90 text-lg">
              Comprehensive lab, radiology, and preventive health checkups with
              fast, reliable reports.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full h-64 md:h-120 relative">
        <img src="" className="w-full h-full object-cover" />
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
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
    </>
  );
}
