
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/main/Home";
import Quiz from "./components/main/Quiz";
import Score from "./components/main/Score";
import  { themeStore } from './zustand/themeStore';

function App() {
  const { dark } = themeStore();

  return (
    <BrowserRouter>
     <div className={`container w-screen h-screen 2xl:max-h-[960px] overflow-hidden bg-grey-50 dark:bg-blue-900 flex flex-col items-center justify-center relative px-[24px] lg:px-[8rem] py-[16px] ${dark ? 'dark' : ''}`}>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:title" element={<Quiz />} />
            <Route path="/score" element={<Score />} />
          </Routes>
     </div>
        </BrowserRouter>
  )
}

export default App
