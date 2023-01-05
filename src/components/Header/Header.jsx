import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRootStore } from "../../infrastructure/hooks/useRootStoreContext";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();
  const { currentUserStore, tokenStore } = useRootStore();

  const onLogOutClicked = () => {
    currentUserStore.setCurrentUser(null);
    tokenStore.setAccessToken(null);
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <nav>
        <div>
          <h3>Logo</h3>
        </div>

        <input type="checkbox" class="menu-btn" id="menu-btn" />
        <label for="menu-btn" class="menu-icon">
          <span class="menu-icon__line"></span>
        </label>

        <div className="nav-links">
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
              <button type="button" onClick={onLogOutClicked}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
