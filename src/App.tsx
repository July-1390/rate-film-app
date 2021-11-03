import { useState, createContext, useEffect } from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import ListOfFilms from "./pages/ListOfFilms";
import FilmPage from "./pages/FilmPage";
import UserProfile from "./pages/UserProfilePage";
import LogInWindow from "./auth/LogIn";
import SignUpWindow from "./auth/SignUp";
import { getUserToken } from "./localStorageUserServices";

export const AuthTokenContext = createContext({
  authToken: "",
  setAuthToken: (value: string) => {}
});

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSignUpWindowVisible, setIsSignUpWindowVisible] = useState(false);

  const [authToken, setAuthToken] = useState("")

  useEffect(() => {
    const token = getUserToken();
    if (token) {
      setAuthToken(token.access_token)

    }
  }, [])

  return (
    <Router>
      <AuthTokenContext.Provider value={{authToken, setAuthToken}}>
        <div>
          {isModalVisible && (
            <LogInWindow setIsModalVisible={setIsModalVisible} />
          )}
          {isSignUpWindowVisible && (
            <SignUpWindow setIsSignUpWindowVisible={setIsSignUpWindowVisible} />
          )}
        </div>

        <Header
          setIsModalVisible={setIsModalVisible}
          setIsSignUpWindowVisible={setIsSignUpWindowVisible}
        />
        <div className="main-container">
          <Switch>
            <Route path="/films/:id">
              <FilmPage />
            </Route>

            <Route path="/profile">
              <UserProfile />
            </Route>

            <Route path="/">
              <ListOfFilms />
            </Route>
          </Switch>
        </div>
      </AuthTokenContext.Provider>
    </Router>
  );
}

export default App;
