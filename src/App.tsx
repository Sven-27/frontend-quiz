import Header from "./components/header/Header";
import Home from "./components/main/Home";
import Quiz from "./components/main/Quiz";
import Score from "./components/main/Score";

function App() {

  return (
     <div className="container w-screen h-screen 2xl:max-h-[960px] overflow-hidden bg-grey-50 dark:bg-blue-900 flex flex-col items-center justify-center relative px-[24px] py-[16px]">
        <Header />
        <Home />
    </div>
  )
}

export default App
