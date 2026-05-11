import React from "react";
import { Question } from "../types/cati";
import { ProgressBar } from "./ProgressBar";

interface QuizScreenProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  question: Question;
  onAnswer: (index: number) => void;
  onBack: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ 
  currentQuestionIndex, 
  totalQuestions, 
  question, 
  onAnswer, 
  onBack 
}) => {
  return (
    <div className="py-2 sm:py-4">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <span className="font-bold bg-black text-white px-2 text-xs sm:text-sm uppercase tracking-wider">Progress</span>
        <span className="font-bold text-base sm:text-lg">{currentQuestionIndex + 1} / {totalQuestions}</span>
      </div>

      <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />

      <h3 className="text-xl sm:text-2xl font-black mb-6 sm:mb-8 leading-tight min-h-[4.5rem] flex items-center">
        {question.text}
      </h3>

      <div className="space-y-3 sm:space-y-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(idx)}
            className="w-full text-left p-4 sm:p-5 border-2 sm:border-4 border-black hover:bg-[#FFD60A] transition-colors font-bold group relative active:translate-x-1 active:translate-y-1 active:shadow-none shadow-[4px_4px_0_0_#000000] touch-manipulation min-h-[4rem] sm:min-h-0 flex items-center"
          >
            <span className="mr-3 opacity-30 group-hover:opacity-100 flex-shrink-0 text-sm sm:text-base">0{idx + 1}.</span>
            <span className="leading-snug text-sm sm:text-base">{option.text}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 flex justify-start">
        <button 
          onClick={onBack}
          className="text-xs sm:text-sm font-bold underline underline-offset-4 hover:bg-black hover:text-white px-2 py-1 transition-colors"
        >
          {"<"} 返回 [BACK]
        </button>
      </div>
    </div>
  );
};
