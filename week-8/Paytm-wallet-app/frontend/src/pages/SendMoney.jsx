import Heading from "../components/Heading";
import InputBox from "../components/InputBox";

export default function SendMoney(){
    return <div className="h-screen bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center items-center">
            <div className=" bg-white w-80 m-auto p-8 rounded-md flex flex-col gap-3">
                <Heading lebel={"Send Money"}/>
                <div className="flex items-center gap-2">
                    <div className=" bg-green-500 rounded-full pt-1 pb-1 pl-[10px] pr-[10px] text-white">
                        A
                    </div>
                    <div>
                        Friend's name
                    </div>
                </div>
                <InputBox lebel={"Amount (in Rs)"} placeholder={"Enter amount"}/>
                <button className=" bg-green-500 w-full rounded-md p-1 text-white">Initiate Transfer</button>
            </div>
        </div>
    </div>
}