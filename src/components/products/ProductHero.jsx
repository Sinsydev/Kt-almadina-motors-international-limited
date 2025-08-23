 import React from "react";
import { motion } from "framer-motion";

function ProductHero() {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* Background Video with Fade-in */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/product-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Overlay with Smooth Fade */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
      />

      {/* Text Animation */}
      <motion.div
        className="absolute bottom-10 left-8"
        initial={{ opacity: 0, x: -50, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
      >
        <motion.h1
          className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg"
          animate={{ y: [0, -5, 0] }} // floating effect
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Our Product
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default ProductHero;
