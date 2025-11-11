import YouTubeSection from "../components/Youtube";

export default function FoundationPage() {
  return (
    <main className="w-full bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 sm:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Hubble Education
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
      {/* Full-width YouTube Video */}
      <section className="w-full bg-gray-100 py-8 px-48 sm:py-16">
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
      <YouTubeSection />
    </main>
  );
}
