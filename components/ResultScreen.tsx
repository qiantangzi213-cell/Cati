import React, { useState } from "react";
import { CatResult } from "../types/cati";

interface ResultScreenProps {
  result: CatResult;
  onReset: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onReset }) => {
  const [copyStatus, setCopyStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

  const handleShare = () => {
    const textToCopy = `${result.shareText}${window.location.href}`;
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopyStatus("SUCCESS");
        setTimeout(() => setCopyStatus("IDLE"), 2000);
      })
      .catch(() => {
        setCopyStatus("ERROR");
        setTimeout(() => setCopyStatus("IDLE"), 2000);
      });
  };

  const getShareButtonText = () => {
    if (copyStatus === "SUCCESS") return "已复制！";
    if (copyStatus === "ERROR") return "复制失败，请手动截图分享";
    return "分享给朋友 [SHARE]";
  };

  return (
    <div className="flex flex-col items-center text-center py-2 sm:py-4">
      <div className="bg-black text-white px-3 py-1 font-bold text-[10px] sm:text-xs mb-4 uppercase tracking-widest">Test Completed</div>
      
      <h3 className="text-lg sm:text-xl font-bold mb-1">你的猫格是</h3>
      <h2 className="text-4xl sm:text-5xl font-black mb-2 tracking-tighter underline decoration-[#FFD60A] decoration-[6px] sm:decoration-8 underline-offset-4">
        {result.name}
      </h2>
      <p className="text-gray-500 font-bold mb-5 sm:mb-6 italic text-xs sm:text-sm px-4 leading-snug">“ {result.subtitle} ”</p>

      <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
        {result.tags.map((tag, idx) => (
          <span key={idx} className="border-2 border-black px-2 sm:px-3 py-1 text-[10px] sm:text-sm font-black bg-[#FFD60A] shadow-[2px_2px_0_0_#000000]">
            #{tag}
          </span>
        ))}
      </div>

      <div className="bg-white border-4 border-black p-4 sm:p-6 mb-6 sm:mb-8 text-left relative shadow-[4px_4px_0_0_#000000] w-full">
        <div className="absolute -top-3 sm:-top-4 -left-1 sm:-left-2 bg-[#FFD60A] border-2 border-black px-2 py-0.5 sm:py-1 font-black text-[10px] sm:text-xs uppercase">Description</div>
        <p className="leading-relaxed font-bold text-base sm:text-lg mb-4 sm:mb-6 pt-2">
          {result.description}
        </p>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t-2 border-black pt-4">
          <div>
            <h4 className="font-black text-[10px] sm:text-sm mb-2 text-green-600 uppercase tracking-tighter">✓ 优势 [Pros]</h4>
            <ul className="text-[10px] sm:text-xs font-bold space-y-1">
              {result.strengths.map((s, i) => <li key={i} className="leading-tight">· {s}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[10px] sm:text-sm mb-2 text-amber-600 uppercase tracking-tighter">⚠ 弱点 [Cons]</h4>
            <ul className="text-[10px] sm:text-xs font-bold space-y-1">
              {result.weaknesses.map((w, i) => <li key={i} className="leading-tight">· {w}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-4 border-t-2 border-black pt-4 flex flex-col sm:flex-row sm:items-center gap-2">
          <h4 className="font-black text-[10px] sm:text-sm uppercase flex-shrink-0">最佳猫搭子:</h4>
          <div className="flex flex-wrap gap-1.5">
            {result.bestMatch.map((m, i) => (
              <span key={i} className="bg-black text-white text-[9px] sm:text-[10px] px-2 py-0.5 sm:py-1 font-bold">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full space-y-3 sm:space-y-4">
        <button 
          className="w-full bg-black text-white text-lg sm:text-xl font-bold py-4 sm:py-5 hover:bg-[#FFD60A] hover:text-black transition-colors border-2 sm:border-4 border-black shadow-[4px_4px_0_0_#FFD60A] active:translate-y-1 active:shadow-none touch-manipulation"
          onClick={handleShare}
        >
          {getShareButtonText()}
        </button>
        <button 
          onClick={onReset}
          className="w-full bg-white text-black text-lg sm:text-xl font-bold py-4 sm:py-5 hover:bg-black hover:text-white transition-colors border-2 sm:border-4 border-black shadow-[4px_4px_0_0_#000000] active:translate-y-1 active:shadow-none touch-manipulation"
        >
          再测一次 [RETRY]
        </button>
      </div>
    </div>
  );
};
