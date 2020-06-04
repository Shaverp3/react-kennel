import React, { Component } from 'react';
import './Employee.css'

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Employee: <span className="card-employeename">{this.props.employeeProp.name}</span></h3>
          <p></p>
          <button type="button" onClick={()=>
            {this.props.deleteEmployee(this.props.employeeProp.id)}}>Terminate</button>
            <button type="button"
        onClick={() => {this.props.history.push(`/employees/${this.props.employeeProp.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;