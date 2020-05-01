import React from 'react'

const EmployeeList = (props) => (

    < div className="employee-list" onClick={props.clicked}>
        {/* {console.log('*******', props)} */}
        <h6>{props.name}</h6>
    </div >
)

export default EmployeeList;
