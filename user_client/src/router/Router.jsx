import {
    createBrowserRouter,
  } from "react-router-dom";
import Signin from "../component/Signin";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signin/>,
    },
  ]);


export default router
