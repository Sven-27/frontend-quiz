import { useEffect } from "react";
import ProgressBar from "../ProgressBar"
import { useQuestionsStore } from "../../zustand/questionsStore";
import type { ApiProps } from "../../zustand/questionsStore";
import { useCountStore } from "../../zustand/countStore";
import type { CountStore } from "../../zustand/countStore";
import { useDataStore } from "../../zustand/dataStore";
import type { DataStore } from "../../zustand/dataStore";
import type { ResponseAPI } from "../../api/api";
import { useLocation } from "react-router-dom";
import SubmitButton from "./buttons/SubmitButton";
import CountButton from "./buttons/CountButton";
import SelectButtons from "./buttons/SelectButtons";

const Quiz = () => {
  const location = useLocation();
  const { questions, fetchQuestions }: ApiProps = useQuestionsStore();
  const { count }: CountStore = useCountStore();
  const { options, isDisabled, errMsg }: DataStore = useDataStore();

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return (
    <div className="h-full w-full flex flex-col lg:flex-row z-10 gap-9">
      <section className="w-full lg:grow-5 flex flex-col lg:justify-between">
        <div>
        <span className="text-grey-500 italic text-[clamp(14px,2vw,20px)]">Question { count } of 10</span>
        <h2 
          className="text-[clamp(20px,4vw,36px)] leading-[1.2] lg:max-w-[20ch] font-medium my-4 text-blue-900 font-light dark:text-gray-200"
        >
          {
            questions.filter((topic: ResponseAPI) => `/frontend-quiz/quiz/${topic.title.toLowerCase()}` === location.pathname.toLowerCase()).map((topic: ResponseAPI) => 
              topic.questions[count - 1].question
            )
          }
        </h2>
        </div>
        <ProgressBar progress={ count * 10 } progressText="80%" />
      </section>
      <section className="w-full lg:grow-5 flex flex-col gap-4">
        <SelectButtons />
        {
          !isDisabled ? (
            <SubmitButton />
          ) : (
            <CountButton />
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