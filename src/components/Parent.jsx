import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {

    const[counter,setCounter] = useState(0);
    const[childCounter,setChildCounter] = useState(0);

    //when we update usestate variable it will re-render this component along with its child component
    const handleOnClickCount =()=>{
        setCounter(counter+1);
    }

    // function that will be called from the child component
    const handleOnClickChild =()=>{
        setChildCounter(childCounter + 1);
    }

    
    
    return (
        <div>
            <Child childCounter={childCounter} handleOnClickChild={handleOnClickChild} />
                <br /><br />
            <hr /><hr /><hr /><hr />
            <h1>This is Parent Component: {counter} </h1>
            <button onClick={handleOnClickCount}>Increment Parent</button>
        </div>
    )
}

export default Parent