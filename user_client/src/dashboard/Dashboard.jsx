/* eslint-disable no-constant-condition */
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import {
  FaEdit,
  FaPlusCircle,  
 
} from "react-icons/fa";

import { Link } from "react-router-dom";
import UsersTable from "./UsersTable";



const Dashboard = () => {

  return (
    <div>      
        <div className="drawer sm:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
            {/* Page content here */}
            <div className="flex items-center justify-between mx-4">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden "
              >
                <MdDashboardCustomize/>
              </label>
            </div>
            <div className="mt-5 md:mt-2 mx-4">
              <UsersTable/>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              
              <li className="mt-3">
                <Link to="/dashboard">
                  <MdDashboard /> العملاء
                </Link>
              </li>              
              <li>
                <Link to="/dashboard/add-menu">
                  <FaPlusCircle />
                  اضافة عميل
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manage-items">
                  <FaEdit /> تعديل بيانات عميل
                </Link>
              </li>
              

              <hr />              
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;