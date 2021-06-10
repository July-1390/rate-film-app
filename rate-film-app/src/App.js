import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ListOfFilms from "./pages/ListOfFilms";
import FilmPage from "./pages/FilmPage";
import LogInWindow from "./components/LogIn";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Router>
      {isModalVisible && <LogInWindow setIsModalVisible={setIsModalVisible} />}

      <Header setIsModalVisible={setIsModalVisible} />
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
