import React from 'react';

const Video = props => (
    <video autoplay muted playsinline srcObject={props.stream}></video>
)

export default Video;