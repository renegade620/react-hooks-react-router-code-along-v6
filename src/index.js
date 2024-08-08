import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // import react-router functions
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import UserProfile from "./pages/UserProfile";
// import ErrorPage from "./pages/ErrorPage";
import routes from "./routes";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);