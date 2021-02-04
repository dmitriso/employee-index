import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";

// EmployeeTable CLASS TO HANDLE FUNCTIONALITY AND RENDER JSX
class EmployeeTable extends Component {
    state = {
        employees: [],
        results: [],
        filteredEmployees: [],
        search: ""
    };
    // INITIATES API CALL WHEN COMPONENT IS CREATED
    componentDidMount() {
        this.searchEmployees();
    }
    // FUNCTION TO MAKE API CALL
    searchEmployees = () => {
        API.search()
            .then(res => this.setState({
                employees: res.data.results,
                results: res.data.results
            }))
            .catch(err => console.log(err));
    }

    // THIS HANDLES THE RESULTS WHEN A USER SEARCHES BY NAME
    handleInputChange = event => {
        const value = event.target.value;
        const resultsArr = this.state.employees;
        const searchEmployeeResults = resultsArr.filter((employee) => employee.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1 || employee.name.last.toLowerCase().indexOf(value.toLowerCase()) !== -1)
        this.setState({
            filteredEmployees: searchEmployeeResults,
            search: event.target.value
        })
    };

    // THIS HANDLES WHEN A USER CLICKS THE SUBMIT BUTTON
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            employees: this.state.filteredEmployees,
            results: this.state.employees
        })
        console.log(this.state.search);
    };





    // THIS RENDERS THE COMPONENTS FOR THE SEARCH FORM AND EMPLOYEE TABLE
    render() {
        return (
            <div className="container">
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    handleSortByAgeAscend={this.handleSortByAgeAscend}
                    handleSortByAgeDescend={this.handleSortByAgeDescend}
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
                                    <td><img src={employee.picture.medium} alt="Employee" /></td>
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