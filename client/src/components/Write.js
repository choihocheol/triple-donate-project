import React, { useRef, useState, useContext } from "react";
import "../App.css";
import fileImg from "../assets/create-insert-file.jpg";
import { useHistory } from "react-router-dom";
import { CreateStateContext } from "../App";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Dataheader from "./Dataheader";
import axios from "axios";

const Write = () => {
  const titleInput = useRef();
  const contentInput = useRef();
  const nameInput = useRef();
  const descriptionInput = useRef();
  // const writerInput = useRef();
  // const passwordInput = useRef();
  const labelInput = useRef();
  const typeInput = useRef();
  const fileUploader = useRef();

  const history = useHistory();

  const { onCreate } = useContext(CreateStateContext);

  const [file, setFile] = useState();
  const [inputFields, setInputFields] = useState([{ label: "", type: "" }]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const [state, setState] = useState({
    title: "",
    content: "",
    name: "",
    description: "",
    // writer: "",
    // password: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (state.title.length < 1) {
      titleInput.current.focus();
      return;
    } else if (state.content.length < 1) {
      contentInput.current.focus();
      return;
    } else if (state.name.length < 1) {
      nameInput.current.focus();
      return;
    } else if (state.description.length < 1) {
      descriptionInput.current.focus();
      return;

      // } else if (state.writer.length < 1) {
      //   writerInput.current.focus();
      //   return;
      // } else if (state.password.length < 1) {
      //   passwordInput.current.focus();
      //   return;
    } else if (inputFields[0].label.length < 1) {
      labelInput.current.focus();
      return;
    } else if (inputFields[0].type.length < 1) {
      typeInput.current.focus();
      return;
    }

    onCreate(
      state.name,
      state.description,
      state.title,
      // state.writer,
      state.content,
      // inputFields
      inputFields[0].label,
      inputFields[0].type
      // inputFields[1].label,
      // inputFields[1].type
    );

    const { name, description, title, content } = state;
    const post = await axios.post("http://localhost:4999/post/save", {
      name,
      description,
      title,
      content,
    });

    setState({
      name: "",
      description: "",
      title: "",
      content: "",
    });
    console.log("post", post);

    history.push("/post");
    console.log(
      state.name,
      state.description,
      state.title,
      // state.writer,
      state.content,
      inputFields
      // inputFields[0].label,
      // inputFields[0].type
      // inputFields[1].label,
      // inputFields[1].type
    );
    alert("작성 성공하셨습니다.");
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { label: "", type: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleChange = (e) => {
    const maxSize = 100 * 1024 * 1024;

    if (e.target.files[0].size > maxSize) {
      alert("첨부파일 사이즈는 100MB 이내로 등록 가능합니다.");
    } else {
      setFile(e.target.files[0]);
    }
  };

  const handleClick = (e) => {
    fileUploader.current.click();
  };

  return (
    <div className="board__container">
      <Dataheader />
      <div className="board__create--content">
        <h2 className="board__create--title">3Donate Certificate</h2>
        <div>
          Image, Audio
          <sup className="board__create--sup-red">*</sup>
        </div>
        <div className="board__create--item-data-form">
          File types supported: JPG, PNG, GIF, SVG, MP3, MP4. Max size: 100 MB
        </div>
        <div className="board__NFT--container">
          <div className="board__create--input-box">
            <div
              className="board__create--input-box-file"
              onClick={handleClick}
            >
              <img
                src={file ? URL.createObjectURL(file) : fileImg}
                alt="no img"
                className={
                  file
                    ? "board__create--input-box-file-img-change"
                    : "board__create--input-box-file-img"
                }
              />
              <input
                type="file"
                ref={fileUploader}
                onChange={handleChange}
                accept="image/*, audio/*, video/*"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <dl className="board__write--NFTname">
            <dt>NFT Name</dt>
            <dd>
              <input
                className="board__NFT--name"
                ref={nameInput}
                name="name"
                value={state.name}
                type="text"
                placeholder="이름 입력"
                onChange={handleChangeState}
              ></input>
            </dd>
            <dt>NFT Description</dt>
            <dd>
              <textarea
                className="board__NFT--description"
                ref={descriptionInput}
                name="description"
                value={state.description}
                placeholder="NFT 설명"
                onChange={handleChangeState}
              ></textarea>
            </dd>
          </dl>
        </div>
      </div>
      <div className="board__write--container">
        <div className="board__write">
          <div className="board__write--title">
            <dl>
              <dt>제목</dt>
              <dd>
                <input
                  ref={titleInput}
                  name="title"
                  value={state.title}
                  type="text"
                  placeholder="제목 입력"
                  onChange={handleChangeState}
                ></input>
              </dd>
            </dl>
          </div>
          <div className="board__write--info">
            {/* <dl>
              <dt>글쓴이</dt>
              <dd>
                <input
                  ref={writerInput}
                  type="text"
                  name="writer"
                  vlaue={state.writer}
                  placeholder="글쓴이 입력"
                  onChange={handleChangeState}
                ></input>
              </dd>
            </dl> */}
            {/* <dl>
              <dt>비밀번호</dt>
              <dd>
                <input
                  ref={passwordInput}
                  type="password"
                  name="password"
                  value={state.password}
                  placeholder="비밀번호 입력"
                  onChange={handleChangeState}
                ></input>
              </dd>
            </dl> */}
            <div className="board__write--img">
              {inputFields.map((inputField, index) => (
                <div key={index}>
                  <dl>
                    <dt>라벨</dt>
                    <dd>
                      <input
                        ref={labelInput}
                        type="text"
                        placeholder="라벨 입력"
                        name="label"
                        value={inputField.label}
                        onChange={(event) => handleChangeInput(index, event)}
                      ></input>
                    </dd>
                  </dl>
                  <dl>
                    <dt>파일 종류</dt>
                    <dd>
                      <select
                        ref={typeInput}
                        className="board__file"
                        value={inputField.type}
                        name="type"
                        onChange={(event) => handleChangeInput(index, event)}
                      >
                        <option value="">-- 파일 선택 --</option>
                        <option value="Image">이미지</option>
                        <option value="Audio">오디오</option>
                      </select>
                    </dd>
                    <div className="board__icon">
                      <IconButton onClick={() => handleAddFields()}>
                        <AddIcon />
                      </IconButton>
                      <IconButton onClick={() => handleRemoveFields(index)}>
                        <RemoveIcon />
                      </IconButton>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
          <div className="board__write--cont">
            <textarea
              ref={contentInput}
              name="content"
              placeholder="내용 입력"
              value={state.content}
              onChange={handleChangeState}
            ></textarea>
          </div>
        </div>
        <div className="board__btn--container">
          <button
            type="submit"
            onClick={handleSubmit}
            className="board__btn--on"
          >
            등록
          </button>
          <button
            className="board__btn--off"
            onClick={() => history.push("/post")}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
