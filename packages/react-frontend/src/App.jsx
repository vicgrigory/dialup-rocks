import { useState } from 'react'
import vmu from './assets/peak.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>im gonna be real here i like basic html/css/js better</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click here to attempt to connect to modem: {count} times
        </button>
        <p>
          this page requires DIAL UP TO LOAD!!!!! 33.6k only
        </p>
        <img src={vmu} style={{maxWidth:'20%'}}></img>
        <p>
          i'd add more website elements but i'm gonna be honest with you i've already done so much work on my personal one that i'm gonna go work on that instead. 
          this is one little assignment and i have like a combined few weeks of work on my personal website so........
          have some fun here :&#93;
        </p>
      </div>
      <p className="read-the-docs">
        play phantasy star online for the dreamcast<br/>
        <a href="https://dreamcastlive.net/dreampi-tutorial/">set up dreampi immediately</a><br/>
        i learned to solder yay :D
      </p>
    </>
  )
}

export default App
