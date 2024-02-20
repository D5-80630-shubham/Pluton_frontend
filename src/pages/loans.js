import React from "react";
import { Link } from "react-router-dom";
import {loanOptions } from "../assets/loanOptions";
import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";

function Loan() {




  return (
    <>
    <NavbarComponent/>
    <br></br>
    <br></br>
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
              <td><Link to={"/loan/apply"} className="btn btn-primary">Apply</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  );
}

export default Loan;
