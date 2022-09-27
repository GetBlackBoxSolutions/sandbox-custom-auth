import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useRootStore } from "../../infrastructure/hooks/useRootStoreContext";
import dataService from "../../infrastructure/services/data-service";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErroMessage] = useState("");

  const { currentUserStore } = useRootStore();
  const navigate = useNavigate();

  const onUserNameValueChanged = ({ target }) => {
    setUserName(target.value);
  };

  const onPasswordValueChanged = ({ target }) => {
    setPassword(target.value);
  };

  const onLoginClicked = async () => {
    setErroMessage("");
    if (userName.length === 0 || password.length === 0) {
      setErroMessage("User name and/or password are missing");
      return;
    }
    try {
      const { data } = await dataService.login({ email: userName, password });
      currentUserStore.setCurrentUser(
        data.displayName,
        data.userName,
        data.token
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { data } = error.response;
        console.log(data);
      }
    }
  };

  return (
    <div className="full-page">
      <div id="login">
        <h2>Login</h2>
        <hr />
        <div>
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={onUserNameValueChanged}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordValueChanged}
          />
        </div>
        <div>
          <button type="button" onClick={onLoginClicked}>
            Login
          </button>
        </div>
        <div>{errorMessage}</div>
      </div>
    </div>
  );
}
