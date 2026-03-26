import React from 'react'
import { useLocation } from 'react-router'

const VisualizerID = () => {
    const location = useLocation();
    const image = location.state?.image;

    return (
        <div>
            <h1>Visualizer</h1>
            {image ? <img src={image} alt="Uploaded" /> : <p>No image found</p>}
        </div>
    )
}

export default VisualizerID