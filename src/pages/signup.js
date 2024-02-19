import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { signupUser } from "../services/users";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const onSignUp = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (firstName.length === 0) {
      toast.warn("Enter first name");
    } else if (lastName.length === 0) {
      toast.warn("Enter last name");
    } else if (!emailRegex.test(email)) {
      toast.warn("Enter email");
    } else if (password.length < 8) {
      toast.warn("Password must be of at least 8 characters");
    } else if (!passwordRegex.test(password)) {
      toast.warn(
        "password must contain at least one uppercase letter, one lowercase letter, and one number"
      );
    } else if (phoneNumber.length === 0) {
      toast.warn("Enter mobile number");
    } else if (gender === "") {
      toast.warn("Select your gender");
    } else if (!dateOfBirth) {
      toast.warn("Enter your date of birth");
    } else {
      const result = await signupUser(
        firstName,
        lastName,
        email,
        password,
        gender,
        dateOfBirth,
        phoneNumber
      );

      if (result && result.customerId) {
        toast.success("Successfully Registered");
        navigate("/signin");
      } else if (result && result.error) {
        toast.error(result.error.message);
      } else {
        toast.error("Unknown error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <h1 className="title">Signup</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="form-control"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Deo"
                className="form-control"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="abc@email.com"
                className="form-control"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="xxxxxxxxx"
                className="form-control"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                placeholder="9874563210"
                className="form-control"
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value);
                  setDateOfBirth(selectedDate);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                className="form-control"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHERS">Others</option>
              </select>
            </div>

            <div className="mb-3">
              <div>
                Already have an account ? <Link to="/signin">Sign in</Link>
              </div>
              <button className="btn btn-primary mt-2" onClick={onSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default Signup;
