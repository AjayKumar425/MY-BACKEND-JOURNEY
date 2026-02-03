import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    // Calling the proxy defined in vite.config.js
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error("Connection Error:", error)
      })
  }, []) // <--- THE FIX: Empty array means "run only once on mount"

  return (
    <>
      <h1>Azay and Backend</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id} style={{ border: '1px solid white', margin: '10px', padding: '10px' }}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App;