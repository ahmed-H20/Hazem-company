import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const UsersTable = () => {
    const {clint}= useContext(AuthContext);

  return (
    
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-green text-white">
          <tr className="text-center">
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
            <th>ملاحظات</th>
          </tr>
        </thead>
        <tbody>
          {

            clint.map((item,index) => (                
            <tr key={index+1}>
                <th>{index + 1}</th>
                <td>{item.costumerName}</td>
                <td>$ {item.DebitAccount}</td>
                <td>$ {item.companyPrice}</td>
                <td>$ {item.costumerPrice}</td>
                <td>$ {item.profit}</td>
                <td>{item.implementingCompany}</td>
                <td>{item.doneWith}</td>
                <td>{item.flightTakeoff}</td>
                <td>{item.airPorts}</td>
                <td>{item.countryPhone}</td>
                <td>{item.outlet}</td>
                <td>{item.bookingDate}</td>
                <td>{item.travelDate}</td>
                <td>{item.comments}</td>
            </tr> 
            ))
          }         
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
