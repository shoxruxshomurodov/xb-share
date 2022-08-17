import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import Theme from "./theme/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Theme>
    <Router />
  </Theme>
);
