import React from "react";
import LorbyBlock from "../LorbyBlock/LorbyBlock";
import Back from "../Back/Back";
import SignUpStyle from "./SignUp.css"

function SignUp() {
    return(
        <div className="signup-page d-f">
            <LorbyBlock/>
            <Back/>
            <div className="signup-block">
                <form>
                    <h3 className="f-w-500 signup-title">Создать аккаунт Lorby</h3>
                    <div className="input-block">
                        <input type="text" className="input-field f-w-500" placeholder="Введи адрес почты"/>
                        <input type="text" className="input-field f-w-500" placeholder="Придумай логин"/>
                        <input type="text" className="input-field f-w-500" placeholder="Создай пароль"/>
                        <ul className="rules f-w-500">
                            <li>От 8 до 15 символов ✅</li>
                            <li>Строчные и прописные буквы</li>
                            <li>Минимум 1 цифра</li>
                            <li>Минимум 1 спецсимвол (!, ", #, $...)</li>
                        </ul>
                        <input type="text" className="input-field f-w-500" placeholder="Повтори пароль"/>
                        <button className="f-w-500 next-button">Далее</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
