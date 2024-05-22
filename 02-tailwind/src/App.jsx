import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Card'
function App() {
  const [count, setCount] = useState(0);
  let userDetails = {
    userName: "Manoj",
    age: 25
  };
  let newArr = [12,15,16]

  return (
    <>

    <Cards userName = "Roshni" btnText = "Click Me"/>
    <Cards userName="Muskan" btnText="Visit"/>
    
      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1> */}
    </>
  )
}

export default App
