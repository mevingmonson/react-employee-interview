import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import axios from 'axios'

import EmployeeLists from './EmployeeLists'
import EmployeeDetails from './EmployeeDetails'
import EmployeeList from '../Components/EmployeeList'



export default class EmployeeBuilder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            candidatesData: [],
            appId: '',
            name: ''
        }
        axios.get('http://localhost:3000/candidates').then(resp => {
            // console.log(resp.data)
            this.setState({
                ...this.state,
                candidatesData: resp.data
            })

        })
    }

    getEmpDetails = (appId, name) => {
        this.setState({
            ...this.state,
            appId,
            name
        })
    }

    render() {
        console.log(this.state.appId)
        let empDetails;
        if (this.state.appId) {
            empDetails = <EmployeeDetails appId={this.state.appId} name={this.state.name} />
        }
        else {
            empDetails = <p className="mt-3 ml-3">App Id not Found. Please select any employee</p>
        }
        return (
            <BrowserRouter>
                <div className="row">
                    <Route path="/" component={() => <EmployeeLists
                        setEmployeeDetails={this.getEmpDetails}
                        employeesData={this.state.candidatesData} />}
                    />
                    <Route path="/:name" component={() => empDetails} />
                    {/* {empDetails} */}
                </div>
            </BrowserRouter>
        )
    }
}
