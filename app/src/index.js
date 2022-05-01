import React from "react";
import ReactDOM from "react-dom/client";

import MainLayout from "./commonComponents/MainLayout";

import App from "./App";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainLayout>
    <App />
  </MainLayout>
);
