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

const Instagram = (props) => <IconWrapper {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></IconWrapper>;

const InstagramSection = () => {
  const posts = [
    "https://www.instagram.com/p/DLXmJ9ESrsB/",
    "https://www.instagram.com/p/DGAkSPCS3gR/",
    "https://www.instagram.com/p/DSFqM8MjBp3/",
    "https://www.instagram.com/p/DRw_uBUAWgf/",
    "https://www.instagram.com/p/DRUiqk9D1RO/",
    "https://www.instagram.com/p/DREzN5OD9Vq/",
  ];

  return (
    <section className="w-full bg-[#eef7ff] py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
           <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-4 text-pink-600">
              <Instagram size={28} />
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Follow Our Journey</h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay updated with the latest health tips, stories, and behind-the-scenes at Hubble.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((url, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white aspect-square shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <iframe
                src={`${url}embed/?hidecaption=1`}
                className="absolute left-0 -top-[64px] w-full h-[520px] transition-transform duration-700 group-hover:scale-110"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                title={`Instagram Post ${i}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 animate-fade-in-up delay-300">
          <a
            href="https://www.instagram.com/hubble.health/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
               <Instagram size={20} />
               Follow @hubble.health
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;