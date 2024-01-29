
export default function Button({title,color,onclick,textColor,btn}){
    return <>
        <button style={{background: btn, color: textColor}} className= "rounded w-[80px]"
         onClick={()=>{
            onclick(color)
        }}>
            {title}
        </button>
    </>
}