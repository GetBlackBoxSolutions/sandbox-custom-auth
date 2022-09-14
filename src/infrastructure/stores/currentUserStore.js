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
  }
}

export default CurrentUserStore;
