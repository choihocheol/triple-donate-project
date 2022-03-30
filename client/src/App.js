import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./views/Login";
import View from "./components/View";
import Write from "./components/Write";
import Home from "./pages/Home";
import Post from "./views/Post";
import Mypage from "./views/Mypage";
import Signup from "./views/Signup";
import Swap from "./views/Swap";
import About from "./views/About";

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
        <Route path="/view/:seq">
          <View />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/profile">Profile</Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/swap">
          <Swap />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
