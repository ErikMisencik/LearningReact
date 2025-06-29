
import './App.css'
import { useState } from 'react';


function App() {

  const [formData, setFormData] = useState({
    text: '',
    checkbox: false,
    radio: '',
    select: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  return (
    <>
      <h1>Form Container</h1>
      <div className='form-container'>
        <form>
          {/* Text Input */}
          <div className='form-field'>
            <label>
              Text:
              <input
                type="text"
                name="text"
                value={formData.text}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* CheckBox Input */}
          <div className='form-field'>
            <label>
              Checkbox:
              <input
                type="checkbox"
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* Radio Input */}
          <div className='form-field'>
            <label>Radio:</label>
            <label className='radio-option'>
              <input
                type="radio"
                name="radio"
                value="option1"
                checked={formData.radio === 'option1'}
                onChange={handleChange}
              />
              Option 1
            </label>

            <label className='radio-option'>

              <input
                type="radio"
                name="radio"
                value="option2"
                checked={formData.radio === 'option2'}
                onChange={handleChange}
              />
              Option 2
            </label>
          </div>
          {/* Dropdown select Input */}
          <div className='form-field'>
            <label>
              Select:
              <select
                name="select"
                value={formData.select}
                onChange={handleChange}
              >
                <option value="">--Select an option--</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </label>
          </div>

          <div>
            <h3>Form Data</h3>
            <p> <strong>Text: </strong> {formData.text || 'N/A'}</p>
            <p> <strong>Checkbox: </strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
            <p> <strong>Radio: </strong> {formData.radio || 'N/A'}</p>
            <p> <strong>Select: </strong> {formData.select || 'N/A'}</p>
          </div>

        </form>
      </div>
    </>
  )
}




export default App
