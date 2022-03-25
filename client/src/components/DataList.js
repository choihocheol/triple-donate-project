import React from "react";
import { Link, useHistory } from "react-router-dom";

const DataList = ({ seq, title, writer, createdAt }) => {
  const history = useHistory();

  const goView = () => {
    history.push(`/view/${seq}`);
  };

  return (
    <div className="board__list--container">
      <div className="board__list">
        <div className="board__list--cotents">
          <div className="board__list--num">{seq}</div>
          <div className="board__list--title" onClick={goView}>
            <Link to="/view/:seq">{title}</Link>
          </div>
          <div className="board__list--writer">{writer}</div>
          <div className="board__list--date">
            {new Date(createdAt).toLocaleDateString()}
          </div>
          <div className="board__list--date">33</div>
        </div>
      </div>
    </div>
  );
};

export default DataList;
