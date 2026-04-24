import { useEffect } from "react";
import ProgressBar from "../ProgressBar"
import { useQuestionsStore } from "../../zustand/questionsStore";
import type { ApiProps } from "../../zustand/questionsStore";
import { useCountStore } from "../../zustand/countStore";
import type { CountStore } from "../../zustand/countStore";
import { useDataStore } from "../../zustand/dataStore";
import type { DataStore } from "../../zustand/dataStore";
import type { ResponseAPI } from "../../api/api";
import { useLocation } from "react-router-dom";
import SubmitButton from "./buttons/SubmitButton";
import CountButton from "./buttons/CountButton";
import SelectButtons from "./buttons/SelectButtons";

const Quiz = () => {
  const location = useLocation();
  const { questions, fetchQuestions }: ApiProps = useQuestionsStore();
  const { count }: CountStore = useCountStore();
  const { options, isDisabled, errMsg }: DataStore = useDataStore();

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return (
    <div className="h-full w-full flex flex-col lg:flex-row z-10 gap-9">
      <section className="w-full lg:grow-5 flex flex-col lg:justify-between">
        <div>
        <span className="text-grey-500 italic text-[clamp(14px,2vw,20px)]">Question { count } of 10</span>
        <h2 
          className="text-[clamp(20px,4vw,36px)] leading-[1.2] lg:max-w-[20ch] font-medium my-4 text-blue-900 font-light dark:text-gray-200"
        >
          {
            questions.filter((topic: ResponseAPI) => `/frontend-quiz/quiz/${topic.title.toLowerCase()}` === location.pathname.toLowerCase()).map((topic: ResponseAPI) => 
              topic.questions[count - 1].question
            )
          }
        </h2>
        </div>
        <ProgressBar progress={ count * 10 } progressText="80%" />
      </section>
      <section className="w-full lg:grow-5 flex flex-col gap-4">
        <SelectButtons />
        {
          !isDisabled ? (
            <SubmitButton />
          ) : (
            <CountButton />
          )
        }
        <span className={`text-red-500 flex items-center justify-center mt-2 text-[clamp(14px,2vw,20px)] ${options === "" && errMsg ? "block" : "hidden"}`}>
          <img 
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBmaWxsPSIjRUU1NDU0IiBkPSJNMjAgNWExNSAxNSAwIDEgMSAwIDMwIDE1IDE1IDAgMCAxIDAtMzBabTAgMi41YTEyLjUgMTIuNSAwIDEgMCAwIDI1IDEyLjUgMTIuNSAwIDAgMCAwLTI1Wm0tNS40MDIgNy40MTUuMTQyLS4xNzVhMS4yNSAxLjI1IDAgMCAxIDEuNTk1LS4xNDNsLjE3NS4xNDNMMjAgMTguMjMzbDMuNDktMy40OTNhMS4yNSAxLjI1IDAgMCAxIDEuNTk1LS4xNDNsLjE3NS4xNDNhMS4yNSAxLjI1IDAgMCAxIC4xNDIgMS41OTVsLS4xNDIuMTc1TDIxLjc2NyAyMGwzLjQ5MyAzLjQ5YTEuMjUgMS4yNSAwIDAgMSAuMTQyIDEuNTk1bC0uMTQyLjE3NWExLjI1IDEuMjUgMCAwIDEtMS41OTUuMTQybC0uMTc1LS4xNDJMMjAgMjEuNzY3bC0zLjQ5IDMuNDkzYTEuMjUgMS4yNSAwIDAgMS0xLjU5NS4xNDJsLS4xNzUtLjE0MmExLjI1IDEuMjUgMCAwIDEtLjE0My0xLjU5NWwuMTQzLS4xNzVMMTguMjMzIDIwbC0zLjQ5My0zLjQ5YTEuMjUgMS4yNSAwIDAgMS0uMTQzLTEuNTk1WiI+PC9wYXRoPgo8L3N2Zz4K" 
            alt="Error Icon" 
            className="size-[clamp(14px,4vw,20px)] mr-2" 
          />
          <p>Please select an answer</p>
        </span>
      </section>
    </div>
  )
}

export default Quiz