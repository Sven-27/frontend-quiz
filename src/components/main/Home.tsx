import Themebuttons from "./buttons/Themebuttons"

const Home = () => {

  return (
    <main className="h-full z-10 w-full flex flex-col lg:flex-row">
      <section className="w-full ">
        <h1 className="text-[clamp(40px,5vw,64px)] leading-[1.2] w-[15ch] mb-4 text-blue-900 font-light dark:text-gray-200">Welcome to the <span className="font-medium">Frontend Quiz!</span></h1>
        <p className="text-[clamp(14px,2vw,20px)] italic text-grey-500">Pick a subject to get started.</p>
      </section>

      <section className="w-full mt-8 lg:mt-0 flex flex-col gap-5">
        <Themebuttons />
      </section>
    </main>
  )
}

export default Home