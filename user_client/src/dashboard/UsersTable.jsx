import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const UsersTable = () => {
    const {clint}= useContext(AuthContext);

  return (
    
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-green text-white">
          <tr>
            <th></th>
            <th>الاسم</th>
            <th>المبلغ الكلى</th>
            <th>المدفوع</th>
            <th>عدد الاشهر</th>
            <th>المبلغ المتبقى</th>
            <th>القسط/شهر</th>
            <th>تاريخ الاضافة</th>
          </tr>
        </thead>
        <tbody>
          {
            clint.map((item,index) => (
                
            <tr key={index+1}>
                <th>{index + 1}</th>
                <td>{item.first_name}</td>
                <td>10000 $</td>
                <td>5700 $</td>
                <td>10</td>
                <td>4300 $</td>
                <td>350 $/شهر</td>
                <td>22/3/2024</td>
            </tr> 
            ))
          }         
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
