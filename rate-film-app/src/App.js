import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ListOfFilms from "./pages/ListOfFilms";
import FilmPage from "./pages/FilmPage";

function App() {
  return (
    <Router>
      <Header />
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
