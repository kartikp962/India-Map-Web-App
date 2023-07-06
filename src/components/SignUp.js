import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from "../firebase/firebase"

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!values.name || !values.email || !values.pass) {
        setErrorMessage("Fill all fields");
        return;
    }
    setErrorMessage("");
    setSubmitBtnDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
    .then(async (res) => 
    {
            setSubmitBtnDisabled(false);
            const user = res.user;
            await updateProfile(user, {
                displayName: values.name,

            })
            navigate('/');
            console.log(user);
        }
        ).catch (
            (err) =>{
                setSubmitBtnDisabled(false);
                setErrorMessage(err.message);
                console.log("Error", err);
            } 
    )
  }

  return (
    <div className="form">
      <form>
        <h3>Sign Up</h3>
        <div className="input-container">
          <label>Name </label>
          <input
            type="text"
            // name="name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
            required
          />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input
            type="email"
            // name="email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            required
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            // name="pass"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            required
          />
        </div>
        <div className="button-container">
            <b className="error">{errorMessage}</b>
          <input type="button" value="Signup" onClick={handleSubmit} disabled={submitBtnDisabled} />
        </div>
        <div className="input-container">
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/">Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
