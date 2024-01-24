import React, { useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ]
const ALL_WORDS = [];
const TOTAL_LINES = 1000;

for(let i = 0; i<TOTAL_LINES; i++){
    let sentence = "";
    for(let j=0; j<words.length; j++){
        sentence = sentence + words[Math.floor(words.length*Math.random())];
        sentence = sentence + " ";
    }
   // console.log(sentence)
    ALL_WORDS.push(sentence)
}
// console.log(ALL_WORDS)

export function Assignment2(){
    const [sentences, setSentences] = useState(ALL_WORDS)  // This state variable used as ALL_WORDS changing, I think
    const [filter, setFilter] = useState("")
    // console.log(filter)

    const filteredSentences = useMemo(()=>{
        return sentences.filter(x => x.includes(filter));
    },[filter,sentences])
    
    return <div>
        <input type="text" onChange={(e) => {
            setFilter(e.target.value)
        }}></input>

        {filteredSentences.map((a)=><div>
            {a}
            </div>)}
            
    </div>
}