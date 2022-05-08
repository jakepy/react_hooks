import React, { useReducer } from 'react';


const ReducerState = () => {

    const reducer = (reducible, action) => {
        switch(action.type) {
            case "toggleShowText":
                return {showText: !reducible.showText}
            default:
                return reducible
        }
    }

    const [reducible, dispatch] = useReducer(reducer, 
        {showText: true})

    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: "toggleShowText" })
                }}
            >
            Click Me
            </button>
            {reducible.showText && <p>Hello</p>}
        </div>
    )
}

export default ReducerState;