import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../apiServices";
import "./ModalStyles.scss";

const SignUpWindow = ({ setIsSignUpWindowVisible }) => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleCloseSignUp = () => setIsSignUpWindowVisible(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    createUser(values.userName, values.email, values.password).then((res) => {
      if (res.statusCode !== 200) {
        switch (res.data.detail?.error_code) {
          case 100:
            setFormError("Username already taken.");
            break;
          case 101:
            setFormError("Email already taken.");
            break;
          default:
            break;
        }
      } else {
        console.log(res.data);
        setIsSignUpWindowVisible(false);
      }
    });
    setSubmitted(true);
  };

  return (
    <>
      <div className="modal-background" role="dialog" aria-modal="true">
        <div className="modal-content height">
          <div className="modal-header">
            <h3 className="modal-title">SIGN UP FOR RATE FILM</h3>
            <button
              className="modal-close-btn"
              onClick={handleCloseSignUp}
            ></button>
          </div>
          <div className="form-body">
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
                    onChange={(e) =>
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

                {submitted && formError ? <span>{formError}</span> : null}

                <li className="form-group">
                  <button
                    className="login-submit-btn"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={
                      !values.userName || !values.email || !values.password
                    }
                  >
                    CREATE YOUR ACCOUNT
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <footer className="modal-footer">
            <p className="modal-footer-paragraph">
              Already have an account?
              <button className="signup-footer-link">LOG IN HERE</button>
            </p>
            <p className="policy-text">
              By creating an account, you agree to the{" "}
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
