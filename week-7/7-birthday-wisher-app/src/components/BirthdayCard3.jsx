import { useRecoilValue } from "recoil"
import { nameAtom } from "../store/atoms/birthdayAtom"

export default function BirthdayCard3({nextHandler}){

    const name = useRecoilValue(nameAtom)

    return <div className="flex h-screen">
        <div className=" m-auto">
            <h1>{`A wish for you on your birthday, whatever you ask may you receive, whatever
                 you seek may you find, whatever you wish may it be fulfilled on your birthday and always.`}</h1>
            <p>Happy Birthday {name}</p>
        </div>  
        <button onClick={nextHandler}>Next</button> 
    </div>
}