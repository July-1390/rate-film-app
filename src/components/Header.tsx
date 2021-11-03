import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GiFilmSpool } from "react-icons/gi";
import { getUser } from "../apiServices/user";
import SignUpButton from "../components/buttons/SignUpButton";
import LogInButton from "../components/buttons/LogInButton";
import ThumbMenuProfile from "./profile/ThumbMenuProfile";
import { User } from "../interfaces/user";
import Button from "./buttons/Button";
import "./Header.scss";
import { AuthTokenContext } from "../App";

const Header = ({
  setIsModalVisible,
  setIsSignUpWindowVisible,
}: {
  setIsModalVisible: (val: boolean) => void;
  setIsSignUpWindowVisible: (val: boolean) => void;
}) => {
  const { authToken } = useContext(AuthTokenContext); 
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if (!authToken) {
      setUser(null);
      return;
    }

    setIsLoading(true);

    getUser(authToken).then((user) => {
      setUser(user.data);

      setIsLoading(false);
    });
  }, [authToken]);

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
