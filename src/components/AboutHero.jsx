 import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="relative w-full h-[50vh]">
      {/* Background Image */}
      <img
         src="/images/about-bg.webp"
         alt="About Background"
         className="w-full h-full object-cover"
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Text */}
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-6 left-6 text-white text-4xl md:text-6xl font-bold drop-shadow-lg"
      >
        <motion.span
          animate={{ 
            y: [0, -5, 0], 
            textShadow: [
              "0px 0px 10px rgba(127,29,29,0.6)",  
              "0px 0px 20px rgba(127,29,29,0.9)",   
              "0px 0px 10px rgba(127,29,29,0.6)",
            ] 
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          About Us
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default AboutHero;
