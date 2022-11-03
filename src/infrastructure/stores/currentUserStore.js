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
    if (token) {
      this.isLoggedIn = true;
    }
  }
}

export default CurrentUserStore;
