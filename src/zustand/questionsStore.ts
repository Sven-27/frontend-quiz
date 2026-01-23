import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import api from '../api/api';
import type { ResponseAPI } from '../api/api';

// Define the Zustand store
export const useQuestionsStore = create(
  devtools(
    persist(
      (set) => ({
        questions: [] as ResponseAPI[],
        loading: false as boolean,
        error: null as string | null,

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