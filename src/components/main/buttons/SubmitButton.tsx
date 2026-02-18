type SubmitProps = {
  options: String;
  isAnswer: String;
  setIsCorrect: Function;
  setIsSelected: Function;
  setIsDisabled: Function;
}

const SubmitButton = ({options, isAnswer, setIsCorrect, setIsSelected, setIsDisabled}: SubmitProps) => {
  return (
    <button 
          type="button" 
          className="mt-3 w-full py-4 bg-purple-600 hover:bg-purple-400 text-white font-regular rounded-xl lg:rounded-3xl shadow-xl transition"
          onClick={() => {  
            options === isAnswer && options !== "" ? setIsCorrect(true) : setIsCorrect(false); 
            setIsSelected(true);
            options !== "" && setIsDisabled(true); 
          }}
        >
          <span className="text-[clamp(16px,2vw,24px)]">Submit Answer</span>
        </button>
  )
}

export default SubmitButton