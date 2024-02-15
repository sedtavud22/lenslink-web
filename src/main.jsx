import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import WorkContextProvider from "./features/work/contexts/WorkContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkContextProvider>
        <App />
      </WorkContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
