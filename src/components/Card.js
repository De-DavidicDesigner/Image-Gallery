import React from "react";
import "./gallery.css";

function Card(props) {

    return (
        <div className={props.model ? "model open": "model"}>
            <img src={props.temperingImgSrc} alt="fullScreen" />
            <i class="fa-solid fa-xmark" onClick={() => props.setModel(false)} />
        </div>
    )
}

export default Card;