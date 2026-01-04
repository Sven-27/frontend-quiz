import './App.css'

function App() {
const api = "https://sven-27.github.io/frontend-quiz-json/questions.json"

fetch(api)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));


  return (
    <>
   hnfgkjladgkltrsn
    </>
  )
}

export default App
