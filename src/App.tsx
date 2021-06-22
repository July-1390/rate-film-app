import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import ListOfFilms from "./pages/ListOfFilms";
import FilmPage from "./pages/FilmPage";
import LogInWindow from "./components/LogIn";
import SignUpWindow from "./components/SignUp";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSignUpWindowVisible, setIsSignUpWindowVisible] = useState(false);

  return (
    <Router> // nothing, just not sure if <Router> is needed here -> probably you can use inside container(line#26) 
      {isModalVisible && <LogInWindow setIsModalVisible={setIsModalVisible} />}
      {isSignUpWindowVisible && (
        <SignUpWindow setIsSignUpWindowVisible={setIsSignUpWindowVisible} />
      )}

      <Header
        setIsModalVisible={setIsModalVisible}
        setIsSignUpWindowVisible={setIsSignUpWindowVisible}
      />
      <div className="container">
        <Switch>
          <Route path="/films/:id">
            <FilmPage />
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
