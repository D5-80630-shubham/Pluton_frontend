import React, { useState } from "react";
import { applyLoan } from "../services/userService";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import NavbarComponent from "../../components/navbar";
import Footer from "../../components/footer";
import { fillYourIdentification } from "../services/userService";

const id = sessionStorage.getItem("userid");
const token = sessionStorage.getItem("token");

function VerifyUser() {
  const [aadhaarCard, setAadhaarCard] = useState("");
  const [panCard, setPanCard] = useState("");
  const [passport, setPassport] = useState("");
  const [drivingLicenseNo, setDrivingLicenseNo] = useState("");


  const navigate = useNavigate();


  const handleSubmit = async () => {

    if (aadhaarCard === "") {
      toast.warn("Select Loan Type");
    } else if (panCard === "") {
      toast.warn("Please Enter Requested Amount");
    } else if (passport === "") {
      toast.warn("Enter Intrest Rate");
    } else if (drivingLicenseNo === "") {
      toast.warn("Enter Loan term");
    }else {
      const body = {
        aadhaarCard,
        panCard,
        passport,
        drivingLicenseNo
      };
      const result = await fillYourIdentification(id, token, body);

      if (result && result.aadhaarCard) {
        toast.success("Your Identity is Update successfully");
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
      <h1 className="title">Update your Profile</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">Aadhaar Card No.</label>
              <input
                type="number"
                placeholder="854384966812"
                className="form-control"
                name="aadhaarCard"
                onChange={(e) => setAadhaarCard(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Pan Card No.</label>
              <input
                type="text"
                placeholder="LBY78T89"
                className="form-control"
                name="panCard"
                onChange={(e) => setPanCard(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Passport</label>
              <input
                type="text"
                placeholder="J8369854"
                className="form-control"
                name="passport"
                onChange={(e) => setPassport(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Driving License No</label>
              <input
                type="text"
                placeholder="MH67H877"
                className="form-control"
                name="drivingLicenseNo"
                onChange={(e) => setDrivingLicenseNo(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary mt-2" onClick={handleSubmit}>
                Update
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

export default VerifyUser;
