import { useEffect } from "react";
import { useScoreStore } from "../../zustand/countStore";
import type { ScoreStore } from "../../zustand/countStore";
import { useQuestionsStore } from "../../zustand/questionsStore";
import type { ApiProps } from "../../zustand/questionsStore";
import type { ResponseAPI } from "../../api/api";

const Score = () => {
  const { score }: ScoreStore = useScoreStore();
  const { questions, fetchQuestions }: ApiProps = useQuestionsStore();

	useEffect(() => {
		fetchQuestions();
	}, []);

  return (
    <main className="h-full w-full flex flex-col flex-lg-row z-10">
      <section>
        <h1>Quiz completed<br/><span>You scored...</span></h1>
      </section>
      <section>

      {score}
      </section>
    </main>
  )
}

export default Score