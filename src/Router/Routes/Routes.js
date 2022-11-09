import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import AllService from "../../Pages/AllService/AllService";
import Blog from "../../Pages/Blog/Blog";
import EditReview from "../../Pages/EditReview/EditReview";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import ServiceArea from "../../Pages/ServiceArea/ServiceArea";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router=createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/serviceDetails/:id',
          element:<ServiceDetails></ServiceDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
      
        {
         path: '/allService',
         element: <AllService></AllService>,
         loader: ()=>fetch(`http://localhost:5000/services`)
          
        },
        {
          path: '/myReview',
          element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path:'/editReview/:id',
          element:<PrivateRoute><EditReview></EditReview></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/myReview/${params.id}`)

        },
        {
          path:'/addService',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

       
      ]

    }
  ]);

  export default router;