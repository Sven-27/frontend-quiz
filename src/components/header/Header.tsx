import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";

const Header = () => {
  return (
    <header className="z-10 flex justify-between items-center w-full">
			{/* <div className="mb-6 text-center flex items-center">
				<img src="../src/assets/images/icon-accessibility.svg" alt="accessibility icon" className="mx-auto mb-4" />
				<p>Accessibility</p>
			</div> */}
			<div className="flex items-center justify-end w-full ">
				<label htmlFor="toggle-switch" className="flex items-center gap-2 cursor-pointer"> 
					<LuSun className="size-[clamp(16px,3vw,24px)]" />
					<input type="checkbox" name="toggle-switch" id="toggle-switch" className="cursor-pointer rounded-full appearance-none h-[clamp(20px,4.5vw,28px)] w-[clamp(32px,6.5vw,48px)] bg-purple-600 transition duration-200 relative" />
					<GoMoon className="size-[clamp(16px,3vw,24px)]" />
				</label>
			</div>
    </header>
  )
}

export default Header