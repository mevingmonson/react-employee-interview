import React from 'react'

const VideoPlayer = (props) => {
    return (
        <div>
            <video width="450" height="300" controls >
                <source src={props.videoData} type="video/mp4" />
            </video>
            {console.log(props.videoData)}
        </div>
    )
}

export default VideoPlayer
