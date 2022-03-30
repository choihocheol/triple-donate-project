import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { PostStateContext } from "../App";
import "../App.css";
import certificate from "../assets/Certificate.jpg";
import Grid from "@mui/material/Grid";
import { FaList } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import Dataheader from "./Dataheader";

const View = () => {
  const history = useHistory();
  const [data, setData] = useState();

  const { seq } = useParams();
  console.log(seq);
  const dataList = useContext(PostStateContext);

  useEffect(() => {
    if (dataList.length >= 1) {
      const targetData = dataList.find((it) => parseInt(it.seq) === parseInt(seq));
      if (targetData) {
        setData(targetData);
      } else {
        // alert("없는 게시글입니다.");
        history.goBack();
      }
    }
  }, [seq, dataList]);

  if (!data) {
    return <div>로딩중입니다...</div>;
  } else {
    return (
      <div className="board__container">
        <Dataheader />
        <div className="board__view--container">
          <div className="board__view">
            <Grid container>
              <Grid item>
                <img className="board__view--img" src={certificate} alt="" width="280px" height="340px" />
                <div className="board__description--container">
                  <div className="board__description">
                    <span className="board__description--title">
                      <FaList className="board__description--icon" />
                      Description
                    </span>
                  </div>
                  <p className="board__description">
                    <div className="board__description--content">NFT Name : {data.name}</div>
                    <br />
                    <span className="board__description--content">{data.description}</span>
                  </p>
                  <div className="board__description">
                    <span className="board__description--title">
                      <FaRegListAlt className="board__description--icon" />
                      Details
                    </span>
                  </div>
                  <div className="board__desc">
                    <div className="board__details">
                      <span className="board__details--left">Contract Address</span>
                      <span className="board__details--right">0x495f...7b5e</span>
                    </div>
                  </div>
                  <div className="board__desc">
                    <div className="board__details">
                      <span className="board__details--left">Token ID</span>
                      <span className="board__details--right">1</span>
                    </div>
                  </div>
                  <div className="board__desc">
                    <div className="board__details">
                      <span className="board__details--left">Token Standard</span>
                      <span className="board__details--right">KIP-37</span>
                    </div>
                  </div>
                  <div className="board__description">
                    <div className="board__details">
                      <span className="board__details--left">Blockchain</span>
                      <span className="board__details--right">Klaytn</span>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className="board__view--wrap">
                  <span className="board__view--title">{data.title}</span>
                  <div className="board__view--writer">Owned by {data.writer}</div>
                  <div className="board__view--info">
                    <dl>
                      <dt>작성일</dt>
                      <dd>{new Date(data.createdAt).toLocaleDateString()}</dd>
                    </dl>
                    <dl>
                      <dt>조회</dt>
                      <dd>33</dd>
                    </dl>
                    <div className="board__view--flex">
                      <dl>
                        <dt>라벨</dt>
                        <dd>{data.label}</dd>
                      </dl>
                      <dl>
                        <dt>파일 종류</dt>
                        <dd>{data.type}</dd>
                      </dl>
                      <dl>
                        <span>첨부파일</span>
                        <dd>
                          <input type="file" />
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="board__view--cont">{data.content}</div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="board__btn--container">
            <Link to="/post" className="board__btn--on">
              목록
            </Link>
            <Link to="/write" className="board__btn--off">
              수정
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default View;
