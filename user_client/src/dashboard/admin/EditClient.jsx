/* eslint-disable no-unused-vars */
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProvider";
// import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/UsePublicAxios";
import useClient from "../../hooks/UseClient";

const EditClient = () => {
    const axiosPublic = useAxiosPublic();
    const [users, loading, refetch] = useClient();
    
    //   handleDeleteItem
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {        
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/users/${item._id}`);
        console.log(res);
       if(res) {
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
       }
      }
    });
  };
  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Manage All <span className="text-green">Menu Items</span>
      </h2>
      {/* menu item table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>اسم العميل</th>
                <th>تاريخ الحجز</th>
                <th>تاريخ السفر</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>                  
                  <td>{item.costumerName}</td>
                  <td>{item.bookingDate}</td>
                  <td>{item.travelDate}</td>
                  <td>
                    <Link to={`/dashboard/update-clint/${item._id}`}>
                      <button 
                      className="btn btn-ghost btn-xs bg-orange-500 text-white">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                        onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-xs text-red"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EditClient
