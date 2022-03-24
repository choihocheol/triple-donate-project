import React, { useEffect } from "react";
import IndexFirst from "../components/IndexFirst";
import IndexSecond from "../components/IndexSecond";
import IndexThird from "../components/IndexThird";
import IndexFourth from "../components/IndexFourth";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:4999/user/mylist")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
