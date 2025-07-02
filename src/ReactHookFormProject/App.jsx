
import { useEffect, useState } from 'react';
import './App.css'
import { useForm } from 'react-hook-form';
import { resetWarningCache } from 'prop-types';

// This is a form using react-hook-form for form handling in React
// It includes validation for required fields and minimum length for the name field
// It also demonstrates how to watch field values and perform asynchronous validation
// The form includes fields for name, email, and password with various validation rules


function App() {

  // Register is a function provided by react-hook-form to register input fields
  // handleSubmit is a function that handles form submission
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    mode: 'onChange'  // onChange mode allows validation to occur on every change
  });
  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  const watchedName = watch('name'); // Watching the 'name' field
  const watchedEmail = watch('email'); // Watching the 'email' field
  const watchedPassword = watch('password'); // Watching the 'password' field]

  // Simulating an asynchronous check for existing usernames, API call, or database query

  const checkIfUserNameExist = async (username) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 500); // Simulating network delay
    });
    return ['Erik', 'Admin', 'Doe'].includes(username);
  };


  useEffect(() => {
    console.log('Watched name:', watchedName);
    console.log('Watched email:', watchedEmail);
    console.log('Watched password:', watchedPassword);
  }, [watchedName, watchedEmail, watchedPassword]); // Effect runs when watched fields change  

  return (
    <div className="form-container">
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name should be at least 2 characters' },
              validate: {
                notErik: (value) => value !== 'Erik' || 'Name cannot be Erik',
                isNotNumber: (value) => isNaN(value) || 'Name cannot be a number',
                checkUserName: async (value) => {
                  const existingNames = await checkIfUserNameExist(value); // Example of existing names
                  return !existingNames || 'Name already exists';
                }
              }
            })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="form-field">
          <label >Email:</label>
          <input
            {...register('email',
              {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
              })} />
          {errors.email && <span className="error">Email is required</span>}
        </div>

        <div className="form-field">
          <label >Password:</label>
          <input
            {...register('password',
              {
                required: true,
                minLength: { value: 4, message: 'Password should be at least 4 characters' },
                validate: {
                  hasUpper: value =>
                    /[A-Z]/.test(value) || 'Must include an uppercase letter',
                  hasLower: value =>
                    /[a-z]/.test(value) || 'Must include a lowercase letter',
                  hasNumber: value =>
                    /\d/.test(value) || 'Must include a number',
                }
              })} />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={() => reset()}>Reset</button>
      </form>
    </div>
  );
}

export default App
