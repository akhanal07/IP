import React from 'react'
import Contactme from './Contactme'

function Contact() {
    const [name, setName]=React.useState();
    const [roll, setRoll]=React.useState();
    const [city, setCity]=React.useState();
    const [total, setTotal]=React.useState();


    function onSubmit(){
        const total = `this is ${name} roll no ${roll} of city ${city}`;
        setTotal(total);
    }
  return (
    <div>

        <h1></h1>
        <input onChange={(e)=>setName(e.target.value)} placeholder='name'></input>
        <input onChange={(e)=>setRoll(e.target.value)} placeholder='rollno'></input>
        <input onChange={(e)=>setCity(e.target.value)} placeholder='city'></input>
        <button onClick={onSubmit}>Click</button>
        <h1>{total}</h1>
        <Contactme></Contactme>
    </div>
    
  )
}

export default Contact