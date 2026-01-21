
import React, { useState, useEffect } from 'react';
import { QUESTIONS, Question } from './data.ts';

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function App() {
  const [view, setView] = useState<'start' | 'quiz' | 'result'>('start');
  const [quizData, setQuizData] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const startQuiz = () => {
    setQuizData(shuffleArray(QUESTIONS));
    setCurrentIndex(0);
    setScore(0);
    setSelectedIdx(null);
    setIsAnswered(false);
    setView('quiz');
  };

  const handleAnswer = () => {
    if (selectedIdx === null) return;
    if (selectedIdx === quizData[currentIndex].correct) {
      setScore(s => s + 1);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedIdx(null);
      setIsAnswered(false);
    } else {
      setView('result');
    }
  };

  if (view === 'start') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-slide-up bg-[#0f172a]">
        <div className="glass p-12 rounded-[3rem] text-center max-w-2xl shadow-2xl border-blue-500/20">
          <div className="inline-block p-4 bg-blue-600/20 rounded-2xl mb-8">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 .517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h1 className="text-5xl font-heading font-bold text-white mb-4">GenBio 2 Master</h1>
          <p className="text-slate-400 text-lg mb-12 max-w-md mx-auto">
            100 Unique Assessment Items strictly covering Systematics, Cladistics, Geologic Time, Fossils, and Evolution.
          </p>
          <button 
            onClick={startQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-2xl text-xl shadow-xl transition-all active:scale-95"
          >
            START 100-QUESTION REVIEWER
          </button>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Comprehensive Curriculum Mastery</p>
        </div>
      </div>
    );
  }

  if (view === 'result') {
    const percentage = Math.round((score / quizData.length) * 100);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-slide-up bg-[#0f172a]">
        <div className="glass p-12 rounded-[3.5rem] text-center max-w-xl w-full">
          <h2 className="text-3xl font-heading font-bold text-white mb-8">Final Performance</h2>
          <div className="text-8xl font-black text-blue-500 mb-2">{percentage}%</div>
          <div className="text-2xl font-bold text-slate-300 mb-12">{score} / {quizData.length} Correct</div>
          <button 
            onClick={() => setView('start')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl text-xl transition-all"
          >
            RESTART ASSESSMENT
          </button>
        </div>
      </div>
    );
  }

  const current = quizData[currentIndex];
  return (
    <div className="max-w-3xl mx-auto min-h-screen py-10 px-4 flex flex-col bg-[#0f172a]">
      <div className="flex justify-between items-end mb-6 px-2">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">{current.topic}</span>
          <div className="text-2xl font-heading font-bold text-white">Item {currentIndex + 1} of {quizData.length}</div>
        </div>
        <div className="glass px-5 py-2 rounded-2xl text-sm font-bold border-blue-500/20 text-blue-400">
          Score: {score}
        </div>
      </div>

      <div className="w-full h-1.5 bg-slate-800 rounded-full mb-10 overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / quizData.length) * 100}%` }}
        />
      </div>

      <div className="glass p-8 md:p-12 rounded-[3rem] animate-slide-up shadow-2xl relative border-blue-500/10">
        <h2 className="text-2xl font-bold text-white mb-10 leading-relaxed">
          {current.question}
        </h2>

        <div className="grid gap-3 mb-10">
          {current.options.map((opt, i) => {
            let style = "w-full p-5 text-left rounded-2xl border-2 font-bold transition-all flex items-center gap-4 ";
            
            if (isAnswered) {
              if (i === current.correct) style += "bg-emerald-500/20 border-emerald-500 text-emerald-400 ";
              else if (i === selectedIdx) style += "bg-red-500/20 border-red-500 text-red-400 ";
              else style += "bg-slate-800/40 border-slate-800 text-slate-600 opacity-50 ";
            } else {
              if (i === selectedIdx) style += "bg-blue-600/20 border-blue-500 text-white shadow-lg ";
              else style += "bg-slate-800/40 border-slate-800 hover:border-slate-600 text-slate-300 ";
            }

            return (
              <button 
                key={i} 
                disabled={isAnswered}
                onClick={() => setSelectedIdx(i)}
                className={style}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-xl border-2 border-current text-xs">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mb-10 p-6 bg-blue-900/20 border border-blue-500/10 rounded-2xl animate-slide-up">
            <p className="text-blue-100 italic font-medium leading-relaxed">{current.explanation}</p>
          </div>
        )}

        <button
          onClick={isAnswered ? handleNext : handleAnswer}
          disabled={selectedIdx === null}
          className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
            selectedIdx === null 
            ? "bg-slate-800 text-slate-600" 
            : "bg-blue-600 hover:bg-blue-700 text-white shadow-xl active:scale-95"
          }`}
        >
          {isAnswered ? (currentIndex === quizData.length - 1 ? "FINISH ASSESSMENT" : "CONTINUE") : "SUBMIT ANSWER"}
        </button>
      </div>
    </div>
  );
}
