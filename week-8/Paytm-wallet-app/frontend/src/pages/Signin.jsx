import { useState } from "react";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    async function signHandler(){
        console.log("hi")
        if(username == "" || password == ""){
            alert("User name or Password not entered")
            return;
        }
        try{
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
            })
            const token = response.data.token;
            const name = response.data.firstName;
            localStorage.setItem("token",token)
            alert(response.data.msg)
            navigate("/dashboard?name="+name)
            console.log(name)
        }
        catch(err){
            alert(err.response.data.msg);
            return;
        }
    }

    return <div className="h-screen bg-slate-300 flex justify-center">
        {username} {password}
        <div className="flex flex-col justify-center items-center">
            <div className=" bg-white w-80 m-auto p-4 rounded-md">
                <Heading lebel={"Sign In"}/>
                <Subheading lebel={"Enter your credentials to access your account"}/>
                <InputBox onChange={(e)=>setUsername(e.target.value)} lebel={"Email"} placeholder={"johndoe@example.com"}/>
                <InputBox onChange={(e)=>setPassword(e.target.value)}  lebel={"Password"}/>
                <Button onclick={signHandler} btnName={"Sign In"}/>
                <ButtonWarning warning={"Doesn't have an account ?"} spanTag={"Signup"} to={"/signup"}/>
            </div>
        </div>
    </div>
}