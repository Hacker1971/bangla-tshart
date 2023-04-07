import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Error from "./components/Error/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'shop',
        element:<Shop></Shop>,
        loader: () => fetch('tshirts.json'),
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
