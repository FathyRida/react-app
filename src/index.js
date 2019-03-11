import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// axios.defaults.baseURL = "https://randomuser.me/api/";
// axios.defaults.headers.common["Autorization"] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-type"] = "application/json";

axios.interceptors.request.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
