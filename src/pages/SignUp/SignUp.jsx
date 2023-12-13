import React, {useEffect, useRef, useState } from "react";
import LorbyBlock from "../../components/LorbyBlock/LorbyBlock";
import Back from "../../components/Back/Back";
import SignUpStyle from "./SignUp.css";
import show_icon from "../../media/show-password.svg";
import unshow_icon from "../../media/unshow-password.svg";


const initialValues = {
    email:"",
    password:"",
    secondPassword:"",
    username:"",
  }


const SignUp = () => {

    const emailRef = useRef();
    const [passwordVisible1, setPasswordVisible1] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [isMaxMinLength, setIsMaxMinLength] = useState('');
    const [isLetter, setIsLetter] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [isSpecialSymbol, setIsSpecialSymbol] = useState();
    const [requestError, setRequestError] = useState(false);
    // let navigate = useNavigate();



    useEffect(()=>{
        setIsMaxMinLength(values.password.length >= 8 && values.password.length <= 15)
        setIsLetter(values.password.match(/[A-Z]/) && values.password.match(/[a-z]/))
        setIsNumber(values.password.match(/[0-9]/));
        setIsSpecialSymbol(values.password.match(/[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/))
    }, [values.password])


    // const [isMaxMinLength, setIsMaxMinLength] = useState('');
    // const emailRef = useRef();
    // const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="signup-page d-f">
      <LorbyBlock />
      <Back />
      <div className="signup-block">
        <form>
          <h3 className="f-w-500 signup-title">Создать аккаунт Lorby</h3>
          <div className="input-block">
            <input type="text" className="input-field f-w-500" placeholder="Введи адрес почты" />
            <input type="text" className="input-field f-w-500" placeholder="Придумай логин" />
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                className="password-input input-field f-w-500"
                placeholder="Создай пароль"
              />
              <img
                src={passwordVisible ? unshow_icon : show_icon}
                alt="#"
                className="show-password"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className='input-wrapper'>
                <input 
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                type={passwordVisible1 ? 'text' : 'password'} 
                className='passwordInput' 
                placeholder='Создай пароль' />
                <img onClick={togglePasswordVisibility} 
                className="passwordIcon" 
                id='eye1' 
                src={passwordVisible1 ? "./img/icons/eye_slash.svg" : "./img/icons/eye.svg"} alt="" 
                required
                />
            </div>  
            <ul className="rules f-w-500">
                <li className={isMaxMinLength ? 'green' : 'red'}>
                    От 8 до 15 символов 
                    <img src={isMaxMinLength ? '✅' : '❌'} alt="" />
                </li>
              <li>Строчные и прописные буквы</li>
              <li>Минимум 1 цифра</li>
              <li>Минимум 1 спецсимвол (!, ", #, $...)</li>
            </ul>
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                className="password-input input-field f-w-500"
                placeholder="Повтори пароль"
              />
              <img
                src={passwordVisible ? unshow_icon : show_icon}
                alt="#"
                className="show-password"
                onClick={togglePasswordVisibility}
              />
            </div>
            <button className="f-w-500 next-button">Далее</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;