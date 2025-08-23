"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="relative w-full bg-black py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-10" />

      <div className="max-w-5xl mx-auto text-center md:text-left">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-gray-500 mb-8"
        >
          Our Story
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6"
        >
          KT ALMADINA MOTORS INTERNATIONAL LTD was founded with a clear mission:
          to provide reliable, affordable, and high-quality vehicles to our
          customers. From humble beginnings, we have grown into a trusted name
          in the automobile industry, known for our dedication, transparency,
          and excellent customer service.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10"
        >
          Our team works tirelessly to ensure that every customer not only finds
          the right car but also enjoys a smooth and professional experience. We
          believe in building long-term relationships, not just closing sales.
        </motion.p>

        {/* Accent Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto md:mx-0"
        />
      </div>
    </section>
  );
}
