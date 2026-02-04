import { useEffect } from "react";
import ProgressBar from "../ProgressBar"
import { useQuestionsStore } from "../../zustand/questionsStore";
import { useCountStore } from "../../zustand/countStore";
import type { ResponseAPI } from "../../api/api";
import { useLocation } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  const { questions, fetchQuestions }: any = useQuestionsStore();
  const { count, increment }: any = useCountStore();

	useEffect(() => {
		fetchQuestions();
	}, []);

  return (
    <div className="h-full w-full flex flex-col lg:flex-row z-10 gap-9">
      <section className="w-full lg:grow-5">
        <span className="text-grey-500 italic text-[clamp(14px,2vw,20px)]">Question { count } of 10</span>
        <h2 
          className="text-[clamp(20px,4vw,36px)] leading-[1.2] lg:max-w-[20ch] font-medium my-4 text-blue-900 font-light dark:text-gray-200 lg:mb-27"
        >
          {
            questions.filter((topic: ResponseAPI) => `/quiz/${topic.title}` === location.pathname).map((topic: ResponseAPI) => 
              topic.questions[count - 1].question
            )
          }
        </h2>
        <ProgressBar progress={ count * 10} progressText="80%" />
      </section>
      <section className="w-full lg:grow-5 flex flex-col gap-4">
        {
          questions.filter((topic: ResponseAPI) => `/quiz/${topic.title}` === location.pathname).map((topic: ResponseAPI) => 
            Object.entries(topic.questions[count - 1].options).map(([key, option], index) => (
              <button key={index} className="w-full flex items-center px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 text-[clamp(16px,2vw,24px)] dark:text-white font-medium rounded-xl lg:rounded-3xl focus:ring-2 focus:ring-purple-600 hover:ring-2 hover:ring-purple-600 shadow-xl transition text-left">
                <p className="size-[clamp(40px,4vw,56px)] grid place-items-center bg-grey-50 rounded-md mr-5 dark:text-blue-900">{`${key}`}</p>
                <span>{`${option}`}</span>
              </button>
            ))
          )
        }
        <button 
          type="button" 
          className="mt-3 w-full py-4 bg-purple-600 hover:bg-purple-400 text-white font-regular rounded-xl lg:rounded-3xl shadow-xl transition"
          onClick={() => increment()}
        >
          <span className="text-[clamp(16px,2vw,24px)]">Submit Answer</span>
        </button>
      </section>
    </div>
  )
}

export default Quiz