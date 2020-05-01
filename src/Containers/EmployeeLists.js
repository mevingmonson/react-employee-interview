import React, { Component } from 'react'
import EmployeeList from '../Components/EmployeeList'

import axios from 'axios'

export default class EmployeeLists extends Component {


    render() {
        let list = this.props.employeesData.map(employee => (
            <EmployeeList
                name={employee.name}
                appId={employee.applicationId}
                key={employee.id}
                clicked={() => {
                    this.props.setEmployeeDetails(employee.applicationId, employee.name)
                }}
            />))
        return (
            <>
                <div className="employee-lists d-none d-md-block col-md-4">
                    <h2>Employee</h2>
                    {list}
                </div>
                <div className="employee-list col-12 d-md-none horizontal-scrollable">
                    <h2>Employee</h2>
                    <div className="row ml-3">
                        {list}
                    </div>
                </div>
            </>
        )
    }
}
