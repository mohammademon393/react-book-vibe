import React from 'react';
import { createBrowserRouter } from "react-router";
import Roots from '../Pages/Roots/Roots';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>
  },
]);
