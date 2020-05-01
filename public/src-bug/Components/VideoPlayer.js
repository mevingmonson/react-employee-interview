import React from 'react'

const VideoPlayer = (props) => {
    return (
        <div>
            <video width="450" height="300" controls >
                <source src="..Videos/video1.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer
