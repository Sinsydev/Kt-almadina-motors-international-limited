import React from "react";

function ProductHead() {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/product-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional dark gradient) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <div className="absolute bottom-6 left-6">
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Our Product
        </h1>
      </div>
    </div>
  );
}

export default ProductHead;
