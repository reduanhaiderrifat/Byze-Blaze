import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Pages/Home/Home";
import Blogs from "./components/Pages/Blogs/Blogs";
import Bookmarks from "./components/Pages/Bookmarks/Bookmarks";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Content from "./components/Content/Content";
import Author from "./components/Author/Author";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles"),
      },
      {
        path: "/blog/:blogId",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.blogId}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.blogId}`),
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.blogId}`),
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
