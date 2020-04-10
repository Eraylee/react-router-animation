import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Home = () => {
  return (
    <div className="home">
      <p>我是首页</p>
      <Link to="/detail">点击跳转</Link>
    </div>
  );
};
