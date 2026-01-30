const Quiz = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row z-10 gap-9">
      <section className="w-full lg:grow-5">
        <span className="text-grey-500 italic text-[clamp(14px,2vw,20px)]">Question 8 of 10</span>
        <h2 className="text-[clamp(20px,4vw,36px)] leading-[1.2] lg:max-w-[20ch] font-medium my-4 text-blue-900 font-light dark:text-gray-200">Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</h2>
      </section>
      <section className="w-full lg:grow-5 mt-8 lg:mt-0 flex flex-col gap-4">
        <button className="w-full px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 dark:text-white font-medium rounded-xl lg:rounded-3xl hover:scale-102 shadow-xl transition text-left" value="A">
          <span className="text-[clamp(16px,2vw,24px)]">3:1</span>
        </button>
        <button className="w-full px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 dark:text-white font-medium rounded-xl lg:rounded-3xl hover:scale-102 shadow-xl transition text-left">
          <span className="text-[clamp(16px,2vw,24px)]">4.5:1</span>
        </button>
        <button className="w-full px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 dark:text-white font-medium rounded-xl lg:rounded-3xl hover:scale-102 shadow-xl transition text-left">
          <span className="text-[clamp(16px,2vw,24px)]">7:1</span>
        </button>
        <button className="w-full px-4 py-4 bg-white dark:bg-blue-850 text-blue-900 dark:text-white font-medium rounded-xl lg:rounded-3xl hover:scale-102 shadow-xl transition text-left">
          <span className="text-[clamp(16px,2vw,24px)]">11:1</span>
        </button>
      </section>
    </div>
  )
}

export default Quiz