import { useState } from "react"

export default function Number({setLoginpage}){
    const [inputNumber, setInputNumber] = useState()
    function clickHandler(){
        if(isNaN(inputNumber)){
            alert("Wrong input")
        }else{
            setLoginpage(false)
        }
    }
    return (
    <div className="flex h-screen">
        <div className="flex flex-col w-[450px] justify-center items-center border m-auto gap-7 pb-20 pt-16 rounded-xl bg-black">
            <h2 className="text-white text-4xl">Login via OTP</h2>
            <input className=" bg-black border border-gray-400 w-[50%] p-1 pl-4 rounded-lg text-gray-400"
                type="text" placeholder="Enter your mobile number" maxLength={10}
                onChange={(e)=>{
                    isNaN(e.target.value) ? alert("Wrong input") : setInputNumber(parseInt(e.target.value))
                    }}></input>
            <button className="text-white border border-gray-400 p-1 pl-3 pr-3 rounded-lg"
                onClick={clickHandler}>
                Send OTP</button>
        </div>
        
    </div>
)}