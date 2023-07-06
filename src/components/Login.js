import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!values.email || !values.pass) {
      setErrorMessage("Fill all fields");
      return;
    }
    setErrorMessage("");
    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBtnDisabled(false);
        navigate("/map");
        // console.log(user);
      })
      .catch((err) => {
        setSubmitBtnDisabled(false);
        setErrorMessage(err.message);
        // console.log("Error", err);
      });
  };
  return (
    <div className="form">
      <form>
        <h3>Login</h3>
        <div className="input-container">
          <label>Username </label>
          <input
            type="email"
            required
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            required
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
        </div>
        <div className="button-container">
          <b className="error">{errorMessage}</b>
          <input type="submit" disabled={submitBtnDisabled} onClick={handleSubmit} />
        </div>
        <div className="input-container">
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
