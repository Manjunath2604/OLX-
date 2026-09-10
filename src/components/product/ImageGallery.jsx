import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function ImageGallery({ images = [], title = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 items-start">
      {/* Vertical Thumbnails */}
      <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-y-auto max-h-[460px] pb-2 md:pb-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
              currentIndex === idx
                ? "border-[#f95721] ring-2 ring-orange-200 shadow-sm"
                : "border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100"
            }`}
          >
            <img src={img} alt={`${title} thumb ${idx}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Large Image */}
      <div className="relative flex-1 w-full h-80 sm:h-[420px] md:h-[460px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 group">
        <img
          src={images[currentIndex]}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Carousel Arrow Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-slate-800 flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-slate-800 flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Badge counter */}
        <span className="absolute bottom-3 right-3 bg-slate-900/75 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-lg">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
