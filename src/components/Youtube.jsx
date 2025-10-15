import React from "react";

export default function YouTubeSection() {
  const videos = [
    "https://www.youtube.com/embed/oHg5SJYRHA0",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/oHg5SJYRHA0",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
  ];

  return (
    <section className="w-full bg-gray-100 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8 text-center">
        YouTube
      </h2>

      {/* Full-width Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] w-full">
        {videos.map((url, index) => (
          <div key={index} className="aspect-video overflow-hidden">
            <iframe
              src={url}
              title={`YouTube video ${index + 1}`}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              style={{ border: 0 }}
            ></iframe>
          </div>
        ))}
      </div>

      {/* Channel Button */}
      <div className="flex justify-center mt-10">
        <a
          href="https://www.youtube.com/@YourChannel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 !text-white rounded-sm font-medium px-6 py-3 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-red-500"
          >
            <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.6-.8-2-1C18 2.4 12 2.4 12 2.4h-.1s-6 0-8.7.4c-.5.2-1.3.2-2 1C.7 4.5.5 6.2.5 6.2S0 8.3 0 10.3v2c0 2 .5 4.1.5 4.1s.2 1.7.8 2.4c.8.8 1.8.8 2.2.9 1.6.2 6.5.4 8.5.4h.2c2 0 6.9-.1 8.5-.4.4 0 1.4-.1 2.2-.9.6-.7.8-2.4.8-2.4s.5-2.1.5-4.1v-2c0-2-.5-4.1-.5-4.1zM9.6 14.8V8.7l5.8 3-5.8 3.1z" />
          </svg>
          Visit Our YouTube Channel
        </a>
      </div>
    </section>
  );
}
