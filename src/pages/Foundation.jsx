export default function FoundationPage() {
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

  return (
    <main className="w-full bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 sm:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Hubble Health Foundation
            </h1>
            <p className="text-gray-200 text-base sm:text-lg max-w-2xl">
              Committed to improving health and wellness in our communities.
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

      {/* Mission Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            The Hubble Health Foundation aims to provide healthcare access,
            support medical education, and promote community wellness through
            sustainable initiatives.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <div
              key={i}
              className="bg-white text-blue-950 rounded-lg shadow p-6 flex flex-col justify-between h-full"
            >
              <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
              <p className="text-gray-700 text-sm">{program.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
