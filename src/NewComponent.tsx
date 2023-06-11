import React, { useEffect } from "react";

const NewComponent = () => {
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/typicode/demo/posts").then(res => res.json()).then(res => console.log(res))
    })
    return (<div>Hello World!!</div>)
}

export default NewComponent;