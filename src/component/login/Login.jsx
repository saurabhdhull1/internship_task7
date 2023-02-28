import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login">
        <div>
          <img src="/assets/login.png" alt="" />
        </div>
        <div>
          <div>
            <span>Login</span> or <span>Signup</span>
          </div>
          <div>
            <span>+91</span> <input type="text" name="" id="" placeholder="Mobile Number*" />
          </div>
          <div>
            <p>
              By continue, I agree to the <span>Terms of use</span> and{" "}
              <span>Privacy policies</span>{" "}
            </p>
          </div>
          <div>
            <button onClick={()=>{navigate("/home")}}>Continue</button>
          </div>
          <div>
            <p>
              Having trubble in login? <span>Get Help</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
