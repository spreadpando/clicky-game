import React from 'react';
import './Scoreboard.css';

function Scoreboard(props) {
    return (
        <div className="Scoreboard">
            <p>score: {props.state.chosen.length}</p>
            <p>{props.state.message}</p>
        </div>
    );
}

export default Scoreboard;
