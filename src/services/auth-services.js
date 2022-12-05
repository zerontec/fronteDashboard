import axios from "axios";

const API_URL = "http://localhost:5040/auth/";

const register = (username,name, email, password) => {
  return axios.post(API_URL + "register-user", {
    username,
    email,
    password,
    name
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login-user", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
}