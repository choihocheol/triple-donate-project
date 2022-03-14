import React from "react";
import "./list.css";
import "./view.css";
import { Link } from "react-router-dom";

const post = () => {
  return (
    <div className="board__container">
      <div className="board__title">
        <strong>데이터 기부 게시판</strong>
        <p>소중한 정보를 제공해주셔서 감사합니다.</p>
      </div>
      <div className="board__view--container">
        <div className="board__view">
          <div className="board__view--title">글 제목이 들어갑니다.</div>
          <div className="board__view--info">
            <dl>
              <dt>번호</dt>
              <dd>1</dd>
            </dl>
            <dl>
              <dt>글쓴이</dt>
              <dd>김이름</dd>
            </dl>
            <dl>
              <dt>작성일</dt>
              <dd>2022.03.14</dd>
            </dl>
            <dl>
              <dt>조회</dt>
              <dd>33</dd>
            </dl>
          </div>
          <div className="board__view--cont">
            글 내용이 들어갑니다
            <br />
            글 내용이 들어갑니다
            <br />
            글 내용이 들어갑니다
            <br />
            글 내용이 들어갑니다
            <br />
            글 내용이 들어갑니다
            <br />
            글 내용이 들어갑니다
            <br />
            글 내용이 들어갑니다
            <br />글 내용이 들어갑니다
          </div>
        </div>
        <div className="board__btn--container">
          <button className="board__btn--on">목록</button>
          <button>수정</button>
        </div>
      </div>
    </div>
  );
};

export default post;
