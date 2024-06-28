import React, { useState } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form data", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange}/>
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange}/>
      <button type="submit">Submit</button>
      <div>
        
        <span>Name: {formData.name}</span><br />
        <span>Email: {formData.email}</span>
      </div>
    </form>
  );
}

export default FormComponent;
