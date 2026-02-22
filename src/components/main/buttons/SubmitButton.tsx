import { useScoreStore } from "../../../zustand/countStore";

type SubmitProps = {
  options: String;
  isAnswer: String;
  setIsCorrect: Function;
  setIsSelected: Function;
  setIsDisabled: Function;
  setErrMsg: Function;  
}

const SubmitButton = ({options, isAnswer, setIsCorrect, setIsSelected, setIsDisabled, setErrMsg}: SubmitProps) => {
  const { score, incrementScore }: any = useScoreStore();

  // console.log("score is:", score);

  return (
    <button 
          type="button" 
          className="mt-3 w-full py-4 bg-purple-600 hover:bg-purple-400 text-white font-regular rounded-xl lg:rounded-3xl shadow-xl transition"
          onClick={() => {  
            options === isAnswer && options !== "" ? setIsCorrect(true) : setIsCorrect(false); 
            options !== "" && setIsSelected(true);
            options !== "" && setIsDisabled(true); 
            options === isAnswer && options !== "" && incrementScore();
            options === "" && setErrMsg(true);
          }}
          >
          <span className="text-[clamp(16px,2vw,24px)]">Submit Answer</span>
        </button>
  )
}

export default SubmitButton