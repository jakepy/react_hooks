import React, { useState } from 'react';


const InputState = () => {
    const [inputValue, setInputValue] = useState("")

    let onChange = (event) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }

    return (
        <div>
            <input
                placeholder = "Enter Something, Anything..."
                onChange={onChange}
            />
            {inputValue}
        </div>
    )
}


export default InputState;