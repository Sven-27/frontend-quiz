const Home = () => {
  return (
    <main className="h-full z-10 w-full flex flex-col sm:flex-row items-start justify-center">
      <section className="w-full h-full">
        <h1 className="text-4xl mb-4 text-gray-800 dark:text-gray-200">Welcome to the <span className="font-bold">Frontend Quiz!</span></h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Pick a subject to get started.</p>
      </section>

    </main>
  )
}

export default Home