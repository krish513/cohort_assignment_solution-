import { useNavigate, useSearchParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

export default function Dashboard(){
    const [searchParams] =useSearchParams();
    const name = searchParams.get("name")
    const navigate = useNavigate();
    console.log(name)

    function logoutHandler(){
        localStorage.removeItem("token")
        navigate("/signin")
    }

    return <div className="w-[100vw] flex justify-center mt-10">
        <div className="w-[70%] flex flex-col gap-1">
            <AppBar name={name}/>
            <Balance/>
            <Users/>
            <button onClick={logoutHandler}>log out</button>
        </div>
    </div>
}
