import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Questions = (props) => {
    let [question, setQuestion] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/questions/' + props.qid).then(res => {
            setQuestion(res.data.question)
        })
    }, [props.qid])

    return (
        <div className="questions">
            <p> {question}</p>
        </div>
    )
}

export default Questions
