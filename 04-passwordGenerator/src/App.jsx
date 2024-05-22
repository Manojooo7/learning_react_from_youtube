import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main-container flex w-full h-screen justify-center items-center">
      <div className="pg-container flex flex-col w-2/5 h-72 p-5 bg-blue-950 rounded-xl justify-center items-center">
      <h1 className='text-4xl text-white'>Password Generator</h1>
      
      <input type="text" placeholder='Generate Password' />
      <button>Copy</button>
      <div className="pg-feature flex justify-between gap-3">
      <input type="range" />
      <input type="checkbox" />
      <input type="checkbox" />
      <button>Generate</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
