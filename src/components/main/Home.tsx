import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import type { ResponseAPI } from '../../api/questions';

const Home = () => {
  const [topics, setTopics] = useState<ResponseAPI[]>([]);
  console.log(topics);

    const fetchTopics = async () => {
      try {
        const response = await fetch('/data.json');
        const data: ResponseAPI[] = await response.json();
        setTopics(data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    }

    useEffect(() => {
      fetchTopics();
    }, []);
  return (
    <main className="h-full z-10 w-full flex flex-col lg:flex-row">
      <section className="w-full ">
        <h1 className="text-[clamp(40px,5vw,64px)] leading-[1.2] w-[15ch] mb-4 text-blue-900 font-light dark:text-gray-200">Welcome to the <span className="font-medium">Frontend Quiz!</span></h1>
        <p className="text-[clamp(14px,2vw,20px)] italic text-grey-500">Pick a subject to get started.</p>
      </section>

      <section className="w-full mt-8 sm:mt-0 sm:ml-8 flex flex-col gap-4">
        {
          topics?.map((topic, index) => (
            <Link key={index} to={`/quiz/${topic.title}`} className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-center transition">{topic.title}</Link>
          ))
        
        }
        {/* <Link to="/quiz/CSS" className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-center transition">CSS</Link>
        <Link to="/quiz/JavaScript" className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-center transition">JavaScript</Link>
        <Link to="/quiz/Accessibility" className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-center transition">Accessibility</Link> */}
      </section>
    </main>
  )
}

export default Home