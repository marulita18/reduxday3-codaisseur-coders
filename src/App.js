import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/post/:id" component={PostPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
