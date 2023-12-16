import React from "react";
import { useNavigate } from "react-router-dom";
import "./Back.css";
import back__img from "../../media/back-button.svg";

function Back() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <button className="back__button d-f" onClick={goBack}>
        <img src={back__img} alt="#" />
        <p className="back__text">Назад</p>
      </button>
    </div>
  );
}

export default Back;
