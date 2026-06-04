import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicRoute from "../protectedRoutes/PublicRoute";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../component/Login";
import Register from "../component/Register";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { currentUser } from "../features/authAction";
import { useDispatch } from "react-redux";
import Movies from "../component/Movies";
import MovieDetails from "../pages/movieDetails";

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(currentUser());
    })();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "/home/favorites",
              element: <Favorites />,
            },
            {
              path: "/home/profile",
              element: <Profile />,
            },
            {
              path: "/home/movies",
              element: <Movies />,
            },
            {
              path: "/home/movies/:id",
              element: <MovieDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
