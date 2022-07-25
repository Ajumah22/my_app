//name, state of origin, stack and a decription

import React from 'react';
import "./Card.css";

function Card(props) {
    return (
        <div className="cardDetails">
            <p>Name: {props.name}</p>
            <p>State: { props.state}</p>
            <p>Description: { props.decription}</p>
            <p>Stack: { props.stack}</p>
            <p>JobTitle: { props.jobTitle}</p>
        </div>
    );
};

export default Card