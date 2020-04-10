import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
export const Detail = () => {
  const history = useHistory();
  return (
    <div className="detail">
      <p>我是详情页</p>
      <button onClick={history.goBack}>返回</button>
    </div>
  );
};
