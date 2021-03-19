import React, { useEffect, useState } from 'react';

function Weather(props) {

    const [data, setData] = useState("")
    useEffect(() => {
        setData(props)

    }, [])

    console.log("data", data)
    return(
        <div>
            <h1>Weather</h1>
        </div>
    )
}

export default Weather