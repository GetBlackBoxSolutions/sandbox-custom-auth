class TokenStore {
  _token = null;

  setAccessToken(token) {
    if (token) {
      window.localStorage.setItem("jwt", token);
      this._token = token;
      return;
    }

    this._token = null;
    window.localStorage.removeItem("jwt");
  }

  getAccessToken() {
    if (this._token) return this._token;
    this._token = window.localStorage.getItem("jwt");
    return this._token;
  }
}

export default TokenStore;
