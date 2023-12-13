import React, { useRef, useState } from "react";
import LoginCss from "./Login.css";
import LorbyBlock from "../../components/LorbyBlock/LorbyBlock";
import show_icon from "../../media/show-password.svg";
import unshow_icon from "../../media/unshow-password.svg";
import { Link } from 'react-router-dom';
import SignUp from "../SignUp/SignUp";

const AuthForm = () => {
  const emailRef = useRef();
  // const [passwordVisible , setPasswordVisible] = useState(false)

}

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(false);



  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="d-f-ai-c login-page">
      <div className="error d-f">
        <p className="error__text f-w-500">Неверный логин или пароль</p>
      </div>
      <LorbyBlock />
      <div className="login-block">
        <form>
          <h3 className="f-w-500 input-title">Вэлком бэк!</h3>
          <div className="input-block">
            <input type="login" className="input-field f-w-500" placeholder="Введи туда-сюда логин" />
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                className="password-input input-field f-w-500"
                placeholder="Пароль (тоже введи)"
              />
              <img
                src={passwordVisible ? unshow_icon : show_icon}
                alt="#"
                className="show-password"
                // onClick={togglePasswordVisibility}
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



// import React, { useState } from "react";
// import LoginCss from "./Login.css";
// import LorbyBlock from "../../components/LorbyBlock/LorbyBlock";
// import show_icon from "../../media/show-password.svg";
// import unshow_icon from "../../media/unshow-password.svg";
// import { Link } from 'react-router-dom';
// import SignUp from "../SignUp/SignUp";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// function Login() {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prev) => !prev);
//   };

//   const validationSchema = Yup.object().shape({
//     login: Yup.string().required("Введите логин"),
//     password: Yup.string()
//       .required("Введите пароль")
//       .min(8, "Пароль должен содержать минимум 8 символов")
//       .max(15, "Пароль не должен превышать 15 символов")
//       .matches(
//         /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-zА-ЯЁа-яё\d!@#$%^&*()_+]+$/,
//         "Пароль должен содержать строчные и прописные буквы, минимум 1 цифру и минимум 1 спецсимвол"
//       ),
//   });

//   const formik = useFormik({
//     initialValues: {
//       login: '',
//       password: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       // Your login logic goes here
//       console.log('Form submitted with values:', values);
//     },
//   });

//   return (
//     <div className="d-f-ai-c страница входа в систему">
//       {/* ... your existing JSX code ... */}
//       <div className="блокировка входа">
//         <form onSubmit={formik.handleSubmit}>
//           <h3 className="f-w-500 input-title">Вэлком бэк!</h3>
//           <div className="input-block">
//             <input
//               type="text"
//               className="поле ввода fw-500"
//               placeholder="Введи туда-сюда логин"
//               name="login"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.login}
//             />
//             {formik.touched.login && formik.errors.login ? (
//               <div className="error">{formik.errors.login}</div>
//             ) : null}
//             <div className="поле-пароля">
//               <input
//                 type={passwordVisible ? 'text' : 'password'}
//                 className="поле ввода fw-500"
//                 placeholder="Пароль (тоже введи)"
//                 name="password"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.password}
//               />
//               {formik.touched.password && formik.errors.password ? (
//                 <div className="error">{formik.errors.password}</div>
//               ) : null}
//               <img
//                 src={passwordVisible ? unshow_icon : show_icon}
//                 alt="#"
//                 className="показать-пароль"
//                 onClick={togglePasswordVisibility}
//               />
//             </div>
//             <button className="f-w-500 button-field" type="submit">
//               Войти
//             </button>
//           </div>
//         </form>
//         <Link className="create-acc" to={{ pathname: "/signup" }}>
//           <p className="f-w-500">У меня еще нет аккаунта</p>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Login;
