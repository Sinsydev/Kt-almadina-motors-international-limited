 import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cars = [
  { id: 1, name: "Honda Accord 2018", category: "Sedan", image: "/images/showcase01.webp" },
  { id: 2, name: "Camry 2025", category: "SUV", image: "/images/showcase02.webp" },
  { id: 3, name: "Nissan 2025", category: "Luxury", image: "/images/showcase03.webp" },
  { id: 4, name: "Honda Accord 2020", category: "Sedan", image: "/images/showcase04.webp" },
  { id: 5, name: "Mercedes GLK", category: "Sedan", image: "/images/showcase05.webp" },
  { id: 6, name: "Hyndai Tucson 2025", category: "SUV", image: "/images/showcase06.webp" },
  { id: 7, name: "Hyndai Sonata 2025", category: "Luxury", image: "/images/showcase07.webp" },
  { id: 8, name: "Mercedes AMG GT-4-door-couple", category: "Luxury", image: "/images/showcase08.webp" },
  { id: 9, name: "Hyndai 2025", category: "Sedan", image: "/images/showcase09.webp" },
  { id: 10, name: "AUDI 2025", category: "SUV", image: "/images/showcase10.webp" },
];

const categories = ["All", "Sedan", "SUV", "Luxury"];

export default function HomeCars() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // detect when section comes into view
  const { ref, inView } = useInView({
    triggerOnce: false, // animate again when scrolling back
    threshold: 0.1,
  });

  const filteredCars =
    selectedCategory === "All"
      ? cars
      : cars.filter((car) => car.category === selectedCategory);

  return (
    <section ref={ref} className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">🚗 Featured Cars</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded transition ${
              selectedCategory === cat
                ? "bg-red-900 text-white"
                : "bg-white border hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cars Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredCars.map((car, index) => (
          <motion.div
            key={car.id}
            layout
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
              duration: 0.7,
              delay: index * 0.20, // 👈 smoother stagger
              ease: "easeOut",     // 👈 smoother easing
            }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-gray-500">{car.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
