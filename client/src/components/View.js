import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import Grid from "@mui/material/Grid";
import { FaList } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import Dataheader from "./Dataheader";
import axios from "axios";

const View = () => {
  const [data, setData] = useState();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  const { seq } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      await axios
        .get(`http://localhost:4999/post/fetch/${seq}`)
        .then((res) => {
          console.log(res);
          setData(res.data.data);
          console.log("res.data.data", res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    setFile({
      label: e.target.attributes.label.value,
      data: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("seq", data.seq);
    formData.append("nftId", data.nftId);
    formData.append("label", file.label);
    formData.append("donationData", file.data);

    const upload = await axios.post(
      "http://localhost:4999/post/upload",
      formData
    );
    console.log("uploadData", upload);
    alert("데이터가 기부되었습니다!");
  };

  if (!data) {
    return <div>로딩중입니다...</div>;
  } else {
    console.log("img", data.nftImageIpfsAddr);
    return (
      <div className="board__container">
        <Dataheader />
        <div className="board__view--container">
          <div className="board__view">
            <Grid container>
              <Grid item>
                <img
                  className="board__view--img"
                  src={data.nftImageIpfsAddr}
                  alt=""
                  width="280px"
                  height="340px"
                />
                <div className="board__description--container">
                  <div className="board__description">
                    <span className="board__description--title">
                      <FaList className="board__description--icon" />
                      Description
                    </span>
                  </div>
                  <p className="board__description">
                    <div className="board__description--content">
                      NFT Name : {data.nftName}
                    </div>
                    <br />
                    <span className="board__description--content">
                      {data.nftDescription}
                    </span>
                  </p>
                  <div className="board__description">
                    <span className="board__description--title">
                      <FaRegListAlt className="board__description--icon" />
                      Details
                    </span>
                  </div>
                  <div className="board__desc">
                    <div className="board__details">
                      <span className="board__details--left">
                        Contract Address
                      </span>
                      <Link
                        style={{ color: "#2081E2" }}
                        className="board__details--right"
                        onClick={() =>
                          window.open(
                            "https://baobab.scope.klaytn.com/account/0x584f441d7145CceE73cD6c27C6AF771594792E11?tabId=txList"
                          )
                        }
                      >
                        0x584f...2E11
                      </Link>
                    </div>
                  </div>
                  <div className="board__desc">
                    <div className="board__details">
                      <span className="board__details--left">Token ID</span>
                      <span className="board__details--right">
                        {data.nftId}
                      </span>
                    </div>
                  </div>
                  <div className="board__desc">
                    <div className="board__details">
                      <span className="board__details--left">
                        Token Standard
                      </span>
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
                  <div className="board__view--writer">
                    Writer by <span>{data.writer}</span>
                  </div>
                  <div className="board__view--info">
                    <div className="board__view--info-cont">
                      <dl>
                        <dt>작성일</dt>
                        <dd>{new Date(data.createdAt).toLocaleDateString()}</dd>
                      </dl>
                      <dl>
                        <dt>조회</dt>
                        <dd>{data.views}</dd>
                      </dl>
                      <dl>
                        <p className="board__view--info-comment">
                          3Donate는 데이터 기부에 대한 감사의 의미로 해당 NFT를
                          기여해줍니다. <br />
                          여러분이 데이터의 주체가 되길 바라며, 많은 성원
                          부탁드립니다.
                        </p>
                      </dl>
                    </div>
                  </div>
                  <div className="board__view--cont">{data.contents}</div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="board__donate--info">
            <h3 className="board__donate--title">Donate your data here!!</h3>
            <h6 style={{ color: "#f7786b", marginBottom: "20px" }}>
              * 타입에 맞는 파일을 선택 해주세요! *
            </h6>
            {JSON.parse(data.data[0]).map((e, idx) => {
              return (
                <div className="board__view--flex" key={idx}>
                  <dl>
                    <dt>라벨</dt>
                    <dd>{e.label}</dd>
                  </dl>
                  <dl>
                    <dt>파일 종류</dt>
                    <dd>{e.type}</dd>
                  </dl>
                  <dl>
                    <span>첨부파일</span>
                    <dd>
                      <input
                        type="file"
                        name="file"
                        vlaue={file}
                        label={e.label}
                        onChange={handleChange}
                      />
                    </dd>
                  </dl>
                </div>
              );
            })}
          </div>
          <div>
            <div className="board__donate--comments-info">
              <h6 style={{ marginLeft: "5px", fontWeight: 600 }}>댓글 쓰기</h6>
              <textarea
                className="board__donate--comments"
                placeholder="댓글 입력 (댓글 기능은 준비 중입니다.)"
              ></textarea>
              <button className="board__btn--donate" onClick={handleSubmit}>
                데이터 기부하기
              </button>
            </div>
          </div>
          <div className="board__btn--container">
            <Link to="/post" className="board__btn--on">
              목록
            </Link>
            <Link
              className="board__btn--off"
              onClick={() => {
                alert("준비중입니다!");
              }}
            >
              수정
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default View;
