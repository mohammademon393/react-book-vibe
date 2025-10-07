import React from 'react';
import { createBrowserRouter } from "react-router";
import Roots from '../Pages/Roots/Roots';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/books.json"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch("/books.json"),
        Component: BookDetails,
      },
    ],
  },
]);
