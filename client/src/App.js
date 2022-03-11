import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/home" exact>
          Home
        </Route>
        <Route path="/post">Post</Route>
        <Route path="/profile">Profile</Route>
        <Route path="/create">Create</Route>
        <Route path="/signin">Sign In</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
