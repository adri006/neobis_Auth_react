import React, { useState } from "react";
import LoginCss from "./Login.css";
import LorbyBlock from "../LorbyBlock/LorbyBlock";
import show_icon from "../../media/show-password.svg";
import unshow_icon from "../../media/unshow-password.svg";
import { Link } from 'react-router-dom';
import SignUp from "../SignUp/SignUp";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="d-f-ai-c login-page">
      {/* <div className="error d-f">
        <p className="error__text f-w-500">Неверный логин или пароль</p>
      </div> */}
      <LorbyBlock />
      <div className="login-block">
        <form>
          <h3 className="f-w-500 input-title">Вэлком бэк!</h3>
          <div className="input-block">
            <input type="login" className="input-field f-w-500" placeholder="Введи туда-сюда логин" />
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                className="input-field f-w-500"
                placeholder="Пароль (тоже введи)"
              />
              <img
                src={passwordVisible ? unshow_icon : show_icon}
                alt="#"
                className="show-password"
                onClick={togglePasswordVisibility}
              />
            </div>
            <button className="f-w-500 button-field">Войти</button>
          </div>
        </form>
        <Link className="create-acc " to={{ pathname: "/signup" }}>
          <p className="f-w-500">У меня еще нет аккаунта</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;