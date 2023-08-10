import React, { useState, useEffect } from 'react';


function Tolow() {

    const [torol,setTorol] = useState("Users");
    useEffect(() => {
        console.log("render")
    },[torol]);

    // useEffect (useEffect, cause) - cause ni uurchlugduh uyd effect ahiglana

    useEffect(() => {
        fetch(`https:/jsonplaceholder.typicode.com/${torol}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
    },[torol])

    return ( 
        <div>
            <div>
                <button onClick={() => setTorol("Users")} 
                style={{ margin: "5px"}}>Users</button>

                <button onClick={() => setTorol("Post")}
                style={{ margin: "5px"}}>Post</button>

                <button onClick={() => setTorol("Comments")}
                style={{ margin: "5px"}}>Comments</button>
            </div>
            <h1>{torol}</h1>
        </div>
     );
}

export default Tolow;