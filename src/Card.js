import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="Card" onClick={props.action} data-img={props.imgSrc} style={{ backgroundImage: 'url(' + props.imgSrc + ')' }}>
        </div>
    );
}

export default Card;
