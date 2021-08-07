import "./App.css";
import Header from "./components/Header/Header";
import React from "react";
import SimpleBottomNavigation from "./components/BottomNav/BottomNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Movies from "./pages/Movies/Movies";
import Favorites from "./pages/Favorites/Favorites";
import LogIn from "./pages/Login/Login";
import Search from "./pages/Search/Search";
function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/login" component={LogIn} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
