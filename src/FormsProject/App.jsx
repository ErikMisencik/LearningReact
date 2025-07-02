
import { useEffect, useState } from 'react';
import './App.css'

// This is a simple form handling example in React without using any libraries like react-hook-form.
// It includes validation for name and email fields, and displays error messages accordingly.

function App() {

  const [formData, setFormData] = useState({
    name: '', 
    email: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = 'Please fill the name field';
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email address';
  }

  return newErrors;
};

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    console.log('Validation result:', validationErrors); 

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
    else {
      console.log('Form submitted:', formData);
      setErrors({});
    }

  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
     <div className="form-container">
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App
