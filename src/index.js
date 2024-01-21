import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { REACT_APP_OAUTH_CLIENT_ID } from "./utils/constants";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/body/Body";
import Main from "./components/body/main/Main";
import Watch from "./components/body/watch/Watch";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <GoogleOAuthProvider clientId={REACT_APP_OAUTH_CLIENT_ID}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </GoogleOAuthProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <Main />,
          },
          {
            path: "/watch",
            element: <Watch />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
