import './Cardlist.css'
import Card from "../Card/Card";
import { contactsEmployees, contactsEmployeesZh, contactsEmployeesEn } from "../constants/constants";
import { useLocation } from 'react-router-dom';


function EmployeesList() {
    const location = useLocation();

    const getEmployeesByLanguage = (path) => {
      if (path === "/contacts/en") {
        return contactsEmployeesEn;
      } else if (path === "/contacts/zh") {
        return contactsEmployeesZh;
      } else {
        return contactsEmployees;
      }
    };
  
    const currentEmployees = getEmployeesByLanguage(location.pathname);
  
    return (
      <div className="employlist">
        {currentEmployees.map((employee, index) => (
        <Card
          key={index}
          name={employee.name}
          emproy={employee.emproy}
          mailPerson={employee.mailPerson}
          telphone={employee.telphone}
          image={employee.image}
          lastname={employee.lastname}
        />
      ))}
   </div>
  );
}

export default EmployeesList;