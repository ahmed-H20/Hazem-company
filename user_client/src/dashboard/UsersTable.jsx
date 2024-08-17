import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import useClient from "../hooks/UseClient";

const UsersTable = () => {
  const { clint } = useContext(AuthContext);
  const [, , refetch] = useClient();
  refetch();
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
          {clint.map((item, index) => (
            <tr key={index + 1} className="hover:bg-gray-100 text-center">
              <th>{index + 1}</th>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  {item.costumerName}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  $ {item.DebitAccount}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  $ {item.companyPrice}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  $ {item.costumerPrice}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>$ {item.profit}</Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  {item.implementingCompany}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>{item.doneWith}</Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  {item.flightTakeoff}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>{item.airPorts}</Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>
                  {item.countryPhone}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>{item.outlet}</Link>
              </td>
              <td className="whitespace-nowrap">
                <Link to={`/update-clint/${item._id}`}>{item.bookingDate.replace(/(\d{4}-\d{2}-\d{2})T.*/, "$1")}</Link>
              </td>
              <td className="whitespace-nowrap">
                <Link to={`/update-clint/${item._id}`}>
                  {item.travelDate.replace(/(\d{4}-\d{2}-\d{2})T.*/, "$1")}
                </Link>
              </td>
              <td>
                <Link to={`/update-clint/${item._id}`}>{item.comments}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
