import { useState } from 'react'
import data from './data'
import List from './List'
import './App.css'

function App() {
  const [players, setPlayers] = useState(data)

  return (
    <>
      <h2>Top 5 Grand Slam Winners*</h2>
      <p>*on the open era</p>
      <List players={players} />
      <button onClick={()=> {setPlayers([])}}>Clear List</button>

    </>
  )
}

export default App
