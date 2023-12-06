import React from 'react'
import Video from '../../Video.js'

export default function VideoCardDetail({ videoURL}) {

    return (
        <Video source={videoURL} container="vidyard" ></Video>
    )
}