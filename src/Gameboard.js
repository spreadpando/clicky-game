import React from 'react';
import './Gameboard.css';
import Card from './Card.js';

function Gameboard(props) {
    return (
        <div className="Gameboard">
            {props.images.map((image, i) => (
                <Card key={i} imgSrc={image} action={props.action} />
            ))}
        </div>
    );
}

export default Gameboard;
