import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FaviconNotificationContextProvider from "react-favicon-notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FaviconNotificationContextProvider>
      <App />
    </FaviconNotificationContextProvider>
  </React.StrictMode>
);
