import { useQuestionsStore } from "../../../zustand/questionsStore";
import type { ApiProps } from "../../../zustand/questionsStore";
import { useCountStore } from "../../../zustand/countStore";
import type { CountStore } from "../../../zustand/countStore"
import { useDataStore } from "../../../zustand/dataStore";
import type { DataStore } from "../../../zustand/dataStore";
import type { ResponseAPI } from "../../../api/api";

const SelectButtons = () => {
  const { questions }: ApiProps = useQuestionsStore();
    const { count }: CountStore = useCountStore();
  const { selected, selectedIndex,
          options, setOptions,
          isAnswer, setIsAnswer,
          isCorrect,isDisabled,
          isSelected, setIsSelected,
          answerSelected, setAnswerSelected,
         }: DataStore = useDataStore();
  return (
    <>
      {
        questions.filter((topic: ResponseAPI) => `/frontend-quiz/quiz/${topic.title}` === location.pathname).map((topic: ResponseAPI) => 
          Object.entries(topic.questions[count - 1].options).map(([key, option], index) => (
            <button 
              key={index} 
              onClick={() => { 
                selectedIndex(index); 
                setOptions(String(option)); 
                setIsAnswer(String(topic.questions[count - 1].answer)); 
                setIsSelected(false);
                setAnswerSelected(true);
              }}
              disabled={isDisabled}
              className={`option-btn w-full flex items-center px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 text-[clamp(16px,2vw,24px)] 
                          dark:text-white font-medium rounded-xl lg:rounded-3xl ${!isDisabled && "hover:ring-2 hover:ring-purple-600"} shadow-xl transition text-left 
                          ${selected === index && answerSelected ? "ring-2 ring-purple-600" : ""} 
                          ${isCorrect && selected === index && isSelected ? "ring-2 !ring-green-500" : 
                            selected === index && options !== isAnswer && isSelected && "ring-2 ring-red-500"} 
                          `}
            >
              <p className={`size-[clamp(40px,4vw,56px)] grid place-items-center bg-grey-50 rounded-md mr-5 dark:text-blue-900
                              ${selected === index && answerSelected ? "bg-purple-600 text-white dark:text-white" : ""} 
                              ${isCorrect && selected === index && isSelected ? "!bg-green-500" : 
                              selected === index && options !== isAnswer && isSelected && "!bg-red-500"}`}
              >
                {String(key)}
              </p>
              <span className="w-full">{String(option)}</span>
              <img 
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBmaWxsPSIjMjZENzgyIiBkPSJNMjAgNWExNSAxNSAwIDEgMSAwIDMwIDE1IDE1IDAgMCAxIDAtMzBabTAgMi41YTEyLjUgMTIuNSAwIDEgMCAwIDI1IDEyLjUgMTIuNSAwIDAgMCAwLTI1Wm0tMS44NzUgMTUuMTA1TDI1LjMgMTUuNDFhMS4yNSAxLjI1IDAgMCAxIDEuOTE1IDEuNTkzbC0uMTQ1LjE3NC04LjA2IDguMDhhMS4yNSAxLjI1IDAgMCAxLTEuNTk1LjE0OGwtLjE3NS0uMTQ1LTQuMzc1LTQuMzc1YTEuMjUgMS4yNSAwIDAgMSAxLjU5NS0xLjkxM2wuMTc1LjE0MyAzLjQ5IDMuNDlaIj48L3BhdGg+Cjwvc3ZnPgo=" 
                alt="Check Icon" 
                className={`size-[clamp(32px,6vw,40px)] 
                            ${isSelected && String(option) === isAnswer ? "block" : "hidden"}               
                          `} 
              />
                <img 
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBmaWxsPSIjRUU1NDU0IiBkPSJNMjAgNWExNSAxNSAwIDEgMSAwIDMwIDE1IDE1IDAgMCAxIDAtMzBabTAgMi41YTEyLjUgMTIuNSAwIDEgMCAwIDI1IDEyLjUgMTIuNSAwIDAgMCAwLTI1Wm0tNS40MDIgNy40MTUuMTQyLS4xNzVhMS4yNSAxLjI1IDAgMCAxIDEuNTk1LS4xNDNsLjE3NS4xNDNMMjAgMTguMjMzbDMuNDktMy40OTNhMS4yNSAxLjI1IDAgMCAxIDEuNTk1LS4xNDNsLjE3NS4xNDNhMS4yNSAxLjI1IDAgMCAxIC4xNDIgMS41OTVsLS4xNDIuMTc1TDIxLjc2NyAyMGwzLjQ5MyAzLjQ5YTEuMjUgMS4yNSAwIDAgMSAuMTQyIDEuNTk1bC0uMTQyLjE3NWExLjI1IDEuMjUgMCAwIDEtMS41OTUuMTQybC0uMTc1LS4xNDJMMjAgMjEuNzY3bC0zLjQ5IDMuNDkzYTEuMjUgMS4yNSAwIDAgMS0xLjU5NS4xNDJsLS4xNzUtLjE0MmExLjI1IDEuMjUgMCAwIDEtLjE0My0xLjU5NWwuMTQzLS4xNzVMMTguMjMzIDIwbC0zLjQ5My0zLjQ5YTEuMjUgMS4yNSAwIDAgMS0uMTQzLTEuNTk1WiI+PC9wYXRoPgo8L3N2Zz4K" 
                alt="Check Icon" 
                className={`size-[clamp(32px,6vw,40px)] ${options !== isAnswer && selected === index && isSelected ? "block" : "hidden"}`} 
              />
            </button>
          ))
        )
      }
    </>
  )
}

export default SelectButtons