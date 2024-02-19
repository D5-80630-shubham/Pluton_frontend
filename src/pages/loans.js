import React from "react";
import { Link } from "react-router-dom";

function Loan() {
  const loanOptions = [
    {
      id: 1,
      name: "Personal Loan",
      description: "Get a loan for personal use.",
      rate: "14%",
    },
    {
      id: 2,
      name: "Home Loan",
      description: "Finance your dream home.",
      rate: "11%",
    },
    {
      id: 3,
      name: "Car Loan",
      description: "Get a loan to buy your dream car.",
      rate: "10.5%",
    },
    {
      id: 4,
      name: "Education Loan",
      description: "Fund your education with ease.",
      rate: "9.1%",
    },
  ];

  return (
    <div className="container">
      <h2>Loan Options</h2>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Loan Type</th>
            <th>Loan description</th>
            <th>Interest Rate %</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loanOptions.map((option) => (
            <tr key={option.id}>
              <td>{option.name}</td>
              <td>{option.description}</td>
              <td>{option.rate}</td>
              <td><button className="btn btn-primary">Appky</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loan;
