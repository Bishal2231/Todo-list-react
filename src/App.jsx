import { useState } from 'react'
import { Todo } from './Todo'
// In your src/index.js or src/App.js

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Todo/>
    </>
  )
}

export default App
