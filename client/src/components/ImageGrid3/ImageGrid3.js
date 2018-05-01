import React from "react";
import "./ImageGrid3.css";

const ImageGrid3 = (props) => (
    <div className="image-grid3 grid medium-12">
        {
            props.images.map((image) => (
                <div className="cell medium-3">
                    <img src={image.src} alt={image.name}/>
                </div>
            ))
        }
    </div>
);

export default ImageGrid3;