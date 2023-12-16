import React, { useEffect, useCallback } from "react";
import { resendMessage } from "../../api";
import LorbyBlock from "../../components/LorbyBlock";
import Back from "../../components/Back";
import "./ConfirmEmail.css";

function Confirm({ location }) {
  const resendEmail = location?.state?.resendEmail;

  const handleResendMessage = useCallback(async () => {
    try {
      const response = await resendMessage(resendEmail);
      console.log("Resend Message Response:", response);
    } catch (error) {
      console.error("Error while resending message:", error);
    }
  }, [resendEmail]);

  useEffect(() => {
    // handleResendMessage();
  }, [handleResendMessage]);

  return (
    <>
      <div className="d-f">
        <LorbyBlock />
        <Back />
        <div className="letter-block d-f">
          <h3 className="title f-w-500">
            Выслали письмо со ссылкой для завершения регистрации на example@gmail.com
          </h3>
          <p className="spam f-w-500">
            Если письмо не пришло, не спеши ждать совиную почту - лучше{" "}
            <span className="spam-symbol">проверь ящик “Спам”</span>
          </p>
          <p className="f-w-500 spam spam-symbol">(´｡• ω •｡`)</p>
          <p className="f-w-500 letter" onClick={handleResendMessage}>
            Письмо не пришло
          </p>
        </div>
      </div>
    </>
  );
}

export default Confirm;