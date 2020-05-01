import React from 'react'

import classes from '../Styles/EmployeeList.module.css'

const EmployeeList = (props) => (

    < div className={`${classes.EmployeeList} mr-3 p-3 mb-2 text-white`} onClick={props.clicked}>
        {/* {console.log('*******', props)} */}
        <h6 className="m-0">{props.name}</h6>
    </div >
)

export default EmployeeList;
