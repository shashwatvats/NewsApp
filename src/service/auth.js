const authentication = {
  isLoggedin: true,
  async Login() {
    await fetch(" http://localhost:3001/auth/v1/isAuthenticated", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.isLoggedin = data.isAuthenticated;
      });
  },
};
export default authentication;
