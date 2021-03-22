import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ListOfFilms from "./pages/ListOfFilms";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/list-of-film">
          <ListOfFilms />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
