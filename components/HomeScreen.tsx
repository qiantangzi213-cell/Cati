import React from "react";
import { PixelCat } from "./PixelCat";

interface HomeScreenProps {
  onStart: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center text-center py-6 sm:py-8">
      <h1 className="text-5xl sm:text-6xl font-black tracking-tighter mb-2 leading-none">CATI</h1>
      <h2 className="text-lg sm:text-xl font-bold bg-black text-white px-2 mb-4 inline-block">重生之我变成了一只猫</h2>
      <p className="text-gray-600 mb-6 sm:mb-8 italic text-sm sm:text-base">这一世，我要活出自己的猫生</p>
      
      <div className="transform scale-90 sm:scale-100">
        <PixelCat />
      </div>

      <button 
        onClick={onStart}
        className="w-full bg-black text-white text-xl sm:text-2xl font-bold py-5 sm:py-6 hover:bg-[#FFD60A] hover:text-black transition-colors border-4 border-black active:translate-y-1 active:shadow-none shadow-[6px_6px_0_0_#FFD60A] touch-manipulation"
      >
        开始测试 [START]
      </button>
    </div>
  );
};
