import { create } from "zustand";

export type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCountStore = create<CountStore>((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));