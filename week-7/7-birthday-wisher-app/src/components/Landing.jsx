import { useRecoilState, useRecoilValue } from "recoil"
import { nameAtom, pageAtom } from "../store/atoms/birthdayAtom"
import { useState } from "react"
import BirthdayWisher from "./BirthdayWisher"

export default function Landing(){
    const [name, setName] = useRecoilState(nameAtom)
    const [whichpage, setWhichPage] = useRecoilState(pageAtom)

    function btnHandler(){
        if(name == "" ){
            alert("Name is not entered")
        }else{
            setWhichPage(false)
        }
    }
    return <div className="">
        {whichpage ? <div className=" relative w-[100vw] h-[100vh] bg-blue-700">
            <div className="absolute top-[30%] left-[33%] flex flex-col justify-center items-center rounded-lg p-12 gap-6 bg-gray-800 bg-opacity-55">
                <h2 className=" text-2xl text-white opacity-100">Enter your name</h2>
                <input className="w-96 shadow-md rounded-md p-1" onChange={(e)=>setName(e.target.value)} placeholder="Type yor name"></input>
                <button className=" p-1 pl-4 pr-4 bg-blue-500 text-white rounded" onClick={btnHandler}>Done</button>
            </div>
        </div> : <BirthdayWisher/> }
        
    </div>
}