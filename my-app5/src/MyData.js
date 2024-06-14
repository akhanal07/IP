import axios from 'axios'
import React from 'react'

function MyData() {
    
    const myFunction=async()=>{
        const data= await axios.get("https://reqres.in/api/users?page=1")
        console.log(data.data);
    }
    myFunction();
  return (
    <div> My data</div>
  )
}

export default MyData