import React, { useState } from 'react';

function LoanApplicationForm({ loanOption }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    amount: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // send data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Apply for {loanOption.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>
        <label>
          Loan Amount:
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default LoanApplicationForm;
