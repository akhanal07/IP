import React from 'react'

function MyComp() {
    const[name,setName]=React.useState("Ayush");

    // function hi(){
    //     setName("Khanal")
    // }

  return (<>
    <div>Click the below button</div>
    <br></br>

    <button onClick={()=> setName("Khanal")}>Submit</button>
    <h1>{name}</h1>
    </>
  )
  
}

export default MyComp
