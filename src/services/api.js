import axios from "axios";

const api = axios.create({
  baseURL: "https://oministack-backend-allan.herokuapp.com"
});

export default api;
