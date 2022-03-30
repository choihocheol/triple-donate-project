import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import DataList from "./DataList";
import Dataheader from "./Dataheader";
import Pagination from "react-js-pagination";

const List = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const pages = [];

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const renderData = (posts) => {
    console.log("posts", posts);
    return (
      <>
        {posts.map((it) => {
          return <DataList key={it.seq} {...it} />;
        })}
      </>
    );
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      await axios
        .get("http://localhost:4999/post")
        .then((res) => {
          console.log(res);
          setPosts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="board__container">
      <Dataheader />
      <div className="board__list--container">
        <div className="board__list">
          <div className="board__list--top">
            <div className="board__list--num"> 번호 </div>
            <div className="board__list--title">제목</div>
            <div className="board__list--writer">글쓴이 </div>
            <div className="board__list--date">작성일 </div>
            <div className="board__list--count">조회수 </div>
          </div>
        </div>
        <div className="board__list--line"></div>
        {renderData(currentPosts)}
        <div className="board__list--bottom"></div>
        <div>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={10}
            totalItemsCount={200}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </div>
        <div className="board__btn--container">
          <Link to="/write" className="board__btn--on">
            글쓰기
          </Link>
        </div>
      </div>
    </div>
  );
};

List.defaultProps = {
  list: [],
};

export default List;
