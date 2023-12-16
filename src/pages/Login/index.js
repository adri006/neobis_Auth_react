import React, { useRef, useState ,useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { login } from "../../api";
import LoginCss from "./Login.css";
import LorbyBlock from "../../components/LorbyBlock";
import show_icon from "../../media/show-password.svg";
import unshow_icon from "../../media/unshow-password.svg";
import SignUp from "../SignUp";


function Login() {
  const userRef = useRef();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError(false);
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userInfoForLogin = { 'username': user, 'password': password };
      const response = await login(userInfoForLogin);
      const accessToken = response.token;
      setUser('');
      setPassword('');
      navigate('/enter');
    } catch (err) {
      setError(true);
      if (err.response) {
        toast.error(err.response?.data.message);
      }

      userRef.current.focus();
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="d-f-ai-c login-page">
      {error && (
        <div className="error d-f">
          <p className="error__text f-w-500">Неверный логин или пароль</p>
        </div>
      )}
      <LorbyBlock />
      <div className="login-block">
        <form onSubmit={handleSubmit}>
          <h3 className="f-w-500 input-title">Вэлком бэк!</h3>
          <div className="input-block">
            <input
              type="login"
              className="input-field f-w-500"
              id='username'
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              value={user}
              placeholder="Введи туда-сюда логин"
              ref={userRef}
              required
            />
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="password-input input-field f-w-500"
                placeholder="Пароль (тоже введи)"
                required
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