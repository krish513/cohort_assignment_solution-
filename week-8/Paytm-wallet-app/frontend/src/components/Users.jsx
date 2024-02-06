import axios from "axios"
import { useEffect, useState } from "react"

export default function Users(){

    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
            .then(response=>{
                setUsers(response.data.user)
            })
    },[filter])

    return <div className=" p-5">
        <div className="flex flex-col gap-1">
            <p>Users</p>
            <input onChange={(e)=>setFilter(e.target.value)} className="border rounded-md p-1" type="text" placeholder="Search user"/>
        </div>
        {users.map(user=><User user = {user}/>)}
    </div>
}

function User({user}){
    return <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2 items-center">
            <div className=" bg-slate-300 rounded-full pt-1 pb-1 pl-[10px] pr-[10px]">
                {user.firstName[0]}
            </div>
            <div>
                {user.firstName} {user.lastName}
            </div>
        </div>
        <button className=" bg-black text-white p-1 pl-2 pr-2 rounded-md">
            Send Money
        </button>
    </div>
}