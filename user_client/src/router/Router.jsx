import {
    createBrowserRouter,
  } from "react-router-dom";
import Signin from "../component/Signin";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../latout/DashboardLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRouter><DashboardLayout/></PrivateRouter>,
      children: [
        {
          path: "/",
          element: <Dashboard/>
        }
      ]      
    },
    {
        path: "/sign_in",
        element: <Signin/>
    },
    
  ]);


export default router
