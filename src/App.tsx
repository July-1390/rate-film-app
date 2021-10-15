import React, { useState } from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import ListOfFilms from "./pages/ListOfFilms";
import FilmPage from "./pages/FilmPage";
import UserProfile from "./pages/UserProfilePage";
import LogInWindow from "./components/LogIn";
import SignUpWindow from "./components/SignUp";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSignUpWindowVisible, setIsSignUpWindowVisible] = useState(false);

  return (
    <Router>
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
    </Router>
  );
}

export default App;
