
export default function InputBox({lebel, placeholder, onChange}){
    return <div className="flex flex-col gap-1 pt-2">
        <lebel>{lebel}</lebel>
        <input onChange={onChange} className=" border p-1 w-[100%] rounded-md" type="text" placeholder={placeholder}/>
    </div>
}