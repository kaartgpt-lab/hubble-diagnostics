import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaPlay } from "react-icons/fa";

/* ----------------------------
   Animation Variants
---------------------------- */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function YouTubeSection() {
  const videos = [
    "https://www.youtube.com/embed/f2fA-eA-nWg",
    "https://www.youtube.com/embed/B7puswHsEH0",
    "https://www.youtube.com/embed/zNhMotBWV4Q",
    "https://www.youtube.com/embed/oW0s9Mg28Yg",
  ];

  return (
    <motion.section
      className="w-full bg-gray-100 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#2d69ff] mb-8 text-center"
        variants={item}
      >
        YouTube
      </motion.h2>

      {/* Video Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4"
        variants={container}
      >
        {videos.map((url, index) => (
          <motion.div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden bg-black group"
            variants={item}
            whileHover={{
              scale: 1.04,
              y: -6,
              boxShadow: "0px 18px 35px rgba(0,0,0,0.25)",
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 22,
            }}
          >
            {/* Iframe */}
            <iframe
              src={url}
              title={`YouTube video ${index + 1}`}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              style={{ border: 0 }}
            />

            {/* Hover Overlay */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1 }}
                className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center"
              >
                <FaPlay className="text-white text-xl ml-1" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Channel Button */}
      <motion.div className="flex justify-center mt-12" variants={item}>
        <motion.a
          href="https://www.youtube.com/@hubblehealth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#2d69ff] text-white rounded-md font-medium px-6 py-3"
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 12px 30px rgba(0,0,0,0.35)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
        >
          <FaYoutube className="text-red-500 text-xl" />
          Visit Our YouTube Channel
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
