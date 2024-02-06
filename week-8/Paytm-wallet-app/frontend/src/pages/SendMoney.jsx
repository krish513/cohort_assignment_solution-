import { useNavigate, useSearchParams } from "react-router-dom";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { useState } from "react";
import axios from "axios";

export default function SendMoney(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")
    const name = searchParams.get("name")
    const navigate = useNavigate();
    console.log(id)


    const [amount, setAmount] = useState(0)

    async function sendHandler(){
        try{
            const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount 
            },{
                headers: {
                    Authorization : "Bearer " + localStorage.getItem("token")
                }
            })
            alert("Payment successful")
            navigate("/dashboard")
        }
        catch(err){
            ////////
            alert(err.response.data.msg)
            navigate("/dashboard")
        }
    }

    return <div className="h-screen bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center items-center">
            <div className=" bg-white w-80 m-auto p-8 rounded-md flex flex-col gap-3">
                <Heading lebel={"Send Money"}/>
                <div className="flex items-center gap-2">
                    <div className=" bg-green-500 rounded-full pt-1 pb-1 pl-[10px] pr-[10px] text-white">
                        {name[0]}
                    </div>
                    <div>
                        {name}
                    </div>
                </div>
                <InputBox onChange={(e)=>setAmount(e.target.value)} lebel={"Amount (in Rs)"} placeholder={"Enter amount"}/>
                <button onClick={sendHandler} className=" bg-green-500 w-full rounded-md p-1 text-white">Initiate Transfer</button>
            </div>
        </div>
    </div>
}