import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  return (
    <div className="w-full bg-gray-200 h-4 mb-8 border-2 border-black overflow-hidden">
      <div 
        className="bg-[#FFD60A] h-full transition-all duration-300" 
        style={{ width: `${(current / total) * 100}%` }}
      ></div>
    </div>
  );
};
