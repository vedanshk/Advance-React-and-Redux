import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Root from "./Root";
import App from "components/App";
import "./index.css";

ReactDOM.render(
  <Root>
    <BrowserRouter>
    <Route path={"/"} component={App} />
    </BrowserRouter>
  </Root>,

  document.getElementById("root")
);
