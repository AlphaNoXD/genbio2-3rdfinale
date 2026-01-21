
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  topic: string;
  explanation: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: (number | null)[];
  isFinished: boolean;
  shuffledQuestions: Question[];
}
