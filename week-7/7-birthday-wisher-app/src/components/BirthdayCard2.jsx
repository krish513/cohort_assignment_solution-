import { useRecoilValue } from "recoil"
import { nameAtom } from "../store/atoms/birthdayAtom"

export default function BirthdayCard2({nextHandler}){

    const name = useRecoilValue(nameAtom)

    return <div className="flex h-screen">
        <div className=" m-auto">
            <h1>Count your life by smiles, not tears. Count your age by friends, not years</h1>
            <p>Happy Birthday {name}</p>
        </div>  
        <button onClick={nextHandler}>Next</button> 
    </div>
}