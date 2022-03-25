import React, { useRef, useReducer } from "react";
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
import Nft from "./components/Nft";

// const dummyData = [
//   {
//     seq: 9,
//     title: "제목9",
//     writer: "김이름",
//     content: "내용",
//     createdAt: 1647969241915,
//     label: "남자",
//     type: "Image",
//   },
//   {
//     seq: 8,
//     title: "제목8",
//     writer: "김이름",
//     content: "내용",
//     createdAt: 1647969241915,
//     label: "여자",
//     type: "Audio",
//   },
//   {
//     seq: 7,
//     title: "제목7",
//     writer: "김이름",
//     content: "내용",
//     createdAt: 1647969241915,
//     label: "남자",
//     type: "Image",
//   },
//   {
//     seq: 6,
//     title: "제목6",
//     writer: "김이름",
//     content: "내용",
//     createdAt: 1647969241915,
//     label: "남자",
//     type: "Image",
//   },

//   {
//     seq: 5,
//     title: "제목5",
//     writer: "김이름",
//     content: "내용",
//     createdAt: 1647969241915,
//     label: "남자",
//     type: "Image",
//   },
//   {
//     seq: 4,
//     title: "제목4",
//     writer: "김이름",
//     content: "내용",
//     createdAt: 1647969241915,
//     label: "남자",
//     type: "Image",
//   },
//   {
//     seq: 3,
//     title: "제목3",
//     writer: "김이름",
//     content: "내용",
//     createdAt: 1647969241915,
//     label: "남자",
//     type: "Image",
//   },
//   {
//     seq: 2,
//     title: "제목2",
//     writer: "김이름",
//     content: "내용",
//     createdAt: 1647969241915,
//     label: "여자",
//     type: "Audio",
//   },
//   {
//     seq: 1,
//     title: "제목1",
//     writer: "김이름",
//     content: "내용",
//     createdAt: 1647969241915,
//     label: "남자",
//     type: "Image",
//   },
// ];

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const PostStateContext = React.createContext();
export const CreateStateContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(1);

  const onCreate = (title, content, label, type) => {
    dispatch({
      type: "CREATE",
      data: {
        seq: dataId.current,
        title,
        // writer,
        content,
        createdAt: new Date().getTime(),
        label,
        type,
      },
    });
    dataId.current += 1;
  };

  return (
    <PostStateContext.Provider value={data}>
      <CreateStateContext.Provider value={{ onCreate }}>
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
            <Route path="/nft">
              <Nft />
            </Route>
            <Route path="/mypage">
              <Mypage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </CreateStateContext.Provider>
    </PostStateContext.Provider>
  );
}

export default App;
