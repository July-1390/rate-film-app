import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../apiServices";
import "./ModalStyles.scss";

const defaultFormErrors = {
  username: null,
  email: null,
  password: null,
};

const SignUpWindow = ({ setIsSignUpWindowVisible }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);

  const handleCloseSignUp = () => setIsSignUpWindowVisible(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(defaultFormErrors);

    createUser(values.username, values.email, values.password).then((res) => {
      if (res.statusCode === 200) {
        setIsSignUpWindowVisible(false);
      }

      if (res.statusCode >= 400 && res.statusCode < 500) {
        const newErrors = {
          ...defaultFormErrors,
        };

        for (const error of res.data.detail) {
          const field = error.loc.slice(-1)[0];
          newErrors[field] = error.msg;
        }

        setFormErrors(newErrors);
      }
      setSubmitted(true);
    });
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
                    className={`form-field ${
                      formErrors.username ? "form-field-error" : ""
                    }`}
                    type="text"
                    name="username"
                    placeholder="Jonny"
                    value={values.username}
                    onChange={(e) =>
                      setValues({ ...values, username: e.target.value })
                    }
                  />
                  <p className="msg-error">{formErrors.username}</p>
                </li>
                <li className="form-group">
                  <label className="form-label">Email address</label>
                  <input
                    className={`form-field ${
                      formErrors.email ? "form-field-error" : ""
                    }`}
                    type="email"
                    autoComplete="on"
                    name="email"
                    placeholder="jonny@gmail.com"
                    value={values.email}
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                  <p className="msg-error">{formErrors.email}</p>
                </li>

                <li className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    className={`form-field ${
                      formErrors.password ? "form-field-error" : ""
                    }`}
                    type="password"
                    autoComplete="on"
                    name="password"
                    value={values.password}
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                  />
                  <p className="msg-error">{formErrors.password}</p>
                </li>

                <li className="form-group">
                  <button
                    className={`login-submit-btn ${
                      !values.username || !values.email || !values.password
                        ? "btn-disabled"
                        : ""
                    }`}
                    type="submit"
                    onClick={handleSubmit}
                    disabled={
                      !values.username || !values.email || !values.password
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
