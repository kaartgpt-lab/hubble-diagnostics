import { useNavigate } from "react-router-dom";
import services from "../data/services.js";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Home Header */}
      <section className="bg-blue-600 text-white p-5">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: Text */}
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Diagnostics you can trust.
            </h1>
            <p className="text-white/90 text-lg">
              Comprehensive lab, radiology, and preventive health checkups with
              fast, reliable reports.
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 md:ml-auto">
            <button
              onClick={() => navigate("/services")}
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-blue-100 transition"
            >
              Explore Services
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border border-white text-white font-semibold px-6 py-2 rounded-md hover:bg-white/10 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full h-64 md:h-96 relative">
        <div className="relative w-full aspect-video overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src=""
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 mb-4">
            Hubble Diagnostics delivers accurate results with modern equipment
            and a patient-first approach. Our team of skilled professionals is
            dedicated to ensuring that every test is performed with precision
            and care.
          </p>
          <p className="text-gray-700 mb-4">
            From preventive health checkups to specialized diagnostics, we
            ensure a seamless experience that prioritizes patient comfort and
            convenience. With home sample collection services and online
            reports, we make healthcare accessible and reliable.
          </p>
          <p className="text-gray-700 mb-4">
            Our commitment is to provide fast, transparent, and accurate
            diagnostics for every patient. Hubble Diagnostics combines
            technology, expertise, and compassion to deliver trusted results
            every time.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="border-2 border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-md transition"
          >
            Know More About Us
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((s) => (
              <div
                key={s.slug}
                onClick={() => navigate(`/services/${s.slug}`)}
                className="bg-white p-4 rounded-lg hover:shadow-md cursor-pointer transition"
              >
                <div className="font-semibold text-gray-800">{s.title}</div>
                <div className="text-sm text-gray-600 mt-2">{s.intro}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Latest Blogs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="bg-white rounded-lg border-2 border-gray-100 hover:shadow-md transition"
              >
                <img
                  src={`https://picsum.photos/seed/blog${i}/800/500`}
                  alt={`Blog ${i}`}
                  className="rounded-lg w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold mt-3 text-gray-800">
                    Understanding Your CBC {i}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Why basic blood parameters matter.
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fast reports and friendly staff.",
              "Accurate results—my doctor trusts them.",
              "Seamless home collection experience.",
            ].map((q, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border-gray-100 border-2 hover:shadow-md transition"
              >
                <em className="block text-gray-800">“{q}”</em>
                <div className="text-sm text-gray-600 mt-2">
                  — Patient {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Instagram</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg overflow-hidden border border-gray-200 aspect-square"
              >
                <img
                  src={`https://picsum.photos/seed/insta${i}/600`}
                  alt={`Instagram ${i}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
