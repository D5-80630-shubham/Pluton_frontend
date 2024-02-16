import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { signinUser } from "../services/users";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSignIn = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!emailRegex.test(email)) {
      toast.warn("Invalid email format");
    } else if (password.length< 8) {
      toast.warn("Password must be of at least 8 characters");
    } else if (!passwordRegex.test(password)) {
      toast.warn(
        "password must contain at least one uppercase letter, one lowercase letter, and one number"
      );
    } else {

      const result = await signinUser(email, password);
      if (result["status"] === "success") {

        const token = result["data"]["token"];
        sessionStorage["token"] = token;

        toast.success("logged in successfully");
        
        if(result.user.role==='ADMIN'){
          navigate("/admin");
        }else if(result.user.role==='CUSTOMER'){
          navigate("/user");
        }
        
      } else {
        toast.error(result["error"]);
      }
    }
  };

  return (
    <>
      <h1 className="title">Signin</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="abc@email.com"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="xxxxxxxxx"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div>
                Don't have an account ? <Link to="/signup">Signup here</Link>
              </div>
              <button className="btn btn-primary mt-2" onClick={onSignIn}>
                Sign in
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default Signin;
