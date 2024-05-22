


function App() {
  // const [count, setCount] = useState(0)
  // const [color, setColor] = useState('black')
  const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'lavender'];
  // const creatButton = ()=>{
  //   colors.forEach((color)=>{
  //     const btn = document.createElement('button');
  //     btn.style.backgroundColor = color;
  //     btn.classList.add('btn');
  //     btn.innerText = color;
  //     btn.addEventListener(click, ()=> document.body.backgroundColor = color)
  //     document.querySelector('.bgc-btn-container').appendChild(btn)
  //   })
  // }


  return (
    <>
      <div className="w-full h-screen">
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center align-middle gap-8 shadow-lg bg-white px-3 py-2 rounded-full'>
          {colors.map(color =>(<button 
            key={color}
            className='btn px-7 py-4 rounded-full text-balck uppercase font-bold'
            style={{backgroundColor: color}}
            onClick={()=>document.body.style.backgroundColor = color}
          >{color}</button>))}
        </div>
        </div>
      </div>
    </>
  )
}

export default App
