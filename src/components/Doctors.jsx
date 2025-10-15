import doctors from "../data/doctors";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Doctors() {
  return (
    <section className="w-full bg-blue-950 py-12">
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="text-4xl font-bold text-gray-200 mb-8 text-center">
          Our Doctors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white text-blue-950 rounded-lg overflow-hidden flex flex-col items-center text-center p-4"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-48 object-contain bg-white p-4"
              />
              <div className="mt-4 font-semibold text-lg">{doc.name}</div>
              <div className="text-blue-700 text-sm mt-1">
                {doc.specialization}
              </div>
              <div className="text-blue-600 text-xs mt-2">
                {doc.qualification}
              </div>

              {/* Socials */}
              <div className="flex gap-3 mt-3">
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
          ))}
        </div>
      </div>
    </section>
  );
}
