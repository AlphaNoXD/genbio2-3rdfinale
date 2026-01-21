
import React, { useState, useEffect, useMemo } from 'react';
import { QUESTIONS, Question } from './data.ts';

const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startQuiz = () => {
    const shuffled = shuffle(QUESTIONS);
    setQuizQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setSelectedIdx(null);
    setIsAnswered(false);
    setShowResults(false);
    setQuizStarted(true);
  };

  const currentQuestion = quizQuestions[currentIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedIdx(idx);
  };

  const handleConfirm = () => {
    if (selectedIdx === null) return;
    if (selectedIdx === currentQuestion.correct) {
      setScore(s => s + 1);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedIdx(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  if (!quizStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-slide-up">
        <div className="glass p-12 rounded-[3rem] text-center max-w-2xl shadow-2xl border-blue-500/30">
          <div className="inline-block p-4 bg-blue-600/20 rounded-2xl mb-6">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 .517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h1 className="text-5xl font-heading font-bold text-white mb-4">GenBio 2 Master</h1>
          <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">
            Test your knowledge of Evolution, Systematics, and Geologic Time with 150 randomized challenges.
          </p>
          <button 
            onClick={startQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl text-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all active:scale-95"
          >
            START ASSESSMENT
          </button>
          <p className="mt-6 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Comprehensive Reviewer • Multiple Choice</p>
        </div>
      </div>
    );
  }

  if (showResults) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-slide-up">
        <div className="glass p-12 rounded-[3rem] text-center max-w-xl w-full shadow-2xl border-blue-500/30">
          <h2 className="text-3xl font-heading font-bold text-white mb-8">Performance Report</h2>
          <div className="relative inline-flex items-center justify-center mb-8">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
              <circle 
                cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" 
                className="text-blue-500"
                strokeDasharray={552.92}
                strokeDashoffset={552.92 - (552.92 * percentage) / 100}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-5xl font-black">{percentage}%</div>
          </div>
          <div className="text-2xl font-bold text-white mb-10">
            {score} / {quizQuestions.length} Correct
          </div>
          <button 
            onClick={startQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl text-xl transition-all"
          >
            TRY AGAIN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto min-h-screen py-12 px-4 flex flex-col">
      {/* Header Info */}
      <div className="flex justify-between items-end mb-6">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Section {currentQuestion.topic}</span>
          <div className="text-2xl font-heading font-bold">Question {currentIndex + 1} of {quizQuestions.length}</div>
        </div>
        <div className="glass px-4 py-2 rounded-xl text-sm font-bold border-blue-500/30">
          Score: <span className="text-blue-400">{score}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-800 rounded-full mb-12 overflow-hidden p-0.5 border border-slate-700">
        <div 
          className="h-full bg-blue-500 transition-all duration-500 ease-out rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="glass p-8 md:p-12 rounded-[3.5rem] shadow-2xl animate-slide-up relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="grid gap-4 mb-10">
            {currentQuestion.options.map((opt, i) => {
              let style = "option-btn w-full p-5 text-left rounded-2xl border-2 font-semibold text-lg flex items-center gap-4 ";
              
              if (isAnswered) {
                if (i === currentQuestion.correct) style += "bg-emerald-500/20 border-emerald-500 text-emerald-400 ";
                else if (i === selectedIdx) style += "bg-red-500/20 border-red-500 text-red-400 ";
                else style += "bg-slate-800/50 border-slate-700 text-slate-500 ";
              } else {
                if (i === selectedIdx) style += "bg-blue-600/20 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)] ";
                else style += "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800 ";
              }

              return (
                <button 
                  key={i} 
                  disabled={isAnswered}
                  onClick={() => handleSelect(i)}
                  className={style}
                >
                  <span className={`w-8 h-8 flex items-center justify-center rounded-lg border-2 text-sm ${
                    selectedIdx === i ? 'border-current' : 'border-slate-600'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="mb-10 p-6 bg-blue-900/40 border border-blue-500/30 rounded-3xl animate-slide-up">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Quick Recap</span>
              </div>
              <p className="text-blue-100 italic leading-relaxed">{currentQuestion.explanation}</p>
            </div>
          )}

          <button
            onClick={isAnswered ? handleNext : handleConfirm}
            disabled={selectedIdx === null}
            className={`w-full py-5 rounded-2xl font-black text-lg tracking-widest uppercase transition-all ${
              selectedIdx === null 
              ? "bg-slate-800 text-slate-600 cursor-not-allowed" 
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-xl active:scale-95"
            }`}
          >
            {isAnswered ? (currentIndex === quizQuestions.length - 1 ? "FINISH EXAM" : "NEXT QUESTION") : "SUBMIT ANSWER"}
          </button>
        </div>
        
        {/* Subtle Decorative Element */}
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none">
          <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
      </div>
    </div>
  );
}
