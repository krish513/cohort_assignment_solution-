import { useState } from "react"
import Button from "./components/Button"


function App() {

  const [backgroundColor, setBackgroundColor] = useState("")

  function changeBackground(color){
    setBackgroundColor(color);
  }
  return (
    <div style={{backgroundColor}} className={`h-[100vh] relative`}> 
    {/* bg-${backgroundColor} => tailwing unable to applied */}
      <div className="flex justify-center items-center absolute bottom-0 mb-6 left-[25%] p-3 shadow-md gap-5">
        <Button title = {"Red"} color={"red"} onclick ={changeBackground} btn = {"red"}/>
        <Button title = {"Yellow"} color={"Yellow"} onclick ={changeBackground} btn = {"yellow"}/>
        <Button title = {"Black"} color={"Black"} onclick ={changeBackground} textColor ={"white"} btn = {"grey"}/>
        <Button title = {"Purple"} color={"Purple"} onclick ={changeBackground} textColor ={"white"} btn = {"Purple"} />
        <Button title = {"Green"} color={"Green"} onclick ={changeBackground} btn = {"Green"}/>
        <Button title = {"Blue"} color={"Blue"} onclick ={changeBackground} textColor ={"white"} btn = {"blue"}/>
        <Button title = {"Default"} color={"white"} onclick ={changeBackground} btn = {"orange"}/>
      </div>
    </div>
  )
}


export default App
