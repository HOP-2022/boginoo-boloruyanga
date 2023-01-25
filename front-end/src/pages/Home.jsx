import React from "react";
import pic from "../assets/logo.png";
import "../App.css";
const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="title">хэрхэн ажилладаг вэ?</div>
        <div className="btn">нэвтрэх</div>
      </div>
      <div className="main">
        <div className="logo">
          <img className="logoLink" src={pic} alt="" />
          <div className="logoTitle">Boginoo</div>
        </div>

        <div className="row">
          <input
            className="input"
            placeholder="https://www.web-huudas.mn/"
            type="link"
          />
          <button className="btn" type="submit">
            богиносгох
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
