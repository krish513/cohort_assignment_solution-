import axios from "axios"
import { useEffect, useState } from "react"

export default function Balance(){
    const [balance, setBalance] = useState(0)

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers : {
                Authorization : "Bearer " + localStorage.getItem("token") 
            }
        })
        .then(response=>{
            setBalance(response.data.balance)
        })
    },[balance])

    return <div className=" p-5">
        Your balance is Rs: {balance}
    </div>
}