import { create } from "zustand";

export type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export type ScoreStore = {
  score: number;
  increment: () => void;
  decrement: () => void;
};

export const useCountStore = create<CountStore>((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export const useScoreStore = create<ScoreStore>((set) => ({
  score: 0,
  increment: () => set((state) => ({ score: state.score + 1 })),
  decrement: () => set((state) => ({ score: state.score - 1 })),
}));