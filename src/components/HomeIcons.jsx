 import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomeIcons() {
  const brands = [
    { name: "BMW", src: "/images/logo2.png" },
    { name: "FORD", src: "/images/logo3.png" },
    { name: "MERCEDES", src: "/images/logo4.png" },
    { name: "HONDA", src: "/images/logo5.webp" },
    { name: "TOYOTA", src: "/images/logo6.webp" },
    { name: "CITROEN", src: "/images/logo7.webp" },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 }); 

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div ref={ref} className="bg-white py-12">
      <h2 className="text-center text-2xl font-bold mb-8">
        Trusted Car Brands We Offer
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="flex flex-col items-center"
          >
            <img
              src={brand.src}
              alt={brand.name}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm font-medium">{brand.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}




