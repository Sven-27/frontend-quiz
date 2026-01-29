import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";;
import { themeStore } from "../../zustand/themeStore";
import { useQuestionsStore } from "../../zustand/questionsStore";
import type { ResponseAPI } from "../../api/api";

const Header = () => {
	const { dark, toggleMode } = themeStore();
	const location = useLocation();
	const { questions, fetchQuestions }: any = useQuestionsStore();

	useEffect(() => {
		fetchQuestions();
	}, []);

  return (
	<header className="z-10 flex justify-between items-center w-full py-4 sm:py-6 lg:mb-[3rem]">
			{ 
				location.pathname !== "/" && 
					<>
						{
							questions.filter((topic: ResponseAPI) => `/quiz/${topic.title}` === location.pathname).map((topic: ResponseAPI, index: number) => 
								<div key={index} className="flex items-center gap-4">
									<img src={topic.icon} alt={`${topic.title} icon`} className={`bg-white size-[clamp(28px,6vw,40px)] p-1 lg:p-[5px] rounded-lg ${topic['icon-bg']}`} />
									<p className="text-[clamp(18px,3vw,28px)] dark:text-white">{topic.title}</p>
								</div>
							)
						}
					</> 
			 } 
			<div className="flex items-center justify-end w-full ">
				<label htmlFor="toggle-switch" className="flex items-center gap-2 cursor-pointer"> 
					<LuSun className="size-[clamp(16px,3vw,24px)] dark:text-white" />
					<input 
						type="checkbox" 
						name="toggle-switch" 
						id="toggle-switch" 
						className="cursor-pointer rounded-full appearance-none h-[clamp(20px,4.5vw,28px)] w-[clamp(32px,6.5vw,48px)] bg-purple-600 transition duration-200 relative" 
						checked={dark} 
						onChange={toggleMode} />
					<GoMoon className="size-[clamp(16px,3vw,24px)] dark:text-white" />
				</label>
			</div>
	</header>
  )
}

export default Header