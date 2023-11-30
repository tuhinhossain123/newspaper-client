import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddArticles from "../Pages/AddArticles/AddArticles";
import AllArticles from "../Pages/AllArticles/AllArticles";
import ArticlesDetails from "../Pages/ArticlesDetails/ArticlesDetails";
import Subscription from "../Pages/Subscription/Subscription";
import MyArticles from "../Pages/MyArticles/MyArticles";
import PremiumArticles from "../Pages/PremiumArticles/PremiumArticles";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllArticlesDashboard from "../Pages/Dashboard/AllArticles/AllArticlesDashboard";
import AddPublisher from "../Pages/Dashboard/AddPublisher/AddPublisher";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allArticles",
        element: <AllArticles></AllArticles>,
        loader: () =>
          fetch("https://newspaper-server-ten.vercel.app/allArticles"),
      },
      {
        path: "/articles/:id",
        element: <ArticlesDetails></ArticlesDetails>,
        loader: ({ params }) =>
          fetch(
            `https://newspaper-server-ten.vercel.app/allArticles/${params.id}`
          ),
      },
      {
        path: "/addArticles",
        element: (
          <PrivateRoute>
            <AddArticles></AddArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "/subscription",
        element: (
          <PrivateRoute>
            <Subscription></Subscription>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArticles",
        element: (
          <PrivateRoute>
            <MyArticles></MyArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "/premiumArticles",
        element: (
          <PrivateRoute>
            <PremiumArticles></PremiumArticles>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:"allUsers",
        element:<AllUsers></AllUsers>
      },
      {
        path:"allArticlesDashboard",
        element:<AllArticlesDashboard></AllArticlesDashboard>
      },
      {
        path: "addPublisher",
        element:<AddPublisher></AddPublisher>
      }
    ]
  }
]);
