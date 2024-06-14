import React, { useState } from 'react';
import Contactme from './Contactme';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    city: '',
  });

  const [total, setTotal] = useState('');

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    const { name, roll, city } = formData;
    const total = `Name -- ${name}\nRoll no -- ${roll}\nCity -- ${city}`;
    setTotal(<pre>{total}</pre>);
  };
  

  const inputFields = [
    { name: 'name', placeholder: 'Name' },
    { name: 'roll', placeholder: 'Roll No' },
    { name: 'city', placeholder: 'City' },
  ];

  return (
    <div>
      <h1>Contact Information</h1>
      {inputFields.map((field) => (
        <input
          key={field.name} 
          type="text"
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={handleInputChange}
        />
      ))}
      <button onClick={onSubmit}>Click</button>
      <h1>{total}</h1>
      <Contactme />
    </div>
  );
}

export default Contact;
