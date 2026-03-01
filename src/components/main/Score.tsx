import { useScoreStore } from "../../zustand/countStore";
import type { ScoreStore } from "../../zustand/countStore";

const Score = () => {
  const { score }: ScoreStore = useScoreStore();

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