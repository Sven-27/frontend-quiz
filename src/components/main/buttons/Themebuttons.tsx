import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useQuestionsStore } from "../../../zustand/questionsStore";
import type { ResponseAPI } from "../../../api/api";
import type { ApiProps } from "../../../zustand/questionsStore";

const Themebuttons = () => {
  const { questions, fetchQuestions }: ApiProps = useQuestionsStore();
  
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <>
      {
        (questions)?.map((topic: ResponseAPI, index: number) => (
          <Link 
            key={index} 
            to={`/quiz/${topic.title}`} 
            className="w-full px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 dark:text-white font-medium rounded-xl lg:rounded-3xl focus:ring-2 focus:ring-purple-600 hover:ring-2 hover:ring-purple-600  shadow-xl transition"
          >
            <img src={topic.icon} alt={topic.title} className={`inline-block size-[clamp(40px,6vw,56px)] mr-3 mb-1 rounded-sm lg:rounded-lg align-middle p-1 ${topic['icon-bg']}`} />  
            <span className="text-[clamp(18px,2vw,28px)]">{topic.title}</span>
          </Link>
        ))
      }
    </>
  )
}

export default Themebuttons