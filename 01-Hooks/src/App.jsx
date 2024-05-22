import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(5)

  // let counterValue = 5;
  const addValue = () => {
    // console.log('counter value:', counterValue);
    if(count < 20){
      // setCount(count+1)
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)
    }
  }
  const removeValue = ()=>{
    if(count > 0){
      setCount(count-1)
    }
  }
  return (
    <>
    <h1>React Hooks</h1>
    <h2>Counter Valu: {count}</h2>
    <button
      onClick={addValue}
    >Add Value</button><br/>
    <button
      onClick={removeValue}
    >Remove Value</button>
    </>
  )
}

export default App
