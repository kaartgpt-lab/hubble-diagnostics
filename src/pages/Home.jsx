import { useNavigate } from "react-router-dom";
import Services from "../components/Services.jsx";
import Hero from "../components/Hero.jsx";
import Blogs from "../components/Blogs.jsx";
import YouTubeSection from "../components/Youtube.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Doctors from "../components/Doctors.jsx";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl text-blue-950 font-bold mb-6">About Us</h2>
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
            className="border-2 border-blue-950 text-blue-950 font-semibold cursor-pointer px-6 py-2 rounded-md transition"
          >
            Know More About Us
          </button>
        </div>
      </section>

      <Doctors />

      <Services />
      <Blogs />

      <YouTubeSection />

      <Testimonials />

      {/* Instagram Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="w-full px-2 sm:px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8 text-center">
            Instagram
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden border border-gray-200"
              >
                <img
                  src={`https://picsum.photos/seed/insta${i}/600`}
                  alt={`Instagram ${i}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>

          {/* Optional Button */}
          <div className="flex justify-center mt-10">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 !text-white font-medium px-6 py-3 rounded-sm transition"
            >
              <FaInstagram className="w-5 h-5 text-white" />
              Visit Our Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
