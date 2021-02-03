import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";



class EmployeeTable extends Component {


    render() {
        return (
            <div className="container">
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
               
                    <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">D.O.B.</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.employees.map(employee => (
                            <tr>
                                <td><img src={employee.picture.large} alt="Employee" /></td>
                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>{(employee.dob.date).substring(0, 10)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                
            </div>
        )
    }
}

export default EmployeeTable;