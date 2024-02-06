import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

export default function Dashboard(){
    return <div className="w-[100vw] flex justify-center mt-10">
        <div className="w-[70%] flex flex-col gap-1">
            <AppBar/>
            <Balance/>
            <Users/>
        </div>
    </div>
}