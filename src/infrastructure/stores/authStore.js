import CurrentUserStore from "./currentUserStore";
import TokenStore from "./tokenStore";

const authStore = {
  currentUser: null,
  tokenStore: new TokenStore(),
  setCurrentUser(userData) {
    console.log(this);
    if (userData) {
      this.currentUser = new CurrentUserStore(
        userData.displayName,
        userData.userName,
        userData.email
      );
      return;
    }

    this.currentUser = null;
  },
};

export default authStore;
