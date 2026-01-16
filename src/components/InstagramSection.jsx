import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function InstagramSection() {
  const posts = [
    "https://www.instagram.com/p/DLXmJ9ESrsB/",
    "https://www.instagram.com/p/DGAkSPCS3gR/",
    "https://www.instagram.com/p/DSFqM8MjBp3/",
    "https://www.instagram.com/p/DRw_uBUAWgf/",
    "https://www.instagram.com/p/DRUiqk9D1RO/",
    "https://www.instagram.com/p/DREzN5OD9Vq/",
  ];

  /* ----------------------------
     Slide-in card variants
  ---------------------------- */
  const slideVariant = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50, // alternate left/right
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#e1f0ff] py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#2d69ff] mb-8 text-center">
        Instagram
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 px-4">
        {posts.map((url, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={slideVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-md bg-black aspect-square"
          >
            <iframe
              src={`${url}embed/?hidecaption=1`}
              className="absolute left-0 -top-[64px] w-full h-[520px]"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="https://www.instagram.com/hubble.health/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2d69ff]
                     hover:bg-[#4baa7d] text-white font-medium
                     px-6 py-3 rounded-sm transition"
        >
          <FaInstagram />
          Visit Our Instagram
        </a>
      </div>
    </section>
  );
}
