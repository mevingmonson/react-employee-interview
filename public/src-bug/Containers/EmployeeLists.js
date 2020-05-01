import React, { Component } from 'react'
import EmployeeList from '../Components/EmployeeList'

import axios from 'axios'

export default class EmployeeLists extends Component {


    constructor(props) {
        super(props)

        this.state = {
            names: [],
            appId: ''
        }

    }

    componentDidMount() {
        axios.get('http://localhost:3000/candidates').then(resp => {
            // console.log(resp.data)
            this.setState({
                ...this.state,
                names: resp.data
            })

        })
    }

    // getEmployeeAppId = (appId) => {
    //     this.setState({
    //         ...this.state,
    //         appId: appId
    //     })
}

render() {
    console.log(this.state)
    let list = this.state.names.map(name => (
        <EmployeeList
            name={name.name}
            appId={name.applicationId}
            key={name.id}
            clicked={() => {
                console.log(name.applicationId)
                this.getEmployeeAppId(name.applicationId)
            }}
        />))
    return (
        <div className="employee-lists col-4" onClick={() => this.props.clicked(this.state.appId)}>
            <h2>Employee</h2>
            {list}
        </div>
    )
}
}
