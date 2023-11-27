import React,{memo} from 'react'

const Child = ({childCounter,handleOnClickChild}) => {
    console.log("This is child component")
  return (
    <div>
        <h1>This is Child Component: {childCounter}</h1>
        <button onClick={handleOnClickChild}>Increment child</button>
    </div>
  )
}

// To prevent from  re-rendering we use React.memo()  ,, now it will re-render only if some changes occured in this component;
export default memo(Child);
