import React from "react";

import './checkbox.css';

export default function Checkbox(props) {
    return (
        <label className="container">{props.name}
            <input type="checkbox" checked={props.checked}/>
            <span className="checkmark"></span>
        </label>
    );
};