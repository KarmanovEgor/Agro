import './Cardlist.css'
import Card from "../Card/Card";
import { contactsEmployees } from "../constants/constants";


function EmployeesList() {
  return (
   <div className="employlist">
      {contactsEmployees.map((employee, index) => (
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