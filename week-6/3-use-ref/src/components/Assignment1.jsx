import { useRef } from "react";
import { useEffect } from "react";


// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.


// without using useRef //

// export function Assignment1() {

//     useEffect(() => {
//         document.getElementById('inputbox').focus();
//     }, []);

//     const handleButtonClick = () => {
//         document.getElementById('inputbox').focus();
//     };

//     return (
//         <div>
//             <input id="inputbox" type="text" placeholder="Enter text here" />
//             <button onClick={handleButtonClick}>Focus Input</button>
//         </div>
//     );
// };

export function Assignment1() {

    const inputref = useRef();

    useEffect(() => {
        inputref.current.focus();
    }, []);

    const handleButtonClick = () => {
        inputref.current.focus();
    };

    return (
        <div>
            <input ref = {inputref} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};