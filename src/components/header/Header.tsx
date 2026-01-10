const Header = () => {
  return (
    <header className="z-10 flex justify-between items-center w-full">
			{/* <div className="mb-6 text-center flex items-center">
				<img src="../src/assets/images/icon-accessibility.svg" alt="accessibility icon" className="mx-auto mb-4" />
				<p>Accessibility</p>
			</div> */}
			<div className="flex items-center justify-end w-full ">
				<label htmlFor="toggle-switch" className="flex items-center gap-1 cursor-pointer">
				<img src="../src/assets/images/icon-sun-dark.svg" alt="sun icon" className="w-[14px]" />
					<input type="checkbox" name="toggle-switch" id="toggle-switch" className="cursor-pointer rounded-full appearance-none h-[20px] w-[32px] bg-purple-600 transition duration-200 relative" />
				<img src="../src/assets/images/icon-moon-dark.svg" alt="moon icon" className="w-[14px]" />
				</label>
			</div>
    </header>
  )
}

export default Header