import React from "react";
import machines from "../data/machines";
import ClinicTour from "../components/360Tour";
import AnnouncementBar from "../components/AnnouncementBar";
/* ----------------------------
   Internal Icon Components
---------------------------- */
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

const Star = (props) => (
  <IconWrapper {...props} fill={props.fill || "none"}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </IconWrapper>
);

const ShieldCheck = (props) => (
  <IconWrapper {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </IconWrapper>
);

const User = (props) => (
  <IconWrapper {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconWrapper>
);

const Stethoscope = (props) => (
  <IconWrapper {...props}>
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </IconWrapper>
);

const Activity = (props) => (
  <IconWrapper {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </IconWrapper>
);

const Microscope = (props) => (
  <IconWrapper {...props}>
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </IconWrapper>
);

const HeartPulse = (props) => (
  <IconWrapper {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-2 1.5 3.5h5.27" />
  </IconWrapper>
);

const Target = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </IconWrapper>
);

const Eye = (props) => (
  <IconWrapper {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);

const Zap = (props) => (
  <IconWrapper {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconWrapper>
);

const ArrowRight = (props) => (
  <IconWrapper {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </IconWrapper>
);


export default function About() {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="bg-[#2d69ff] text-white py-5 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-4">
          Combining clinical excellence with cutting-edge technology.
        </p>
      </div>

      <div className="container  mx-auto px-6 py-16 max-w-7xl">
        <div className="max-w-4xl py-10 mx-auto prose lg:prose-xl text-gray-700 space-y-6">
          <h2 className="text-2xl font-bold text-[#2d69ff] mb-2">
            About Hubble Health
          </h2>

          <p>
            Hubble Diagnostics & Fetal Medicine Centre is a specialized{" "}
            <strong>Zero Radiation Diagnostic Centre</strong> dedicated to
            providing advanced, accurate, and safe diagnostic services, with a
            strong focus on women’s imaging, fetal medicine, ultrasound, and
            pathology.
          </p>

          <p>
            Equipped with state-of-the-art ultrasound technology and backed by
            experienced medical professionals, we deliver precise diagnostic
            insights while ensuring maximum patient safety and comfort. Our
            zero-radiation approach makes us a trusted choice for expecting
            mothers and women requiring detailed diagnostic evaluations.
          </p>

          <p>
            At Hubble Health, we combine cutting-edge technology, clinical
            expertise, and compassionate care to support early detection,
            accurate diagnosis, and informed medical decisions—because every
            diagnosis deserves clarity and care.
          </p>

          {/* GLASSMORPHIC KEY HIGHLIGHTS CARD */}
          <div className="relative my-12 group">
            {/* Decorative Background Blobs for Glass Effect */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-100/50 rounded-full blur-3xl -z-10"></div>

            <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
              {/* Header */}
              <h3 className="text-2xl font-bold text-[#2d69ff] mb-8 flex items-center gap-3 border-b border-gray-100/50 pb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-[#2d69ff]">
                  <Star size={24} fill="#2d69ff" />
                </div>
                Key Highlights
              </h3>

              {/* Grid of Pointers */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <ShieldCheck size={22} />,
                    text: "Zero Radiation Diagnostic Centre",
                    color: "text-blue-600 bg-blue-50",
                  },
                  {
                    icon: <User size={22} />,
                    text: "Advanced & Accurate Women’s Imaging",
                    color: "text-pink-600 bg-pink-50",
                  },
                  {
                    icon: <Stethoscope size={22} />,
                    text: "Specialized Fetal Medicine & Ultrasound Services",
                    color: "text-purple-600 bg-purple-50",
                  },
                  {
                    icon: <Activity size={22} />,
                    text: "High-Resolution, Latest-Generation Ultrasound Systems",
                    color: "text-indigo-600 bg-indigo-50",
                  },
                  {
                    icon: <Microscope size={22} />,
                    text: "Comprehensive Pathology & Laboratory Diagnostics",
                    color: "text-teal-600 bg-teal-50",
                  },
                  {
                    icon: <HeartPulse size={22} />,
                    text: "Patient-Centric, Safe & Comfortable Care",
                    color: "text-red-600 bg-red-50",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/80 transition-colors duration-300 group/item border border-transparent hover:border-white/50"
                  >
                    <div
                      className={`mt-1 p-3 rounded-xl ${item.color} shadow-sm group-hover/item:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-base font-semibold text-gray-800 leading-snug self-center">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MISSION AND VISION CARDS */}
          <div className="grid md:grid-cols-2 gap-8 my-12">
            {/* Mission Card */}
            <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-300/30 transition-colors"></div>

              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-blue-200 shadow-lg group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To deliver accurate, advanced, and zero-radiation diagnostic
                services with a strong focus on women’s health, fetal medicine,
                ultrasound, and pathology—ensuring patient safety, diagnostic
                clarity, and compassionate care at every step.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group bg-gradient-to-br from-green-50 to-white border border-green-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-green-300/30 transition-colors"></div>

              <div className="w-12 h-12 bg-[#4baa7d] rounded-xl flex items-center justify-center text-white mb-6 shadow-green-200 shadow-lg group-hover:scale-110 transition-transform">
                <Eye size={24} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To be a trusted centre of excellence in diagnostic and fetal
                medicine, setting benchmarks in zero-radiation imaging, clinical
                accuracy, and patient-centric healthcare, while empowering
                clinicians and patients with reliable diagnostic insights.
              </p>
            </div>
          </div>
        </div>
        {/* FETAL FACE ANNOUNCEMENT */}
        <AnnouncementBar text="Advanced 3D Fetal Face Printing Available •" 
        textColor="black"
        textSize="text-4xl font-bold word-spacing-5px"
        />
        {/* ADVANCED MACHINES SECTION - UPDATED LAYOUT */}
<div className="my-16 w-full">
  <h2 className="text-3xl font-bold text-[#2d69ff] mb-8 text-center">
    Advanced Technology
  </h2>

  <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
    {machines.map((machine, index) => (
      <div
        key={index}
        className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${machine.gradient} shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col`}
      >
        {/* 1. Large Image on Top */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-900">
          <img
            src={machine.image}
            alt={machine.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

          
        </div>

        {/* Content Container */}
        <div className="p-6 relative z-10 flex flex-col flex-grow">
          {/* 2. Machine Name */}
          <h3 className="text-2xl font-bold mb-3 leading-tight tracking-wide text-white">
            {machine.title}
          </h3>

          {/* 3. Description */}
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium opacity-90 line-clamp-5 group-hover:line-clamp-none transition-all duration-300">
            {machine.description}
          </p>
        </div>

        {/* Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -mr-16 -mb-16 pointer-events-none"></div>
      </div>
    ))}
  </div>
</div>
<ClinicTour/>
      </div>
    </div>
  );
}