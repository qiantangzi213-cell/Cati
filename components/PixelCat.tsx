import React from "react";

export const PixelCat = () => (
  <div className="relative w-32 h-32 flex items-center justify-center mb-8">
    <div className="w-24 h-24 bg-black relative shadow-[4px_4px_0_0_#FFD60A]">
      {/* Ears */}
      <div className="absolute -top-4 left-0 w-6 h-6 bg-black"></div>
      <div className="absolute -top-4 right-0 w-6 h-6 bg-black"></div>
      {/* Eyes */}
      <div className="absolute top-6 left-4 w-4 h-4 bg-white">
        <div className="absolute top-1 left-1 w-2 h-2 bg-black"></div>
      </div>
      <div className="absolute top-6 right-4 w-4 h-4 bg-white">
        <div className="absolute top-1 left-1 w-2 h-2 bg-black"></div>
      </div>
      {/* Nose */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FFD60A]"></div>
      {/* Whiskers */}
      <div className="absolute top-14 left-0 w-4 h-1 bg-white opacity-50"></div>
      <div className="absolute top-16 left-0 w-4 h-1 bg-white opacity-50"></div>
      <div className="absolute top-14 right-0 w-4 h-1 bg-white opacity-50"></div>
      <div className="absolute top-16 right-0 w-4 h-1 bg-white opacity-50"></div>
    </div>
  </div>
);
