import React, { Component } from 'react'

import axios from 'axios'

import VideoPlayer from '../Components/VideoPlayer'
import Questions from '../Components/Questions'
import Comments from '../Components/Comments'

export default class EmployeeDetails extends Component {

    state = {
        employeeDetails: []
    }

    componentDidMount() {
        this.getEmployeeDetails();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.getEmployeeDetails();
        }
    }

    getEmployeeDetails = () => {
        if (this.props.appId) {
            axios.get(`http://localhost:3000/applications/${this.props.appId}`)
                .then(resp => {
                    // console.log(resp.data)
                    this.setState({
                        ...this.state,
                        employeeDetails: resp.data
                    });
                }).catch(err => console.log(err));
        }
    }

    saveComments = (index, commentValue) => {
        let newData = { ...this.state.employeeDetails };

        if (newData.videos[index].comments === '') {
            newData.videos[index].comments = []
        }

        newData.videos[index].comments.push(commentValue);


        axios.put(`http://localhost:3000/applications/${this.props.appId}`, newData)
            .then(resp => {
                this.setState({
                    employeeDetails: newData
                })
            })


    }

    render() {
        // console.log(this.props.appId)
        let empData = <p>select any details</p>
        if (this.state.employeeDetails.videos) {
            empData = this.state.employeeDetails.videos.map((data, index) => {
                // console.log(data)
                return (
                    <>
                        <h2>Details</h2>
                        <VideoPlayer videoData={data.src} />
                        <h2>Questions</h2>
                        <Questions qid={data.questionId} />
                        <h2>Comments</h2>
                        <Comments saveComments={this.saveComments} listPosition={index} comments={data.comments} />
                        <hr />
                    </>
                )
            })
        }
        return (
            <div className="col-12 col-md-8" >
                <h6> Name Selected:</h6><p> {this.props.name}</p>
                {empData}
            </div>
        )


    }
}
