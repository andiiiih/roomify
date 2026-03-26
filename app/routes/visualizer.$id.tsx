import React from 'react';
import { useLocation, useParams } from 'react-router';

const VisualizerID = () => {
    const location = useLocation();
    const { id } = useParams();

    const image =
        location.state?.image ||
        (id ? sessionStorage.getItem(`visualizer-image-${id}`) : null);

    return (
        <div>
            <h1>Visualizer</h1>
            {image ? <img src={image} alt="Uploaded" /> : <p>No image found</p>}
        </div>
    );
};

export default VisualizerID;