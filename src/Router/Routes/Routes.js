import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AllService from "../../Pages/AllService/AllService";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceArea from "../../Pages/ServiceArea/ServiceArea";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";

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
          
        }
       
      ]

    }
  ]);

  export default router;