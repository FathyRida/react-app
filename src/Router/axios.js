import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://randomuser.me/api/"
});

axiosInstance.defaults.headers.common["Autorization"] = "axiosInstance";
axiosInstance.defaults.headers.post["Content-type"] = "application/xml";

export default axiosInstance;
