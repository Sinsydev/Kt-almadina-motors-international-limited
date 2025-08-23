import { useState } from "react";

function ProductCard({ product }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-red-900 to-red-300 text-white">
      {/* Image Slider */}
      <div className="relative">
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full h-48 object-cover cursor-pointer"
        />

        {/* Prev Button */}
        <button
          onClick={handlePrevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 px-2 py-1 rounded-full text-sm"
        >
          ◀
        </button>

        {/* Next Button */}
        <button
          onClick={handleNextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-900 bg-opacity-50 px-2 py-1 rounded-full text-sm"
        >
          ▶
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm opacity-90">{product.brand}</p>
        <p className="text-md font-bold mt-2">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;


















 
        




