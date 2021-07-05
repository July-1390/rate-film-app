import "./LogIn.scss";

const LogInWindow = ({ setIsModalVisible }) => {
  const handleClose = () => setIsModalVisible(false);
  return (
    <>
      <div className="modal-background" role="dialog" aria-modal="true">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">SIGN IN</h3>
            <button className="modal-close-btn" onClick={handleClose}></button>
          </div>
          <div className="login-form-body">
            <form>
              <ul>
                <li className="form-group">
                  <label className="form-label">Email address</label>
                  <input
                    className="form-field"
                    type="email"
                    autoComplete="on"
                    name="email"
                  />
                </li>
                <li className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    className="form-field"
                    type="password"
                    autoComplete="on"
                    name="password"
                  />
                </li>
                <li className="form-group">
                  <button className="login-submit-btn" type="submit">
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
