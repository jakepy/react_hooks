import React, { useLayoutEffect, useEffect, useRef } from 'react';

function LayoutEffect() {

    const inputRef = useRef(null)

    useLayoutEffect(() => {
        console.log(inputRef.current.value)
    }, [])

    useEffect(() => {
        inputRef.current.value = "Type Something..."
    }, [])

    return (
        <div className='App'>
            <input  
                ref={inputRef}
                value="Sorry, you can't. This is simply a demonstration."
                style={{
                    width: 400,
                    height: 40
                }}
            />
        </div>
    )
}

export default LayoutEffect;