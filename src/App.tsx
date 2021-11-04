import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ListOfFilms from "./pages/ListOfFilms";
import FilmPage from "./pages/FilmPage";
import UserProfile from "./pages/UserProfilePage";
import LogInWindow from "./auth/LogIn";
import SignUpWindow from "./auth/SignUp";
import { getUserToken } from "./localStorageUserServices";
import { getUser } from "./apiServices/user";
import { User } from "./interfaces/user";
import "./styles/App.scss";

export const AuthTokenContext = createContext<{ authToken: string, setAuthToken: Function }>({
  authToken: "",
  setAuthToken: (value: string) => { }
});

export const UserContext = createContext<{ user: User | null, setUser: Function }>({
  user: null,
  setUser: (value: User | null) => { }
})

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSignUpWindowVisible, setIsSignUpWindowVisible] = useState(false);

  const [authToken, setAuthToken] = useState<string>("")
  const [user, setUser] = useState<User | null>(null)


  useEffect(() => {
    const token = getUserToken();
    if (token) {
      setAuthToken(token.access_token)
    }
  }, [])

  useEffect(() => {
    if (!authToken) {
      setUser(null)
      return
    }

    getUser(authToken).then((user) => {
      setUser(user.data);
    });


  }, [authToken])

  return (
    <Router>
      <AuthTokenContext.Provider value={{ authToken, setAuthToken }}>
        <UserContext.Provider value={{ user, setUser }}>
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
        </UserContext.Provider>
      </AuthTokenContext.Provider>
    </Router>
  );
}

export default App;
