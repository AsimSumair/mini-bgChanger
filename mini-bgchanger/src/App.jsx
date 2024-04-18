import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button 
            onClick={() => setColor("red")} // use callback and call setColor function usesatate
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>

          <button 
            onClick={() => setColor("pink")} // use callback and call setColor function usesatate
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink", color:"black"}}>Pink</button>

          <button 
            onClick={() => setColor("olive")} // use callback and call setColor function usesatate
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>Olive</button>

          <button 
            onClick={() => setColor("gray")} // use callback and call setColor function usesatate
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}}>Gray</button>

          <button 
            onClick={() => setColor("black")} // use callback and call setColor function usesatate
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>

          <button 
            onClick={() => setColor("purple")} // use callback and call setColor function usesatate
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>

          <button 
          onClick={() => setColor("blue")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button> 
          
          <button 
          onClick={() => setColor("green")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button> 
          
          <button 
          onClick={() => setColor("yellow")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow", color:"black"}}>Yellow</button>
          
           <button 
           onClick={() => setColor("orange")} 
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
          </div>
        </div>
     

    </div>
  )
}

export default App
