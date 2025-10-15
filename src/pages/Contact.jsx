import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            We’re here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-950">
              Contact Info
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Phone:</strong> +91 98765 43210
              </li>
              <li>
                <strong>Email:</strong> info@hubblediagnostics.example
              </li>
              <li>
                <strong>Address:</strong> 45, Health Avenue, Your City
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-950 mt-6">
              Location
            </h3>
            <iframe
              title="Map"
              className="w-full h-64 rounded-lg border border-gray-300 mt-2"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509375!2d144.9537363159047!3d-37.81627974246686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2sau!4v1634554321"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="5"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-950 text-white font-semibold rounded-lg px-5 py-2.5 hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
