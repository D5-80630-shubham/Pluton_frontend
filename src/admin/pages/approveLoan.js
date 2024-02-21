import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import NavbarComponent from "../../components/navbar";
import Footer from "../../components/footer";
import { approveLoan } from "../services/adminServices";

const token = sessionStorage.getItem("token");

function ApproveLoan() {
  const { id } = useParams();

  const [loanTenureMonths, setLoanTenureMonths] = useState("");
  const [amountDisbursed, setAmountDisbursed] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [latePaymentPenalty, setLatePaymentPenalty] = useState("");
  const [gracePeriodMonths, setGracePeriodMonths] = useState("");
  const [prepaymentPenalty, setPrepaymentPenalty] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (loanTenureMonths === "") {
      toast.warn("Enter Loan Tenure");
    } else if (amountDisbursed === "") {
      toast.warn("Please Enter Disbursed Amount");
    } else if (interestRate === "") {
      toast.warn("Enter Intrest Rate");
    } else if (latePaymentPenalty === "") {
      toast.warn("Enter Late Payment penalty");
    } else if (gracePeriodMonths === "") {
      toast.warn("Enter Grace perion month");
    } else if (prepaymentPenalty === "") {
      toast.warn("Enter prepayment penalty");
    } else {
      const body = {
        loanTenureMonths,
        amountDisbursed,
        interestRate,
        latePaymentPenalty,
        gracePeriodMonths,
        prepaymentPenalty,
      };
      const result = await approveLoan(token, id, body);

      if (result && result.loanStatus) {
        toast.success("Loan is Approved");
        navigate("/applications");
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
      <h1 className="title">Approve Loan for application id : {id} </h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">Loan Tenure Months</label>
              <input
                type="number"
                placeholder="36"
                className="form-control"
                name="loanTenureMonths"
                onChange={(e) => setLoanTenureMonths(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Amount Disbursed</label>
              <input
                type="number"
                placeholder="1000000"
                className="form-control"
                name="amountDisbursed"
                onChange={(e) => setAmountDisbursed(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Interest Rate</label>
              <input
                type="number"
                placeholder="12"
                className="form-control"
                name="interestRate"
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Late Payment Penalty</label>
              <input
                type="number"
                placeholder="27999"
                className="form-control"
                name="latePaymentPenalty"
                onChange={(e) => setLatePaymentPenalty(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Grace Period Months</label>
              <input
                type="number"
                placeholder="1"
                className="form-control"
                name="gracePeriodMonths"
                onChange={(e) => setGracePeriodMonths(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Prepayment Penalty</label>
              <input
                type="number"
                placeholder="34999"
                className="form-control"
                name="prepaymentPenalty"
                onChange={(e) => setPrepaymentPenalty(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary mt-2" onClick={handleSubmit}>
                Accept
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

export default ApproveLoan;
