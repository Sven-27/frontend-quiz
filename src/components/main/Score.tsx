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

const Score = () => {
  const { score }: ScoreStore = useScoreStore();
  const { questions, fetchQuestions }: ApiProps = useQuestionsStore();
  const location = useLocation();
  const { count }: CountStore = useCountStore();

	useEffect(() => {
		fetchQuestions();
	}, []);

  return (
    <main className="h-full w-full flex flex-col flex-lg-row z-10">
      <section>
        <h1>Quiz completed<br/><span>You scored...</span></h1>
      </section>
      <section className="flex flex-col items-center">
          {
            questions.filter((topic: ResponseAPI) => `/score/${topic.title.toLowerCase()}` === location.pathname.toLowerCase()).map((topic: ResponseAPI) => 
              <div className="flex items-center gap-2">
                <img src={topic.icon} className={`bg-white size-[clamp(28px,6vw,40px)] p-1 lg:p-[5px] rounded-lg ${topic['icon-bg']}`} alt={topic.title} />
                <span>{topic.title}</span>
              </div>
          )
        }
        <span>{score}</span>
        <p>out of { count }</p>
      </section>
      <ResetButton />
    </main>
  )
}

export default Score