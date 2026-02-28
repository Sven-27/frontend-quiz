import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import api from '../api/api';
import type { ResponseAPI } from '../api/api';

export type ApiProps = {
  questions: ResponseAPI[];
  loading?: boolean;
  error?: string | null;
  fetchQuestions: Function;
  clearQuestions?: Function;
}

// Define the Zustand store
export const useQuestionsStore = create<ApiProps>()(
  devtools(
    persist(
      (set) => ({
        questions: [],
        loading: false,
        error: null,

        // Fetch posts from API
        fetchQuestions: async () => {
          set({ loading: true, error: null });
          try {
            const response = await api.get('/quizzes');
            set({ questions: response.data, loading: false });
          } catch (error) {
            set({ error: error instanceof Error ? error.message : String(error), loading: false });
            console.error('Error fetching questions:', error);
          }
        },

        // Clear stored posts
        clearQuestions: () => set({ questions: [] }),
      }),
      {
        name: 'questions-storage', // Key name in localStorage
      }
    )
  )
);