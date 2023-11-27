import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddArticles from "../Pages/AddArticles/AddArticles";
import AllArticles from "../Pages/AllArticles/AllArticles";
import ArticlesDetails from "../Pages/ArticlesDetails/ArticlesDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/allArticles",
            element: <AllArticles></AllArticles>,
            loader:()=> fetch('http://localhost:5000/allArticles')
        },
        {
          path: "/articles/:id",
          element: <ArticlesDetails></ArticlesDetails>,
          loader:({params})=> fetch(`http://localhost:5000/allArticles/${params.id}`)
        },
        {
          path: "/addArticles",
          element:<PrivateRoute><AddArticles></AddArticles></PrivateRoute>
        }
      ]
    },
  ]);