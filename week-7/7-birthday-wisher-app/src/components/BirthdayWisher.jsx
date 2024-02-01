import { useState } from "react"
import BirthdayCard1 from "./BirthdayCard1"
import BirthdayCard2 from "./BirthdayCard2"
import BirthdayCard3 from "./BirthdayCard3"

export default function BirthdayWisher(){

    const [currentCard, setCurrentCard] = useState(0)

    function nextHandler(){
        setCurrentCard((pre)=> (pre + 1) % 3)
    }

    return <div>
        {currentCard == 0 && <BirthdayCard1 nextHandler ={nextHandler}/>}
        {currentCard == 1 && <BirthdayCard2 nextHandler ={nextHandler}/>}
        {currentCard == 2 && <BirthdayCard3 nextHandler ={nextHandler}/>}
        
    </div>
}
