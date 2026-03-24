import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import api from '../api/api';
import type { ResponseAPI } from '../api/api';

export type ApiProps = {
  questions: ResponseAPI[];
  loading?: boolean;
  error?: string | null;
  fetchQuestions: () => Promise<void>;
}

// Define the Zustand store
export const useQuestionsStore = create<ApiProps>()(
  devtools(
      (set) => ({
        questions: [],
        loading: false,
        error: null,

        // Fetch posts from API
        fetchQuestions: async () => {
          set({ loading: true, error: null });
          try {
            const response = await api.get('/quizzes');
            console.log('Fetched questions:', response.data);
            set({ questions: response.data, loading: false });
          } catch (error) {
            set({ error: error instanceof Error ? error.message : String(error), loading: false });
            console.error('Error fetching questions:', error);
          }
        },
      }),

  )
);