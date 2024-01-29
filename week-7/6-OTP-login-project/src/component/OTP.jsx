
export default function OTP(){
    return (
        <div className="flex h-screen">
        <div className="flex flex-col w-[450px] justify-center items-center border m-auto gap-7 pb-20 pt-16 rounded-xl bg-black">
            <h2 className="text-white text-4xl">Login via OTP</h2>
            <div className="flex gap-2">
                <input className="w-[55px] h-[50px] bg-black border border-gray-400 text-gray-400 p-5 text-xl" type="text"></input>
                <input className="w-[55px] h-[50px] bg-black border border-gray-400 text-gray-400 p-5 text-xl"></input>
                <input className="w-[55px] h-[50px] bg-black border border-gray-400 text-gray-400 p-5 text-xl"></input>
                <input className="w-[55px] h-[50px] bg-black border border-gray-400 text-gray-400 p-5 text-xl"></input>
            </div>
            {/* <input className=" bg-black border border-gray-400 w-[50%] p-1 pl-4 rounded-lg text-gray-400"
                type="text" placeholder="Enter your mobile number"
                onChange={(e)=>{
                    isNaN(e.target.value) ? alert("Wrong input") : setInputNumber(parseInt(e.target.value))
                    }}></input> */}
            <button className="text-white border border-gray-400 p-1 pl-3 pr-3 rounded-lg"
                >
                Login</button>
        </div>
        
    </div>
    
    )}