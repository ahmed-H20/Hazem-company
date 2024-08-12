import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";

const DashboardLayout = () => {
  return (
    <div>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout;