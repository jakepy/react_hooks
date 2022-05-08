import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EffectState() {
    const [data, setData] = useState("")

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email)
                console.log("API Call")
            }
        )
    }, []) // LIMIT API CALLS BY CREATING AN EMPTY ARRAY

    return <div>Effect State, email at 0 index: {data}</div>
}

export default EffectState