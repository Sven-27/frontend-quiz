import { useEffect } from "react";
import { useScoreStore } from "../../zustand/countStore";
import type { ScoreStore } from "../../zustand/countStore";
import { useQuestionsStore } from "../../zustand/questionsStore";
import type { ApiProps } from "../../zustand/questionsStore";
import type { ResponseAPI } from "../../api/api";
import { useLocation } from "react-router-dom";
import { useCountStore } from "../../zustand/countStore";
import type { CountStore } from "../../zustand/countStore";
import ResetButton from "./buttons/ResetButton";
import Confetti from 'react-confetti';

const Score = () => {
  const { score }: ScoreStore = useScoreStore();
  const { questions, fetchQuestions }: ApiProps = useQuestionsStore();
  const location = useLocation();
  const { count }: CountStore = useCountStore();

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  console.log(count, score);

  return (
    <main className="h-full w-full flex flex-col xl:flex-row z-10">
      {score === 10 && <Confetti />}
      <section className="mb-[clamp(40px,4vw,64px)] xl:w-1/2">
        <h1 className="text-[clamp(40px,4vw,64px)] text-blue-900 dark:text-white font-light leading-12 lg:leading-13 xl:leading-18">Quiz completed<br/><span className="font-medium">You scored...</span></h1>
      </section>
      <section className="xl:w-1/2">
      <div className="flex flex-col items-center bg-white dark:bg-blue-850 p-[clamp(32px,4vw,48px)] mb-[clamp(16px,4vw,24px)] rounded-xl md:rounded-3xl shadow-lg">
          {
            questions.filter((topic: ResponseAPI) => `/frontend-quiz/score/${topic.title.toLowerCase()}` === location.pathname.toLowerCase()).map((topic: ResponseAPI) => 
              <div className="flex items-center gap-3">
                <img src={topic.icon} className={`bg-white size-[clamp(40px,6vw,56px)] p-1 lg:p-[5px] rounded-lg ${topic['icon-bg']}`} alt={topic.title} />
                <span className="text-[clamp(18px,2.5vw,28px)] font-medium text-blue-900 dark:text-white">{topic.title}</span>
              </div>
          )
        }
        <span className="text-[clamp(88px,10vw,144px)] font-bold text-blue-900 dark:text-white">{score}</span>
        <p className="text-[clamp(18px,2.5vw,28px)] text-grey-500 dark:text-blue-300">out of { count }</p>
      </div>
      <ResetButton />
      </section>
    </main>
  )
}

export default Score