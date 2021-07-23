import { useState } from "react";

import { loginUser } from "../apiServices";
import "./ModalStyles.scss";

const LogInWindow = ({ setIsModalVisible }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    loginUser(values.username, values.password).then((res) => {
      if (res.statusCode === 200) {
        setIsModalVisible(false);
      }

      if (res.statusCode >= 400 && res.statusCode < 500) {
        setFormError(res.data.detail);
      }
      setSubmitted(true);
    });
  };

  const handleClose = () => setIsModalVisible(false);
  return (
    <>
      <div className="modal-background" role="dialog" aria-modal="true">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">SIGN IN</h3>
            <button className="modal-close-btn" onClick={handleClose}></button>
          </div>
          <div className="form-body">
            <form>
              <ul>
                <li className="form-group">
                  <label className="form-label">Username</label>
                  <input
                    className={`form-field ${
                      formError ? "form-field-error" : ""
                    }`}
                    type="text"
                    autoComplete="on"
                    name="username"
                    placeholder="Jonny"
                    value={values.username}
                    onChange={(e) =>
                      setValues({ ...values, username: e.target.value })
                    }
                  />
                </li>
                <li className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    className={`form-field ${
                      formError ? "form-field-error" : ""
                    }`}
                    type="password"
                    autoComplete="on"
                    name="password"
                    value={values.password}
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                  />
                </li>
                <p>{formError}</p>
                <li className="form-group">
                  <button
                    className={`login-submit-btn ${
                      !values.username || !values.password ? "btn-disabled" : ""
                    }`}
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!values.username || !values.password}
                  >
                    LOG IN
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <footer className="modal-footer">
            <p className="modal-footer-paragraph">
              Don't have an account?
              <button className="login-footer-btn">SIGN UP HERE</button>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LogInWindow;
