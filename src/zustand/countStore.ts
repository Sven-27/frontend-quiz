import { create } from "zustand";

export type CountStore = {
  count: number;
  incrementCount: () => void;
  resetCount: () => void;
};

export type ScoreStore = {
  score: number;
  incrementScore:() => void;
  resetScore: () => void;
};

export const useCountStore = create<CountStore>((set) => ({
  count: 1,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount:() => set((state) => ({ count: state.count = 1}))
}));

export const useScoreStore = create<ScoreStore>((set) => ({
  score: 0,
  incrementScore:() => set((state) => ({ score: state.score + 1 })),
  resetScore:() => set((state) => ({ score: state.score = 0}))
}));