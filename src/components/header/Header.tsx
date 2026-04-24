import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";;
import { themeStore } from "../../zustand/themeStore";
import { useQuestionsStore } from "../../zustand/questionsStore";
import type { ApiProps } from "../../zustand/questionsStore";
import type { ResponseAPI } from "../../api/api";

//  data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBmaWxsPSIjMkZEODg3IiBkPSJNMTAgMi41MDVhMS4yNSAxLjI1IDAgMCAwLTEuMjUgMS4yNVYyMS4yNWE1IDUgMCAwIDAgNSA1SDE1djYuMjVhNC45OTkgNC45OTkgMCAwIDAgOS42MTUgMS45MTNjLjI1LS42MDcuMzgtMS4yNTcuMzgtMS45MTN2LTYuMjVoMS4yNTVhNSA1IDAgMCAwIDUtNVYzLjc1NUExLjI1IDEuMjUgMCAwIDAgMzAgMi41MDVIMTBaTTI4Ljc1IDE3LjVoLTE3LjVWNS4wMDVoNy41VjguNzZhMS4yNSAxLjI1IDAgMCAwIDIuNSAwVjUuMDA1aDIuNXY2LjI0YTEuMjUgMS4yNSAwIDAgMCAyLjUgMHYtNi4yNGgyLjVWMTcuNVptLTE3LjUgMy43NVYyMGgxNy41djEuMjVhMi41IDIuNSAwIDAgMS0yLjUgMi41aC0yLjUwNWExLjI1IDEuMjUgMCAwIDAtMS4yNSAxLjI1djcuNWEyLjQ5NyAyLjQ5NyAwIDEgMS00Ljk5NSAwVjI1YTEuMjUgMS4yNSAwIDAgMC0xLjI1LTEuMjVoLTIuNWEyLjUgMi41IDAgMCAxLTIuNS0yLjVaIj48L3BhdGg+Cjwvc3ZnPgo=

const Header = () => {
	const { dark, toggleMode } = themeStore();
	const location = useLocation();
	const { questions, fetchQuestions }: ApiProps = useQuestionsStore();

	useEffect(() => {
		fetchQuestions();
	}, [fetchQuestions]);

	function setPathName(theme: string){
		if(location.pathname.split("/").slice(2,3).toString().toLowerCase() === "quiz" || location.pathname.split("/").slice(2, 3).toString().toLowerCase() === "score"){
			return `/frontend-quiz/${location.pathname.split("/").slice(2, 3).toString()}/${theme.toLowerCase()}`
		}
	}

  return (
	<header className="z-10 flex justify-between items-center w-full py-4 sm:py-6 mb-[clamp(2rem,4vw,3rem)]">
			{ 
				location.pathname !== "/" && 
					<>
						{
							questions.filter((topic: ResponseAPI) => setPathName(topic.title) === location.pathname.toLowerCase()).map((topic: ResponseAPI, index: number) =>
								<Link to="/frontend-quiz/" key={index} className="flex items-center gap-4">
									<img src={topic.icon} alt={`${topic.title} icon`} className={`bg-white size-[clamp(28px,6vw,40px)] p-1 lg:p-[5px] rounded-lg ${topic['icon-bg']}`} />
									<p className="text-[clamp(18px,3vw,28px)] dark:text-white">{topic.title}</p>
								</Link>
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