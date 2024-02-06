import { useState } from "react";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Signup(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    async function signUpHandler(){
        try{
            const res = await axios.post("http://localhost:3000/api/v1/user/signup",{
            firstName,
            lastName,
            username,
            password
        })
            alert(res.data.msg)
            navigate("/signin")
        }
        catch(err){
            alert(err.response.data.msg)
            return;
        }   
    }

    return <div className="h-screen bg-slate-300 flex justify-center">
       {/* firstname : {firstName}
        lastname : {lastName}
        email : {email}
        password : {password} */}
        <div className="flex flex-col justify-center items-center">
            <div className=" bg-white w-80 m-auto p-4 rounded-md">
                <Heading lebel={"Sign Up"}/>
                <Subheading lebel={"Enter your information to create an account"}/>
                <InputBox onChange = {(e)=>setFirstName(e.target.value)}  lebel={"First Name"} placeholder={"John"}/>
                <InputBox onChange = {(e)=>setLastName(e.target.value)} lebel={"Last Name"} placeholder={"Doe"}/>
                <InputBox onChange = {(e)=>setUsername(e.target.value)} lebel={"Email"} placeholder={"johndoe@example.com"}/>
                <InputBox onChange = {(e)=>setPassword(e.target.value)} lebel={"Password"}/>
                <Button onclick = {signUpHandler} btnName={"Sign Up"}/>
                <ButtonWarning warning={"Already have an account ?"} spanTag={"Login"} to={"/signin"}/>
            </div>
        </div>
    </div>
}