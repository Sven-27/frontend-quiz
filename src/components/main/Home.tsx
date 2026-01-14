import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="h-full z-10 w-full flex flex-col sm:flex-row items-start justify-center">
      <section className="w-full h-full">
        <h1 className="text-4xl mb-4 text-gray-800 dark:text-gray-200">Welcome to the <span className="font-bold">Frontend Quiz!</span></h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Pick a subject to get started.</p>
      </section>

      <section className="w-full h-full mt-8 sm:mt-0 sm:ml-8 flex flex-col gap-4">
        <Link to="/quiz/HTML" className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-center transition">HTML</Link>
        <Link to="/quiz/CSS" className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-center transition">CSS</Link>
        <Link to="/quiz/JavaScript" className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-center transition">JavaScript</Link>
        <Link to="/quiz/Accessibility" className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-center transition">Accessibility</Link>
      </section>
    </main>
  )
}

export default Home