import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./Components/Routers/Routers.jsx";

import { Provider } from "react-redux";
import { store } from "./ReduxStore/Store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
