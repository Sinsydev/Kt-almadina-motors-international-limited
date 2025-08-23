 import React from "react";
import { motion } from "framer-motion";
import { Car, Truck, ShieldCheck, DollarSign } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const cards = [
  {
    icon: <Car className="w-10 h-10 text-red-900" />,
    title: "Wide Range of Cars",
    description: "From budget-friendly options to luxury rides, we’ve got the perfect car for you.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-red-900" />,
    title: "Affordable Pricing",
    description: "Transparent deals with no hidden charges. Get the best value for your money.",
  },
  {
    icon: <Truck className="w-10 h-10 text-red-900" />,
    title: "Nationwide Delivery",
    description: "We deliver cars safely to your doorstep, anywhere across Nigeria.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-red-900" />,
    title: "Trusted Dealers",
    description: "All cars are verified and backed by trusted, reliable dealerships.",
  },
];

const HomeSummary = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-600 to-red-300 bg-[length:200%_200%] opacity-90"
      />

      <div className="relative z-10">
        {/* Headline */}
        <motion.h2
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-5xl font-extrabold text-white text-center mb-4 drop-shadow-lg"
        >
          Drive Your Dream Car Today
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white/90 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          Affordable, reliable, and delivered nationwide — discover the best cars
          with a hassle-free experience.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.08,
                rotate: 1,
                boxShadow: "0px 8px 25px rgba(127, 29, 29, 0.6)",
              }}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center cursor-pointer transition-all"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0px 0px 10px rgba(255,255,255,0.3)",
                "0px 0px 20px rgba(127,29,29,0.6)",
                "0px 0px 10px rgba(255,255,255,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white text-red-900 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-red-100 transition-all"
          >
            Browse Cars
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HomeSummary;


