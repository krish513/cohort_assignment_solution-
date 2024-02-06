
export default function AppBar({name}){
    return <div className="flex border p-2 rounded-md justify-between items-center"> 
        <div>
            Paytm App
        </div>
        <div className="flex gap-4 items-center">
            <div>
                Hellow
            </div>
            <div className=" bg-slate-300 rounded-full pt-1 pb-1 pl-[10px] pr-[10px]">
                {name[0]}
            </div>
        </div>
    </div>
}