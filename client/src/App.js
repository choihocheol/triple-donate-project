import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Post from "./views/Post";
import Login from "./views/Login";
import View from "./components/View";
import Home from "./pages/Home";
import Signup from "./views/Signup";
import Nft from "./components/Nft";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/view">
          <View />
        </Route>
        <Route path="/profile">Profile</Route>
        <Route path="/create">Create</Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/nft">
          <Nft />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
