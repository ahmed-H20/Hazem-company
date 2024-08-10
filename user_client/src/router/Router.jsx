import {
    createBrowserRouter,
  } from "react-router-dom";
import Signin from "../component/Signin";
import Main from "../latout/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
        path: "/sign_in",
        element: <Signin/>
    }
  ]);


export default router
