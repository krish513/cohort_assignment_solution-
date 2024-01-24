import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(function(){
        let factorialValue = 1;
        for(let i=1; i<=input; i++){
            factorialValue = factorialValue * i;
        }
        return factorialValue;
    },[input]); 
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                // value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}


/////////////////////////////////////////

// const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
// const TOTAL_LINES = 1000;
// const ALL_WORDS = [];
// for (let i = 0; i < TOTAL_LINES; i++) {
//     let sentence = "";
//     for (let j = 0; j < words.length; j++) {
//         sentence += (words[Math.floor(words.length * Math.random())])
//         sentence += " "
//     }
//     ALL_WORDS.push(sentence);
// }

// export function Assignment2() {
//     const [sentences, setSentences] = useState(ALL_WORDS);
//     const [filter, setFilter] = useState("");

//     const filteredSentences = sentences.filter(x => x.includes(filter))

//     return <div>
//         <input type="text" onChange={(e) => {
//             setFilter(e.target.value)
//         }}></input>
//         {filteredSentences.map(word => <div>
//             {word}    
//         </div>)}
//     </div>
// }