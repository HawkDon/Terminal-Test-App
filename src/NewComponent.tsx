import React, { useState } from "react";
const NewComponent = () => {
    const [count, setCount] = useState(1);
    return (<><div>{count}</div><button onClick={() => setCount(count + 1)}>click</button></>)
}

export default NewComponent;