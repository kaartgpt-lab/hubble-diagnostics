import React from "react";

// --- Internal Icon ---
const IconWrapper = ({
  children,
  size = 24,
  className = "",
  strokeWidth = 2,
  fill = "none",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const Image = (props) => (
  <IconWrapper {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </IconWrapper>
);

// --- Data ---
const CLINIC_IMAGES = [
  "/clinictour/20230108_171903_211 (1).jpg",
  "/clinictour/20230108_171944_426 (1).jpg",
  "/clinictour/20230108_172022_631.jpg",
  "/clinictour/20230108_172059_218.jpg",
  "/clinictour/20230108_172131_565.jpg",
  "/clinictour/20230108_172207_922.jpg",
  "/clinictour/20230108_172247_324.jpg",
  "/clinictour/20230108_172328_010.jpg",
  "/clinictour/20230108_172417_162.jpg",
];

const ClinicTour = () => {
  return (
    <div className="my-20 w-full overflow-hidden bg-gray-50 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#2d69ff] text-sm font-semibold mb-3">
          <Image size={16} /> 360° Experience
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Tour Our Facility</h2>
        <p className="text-gray-500 mt-2">
          A glimpse inside our state-of-the-art center.
        </p>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full">
        <div className="flex w-max animate-scroll">
          {/* Original Set */}
          {CLINIC_IMAGES.map((img, i) => (
            <div
              key={`orig-${i}`}
              className="w-80 sm:w-96 mx-2 sm:mx-4 rounded-xl overflow-hidden shadow-lg border border-gray-100 relative group"
            >
              <img
                src={img}
                alt="Clinic Interior"
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600";
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}

          {/* Duplicate Set for Seamless Loop */}
          {CLINIC_IMAGES.map((img, i) => (
            <div
              key={`dup-${i}`}
              className="w-80 sm:w-96 mx-2 sm:mx-4 rounded-xl overflow-hidden shadow-lg border border-gray-100 relative group"
            >
              <img
                src={img}
                alt="Clinic Interior"
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600";
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Fade Edges for smooth entry/exit */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ClinicTour;