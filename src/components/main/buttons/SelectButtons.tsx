import { useQuestionsStore } from "../../../zustand/questionsStore";
import type { ApiProps } from "../../../zustand/questionsStore";
import { useCountStore } from "../../../zustand/countStore";
import type { CountStore } from "../../../zustand/countStore"
import { useDataStore } from "../../../zustand/dataStore";
import type { DataStore } from "../../../zustand/dataStore";
import type { ResponseAPI } from "../../../api/api";

const SelectButtons = () => {
  const { questions }: ApiProps = useQuestionsStore();
    const { count }: CountStore = useCountStore();
  const { selected, selectedIndex,
          options, setOptions,
          isAnswer, setIsAnswer,
          isCorrect,isDisabled,
          isSelected, setIsSelected,
          answerSelected, setAnswerSelected,
         }: DataStore = useDataStore();
  return (
    <>
      {
        questions.filter((topic: ResponseAPI) => `/quiz/${topic.title}` === location.pathname).map((topic: ResponseAPI) => 
          Object.entries(topic.questions[count - 1].options).map(([key, option], index) => (
            <button 
              key={index} 
              onClick={() => { 
                selectedIndex(index); 
                setOptions(String(option)); 
                setIsAnswer(String(topic.questions[count - 1].answer)); 
                setIsSelected(false);
                setAnswerSelected(true);
              }}
              disabled={isDisabled}
              className={`option-btn w-full flex items-center px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 text-[clamp(16px,2vw,24px)] 
                          dark:text-white font-medium rounded-xl lg:rounded-3xl ${!isDisabled && "hover:ring-2 hover:ring-purple-600"} shadow-xl transition text-left 
                          ${selected === index && answerSelected ? "ring-2 ring-purple-600" : ""} 
                          ${isCorrect && selected === index && isSelected ? "ring-2 !ring-green-500" : 
                            selected === index && options !== isAnswer && isSelected && "ring-2 ring-red-500"} 
                          `}
            >
              <p className={`size-[clamp(40px,4vw,56px)] grid place-items-center bg-grey-50 rounded-md mr-5 dark:text-blue-900
                              ${selected === index && answerSelected ? "bg-purple-600 text-white dark:text-white" : ""} 
                              ${isCorrect && selected === index && isSelected ? "!bg-green-500" : 
                              selected === index && options !== isAnswer && isSelected && "!bg-red-500"}`}
              >
                {String(key)}
              </p>
              <span className="w-full">{String(option)}</span>
              <img 
                src="../../src/assets/images/icon-correct.svg" 
                alt="Check Icon" 
                className={`size-[clamp(32px,6vw,40px)] 
                            ${isSelected && String(option) === isAnswer ? "block" : "hidden"}               
                          `} 
              />
                <img 
                src="../../src/assets/images/icon-incorrect.svg" 
                alt="Check Icon" 
                className={`size-[clamp(32px,6vw,40px)] ${options !== isAnswer && selected === index && isSelected ? "block" : "hidden"}`} 
              />
            </button>
          ))
        )
      }
    </>
  )
}

export default SelectButtons