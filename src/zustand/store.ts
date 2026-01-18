// src/zustand/store.ts
import axios from "axios";
import { create } from "zustand";

type TinitialState = {
  loading: boolean;
  success: boolean;
  error: boolean;
  data: any;
  errorData: string | null;
};

const initialState: TinitialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
};

export const useGetData = create((set, get) => ({
  ...initialState,

  execute: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get("https://github.com/Sven-27/frontend-quiz-json");
      set({ ...initialState, success: true, data: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      set({ ...initialState, error: true, errorData: errorMessage });
    }
  },
}));