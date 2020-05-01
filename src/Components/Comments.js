import React from 'react'

class Comments extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            commentValue: ''

        }

    }
    inputChangeHandler = (event) => {
        this.setState({
            commentValue: event.target.value
        })
    }
    render() {
        return (
            <div>
                {this.props.comments === '' ? <p>No Comments</p> : (this.props.comments.map((c, i) => (
                    <p key={i}>{c}</p>
                )))}
                <input className="comment" onChange={this.inputChangeHandler} value={this.state.commentValue} />
                <button onClick={() => { this.props.saveComments(this.props.listPosition, this.state.commentValue); this.setState({ commentValue: '' }) }}>Save</button>
            </div >
        )
    }

}

export default Comments
