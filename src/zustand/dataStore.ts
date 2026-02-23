import { create } from 'zustand';

export type DataStore = {
  selected: null | number;
  options: string;
  isAnswer: string;
  isCorrect: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  answerSelected: boolean;
  errMsg: boolean;
  selectedIndex: Function;
}

// Define states based on selected or button clicks
export const useDataStore = create<DataStore>((set) => ({
  selected: null,
  options: "",
  isAnswer: "",
  isCorrect: false,
  isSelected: false,
  isDisabled: false,
  answerSelected: false,
  errMsg: false,

  selectedIndex: (index: number) => set((state) => ({selected: state.selected = index }))
})
)