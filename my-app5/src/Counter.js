import React from 'react'

function Counter() {
    const [num,SetNum] = React.useState(0)

    
  return (
    <>
    <div>{num}</div>
    <button onClick={()=>SetNum(num+1)}>Click </button>
    </>
  )
 
}
    
export default Counter