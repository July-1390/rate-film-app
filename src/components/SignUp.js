import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../apiServices";
import "./SignUp.css";

const SignUpWindow = ({ setIsSignUpWindowVisible }) => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  // const [users, setUsers] = useState([])
  // const [formData, setFormData] = useState('')

  // const createUser = () => {
  //   const body = {
  //     username: values.userName,
  //     email: values.email,
  //     password: values.password,
  //   };
  //   fetch("http://rfilm.mswan.ru/api/v1/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log("ERROR"));
  // };

  const handleCloseSignUp = () => setIsSignUpWindowVisible(false);

  const handleSubmit = (e) => { // React.useCallback((e) => {...}, [values]) -> in some examples you could meet issues with a lot of rerenderes -> better to wrap it with useCallback 
    e.preventDefault();
    console.log(values.userName, values.email, values.password);
    createUser(values.userName, values.email, values.password);
    setSubmitted(true);
  };

  return (
    <>
      <div className="signup-modal-background" role="dialog" aria-modal="true">
        <div className="signup-modal-content">
          <div className="signup-modal-header">
            <h3 className="signup-modal-title">SIGN UP FOR RATE FILM</h3>
            <button
              className="signup-modal-close-btn"
              onClick={handleCloseSignUp}
            ></button>
          </div>
          <div className="signup-form-body">
            <form>
              <ul>
                <li className="form-group">
                  <label className="form-label">Your name on the website</label>
                  <input
                    className="form-field"
                    type="text"
                    name="userName"
                    placeholder="Jonny"
                    value={values.userName}
                    onChange={(e) => // try to avoid this construction -> it creates a lot of rerenders -> better to add new fn(for exmaple, handleSubmit)
                      setValues({ ...values, userName: e.target.value })
                    }
                  />
                </li>
                <li className="form-group">
                  <label className="form-label">Email address</label>
                  <input
                    className="form-field"
                    type="email"
                    autoComplete="on"
                    name="email"
                    placeholder="jonny@gmail.com"
                    value={values.email}
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </li>

                <li className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    className="form-field"
                    type="password"
                    autoComplete="on"
                    name="password"
                    value={values.password}
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                  />
                </li>
                {submitted && !values.password ? (
                  <span>Forgot your password???</span>
                ) : null}
                <li className="form-group">
                  <button
                    className="login-submit-btn"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    CREATE YOUR ACCOUNT
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <footer className="signup-modal-footer">
            <p className="signup-modal-footer-paragraph">
              Already have an account?
              <button className="signup-footer-link">LOG IN HERE</button>
            </p>
            <p className="policy-text">
              By creating an account, you agree to the{" "} // I believe it's possible to avoid it(as I understood you need to keep spaces), try to use css here: policy-text{white-space: wrap;// or smth like that} 
              <Link
                to="https://www.fandango.com/policies/privacy-policy"
                className="signup-footer-link small"
              >
                Privacy Policy
              </Link>{" "}
              and the{" "}
              <Link
                to="https://www.fandango.com/policies/terms-and-policies"
                className="signup-footer-link small"
              >
                Terms and Policies{" "}
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SignUpWindow;
