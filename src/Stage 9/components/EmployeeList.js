import React, { Component } from 'react';

class EmployeeList extends Component {
  
  render() {
    return (
      <div>
        <ul className="listContainer">
          {
            
            this.props.employees.map((employee) => {
              console.log(employee);
              return (<li className="listText" key={employee.name} onClick={() => this.props.selectEmployee(employee)}>{employee.id}</li>);
            })
          
          
          
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;