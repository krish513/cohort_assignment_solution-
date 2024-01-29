import { useRecoilState } from "recoil";
import { paraAtom } from "../store/atoms/paraAtom";
import { useEffect, useState } from "react";

export default function Generate(){
    const [para, setPara] = useRecoilState(paraAtom)
    const [input, setInput] = useState("")
    const WORD = ["hi","what","if","coding","journey","possible","is","trading","good","of"]
    
    const paraGenerate =()=> {
        let newPara = "";
        for(let i= 0; i<input; i++){
        newPara = newPara+WORD[Math.floor(Math.random()*WORD.length)]
        newPara = newPara + " "
      }
      setPara(newPara)
    }
   
    return <div className="relative w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <h2 className="absolute top-[15%] text-xl font-bold">Para Generator</h2>
        <div className="absolute top-[20%] w-full flex justify-center gap-3">
            <input className="border p-2 w-[30%] text-black text-sm"
                type="text" placeholder="Enter Number of words" onChange={(e)=>setInput(parseInt(e.target.value))}/>
            <button className="p-2 bg-slate-800 text-white rounded-xl"
                onClick={paraGenerate}>Generate</button>
        </div>
        
        <div className="border w-[37%] h-[35%] p-2 overflow-scroll">{para}</div>
    </div>
}