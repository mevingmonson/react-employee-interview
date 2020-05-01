import React, { Component } from 'react'

import axios from 'axios'

import VideoPlayer from '../Components/VideoPlayer'
import Questions from '../Components/Questions'
import Comments from '../Components/Comments'

export default class EmployeeDetails extends Component {

    state = {
        employeeDetails: []
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            if (this.props.appId) {
                axios.get('http://localhost:3000/applications/' + this.props.appId)
                    .then(resp => {
                        // console.log(resp.data)
                        this.setState({
                            ...this.state,
                            employeeDetails: resp.data
                        });
                    }).catch(err => console.log(err));
            }
        }
    }



    render() {
        console.log(this.props.appId)
        // if (this.state.employeeDetails) {
        //     let empDetailList = this.state.employeeDetails.map(emp => {

        //     })
        // }


        return (
            <div className="col-8">
                <h2>Details</h2>
                <VideoPlayer />
                <h2>Questions</h2>
                <Questions />
                <h2>Comments</h2>
                <Comments />
            </div>
        )
    }
}
