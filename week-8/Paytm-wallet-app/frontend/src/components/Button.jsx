
export default function Button({btnName,onclick}){
    return <div className=" pt-3 pb-3">
        <button onClick={onclick} className=" bg-black w-[100%] text-white p-2 rounded-md">{btnName}</button>
    </div>
}