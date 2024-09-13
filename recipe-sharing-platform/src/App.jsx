import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p className='text-blue-500'>Installed react app and tailwindcss plus all it's dependencies.</p>
    </>
  )
}

export default App
