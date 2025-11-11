import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import doctors from "../data/doctors";

export default function OurDoctors() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10 md:py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Doctors</h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              Experienced, compassionate, research-driven clinicians.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-blue-950 font-semibold px-4 py-2 rounded-sm hover:bg-blue-100 transition text-m sm:text-base"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="w-full bg-gray-100 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white text-blue-950 rounded-lg overflow-hidden flex flex-col"
            >
              {/* Image section — full width, no padding */}
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-102 object-cover"
              />

              {/* Text content — padded */}
              <div className="p-6 flex flex-col items-start text-left">
                <div className="font-semibold text-2xl mb-1">{doc.name}</div>
                <div className="text-blue-700 text-sm mb-2">
                  {doc.specialization}
                </div>
                <div className="text-blue-600 text-xs mb-3">
                  {doc.qualification}
                </div>

                {/* Expertise */}
                {doc.expertise && doc.expertise.length > 0 && (
                  <div className="mb-3">
                    <strong className="text-blue-800">Expertise: </strong>
                    <span className="text-blue-700">{doc.expertise}</span>
                  </div>
                )}

                {/* Description */}
                {doc.description && (
                  <p className="text-blue-800 text-sm leading-relaxed mb-3">
                    {doc.description}
                  </p>
                )}

                {/* Socials */}
                <div className="flex gap-3 mt-auto">
                  {doc.socials.facebook && (
                    <a
                      href={doc.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaFacebookF />
                    </a>
                  )}
                  {doc.socials.twitter && (
                    <a
                      href={doc.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {doc.socials.linkedin && (
                    <a
                      href={doc.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaLinkedinIn />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
