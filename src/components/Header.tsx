import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GiFilmSpool } from "react-icons/gi";
import SignUpButton from "../components/buttons/SignUpButton";
import LogInButton from "../components/buttons/LogInButton";
import ThumbMenuProfile from "./profile/ThumbMenuProfile";
import Button from "./buttons/Button";
import { UserContext } from "../App";
import "./Header.scss";

const Header = ({
  setIsModalVisible,
  setIsSignUpWindowVisible,
}: {
  setIsModalVisible: (val: boolean) => void;
  setIsSignUpWindowVisible: (val: boolean) => void;
}) => {
  const { user } = useContext(UserContext)

  const [isLoading] = useState(false);


  if (isLoading) {
    <></>;
  }
  return (
    <>
      <div className="header-background-line">
        <div className="main-container">
          <header className="header-container">
            <div className="header-logo">
              <Link to="/" className="navbar-logo">
                <GiFilmSpool className="navbar-icon" />
                <h4 className="navbar-title">
                  Rate<span className="highlight">Film</span>
                </h4>
              </Link>
            </div>

            <nav className="main-nav">
              {!user ? (
                <ul className="nav-list">
                  <li className="nav-list-item">
                    <Link to="/" className="btn-link">
                      <Button className="btn-primary">List Of Films</Button>
                    </Link>
                  </li>
                  <li className="nav-list-item">
                    <SignUpButton
                      setIsSignUpWindowVisible={setIsSignUpWindowVisible}
                    />
                  </li>
                  <li className="nav-list-item">
                    <LogInButton setIsModalVisible={setIsModalVisible} />
                  </li>
                </ul>
              ) : (
                <ul className="nav-list">
                  <li className="nav-list-item">
                    <Link to="/" className="btn-link">
                      <Button className="btn-primary">List Of Films</Button>
                    </Link>
                  </li>
                  <li className="nav-list-item">
                    <ThumbMenuProfile user={user} />
                  </li>
                </ul>
              )}
            </nav>
          </header>
        </div>
      </div>
    </>
  );
};
export default Header;
