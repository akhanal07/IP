import React from 'react'

function AddNo() {
    const [num1, SetNum1] = React.useState(0);
    const [num2, SetNum2] = React.useState(0);
    const [total, SetTotal] = React.useState(0); 
    const [total1, SetTotal1] = React.useState(0);
    

    function sum() {
        const total = parseInt(num1) + parseInt(num2);
        SetTotal(total); 
      }

      function multiply() {
        const total1 = parseInt(num1) * parseInt(num2);
        SetTotal1(total1); 
      }
      
      return (
        <>
          <div>
            <input onChange={(e) => SetNum1(e.target.value)} type='num' placeholder='Write the first no'></input><br></br>
            <input onChange={(e) => SetNum2(e.target.value)} type='text' placeholder='Write the second no'></input><br></br>
            <button onClick={sum}>sum</button>
            <button onClick={multiply}>multiply</button>
            <h3>The sum is: {total}</h3>
            <h3>The multiplication is: {total1}</h3>
          </div>
        </>
      )
      
  
}

export default AddNo