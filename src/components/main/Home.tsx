import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useQuestionsStore } from "../../zustand/questionsStore";
import type { ResponseAPI } from "../../api/api";

const Home = () => {
  const { questions, fetchQuestions }: any = useQuestionsStore();
  
  useEffect(() => {
    fetchQuestions();
  }, []);
 
  return (
    <main className="h-full z-10 w-full flex flex-col lg:flex-row">
      <section className="w-full ">
        <h1 className="text-[clamp(40px,5vw,64px)] leading-[1.2] w-[15ch] mb-4 text-blue-900 font-light dark:text-gray-200">Welcome to the <span className="font-medium">Frontend Quiz!</span></h1>
        <p className="text-[clamp(14px,2vw,20px)] italic text-grey-500">Pick a subject to get started.</p>
      </section>

      <section className="w-full mt-8 lg:mt-0   flex flex-col gap-5">
        {
          (questions as ResponseAPI[])?.map((topic: ResponseAPI, index: number) => (
            <Link 
              key={index} 
              to={`/quiz/${topic.title}`} 
              className="w-full px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 dark:text-white font-medium rounded-xl lg:rounded-3xl hover:scale-102 shadow-xl transition"
            >
              <img src={topic.icon} alt={topic.title} className={`inline-block size-[clamp(40px,6vw,56px)] mr-3 mb-1 rounded-sm lg:rounded-lg align-middle p-1 ${topic['icon-bg']}`} />  
              <span className="text-[clamp(18px,2vw,28px)]">{topic.title}</span>
            </Link>
          ))
        }
      </section>
    </main>
  )
}

export default Home