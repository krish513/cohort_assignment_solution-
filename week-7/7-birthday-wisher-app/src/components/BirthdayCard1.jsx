import { useRecoilValue } from "recoil"
import { nameAtom } from "../store/atoms/birthdayAtom"

export default function BirthdayCard1({nextHandler}){
    const name = useRecoilValue(nameAtom)

    return <div className="flex h-screen">
        <div className=" m-auto">
            <h1>Happy Birthday {name}</h1>
            <p>I hope all your birthday wishes and dreams come true.</p>
        </div>

        <button onClick={nextHandler}>Next</button>
        
    </div>
}