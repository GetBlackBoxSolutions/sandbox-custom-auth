import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useRootStore } from "../../infrastructure/hooks/useRootStoreContext";
import dataService from "../../infrastructure/services/data-service";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import InputText from "../../components/Input/InputText";
import Button from "../../components/Button/Button";

export default function Login() {
  const { currentUserStore, tokenStore } = useRootStore();
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErroMessage] = useState("");

  const navigate = useNavigate();

  const onUserNameOrEmailValueChanged = ({ target }) => {
    setUserNameOrEmail(target.value);
  };

  const onPasswordValueChanged = ({ target }) => {
    setPassword(target.value);
  };

  const onLoginClicked = async () => {
    setErroMessage("");
    if (userNameOrEmail.length === 0 || password.length === 0) {
      setErroMessage("User name and/or password are missing");
      return;
    }
    try {
      const { data } = await dataService.login({
        userNameOrEmail,
        password,
      });

      console.log(data);

      currentUserStore.setCurrentUser(data.userProfile);
      tokenStore.setAccessToken(data.token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { data } = error.response;
        console.log(data);
      }
    }
  };

  if (currentUserStore.userName) return <Navigate to="/" replace />;

  return (
    <div id="login" className="container">
      <h3>Sandbox</h3>
      <hr />
      <InputText
        placeholder="Username or email address"
        value={userNameOrEmail}
        onChange={onUserNameOrEmailValueChanged}
      />
      <InputText
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordValueChanged}
      />
      <Button text="Sign in" onClick={onLoginClicked} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
