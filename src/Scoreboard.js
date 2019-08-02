import React from 'react';
import './Scoreboard.css';

function Scoreboard(props) {
    return (
        <div className="Scoreboard">
            <p className="Score"> score: {props.state.chosen.length}</p>
            <p className="Message">{props.state.message}</p>
        </div>
    );
}

export default Scoreboard;
