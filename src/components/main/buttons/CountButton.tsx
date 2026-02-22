import { useCountStore } from "../../../zustand/countStore";
import { Link } from "react-router-dom"

type Props = {
  setIsDisabled: Function;
  setIsSelected: Function;
  setAnswerSelected: Function;
  setOptions: Function;
  setErrMsg: Function;
}

type CountProps = {
  count: number;
  incrementCount: Function;
}

const CountButton = ({setIsDisabled, setIsSelected, setAnswerSelected, setOptions, setErrMsg}: Props ) => {
   const { count, incrementCount }: CountProps = useCountStore();
   
  return (
    <>
      {
        count === 10 ? (
          <Link 
            to="/score"
            className="mt-3 w-full py-4 bg-purple-600 hover:bg-purple-400 text-white font-regular rounded-xl lg:rounded-3xl shadow-xl transition text-center"
          >
            <span className="text-[clamp(16px,2vw,24px)]">Show Score</span>
          </Link>
        ) : (
          <button 
            type="button" 
            className="mt-3 w-full py-4 bg-purple-600 hover:bg-purple-400 text-white font-regular rounded-xl lg:rounded-3xl shadow-xl transition"
            onClick={() => {  
              incrementCount();
              setIsDisabled(false); 
              setIsSelected(false);
              setAnswerSelected(false);
              setOptions("");
              setErrMsg(false);
            }}
          >
            <span className="text-[clamp(16px,2vw,24px)]">Next Question</span>
          </button>
        )
      }
    </>
  )
}

export default CountButton