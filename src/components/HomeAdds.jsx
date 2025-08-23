 import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Truck, DollarSign, Clock } from "lucide-react";

const values = [
  {
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
    title: "Trusted Quality",
    description: "We provide top-quality vehicles from verified sources.",
  },
  {
    icon: <Truck className="w-10 h-10 text-blue-500" />,
    title: "Fast Delivery",
    description: "Get your dream car delivered quickly and safely.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-yellow-500" />,
    title: "Affordable Prices",
    description: "Competitive pricing with flexible payment options.",
  },
  {
    icon: <Clock className="w-10 h-10 text-purple-500" />,
    title: "24/7 Support",
    description: "Always here to assist you before and after your purchase.",
  },
];

export default function HomeAdds() {
  return (
    <section className="py-16 bg-gray-300">
      {/* Headline */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Why Choose Us
      </motion.h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex justify-center mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{value.title}</h3>
            <p className="text-gray-500">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


