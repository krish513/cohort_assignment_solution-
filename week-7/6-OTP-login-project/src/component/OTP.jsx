import { useRef, useState } from "react"
import { useRecoilState } from "recoil";
import { loginAtom } from "../store/atoms/loginAtom";

export default function OTP(){

    const inputBoxes = Array.from({length: 4}, (_, index)=> useRef());
    const [loginVerified, setLoginVerified] = useRecoilState(loginAtom)

    function inputHandler(index, value){
        if(value.length === 1 && index < inputBoxes.length -1){
            inputBoxes[index + 1].current.focus();
        }
    }
 
    // function btnHandler(){             
    //     for(let i=0; i<inputBoxes.length; i++){
    //         console.log(inputBoxes[i])
    //         if(inputBoxes[i].value === ""){
    //             alert("input box "+ inputBoxes[i]+ "is empty")
    //             return;
    //         }else {
    //             alert("OTP verified")
    //             setLoginVerified(true)
    //         }
    //     }
    // }

    return (
        <div className="flex h-screen">
            <div className="flex flex-col w-[450px] justify-center items-center border m-auto gap-7 pb-20 pt-16 rounded-xl bg-black">
                <h2 className="text-white text-4xl">Login via OTP</h2>
                <div className="flex gap-2">
                    {inputBoxes.map((ref,index)=>(
                        <input className="w-[55px] h-[50px] bg-black border border-gray-400 text-gray-400 p-5 text-xl"
                        key={index}
                        ref={ref}
                        maxLength={1} 
                        onChange={(e)=>inputHandler(index, e.target.value)}>
                        </input>
                    ))}
                </div>
                <button className="text-white border border-gray-400 p-1 pl-3 pr-3 rounded-lg"
                    onClick={()=> {
                        alert("Login successfull")
                        setLoginVerified(true)}}
                    >
                    Login</button>
            </div>
    </div>
    
    )}