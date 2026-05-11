"use client";

import { useState } from "react";
import { CatType, CatResult } from "../types/cati";
import { CAT_RESULTS } from "../data/catTypes";
import { QUESTIONS } from "../data/questions";
import { HomeScreen } from "../components/HomeScreen";
import { QuizScreen } from "../components/QuizScreen";
import { ResultScreen } from "../components/ResultScreen";

export default function CATIApp() {
  const [step, setStep] = useState<"HOME" | "TEST" | "RESULT">("HOME");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<CatResult | null>(null);

  const startTest = () => {
    setStep("TEST");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setStep("HOME");
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const scores: Record<CatType, number> = {
      BLACK: 0, ORANGE: 0, RAGDOLL: 0, SIAMESE: 0,
      MAINE: 0, CALICO: 0, COW: 0, BRITISH: 0
    };

    finalAnswers.forEach((ansIndex, qIndex) => {
      const option = QUESTIONS[qIndex].options[ansIndex];
      Object.entries(option.scores).forEach(([type, score]) => {
        scores[type as CatType] += score || 0;
      });
    });

    let maxScore = -1;
    let winningType: CatType = "BLACK";

    Object.entries(scores).forEach(([type, score]) => {
      if (score > maxScore) {
        maxScore = score;
        winningType = type as CatType;
      }
    });

    setResult(CAT_RESULTS[winningType]);
    setStep("RESULT");
  };

  const reset = () => {
    setStep("HOME");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-black font-mono selection:bg-[#FFD60A] selection:text-black flex flex-col items-center justify-start sm:justify-center p-4 overflow-x-hidden">
      <div className="w-full max-w-md bg-white border-4 border-black p-4 sm:p-6 shadow-[6px_6px_0_0_#000000] relative overflow-hidden">
        
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-10 h-10 bg-[#FFD60A] border-l-4 border-b-4 border-black"></div>

        {step === "HOME" && <HomeScreen onStart={startTest} />}

        {step === "TEST" && (
          <QuizScreen 
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={QUESTIONS.length}
            question={QUESTIONS[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onBack={goBack}
          />
        )}

        {step === "RESULT" && result && (
          <ResultScreen result={result} onReset={reset} />
        )}
      </div>

      <footer className="mt-8 sm:mt-12 text-center pb-4">
        <p className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase px-4">
          © 2026 CAT TYPE INDICATOR • PIXEL STYLE MVP
        </p>
      </footer>
    </div>
  );
}
