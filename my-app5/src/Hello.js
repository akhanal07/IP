import React from 'react'

function Hello() {
    const[name,setName]=React.useState("");
  return (
    <div>
        <h1>Hello {name}</h1>
        <input onChange={(e)=>setName(e.target.value)} type='text' placeholder='Write here'></input>

    </div>
  )
}

export default Hello