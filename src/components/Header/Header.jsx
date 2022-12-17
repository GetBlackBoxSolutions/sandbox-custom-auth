import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../infrastructure/hooks/useAuthContext";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();
  const { setCurrentUser, tokenStore } = useAuth();

  const onLogOutClicked = () => {
    setCurrentUser(null);
    tokenStore.setAccessToken(null);
    navigate("/login");
  };

  return (
    <header>
      <nav>
        <div>
          <h3>Logo</h3>
        </div>
        <ul>
          <li>
            <Link to="dashboard">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <button onClick={onLogOutClicked}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
