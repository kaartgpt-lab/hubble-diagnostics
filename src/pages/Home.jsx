import { useNavigate } from "react-router-dom";
import Services from "../components/Services.jsx";
import Hero from "../components/Hero.jsx";
import Blogs from "../components/Blogs.jsx";
import YouTubeSection from "../components/Youtube.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Doctors from "../components/Doctors.jsx";
import { FaInstagram } from "react-icons/fa";
import HomeFAQs from "../components/FAQSection.jsx";

export default function Home() {
  const programs = [
    {
      title: "Community Health Camps",
      description:
        "Organizing free health check-up camps in rural and underserved areas to improve community health awareness.",
    },
    {
      title: "Scholarship Programs",
      description:
        "Supporting medical students and aspiring healthcare professionals through scholarships and mentorship.",
    },
    {
      title: "Patient Support Initiatives",
      description:
        "Helping underprivileged patients access diagnostics and treatment with financial aid and guidance.",
    },
    {
      title: "Health Awareness Campaigns",
      description:
        "Conducting workshops, seminars, and online campaigns to educate the public about preventive health measures.",
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl text-blue-950 font-bold mb-6">
            About Hubble
          </h2>
          <h2 className="text-2xl text-gray-700 mb-4">
            Redefining Diagnostic Excellence in Kanpur
          </h2>
          <p className="text-gray-700 mb-4">
            At Hubble Diagnostics & Fetal Medicine Centre, we’re transforming
            the diagnostic experience through advanced imaging, international
            expertise, and compassionate care. With Kanpur’s most advanced
            ultrasound system and zero-radiation technology, we bring precision,
            comfort, and safety together — ensuring confidence in every
            diagnosis.
          </p>
          <p className="text-gray-700 mb-4">
            Our commitment is to provide fast, transparent, and accurate
            diagnostics for every patient. Hubble Diagnostics combines
            technology, expertise, and compassion to deliver trusted results
            every time.
          </p>
          <button
            onClick={() => navigate("/doctors")}
            className="border-2 border-blue-950 text-blue-950 font-semibold cursor-pointer px-6 py-2 rounded-md transition"
          >
            Meet our Specialists
          </button>
        </div>
      </section>
      <YouTubeSection />

      <Doctors />

      <Services />
      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl mb-10">
          {/* Section Label */}
          <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-widest mb-2">
            Why Choose Us?
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            The Hubble Advantage
          </h2>
          <p className="text-gray-700 text-lg">
            Discover what sets Hubble Health apart — a commitment to precision,
            safety, and compassionate care powered by world-class expertise and
            advanced technology.
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <div className="bg-gray-50 text-blue-950 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-3">🩻</div>
            <h3 className="font-semibold text-lg mb-2">
              Most Advanced Ultrasound in Kanpur
            </h3>
            <p className="text-gray-700 text-sm">
              Experience unmatched image clarity for the most accurate
              diagnostics.
            </p>
          </div>

          <div className="bg-gray-50 text-blue-950 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-3">☢️</div>
            <h3 className="font-semibold text-lg mb-2">
              Zero Radiation Centre
            </h3>
            <p className="text-gray-700 text-sm">
              Ensuring complete safety for mothers and families — 100%
              radiation-free.
            </p>
          </div>

          <div className="bg-gray-50 text-blue-950 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-3">👩‍⚕️</div>
            <h3 className="font-semibold text-lg mb-2">
              Globally Trained Specialists
            </h3>
            <p className="text-gray-700 text-sm">
              Our doctors bring expertise from world-leading institutions.
            </p>
          </div>

          <div className="bg-gray-50 text-blue-950 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-semibold text-lg mb-2">
              Integrated Diagnostics
            </h3>
            <p className="text-gray-700 text-sm">
              Imaging, pathology, and interventional services — all under one
              roof.
            </p>
          </div>

          <div className="bg-gray-50 text-blue-950 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-3">⏱️</div>
            <h3 className="font-semibold text-lg mb-2">
              Fast & Accurate Reporting
            </h3>
            <p className="text-gray-700 text-sm">
              Get quick, reliable reports with seamless digital access.
            </p>
          </div>

          <div className="bg-gray-50 text-blue-950 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-3">🌿</div>
            <h3 className="font-semibold text-lg mb-2">Patient-Centric Care</h3>
            <p className="text-gray-700 text-sm">
              Comfort, privacy, and compassion at every step of your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl">
          {/* Section Label */}
          <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-widest mb-2">
            Our Vision
          </h3>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            Technology, Compassion, and Clinical Excellence
          </h2>

          {/* Body Text */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Our vision is to redefine diagnostics in Kanpur — bringing together
            cutting-edge technology and compassionate care to empower healthier
            outcomes for women, mothers, and families.
          </p>
        </div>
      </section>

      <Testimonials />

      {/* Instagram Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="w-full px-2 sm:px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8 text-center">
            Instagram
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
            {[
              "https://www.instagram.com/p/DLXmJ9ESrsB/",
              "https://www.instagram.com/p/DGAkSPCS3gR/",
              "https://www.instagram.com/p/DSFqM8MjBp3/",
              "https://www.instagram.com/p/DRw_uBUAWgf/",
              "https://www.instagram.com/p/DRUiqk9D1RO/",
              "https://www.instagram.com/p/DREzN5OD9Vq/",
            ].map((url, i) => (
              <div
                key={i}
                className="
            overflow-hidden 
            border border-gray-200 
            bg-white
            h-[420px]        /* desktop */
            sm:h-[440px]
            lg:h-[480px]
          "
              >
                <iframe
                  src={`${url}embed`}
                  allow="encrypted-media"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                />
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10">
            <a
              href="https://www.instagram.com/hubble.health/"
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
