import React, { useEffect, useState } from "react";
import { applyLoan } from "../services/userService";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import NavbarComponent from "../../components/navbar";
import Footer from "../../components/footer";
import { getYourIdentification } from "../services/userService";

const id = sessionStorage.getItem("userid");
const token = sessionStorage.getItem("token");

function LoanApplicationForm() {
  const [loanType, setLoanType] = useState("");
  const [requestedAmount, setRequestedAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [comments, setComments] = useState("");
  const [userIden, setUserIden] = useState(null);
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getYourIdentification(id, token);
        setUserIden(userData);
        setStatus(true);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchData();
  }, []);

  if (status) {
    if (userIden.aadhaarCard==null) {
      return (
        <div>
          you have not registered your identity
          <br></br>
          <Link to={"/user/updateprofile"}>
            Click here to fill your identity
          </Link>
        </div>
      );
    }
  }

  const handleSubmit = async () => {
    if (loanType === "") {
      toast.warn("Select Loan Type");
    } else if (requestedAmount.length === 0) {
      toast.warn("Please Enter Requested Amount");
    } else if (interestRate.length === 0) {
      toast.warn("Enter Intrest Rate");
    } else if (loanTerm === 0) {
      toast.warn("Enter Loan term");
    } else if (creditScore === 0) {
      toast.warn("Enter credit score");
    } else {
      const body = {
        loanType,
        requestedAmount,
        interestRate,
        loanTerm,
        creditScore,
        comments,
      };
      const result = await applyLoan(id, token, body);

      if (result && result.loanApplicationId) {
        toast.success("Your Application is Submited successfully");
        navigate("/loan");
      } else if (result && result.error) {
        toast.error(result.error.message);
      } else {
        toast.error("Unknown error occurred. Please try again later.");
      }
    }
  };
  return (
    <>
      <br />
      <br />
      <NavbarComponent />
      <h1 className="title">Application Form</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label>Loan Type</label>
              <select
                id="LoanType"
                className="form-control"
                name="loanType"
                onChange={(e) => setLoanType(e.target.value)}
                value={loanType}
              >
                <option value="">Select Loan Type</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Car Loan">Car Loan</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Education Loan">Education Loan</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="">Requested Amount</label>
              <input
                type="number"
                placeholder="100000"
                className="form-control"
                name="requestedAmount"
                onChange={(e) => setRequestedAmount(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">interestRate</label>
              <input
                type="number"
                placeholder="8%"
                className="form-control"
                name="interestRate"
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">loanTerm</label>
              <input
                type="number"
                placeholder="36 years"
                className="form-control"
                name="loanTerm"
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">creditScore</label>
              <input
                type="number"
                placeholder="800"
                className="form-control"
                name="creditScore"
                onChange={(e) => setCreditScore(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">comments</label>
              <input
                type="text"
                placeholder=""
                className="form-control"
                name="comments"
                onChange={(e) => setComments(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <button className="btn btn-primary mt-2" onClick={handleSubmit}>
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <Footer />
    </>
  );
}

export default LoanApplicationForm;
