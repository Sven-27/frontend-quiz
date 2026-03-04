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
    <main className="h-full w-full flex flex-col xl:flex-row z-10">
      <section className="mb-[clamp(40px,4vw,64px)]">
        <h1 className="text-[clamp(40px,4vw,64px)] font-light leading-12 lg:leading-13 xl:leading-18">Quiz completed<br/><span className="font-medium">You scored...</span></h1>
      </section>
      <section>
      <div className="flex flex-col items-center bg-white p-[clamp(32px,4vw,48px)] mb-[clamp(16px,4vw,24px)] rounded-xl md:rounded-2xl shadow-lg">
          {
            questions.filter((topic: ResponseAPI) => `/score/${topic.title.toLowerCase()}` === location.pathname.toLowerCase()).map((topic: ResponseAPI) => 
              <div className="flex items-center gap-3">
                <img src={topic.icon} className={`bg-white size-[clamp(40px,6vw,56px)] p-1 lg:p-[5px] rounded-lg ${topic['icon-bg']}`} alt={topic.title} />
                <span className="text-[clamp(18px,4vw,28px)] font-medium">{topic.title}</span>
              </div>
          )
        }
        <span className="text-[clamp(88px,4vw,144px)] font-bold">{score}</span>
        <p>out of { count }</p>
      </div>
      <ResetButton />
      </section>
    </main>
  )
}

export default Score