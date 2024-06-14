// import React, { useState } from 'react';
// import Contactme from './Contactme';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     roll: '',
//     city: '',
//   });

//   const [total, setTotal] = useState('');

//   const handleInputChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const onSubmit = () => {
//     const { name, roll, city } = formData;
//     const total = `Name -- ${name}\nRoll no -- ${roll}\nCity -- ${city}`;
//     setTotal(<pre>{total}</pre>);
//   };
  

//   const inputFields = [
//     { name: 'name', placeholder: 'Name' },
//     { name: 'roll', placeholder: 'Roll No' },
//     { name: 'city', placeholder: 'City' },
//   ];

//   return (
//     <div>
//       <h1>Contact Information</h1>
//       {inputFields.map((field) => (
//         <input
//           key={field.name} 
//           type="text"
//           name={field.name}
//           placeholder={field.placeholder}
//           value={formData[field.name]}
//           onChange={handleInputChange}
//         />
//       ))}
//       <button onClick={onSubmit}>Display</button>
//       <h1>{total}</h1>
//       <Contactme />
//     </div>
//   );
// }

// export default Contact;


import React, { useState } from 'react';

function Contact() {
  const [userInput, setUserInput] = useState(''); // State for user input
  const [squares, setSquares] = useState([]); // State for squares

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const calculateSquares = () => {
    const parsedNumber = parseInt(userInput);
    if (!isNaN(parsedNumber)) { // Check if valid number
      const square = parsedNumber * parsedNumber;
      setSquares([square]); // Set squares state with the calculated square
    } else {
      alert('Please enter a valid number.'); // Handle invalid input
    }
    setUserInput(''); // Clear user input after calculation
  };

  return (
    <div>
      <h1>Calculate Squares</h1>
      <input
        type="text"
        placeholder="Enter a number"
        value={userInput}
        onChange={handleInputChange}
      />
      <button onClick={calculateSquares}>Calculate Squares</button>
      <ul>
        {squares.length > 0 && ( // Only display list if there's a square
          <li key={0}>Square: {squares[0]}</li>
        )}
      </ul>
    </div>
  );
}

export default Contact;






