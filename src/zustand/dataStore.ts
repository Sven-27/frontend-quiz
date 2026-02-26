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
  setOptions: Function;
  setIsAnswer: Function;
  setIsCorrect: Function;
  setIsSelected: Function;
  setIsDisabled: Function;
  setAnswerSelected: Function;
  setErrMsg: Function;
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

  selectedIndex: (index: number) => set((state) => ({selected: state.selected = index })),
  setOptions: (option: string) => set((state) => ({options: state.options  = option })),
  setIsAnswer: (answer: string) => set((state) => ({isAnswer: state.isAnswer  = answer })),
  setIsCorrect: (correct: boolean) => set((state) => ({isCorrect: state.isCorrect  = correct })),
  setIsSelected: (select: boolean) => set((state) => ({isSelected: state.isSelected  = select })),
  setIsDisabled: (disabled: boolean) => set((state) => ({isDisabled: state.isDisabled  = disabled })),
  setAnswerSelected: (answerChosen: boolean) => set((state) => ({answerSelected: state.answerSelected  = answerChosen })),
  setErrMsg: (msg: boolean) => set((state) => ({errMsg: state.errMsg  = msg })),
})
)