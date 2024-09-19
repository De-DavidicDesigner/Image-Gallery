import React, { useState } from "react";

import "./gallery.css";



const Gallery = (props) => {
    return (
        <div>
            
            <img 
                src={props.item} 
                style={{width: '100%'}} 
                alt="Landscape" 
                onClick={() => props.getImg(props.item)}  
            />
        </div>
    )
}

export default Gallery;
