export default class Helper {
  setToken(token, role, expirationTimeInMinutes = 1440) {
    if (!token || !role) {
      throw new Error("Both are Required");
    }
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    console.log(`Token and role set. Token: ${token}, Role: ${role}`);

    setTimeout(() => {
      this.removeToken();
    }, expirationTimeInMinutes * 60 * 1000);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  getRole() {
    return localStorage.getItem("role");
  }
  removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }
}
