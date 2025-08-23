 import React from "react";
import { motion } from "framer-motion";

export default function HomeHero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.querySelector("#cars");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-orange-800 mask-b-from-neutral-500">
            KT ALMADINA MOTORS
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-md from-neutral-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Discover the best cars with unbeatable deals, shipped to your doorstep.
        </motion.p>

        {/* Scroll Down Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button
            onClick={handleScroll}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-black hover:text-white transition-all"
          >
            Scroll Down
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}


