import React from 'react';

// --- Icons ---
const IconWrapper = ({ children, size = 24, className = "", strokeWidth = 2, fill = "none" }) => (
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

const Youtube = (props) => <IconWrapper {...props}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></IconWrapper>;
const ArrowRight = (props) => <IconWrapper {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></IconWrapper>;
const Play = (props) => <IconWrapper {...props}><polygon points="5 3 19 12 5 21 5 3"/></IconWrapper>;

const YouTubeSection = () => {
  const videos = [
    "https://www.youtube.com/embed/f2fA-eA-nWg",
    "https://www.youtube.com/embed/B7puswHsEH0",
    "https://www.youtube.com/embed/zNhMotBWV4Q",
    "https://www.youtube.com/embed/oW0s9Mg28Yg",
  ];

  return (
    <section className="w-full bg-white py-24 relative">
       <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-fade-in-up">
           <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-red-600 font-bold tracking-wider uppercase text-sm mb-2">
                 <Youtube size={16} />
                 <span>Hubble Talks</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Health Insights</h2>
              <p className="text-lg text-gray-600">Watch our latest videos on fetal medicine, diagnostics, and patient care.</p>
           </div>
           <a
            href="https://www.youtube.com/@hubblehealth"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors group"
          >
            Visit Channel <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((url, i) => (
            <div
              key={i}
              className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <iframe
                src={url}
                title={`YouTube video ${i + 1}`}
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0 pointer-events-auto"
              />
              {/* Decorative Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              
               {/* Hover Overlay with Play Icon */}
               <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                  <Play className="text-white fill-current ml-1" size={24} fill="currentColor" /> 
                </div> */}
              </div>
            </div>
          ))}
        </div>

         <div className="mt-10 text-center md:hidden animate-fade-in-up delay-300">
             <a
            href="https://www.youtube.com/@hubblehealth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700"
          >
            Visit Channel <ArrowRight size={20} />
          </a>
         </div>
      </div>
    </section>
  );
};

export default YouTubeSection;