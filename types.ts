export interface Option {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface Question {
  q: string;
  options: Option[];
  maxCorrect: number;
}

export interface Level {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  difficulty: number;
}

export interface User {
  name: string;
  totalScore: number;
  unlockedLevel: number;
}

export interface LevelData {
  meta: Level;
  questions: Question[];
  currentIndex: number;
  correctCount: number;
  history: any[];
}