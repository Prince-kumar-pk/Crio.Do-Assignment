import React from 'react'

const Child = ({childCounter,handleOnClickChild}) => {
    console.log("This is child component")
  return (
    <div>
        <h1>This is Child Component: {childCounter}</h1>
        <button onClick={handleOnClickChild}>Increment child</button>
    </div>
  )
}

export default Child;
