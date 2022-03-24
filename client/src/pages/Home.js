import React, { useEffect } from "react";
import IndexFirst from "../components/IndexFirst";
import IndexSecond from "../components/IndexSecond";
import IndexThird from "../components/IndexThird";
import IndexFourth from "../components/IndexFourth";
import axios from "axios";
import store, { setUser } from "../store";

export default function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:4999/user/mylist")
      .then((res) => {
        console.log(res);
        store.dispatch(setUser(res.data.userData));
      })

      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const data = store.getState();
    console.log("store1133", data);
  }, []);
  return (
    <>
      <IndexFirst />
      <IndexSecond />
      <IndexThird />
      <IndexFourth />
    </>
  );
}
