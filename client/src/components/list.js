import React from "react";
import "./list.css";
import { Link } from "react-router-dom";

const post = () => {
  return (
    <div className="board__container">
      <div className="board__title">
        <strong>데이터 기부 게시판</strong>
        <p>소중한 정보를 제공해주셔서 감사합니다.</p>
      </div>
      <div className="board__list--container">
        <div className="board__list">
          <div className="bd__top">
            <div className="bd__num">번호</div>
            <div className="bd__title">제목</div>
            <div className="bd__writer">글쓴이</div>
            <div className="bd__date">작성일</div>
            <div className="bd__count">조회</div>
          </div>
          <div>
            <div className="bd__num">5</div>
            <div className="bd__title">
              <Link to="/view">글 제목이 들어갑니다.</Link>
            </div>
            <div className="bd__writer">김이름</div>
            <div className="bd__date">2022.3.14</div>
            <div className="bd__count">33</div>
          </div>
          <div>
            <div className="bd__num">4</div>
            <div className="bd__title">
              <Link to="/view">글 제목이 들어갑니다.</Link>
            </div>
            <div className="bd__writer">김이름</div>
            <div className="bd__date">2022.3.14</div>
            <div className="bd__count">33</div>
          </div>
          <div>
            <div className="bd__num">3</div>
            <div className="bd__title">
              <Link to="/view">글 제목이 들어갑니다.</Link>
            </div>
            <div className="bd__writer">김이름</div>
            <div className="bd__date">2022.3.14</div>
            <div className="bd__count">33</div>
          </div>
          <div>
            <div className="bd__num">2</div>
            <div className="bd__title">
              <Link to="/view">글 제목이 들어갑니다.</Link>
            </div>
            <div className="bd__writer">김이름</div>
            <div className="bd__date">2022.3.14</div>
            <div className="bd__count">33</div>
          </div>
          <div>
            <div className="bd__num">1</div>
            <div className="bd__title">
              <Link to="/view">글 제목이 들어갑니다.</Link>
            </div>
            <div className="bd__writer">김이름</div>
            <div className="bd__date">2022.3.14</div>
            <div className="bd__count">33</div>
          </div>
        </div>
        <div className="board__page">
          <Link to="/" class="bt first">
            «
          </Link>
          <Link to="/" class="bt prev">
            ‹
          </Link>
          <Link to="/" class="num on">
            1
          </Link>
          <Link to="/" class="num">
            2
          </Link>
          <Link to="/" class="num">
            3
          </Link>
          <Link to="/" class="num">
            4
          </Link>
          <Link to="/" class="num">
            5
          </Link>
          <Link to="/" class="bt next">
            ›
          </Link>
          <Link to="/" class="bt last">
            »
          </Link>
        </div>
        <div className="board__btn--container">
          <button className="board__btn--on">등록</button>
          {/* <button>수정</button> */}
        </div>
      </div>
    </div>
  );
};

export default post;
