import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Utils/Styles/Style.scss";
import App from "./App";
import "tw-elements";
import "flowbite";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
