/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
  } from "react-router-dom";
import Signin from "../component/Signin";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import AddClient from "../dashboard/admin/AddClient"
import UsersTable from "../dashboard/UsersTable";
import DashboardLayout from "../latout/DashboardLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRouter><DashboardLayout/></PrivateRouter>,
      children: [
        {
          path: "/",
          element: <UsersTable/>
        },
        {
          path:"/add_client",
          element: <AddClient/>

        }
      ]      
    },
    {
        path: "/sign_in",
        element: <Signin/>
    },
    
  ]);


export default router
