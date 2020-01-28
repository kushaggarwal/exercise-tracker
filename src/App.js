import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.components";
import CreateUser from "./components/create-user.components";
import CreateExcercise from "./components/create-exercise.components";
import ExcerciseList from "./components/excercises-list.components";
import EditExcercise from "./components/edit-exercise.components";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ExcerciseList}></Route>
      <Route path="/edit/:id" component={EditExcercise}></Route>
      <Route path="/create" component={CreateExcercise}></Route>
      <Route path="/user" component={CreateUser}></Route>
    </Router>
  );
}

export default App;
