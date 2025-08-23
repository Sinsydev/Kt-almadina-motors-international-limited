import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductLoader from "./ProductLoader";
import ProductError from "./ProductError";

function ProductList({ products = [], loading, error }) {
  if (loading) return <ProductLoader />;
  if (error) return <ProductError message={error} />;

  if (!Array.isArray(products)) {
    console.error("Products is not an array:", products);
    return (
      <p className="text-center text-red-500 mt-10">
        Invalid product data
      </p>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      <AnimatePresence>
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProductList;


