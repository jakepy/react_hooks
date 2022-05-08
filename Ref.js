import React, { useRef } from "react";


function Ref() {
    const inputRef = useRef(null)
    const onClick = () => {
        inputRef.current.focus()
        inputRef.current.value = "" // clears the current input box.
    }

    return (
        <div>
            <h1>Jacob</h1>
            <input 
                type="text"
                placeholder="Type Something"
                ref={inputRef}
            />
            <button onClick={onClick}>Clear</button>
        </div>
    )
}

export default Ref;