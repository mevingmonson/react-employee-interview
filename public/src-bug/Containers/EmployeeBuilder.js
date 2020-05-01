import React, { Component } from 'react'

import EmployeeLists from './EmployeeLists'
import EmployeeDetails from './EmployeeDetails'



export default class EmployeeBuilder extends Component {
    state = {
        appId: ''
    }
    setAppId = (appId) => {
        this.setState({
            ...this.state,
            appId
        })
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps, this.props)
    }


    render() {
        console.log(this.state.appId)
        return (
            <div className="row">
                <EmployeeLists clicked={this.setAppId} appId={this.state.appId} />
                <EmployeeDetails appId={this.state.appId} />
            </div>
        )
    }
}
