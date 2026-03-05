import { Link } from "react-router-dom"
import { useCountStore, useScoreStore } from "../../../zustand/countStore";
import { useDataStore } from "../../../zustand/dataStore";
import type { DataStore } from "../../../zustand/dataStore";
import type { CountStore, ScoreStore } from "../../../zustand/countStore";

const ResetButton = () => {
  const { resetCount }: CountStore = useCountStore();
  const { resetScore }: ScoreStore = useScoreStore();
    //  const { setOptions, setIsDisabled, 
    //          setIsSelected, setAnswerSelected, 
    //          setErrMsg, selectedIndex }: DataStore = useDataStore();
  return (
    <Link
      to="/"
      className="w-full flex justify-center items-center bg-purple-600 text-white rounded-xl md:rounded-3xl py-[clamp(16px,2.5vw,32px)] text-[clamp(18px,2.5vw,28px)]"
      onClick={() => {
        resetCount();
        resetScore();
      }}
    >
      Play Again
    </Link>
  )
}

export default ResetButton