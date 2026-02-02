import ProgressBar from "../ProgressBar"
const Quiz = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row z-10 gap-9">
      <section className="w-full lg:grow-5">
        <span className="text-grey-500 italic text-[clamp(14px,2vw,20px)]">Question 8 of 10</span>
        <h2 className="text-[clamp(20px,4vw,36px)] leading-[1.2] lg:max-w-[20ch] font-medium my-4 text-blue-900 font-light dark:text-gray-200 lg:mb-27">Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</h2>
        <ProgressBar progress={80} progressText="80%" />
      </section>
      <section className="w-full lg:grow-5 flex flex-col gap-4">
        <button className="w-full flex items-center px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 text-[clamp(16px,2vw,24px)] dark:text-white font-medium rounded-xl lg:rounded-3xl focus:ring-2 focus:ring-purple-600 hover:ring-2 hover:ring-purple-600 shadow-xl transition text-left">
          <p className="size-[clamp(40px,4vw,56px)] grid place-items-center bg-grey-50 rounded-md mr-5 dark:text-blue-900">A</p>
          <span>3:1</span>
        </button>
        <button className="w-full flex items-center px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 text-[clamp(16px,2vw,24px)] dark:text-white font-medium rounded-xl lg:rounded-3xl focus:ring-2 focus:ring-purple-600 hover:ring-2 hover:ring-purple-600 shadow-xl transition text-left">
          <p className="size-[clamp(40px,4vw,56px)] grid place-items-center bg-grey-50 rounded-md mr-5 dark:text-blue-900">B</p>
          <span>4.5:1</span>
        </button>
        <button className="w-full flex items-center px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 text-[clamp(16px,2vw,24px)] dark:text-white font-medium rounded-xl lg:rounded-3xl focus:ring-2 focus:ring-purple-600 hover:ring-2 hover:ring-purple-600 shadow-xl transition text-left">
          <p className="size-[clamp(40px,4vw,56px)] grid place-items-center bg-grey-50 rounded-md mr-5 dark:text-blue-900">C</p>
          <span>7:1</span>
        </button>
        <button className="w-full flex items-center px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 text-[clamp(16px,2vw,24px)] dark:text-white font-medium rounded-xl lg:rounded-3xl focus:ring-2 focus:ring-purple-600 hover:ring-2 hover:ring-purple-600 shadow-xl transition text-left">
          <p className="size-[clamp(40px,4vw,56px)] grid place-items-center bg-grey-50 rounded-md mr-5 dark:text-blue-900">D</p>
          <span>11:1</span>
        </button>
        <button type="submit" className="mt-3 w-full py-4 bg-purple-600 hover:bg-purple-400 text-white font-regular rounded-xl lg:rounded-3xl shadow-xl transition">
          <span className="text-[clamp(16px,2vw,24px)]">Submit Answer</span>
        </button>
      </section>
    </div>
  )
}

export default Quiz