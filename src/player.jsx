import React from "react";
import ReactDOM from "react-dom/client";
import AccountSettings from "./tabs.jsx"; // your component
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AccountSettings />
  </React.StrictMode>
);
