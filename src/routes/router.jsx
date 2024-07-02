import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import AllTouristSpot from "../pages/allTouristSpot/AllTouristSpot";
import Login from "../login/Login";
import Register from "../login/Register";
import SpotDetails from "../pages/Home/SpotDetails";
import AddTouristSpots from "../pages/addTouristSpot/AddTouristSpots";
import MyList from "../pages/myList/MyList";
import UpdatePage from "../pages/myList/UpdatePage";
import PrivetRoute from "./PrivetRoute";
import CountrySpots from "../pages/Home/CountrySpots";


const router = createBrowserRouter([
   {
     path: "/",
     element: <Root></Root>,
     errorElement: <ErrorPage></ErrorPage>,
     children: [
      {
         path: "/",
         element: <Home></Home>,
      },
      {
         path: "/allTouristSpot",
         element: <AllTouristSpot></AllTouristSpot>,
      },
      {
         path: "/addTouristSpot",
         element: <PrivetRoute><AddTouristSpots></AddTouristSpots></PrivetRoute>,
      },
      {
         path: "/myList",
         element: <PrivetRoute><MyList></MyList></PrivetRoute>,
      },
      {
         path: "/updatePage/:id",
         element: <PrivetRoute><UpdatePage></UpdatePage></PrivetRoute>,
         loader: ({params}) => fetch(`https://tourism-kingdom-server-5000vwjgz-taj-tanvirs-projects.vercel.app/spot/${params.id}`)

      },
      {
         path: "/countrySpots",
         element: <PrivetRoute><CountrySpots></CountrySpots></PrivetRoute>
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
         path: '/spot/:id',
         element: <PrivetRoute><SpotDetails></SpotDetails></PrivetRoute>,
         loader: ({params}) => fetch(`https://tourism-kingdom-server-5000vwjgz-taj-tanvirs-projects.vercel.app/spot/${params.id}`)
      }
     ]
   },
 ]);

 export default router;