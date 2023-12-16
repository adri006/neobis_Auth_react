import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import {register} from '../../api'
import React, { useEffect, useRef, useState} from "react";
import LorbyBlock from "../../components/LorbyBlock";
import Back from "../../components/Back";
import "./SignUp.css";
import show_icon from "../../media/show-password.svg";
import unshow_icon from "../../media/unshow-password.svg";


function SignUp() {
    const emailRef = useRef(null);
    const [passwordVisible1, setPasswordVisible1] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [isMaxMinLength, setIsMaxMinLength] = useState('');
    const [isLetter, setIsLetter] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [isSpecialSymbol, setIsSpecialSymbol] = useState();
    const [requestError, setRequestError] = useState(false);
    let navigate = useNavigate();

    
    const onSubmit = async () => {
        try {
            const response = await register(values);
            navigate('/conf-email');
        } catch (err) {
            setRequestError(true);
            if (+err.response?.data.status === 400) {
                toast.error(err.response.data.message);
            } else if (err?.response) {
                toast.error('Произошла ошибка');
            } else if (err?.message) {
                toast.error('Сервер не отвечает');
            }
        }
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        },

        onSubmit,
    });

    const userInfo = values

    const togglePasswordVisibility = (e) => {
        if(e.target.id === 'eye1'){
            setPasswordVisible1(!passwordVisible1);
        } else if(e.target.id === 'eye2'){
            setPasswordVisible2(!passwordVisible2);
        }
    };

    useEffect(()=>{
        setIsMaxMinLength(values.password.length >= 8 && values.password.length <= 15)
        setIsLetter(values.password.match(/[A-ZА-Я]/))
        setIsLetter(values.password.match(/[a-zа-я]/))
        setIsNumber(values.password.match(/[0-9]/))
        setIsSpecialSymbol(values.password.match(/[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/))
    }, [values.password])

    useEffect(() => {
        emailRef.current && emailRef.current.focus();
    }, []);


  return (
    <>
    <div className="signup-page d-f">
    {
        requestError &&
        <ToastContainer  
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    }
      <LorbyBlock />
      <Back />
      <div className="signup-block">
        <form onSubmit={handleSubmit}>
          <h3 className="f-w-500 signup-title">Создать аккаунт Lorby</h3>
          <div className="input-block">
            <input 
                value={values.email}
                onChange={handleChange}
                type="email" 
                id="email"
                className="input-field f-w-500" 
                placeholder="Введи адрес почты" 
                ref={emailRef} />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}
            <input 
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                id="username"
                type="text" 
                className="input-field f-w-500" 
                placeholder="Придумай логин" />
                {errors.username && touched.username && (<p className="error">{errors.username}</p>)}
            <div className="password-field">
                <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type={passwordVisible1 ? "text" : "password"}
                    value={values.password}
                    id="password"
                    className="password-input input-field f-w-500"
                    placeholder="Создай пароль"
                />
                <img
                    src={passwordVisible1 ? unshow_icon : show_icon}
                    alt="#"
                    className="show-password"
                    onClick={togglePasswordVisibility}
                    id='eye1' 
                />
            </div>
            
            <>
                {
                !touched.password ?
                    (
                    <ul className='rules f-w-500'> 
                        <li className='msg'>
                            От 8 до 15 символов 
                        </li>
                        <li className='msg'>
                            Строчные и прописные буквы
                        </li>
                        <li className='msg'>
                            Минимум 1 цифра
                        </li>
                        <li className='msg'>
                            Минимум 1 спецсимвол (!, ", #, $...)
                        </li> 
                    </ul> 
                    ) : (
                        <ul className="rules f-w-500">
                        <li className={isMaxMinLength ? 'green' : 'red'}>
                            От 8 до 15 символов {isMaxMinLength ? '✅' : '❌'}
                        </li>
                        <li className={isLetter ? 'green' : 'red'} >
                            Строчные и прописные буквы{isLetter ? '✅' : '❌'}
                        </li>
                        <li className={isNumber ? 'green' : 'red'}>
                            Минимум 1 цифра{isNumber ? '✅' : '❌'}
                        </li>
                        <li className={isSpecialSymbol ? 'green' : 'red'}>
                            Минимум 1 спецсимвол (!, ", #, $...){isSpecialSymbol ? '✅' : '❌'}
                        </li>
                    </ul>
                    )
                }
            </>

            <div className="password-field">
              <input
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                type={passwordVisible2 ? "text" : "password"}
                className="password-input input-field f-w-500"
                id="confirmPassword"
                placeholder="Повтори пароль"
              />
              <img
                src={passwordVisible2 ? unshow_icon : show_icon}
                alt="#"
                className="show-password"
                onClick={togglePasswordVisibility}
                id='eye2'
              />
            </div>
            {errors.passwordVisible2 && touched.passwordVisible2 && (<p className="error">Пароль не совпадает</p>)}
            <button
                disabled={
                isSubmitting ||
                !isMaxMinLength ||
                !isLetter ||
                !isNumber ||
                !isSpecialSymbol ||
                !values.email ||
                !values.username ||
                !values.password ||
                !values.confirmPassword
            }
            className={`f-w-500 button-field ${
                isMaxMinLength && isLetter && isNumber && isSpecialSymbol && values.email && values.username && values.password && values.confirmPassword
                ? 'valid'
                : 'invalid'
            }`}
            >
            Далее
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp;