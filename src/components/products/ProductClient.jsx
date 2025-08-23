import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aisha",
    location: "Abuja",
    feedback:
      "Buying my car was stress-free and smooth. They handled everything with care and professionalism.",
    icon: "👩", // simple icon
  },
  {
    name: "John",
    location: "Kano",
    feedback:
      "I never thought I’d find such affordable deals online. Delivery was fast and secure.",
    icon: "👨",
  },
  {
    name: "Fatima",
    location: "Lagos",
    feedback:
      "The customer service is amazing. I felt guided at every step of the process.",
    icon: "👩",
  },
  {
    name: "Michael",
    location: "Kaduna",
    feedback:
      "Trustworthy and transparent — I recommend them to all my friends.",
    icon: "👨",
  },
];

function ProductClient() {
  return (
    <div className="bg-gray-300 py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-8">
        Our Customers Love Their Experience With Us
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="shadow-md rounded-2xl p-6 border border-gray-200 bg-gray-50"
            initial={{ opacity: 0, y: 50 }} // start invisible & below
            animate={{ opacity: 1, y: 0 }} // animate to visible & normal position
            transition={{
              duration: 0.6,
              delay: i * 0.2, // staggered delay for each card
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }} // hover effect
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-200 text-2xl">
                {t.icon}
              </div>
              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-600">{t.location}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{t.feedback}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProductClient;




