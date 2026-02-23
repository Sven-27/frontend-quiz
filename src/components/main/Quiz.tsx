import { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar"
import { useQuestionsStore } from "../../zustand/questionsStore";
import { useCountStore } from "../../zustand/countStore";
import { useDataStore } from "../../zustand/dataStore";
import type { ResponseAPI } from "../../api/api";
import { useLocation } from "react-router-dom";
import SubmitButton from "./buttons/SubmitButton";
import CountButton from "./buttons/CountButton";

const Quiz = () => {
  const location = useLocation();
  const { questions, fetchQuestions }: any = useQuestionsStore();
  const { count }: any = useCountStore();
  const { selected, selectedIndex } = useDataStore();
  // const [selected, setSelected] = useState<number | null>(null);
  const [options, setOptions] = useState<string>("");
  const [isAnswer, setIsAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [answerSelected, setAnswerSelected] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<boolean>(false);

	useEffect(() => {
		fetchQuestions();
	}, []);

  // console.log("count is:", count);
  console.log("selected is:", selected);

  return (
    <div className="h-full w-full flex flex-col lg:flex-row z-10 gap-9">
      <section className="w-full lg:grow-5 flex flex-col lg:justify-between">
        <div>
        <span className="text-grey-500 italic text-[clamp(14px,2vw,20px)]">Question { count } of 10</span>
        <h2 
          className="text-[clamp(20px,4vw,36px)] leading-[1.2] lg:max-w-[20ch] font-medium my-4 text-blue-900 font-light dark:text-gray-200"
        >
          {
            questions.filter((topic: ResponseAPI) => `/quiz/${topic.title}` === location.pathname).map((topic: ResponseAPI) => 
              topic.questions[count - 1].question
            )
          }
        </h2>
        </div>
        <ProgressBar progress={ count * 10 } progressText="80%" />
      </section>
      <section className="w-full lg:grow-5 flex flex-col gap-4">
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
        {
          !isDisabled ? (
            <SubmitButton 
              options={options}
              isAnswer={isAnswer}
              setIsCorrect={setIsCorrect}
              setIsSelected={setIsSelected}
              setIsDisabled={setIsDisabled}
              setErrMsg={setErrMsg}
            />
          ) : (
            <CountButton 
              setIsDisabled={setIsDisabled}
              setIsSelected={setIsSelected}
              setAnswerSelected={setAnswerSelected}
              setOptions={setOptions}
              setErrMsg={setErrMsg}
            />
          )
        }
        <span className={`text-red-500 flex items-center justify-center mt-2 text-[clamp(14px,2vw,20px)] ${options === "" && errMsg ? "block" : "hidden"}`}>
          <img src="../../src/assets/images/icon-error.svg" alt="Error Icon" className="size-[clamp(14px,4vw,20px)] mr-2" />
          <p>Please select an answer</p>
        </span>
      </section>
    </div>
  )
}

export default Quiz