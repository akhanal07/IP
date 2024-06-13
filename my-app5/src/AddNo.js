import React from 'react'

function AddNo() {
    const [num1, SetNum1] = React.useState(0);
    const [num2, SetNum2] = React.useState(0);
    const [total, SetTotal] = React.useState(0); 
    

    function sum() {
        const total = parseInt(num1) + parseInt(num2);
        SetTotal(total); 
      }
      

    

      return (
        <>
          <div>
            <input onChange={(e) => SetNum1(e.target.value)} type='text' placeholder='Write the first no'></input><br></br>
            <input onChange={(e) => SetNum2(e.target.value)} type='text' placeholder='Write the second no'></input><br></br>
            <button onClick={sum}>Add</button>
            <h3>The sum is: {total}</h3>
          </div>
        </>
      )
      
  
}

export default AddNo