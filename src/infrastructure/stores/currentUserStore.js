class CurrentUserStore {
  isLoggedIn = false;

  constructor() {
    this.displayName = "";
    this.userName = "";
    this.token = "";
  }

  setCurrentUser(displayName, userName, token) {
    this.displayName = displayName;
    this.userName = userName;
    this.token = token;

    this.isLoggedIn = token ? true : false;
    this.setAccessToken(token);
  }

  setAccessToken(token) {
    if (token) {
      window.localStorage.setItem("jwt", token);
      return;
    }

    window.localStorage.removeItem("jwt");
  }

  getAccessToken() {
    return window.localStorage.getItem("jwt");
  }
}

export default CurrentUserStore;
