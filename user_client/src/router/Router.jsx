import {
    createBrowserRouter,
  } from "react-router-dom";
import Signin from "../component/Signin";
import Main from "../latout/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRouter><Main/></PrivateRouter>,
    },
    {
        path: "/sign_in",
        element: <Signin/>
    }
  ]);


export default router
