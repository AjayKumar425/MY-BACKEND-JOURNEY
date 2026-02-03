import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error)
      })
  }, []) // <--- FIXED: Added empty array to stop infinite loops

  return (
    <>
      <h1>Azay and Backend</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          {/* FIXED: Check spelling! Your backend uses 'tittle' */}
          <h3>{joke.tittle || joke.title}</h3> 
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App