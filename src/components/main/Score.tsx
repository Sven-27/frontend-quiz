import { useScoreStore } from "../../zustand/countStore";

type ScoreProps = {
  score: number;
}

const Score = () => {
  const { score }: ScoreProps = useScoreStore();
  return (
    <div>{score}</div>
  )
}

export default Score