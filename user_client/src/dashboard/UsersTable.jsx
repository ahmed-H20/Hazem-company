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
            <th>اسم العميل</th>
            <th>حساب مدين</th>
            <th>سعر الشركة</th>
            <th>سعر العميل</th>
            <th>ربح</th>
            <th>الشركة المنفذة</th>
            <th>نفذت مع</th>
            <th>طيران+اقلاع</th>
            <th>من مطار/مطار</th>
            <th>البلد+الرقم</th>
            <th>منفذها لدينا</th>
            <th>تاريخ الحجز</th>
            <th>تاريخ السفر</th>
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
